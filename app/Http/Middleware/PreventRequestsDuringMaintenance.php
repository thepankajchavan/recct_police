<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance as Middleware;
use Symfony\Component\HttpFoundation\IpUtils;
use Symfony\Component\HttpKernel\Exception\HttpException;

class PreventRequestsDuringMaintenance extends Middleware
{
    /**
     * The URIs that should be reachable while maintenance mode is enabled.
     *
     * @var array<int, string>
     */
    protected $except = [
        '/assets*',
        '/_debugbar*',
    ];

    /**
     * Custom Allowed IP's
     * @var array
     */
    protected $excluded_ips = [];

    /**
     * Create a new middleware instance.
     *
     * @param  \Illuminate\Contracts\Foundation\Application  $app
     * @return void
     */
    public function __construct(Application $app)
    {
        $this->app = $app;

        $urls_allowed = [];
        $ips_allowed = [];

        try {
            $urls_allowed = collect(setting('maintenance_excluded_uris'))
                ->mapWithKeys(function ($uri) {
                    return explode(',', $uri);
                })->toArray();

            $ips_allowed = collect(setting('maintenance_excluded_ips'))
                ->mapWithKeys(function ($ip) {
                    return explode(',', $ip);
                })->toArray();
        } catch (\Exception $e) {
            //
        }

        // Auto add backend to excluded URIs
        $this->except[] = '/' . config('laraminlte.backend_prefix') . '*';
        $this->except = array_merge($this->except, $urls_allowed);
        $this->excluded_ips = $ips_allowed;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     *
     * @throws \Symfony\Component\HttpKernel\Exception\HttpException
     */
    public function handle($request, Closure $next)
    {
        if ($this->app->maintenanceMode()->active()) {
            $data = $this->app->maintenanceMode()->data();

            if (isset($data['secret']) && $request->path() === $data['secret']) {
                return $this->bypassResponse($data['secret']);
            }

            if ($this->hasValidBypassCookie($request, $data) ||
                $this->inExceptArray($request) ||
                $this->inExceptIpArray($request)) {
                return $next($request);
            }

            if (isset($data['redirect'])) {
                $path = $data['redirect'] === '/'
                    ? $data['redirect']
                    : trim($data['redirect'], '/');

                if ($request->path() !== $path) {
                    return redirect($path);
                }
            }

            if (isset($data['template'])) {
                return response(
                    $data['template'],
                    $data['status'] ?? 503,
                    $this->getHeaders($data)
                );
            }

            throw new HttpException(
                $data['status'] ?? 503,
                'Service Unavailable',
                null,
                $this->getHeaders($data)
            );
        }

        return $next($request);
    }

    /**
     * @param $request
     * @return bool
     */
    private function inExceptIpArray($request)
    {
        // Check IP's on settings
        return isset($this->excluded_ips) && IpUtils::checkIp($request->ip(), (array)$this->excluded_ips);
    }
}
