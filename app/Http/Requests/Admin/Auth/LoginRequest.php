<?php

namespace App\Http\Requests\Admin\Auth;

use App\Models\Admin;
use App\Notifications\Admin\TwoFactorCode;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Determine login column name based on input (username or email)
     *
     * @return string
     */
    public function identity()
    {
        return filter_var($this->identity, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'identity' => ['required', 'string'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate()
    {
        $this->ensureIsNotRateLimited();

        if (!Auth::guard('admin')->attempt([$this->identity() => $this->string('identity'), 'password' => $this->string('password')], $this->boolean('remember'))) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'identity' => trans('auth.failed'),
            ]);
        }

        RateLimiter::clear($this->throttleKey());
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @return void
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited()
    {
        if (!RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'identity' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     *
     * @return string
     */
    public function throttleKey()
    {
        return Str::lower($this->input('identity')) . '|' . $this->ip();
    }

    /**
     * @return bool
     */
    public function verifyTwoFactorAuthentication()
    {
        if(Auth::guard('admin')->validate([$this->identity() => $this->string('identity'), 'password' => $this->string('password')])){
            // Get user
            $user = Admin::where($this->identity(), $this->string('identity'))->first();
            // Check if user has Two Factor activated
            if($user->two_factor_method !== 'none'){
                // Put user data on session
                $this->session()->put([
                    'admin.id' => $user->id,
                    'admin.remember' => $this->filled('remember'),
                    'admin.method' => $user->two_factor_method
                ]);

                if($user->two_factor_method === 'email'){
                    // Send code to email
                    $token_code = generate_2fa_code();
                    $user->forceFill([
                        'two_factor_secret' => encrypt($token_code),
                        'two_factor_email_expires_in' => now()->addMinutes(config('two-factor-email.expiration', 5))
                    ])->save();
                    $user->notify(new TwoFactorCode($token_code));
                }

                return true;
            }
        }
        return false;
    }
}
