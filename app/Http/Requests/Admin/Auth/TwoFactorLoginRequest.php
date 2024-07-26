<?php

namespace App\Http\Requests\Admin\Auth;

use App\Models\Admin;
use Illuminate\Foundation\Http\FormRequest;
use App\Providers\TwoFactorAuthenticationProvider;

class TwoFactorLoginRequest extends FormRequest
{
    /**
     * The user attempting the two factor challenge.
     *
     * @var mixed
     */
    protected $challengedUser;

    /**
     * Indicates if the user wished to be remembered after login.
     *
     * @var bool
     */
    protected $remember;

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
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'code' => 'nullable|string',
            'recovery_code' => 'nullable|string',
        ];
    }

    /**
     * Determine if the request has a valid two-factor code.
     */
    public function hasValidCode(): bool
    {
        return $this->code && app(TwoFactorAuthenticationProvider::class)->verify(
                decrypt($this->challengedUser()->two_factor_secret), $this->code
            );
    }

    /**
     * Determine if the request has a valid email two-factor code.
     */
    public function hasEmailValidCode(): bool
    {
        // Convert to int to avaid type validation error
        if(config('two-factor-email.type') === 'number'){
            $this->code = (int) $this->code;
        }

        return $this->code === decrypt($this->challengedUser()->two_factor_secret);
    }

    /**
     * Determines if the two-factor code has expired
     */
    public function hasEmailActiveCode(): bool
    {
        return now()->lessThanOrEqualTo($this->challengedUser()->two_factor_email_expires_in);
    }

    /**
     * Get the valid recovery code if one exists on the request.
     *
     * @return string|null
     */
    public function validRecoveryCode()
    {
        if (! $this->recovery_code) {
            return;
        }

        return collect($this->challengedUser()->recoveryCodes())->first(function ($code) {
            return hash_equals($this->recovery_code, $code) ? $code : null;
        });
    }

    /**
     * Determine if there is a challenged user in the current session.
     *
     * @return bool
     */
    public function hasChallengedUser()
    {
        return $this->session()->has('admin.id') &&
            Admin::find($this->session()->get('admin.id'));
    }

    /**
     * Get the user that is attempting the two factor challenge.
     *
     * @return mixed
     */
    public function challengedUser()
    {
        if ($this->challengedUser) {
            return $this->challengedUser;
        }

        if (! $this->session()->has('admin.id') ||
            ! $user = Admin::find($this->session()->get('admin.id'))) {
            return redirect()->route('admin.2fa')->withErrors(['code' => 'The provided two factor authentication code was invalid.']);
        }

        return $this->challengedUser = $user;
    }

    /**
     * Determine if the user wanted to be remembered after login.
     *
     * @return bool
     */
    public function remember()
    {
        if (! $this->remember) {
            $this->remember = $this->session()->pull('admin.remember', false);
        }

        return $this->remember;
    }
}
