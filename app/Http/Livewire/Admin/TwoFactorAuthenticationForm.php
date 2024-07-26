<?php

namespace App\Http\Livewire\Admin;

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
     * @return bool
     */
    public $enabled;

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

    public function mount()
    {
        // Disable two factor authentication if it is not confirmed
        if (is_null(Auth::user()->two_factor_confirmed_at)) {
            app(DisableTwoFactorAuthentication::class)(Auth::user());
        }
        $this->enabled = Auth::user()->two_factor_method === 'none' ? false : true;
        $this->method = Auth::user()->two_factor_method !== 'none' ? Auth::user()->two_factor_method : false;
    }
    public function render()
    {
        return view('admin::livewire.two-factor-authentication-form');
    }

    public function enableTwoFactorAuthentication(EnableTwoFactorAuthentication $enable)
    {
        $this->resetErrorBag();
        $this->validate();

        // Enable two factor authentication
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
        $this->enabled = true;
        $this->method = $this->two_factor_method;
    }

    public function disableTwoFactorAuthentication(DisableTwoFactorAuthentication $disable)
    {
        $disable(Auth::user());

        $this->enabled = false;
        $this->showingQrCode = false;
        $this->showingConfirmation = false;
        $this->showingRecoveryCodes = false;
    }

    public function confirmTwoFactorAuthentication(ConfirmTwoFactorAuthentication $confirm)
    {
        $this->resetErrorBag();

        $this->validate([
            'code' => 'required',
        ]);

        $confirm(Auth::user(), $this->code);

        $this->showingQrCode = false;
        $this->showingConfirmation = false;
        $this->showingRecoveryCodes = true;
    }

    public function showRecoveryCodes()
    {
        $this->showingRecoveryCodes = true;
    }

    public function regenerateRecoveryCodes(GenerateNewRecoveryCodes $generate)
    {
        $generate(Auth::user());

        $this->showingRecoveryCodes = true;
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
}
