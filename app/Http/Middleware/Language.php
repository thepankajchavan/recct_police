<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

class Language
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $languages = language_list();

        if(Auth::check() && isset(Auth::user()->lang) && in_array(Auth::user()->lang, $languages, false)) {
            App::setLocale(Auth::user()->lang);
        }elseif($request->hasCookie('lang')){
            if(in_array($request->cookie('lang'), $languages, false)) {
                App::setLocale($request->cookie('lang'));
            }else{
                //Delete invalid cookie
                \Cookie::queue(\Cookie::forget('lang'));
            }
        }

        return $next($request);
    }
}
