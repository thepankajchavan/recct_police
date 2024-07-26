<?php

namespace App\Actions;

use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use App\Providers\TwoFactorAuthenticationProvider;

class DisableTwoFactorAuthentication
{

    /**
     * Disable two factor authentication for the user.
     *
     * @param  mixed  $user
     * @return void
     */
    public function __invoke($user)
    {
        $user->forceFill([
            'two_factor_method' => 'none',
            'two_factor_secret' => null,
            'two_factor_recovery_codes' => null,
            'two_factor_confirmed_at' => null,
        ])->save();
    }
}
