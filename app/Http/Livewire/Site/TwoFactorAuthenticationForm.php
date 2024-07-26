<?php

namespace App\Http\Livewire\Site;

use App\Actions\ConfirmTwoFactorAuthentication;
use App\Actions\DisableTwoFactorAuthentication;
use App\Actions\EnableTwoFactorAuthentication;
use App\Actions\GenerateNewRecoveryCodes;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class TwoFactorAuthenticationForm extends Component
{
    /**
     * Indicates if two factor authentication QR code is being displayed.
     *
     * @var bool
     */
    public $showingQrCode = false;

    /**
     * Indicates if the two factor authentication confirmation input and button are being displayed.
     *
     * @var bool
     */
    public $showingConfirmation = false;

    /**
     * Indicates if two factor authentication recovery codes are being displayed.
     *
     * @var bool
     */
    public $showingRecoveryCodes = false;

    /**
     * The OTP code for confirming two factor authentication.
     *
     * @var string|null
     */
    public $code;

    /**
     * Determine if two factor authentication is enabled.
     *
     * @return bool|string
     */
    public $method;

    /**
     * two_factor_method field
     *
     * @return bool|string
     */
    public $two_factor_method;

    protected function rules ()
    {
        return [
            'two_factor_method' => 'required|in:app,email',
        ];
    }

    /**
     * Mount the component.
     *
     * @return void
     */
    public function mount()
    {
        if (is_null(Auth::user()->two_factor_confirmed_at)) {
            app(DisableTwoFactorAuthentication::class)(Auth::user());
        }
        $this->method = Auth::user()->two_factor_method !== 'none' ? Auth::user()->two_factor_method : false;
    }

    /**
     * Enable two factor authentication for the user.
     *
     * @param  EnableTwoFactorAuthentication  $enable
     * @return void
     */
    public function enableTwoFactorAuthentication(EnableTwoFactorAuthentication $enable)
    {
        $this->validate();

        if($this->two_factor_method === 'app'){
            auth()->user()->update([
                'two_factor_method' => $this->two_factor_method,
            ]);

            $enable(Auth::user());

            $this->showingQrCode = true;
            $this->showingConfirmation = true;
        }else{
            auth()->user()->forceFill([
                'two_factor_method' => $this->two_factor_method,
                'two_factor_confirmed_at' => now(),
            ])->save();
        }
        $this->method = $this->two_factor_method;
    }

    /**
     * Confirm two factor authentication for the user.
     *
     * @param  ConfirmTwoFactorAuthentication  $confirm
     * @return void
     */
    public function confirmTwoFactorAuthentication(ConfirmTwoFactorAuthentication $confirm)
    {
        $confirm(Auth::user(), $this->code);

        $this->showingQrCode = false;
        $this->showingConfirmation = false;
        $this->showingRecoveryCodes = true;
    }

    /**
     * Display the user's recovery codes.
     *
     * @return void
     */
    public function showRecoveryCodes()
    {
        $this->showingRecoveryCodes = true;
    }

    /**
     * Generate new recovery codes for the user.
     *
     * @param  GenerateNewRecoveryCodes  $generate
     * @return void
     */
    public function regenerateRecoveryCodes(GenerateNewRecoveryCodes $generate)
    {
        $generate(Auth::user());

        $this->showingRecoveryCodes = true;
    }

    /**
     * Disable two factor authentication for the user.
     *
     * @param  DisableTwoFactorAuthentication  $disable
     * @return void
     */
    public function disableTwoFactorAuthentication(DisableTwoFactorAuthentication $disable)
    {
        $disable(Auth::user());

        $this->showingQrCode = false;
        $this->showingConfirmation = false;
        $this->showingRecoveryCodes = false;
    }

    /**
     * Get the current user of the application.
     *
     * @return mixed
     */
    public function getUserProperty()
    {
        return Auth::user();
    }

    /**
     * Determine if two factor authentication is enabled.
     *
     * @return bool
     */
    public function getEnabledProperty()
    {
        if($this->method === 'email'){
            return ! empty($this->user->two_factor_confirmed_at);
        }
        return ! empty($this->user->two_factor_secret);
    }

    /**
     * Render the component.
     *
     * @return \Illuminate\View\View
     */
    public function render()
    {
        return view('site::profile.two-factor-authentication-form');
    }
}
