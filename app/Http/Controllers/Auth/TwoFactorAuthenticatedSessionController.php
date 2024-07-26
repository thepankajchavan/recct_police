<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\TwoFactorLoginRequest;
use App\Models\User;
use App\Notifications\TwoFactorCode;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class TwoFactorAuthenticatedSessionController extends Controller
{
    /**
     * Show the 2fa view.
     * @param  TwoFactorLoginRequest  $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create(TwoFactorLoginRequest $request)
    {
        if (! $request->hasChallengedUser()) {
            throw new HttpResponseException(redirect()->route('login'));
        }

        return view('site::auth.two-factor-challenge')->with(['page_title' => 'common.2fa']);
    }

    /**
     * Confirm the user's 2fa code.
     *
     * @param  TwoFactorLoginRequest  $request
     * @return mixed
     */
    public function store(TwoFactorLoginRequest $request)
    {
        $user = $request->challengedUser();

        if($user->two_factor_method === 'email'){
            if (! $request->hasEmailValidCode()) {
                return redirect()->route('2fa')->withErrors(['code' => __('common.two_factor_authentication_invalid_code')]);
            }
            if (! $request->hasEmailActiveCode()) {
                return redirect()->route('2fa')->withErrors(['code' => __('common.two_factor_authentication_expired_code')]);
            }
            // Invalidate code
            $user->forceFill(['two_factor_secret' => null, 'two_factor_email_expires_in' => null])->save();
        }else{
            if ($code = $request->validRecoveryCode()) {
                $user->replaceRecoveryCode($code);
            } elseif (! $request->hasValidCode()) {
                return redirect()->route('2fa')->withErrors(['code' => __('common.two_factor_authentication_invalid_code')]);
            }
        }

        Auth::login($user, session('web.remember'));
        $request->session()->forget('web');
        $request->session()->regenerate();

        return redirect()->intended(route('dashboard'));
    }

    /**
     * Resend 2fa code to user's email
     * @param  Request  $request
     * @return mixed
     */
    public function resend(Request $request)
    {
        $user = User::find($request->session()->get('web.id'));
        $token_code = generate_2fa_code();
        $user->forceFill([
            'two_factor_secret' => encrypt($token_code),
            'two_factor_email_expires_in' => now()->addMinutes(config('two-factor-email.expiration', 5))
        ])->save();
        $user->notify(new TwoFactorCode($token_code));

        return redirect()->route('2fa')->withSuccess(__('common.two_factor_authentication_code_resent_success'));
    }
}
