<?php

namespace App\Providers;

use Illuminate\Contracts\Cache\Repository;
use PragmaRX\Google2FA\Google2FA;

class TwoFactorAuthenticationProvider
{
    /**
     * The underlying library providing two-factor authentication helper services.
     *
     * @var \PragmaRX\Google2FA\Google2FA
     */
    protected $engine;

    /**
     * The cache repository implementation.
     *
     * @var \Illuminate\Contracts\Cache\Repository|null
     */
    protected $cache;

    /**
     * Create a new two-factor authentication provider instance.
     */
    public function __construct(Google2FA $engine, Repository $cache = null)
    {
        $this->engine = $engine;
        $this->cache = $cache;
    }

    /**
     * Generate a new secret key.
     */
    public function generateSecretKey(): string
    {
        return $this->engine->generateSecretKey();
    }

    /**
     * Get the two-factor authentication QR code URL.
     */
    public function qrCodeUrl(string $companyName, string $companyEmail, string $secret): string
    {
        return $this->engine->getQRCodeUrl($companyName, $companyEmail, $secret);
    }

    /**
     * Verify the given code.
     */
    public function verify(string $secret, string $code): bool
    {
        if (is_int($customWindow = config('google2fa.window'))) {
            $this->engine->setWindow($customWindow);
        }

        $timestamp = $this->engine->verifyKeyNewer(
            $secret, $code, optional($this->cache)->get($key = '2fa_codes.'.md5($code))
        );

        if ($timestamp !== false) {
            optional($this->cache)->put($key, $timestamp, ($this->engine->getWindow() ?: 1) * 60);

            return true;
        }

        return false;
    }
}
