<x-action-section>
    <x-slot name="title">
        {{ __('common.two_factor_authentication') }}
    </x-slot>

    <x-slot name="description">
        {{ __('common.two_factor_authentication_text1') }}
    </x-slot>

    <x-slot name="content">
        <h3 class="text-lg font-medium text-gray-900">
            @if ($this->enabled)
                @if ($showingConfirmation)
                    {{ __('common.two_factor_authentication_setup_pending') }}
                @else
                    @if($method === 'email')
                        {{ __('common.two_factor_authentication_active_method_email') }}
                    @else
                        {{ __('common.two_factor_authentication_active_method_app') }}
                    @endif
                @endif
            @else
                {{ __('You have not enabled two factor authentication.') }}
            @endif
        </h3>

        <div class="mt-3 max-w-xl text-sm text-gray-600">
            <p>
                {{ __('common.two_factor_authentication_text2') }}
            </p>
        </div>

        @if ($this->enabled)
            @if ($showingQrCode)
                <div class="mt-4 max-w-xl text-sm text-gray-600">
                    <p class="font-semibold">
                        @if ($showingConfirmation)
                            {{ __('common.two_factor_authentication_setup_confirming_text1') }}
                        @else
                            {{ __('common.two_factor_authentication_setup_confirming_text2') }}
                        @endif
                    </p>
                </div>

                <div class="mt-4">
                    {!! $this->user->twoFactorQrCodeSvg() !!}
                </div>

                <div class="mt-4 max-w-xl text-sm text-gray-600">
                    <p class="font-semibold">
                        {{ __('common.two_factor_authentication_setup_key') }}: {{ decrypt($this->user->two_factor_secret) }}
                    </p>
                </div>

                @if ($showingConfirmation)
                    <div class="mt-4">
                        <x-label for="code" value="{{ __('common.code') }}" />

                        <x-input id="code" type="text" name="code" class="block mt-1 w-1/2" inputmode="numeric" autofocus autocomplete="one-time-code"
                                     wire:model.defer="code"
                                     wire:keydown.enter="confirmTwoFactorAuthentication" />

                        <x-input-error for="code" class="mt-2" />
                    </div>
                @endif
            @endif

            @if ($showingRecoveryCodes)
                <div class="mt-4 max-w-xl text-sm text-gray-600">
                    <p class="font-semibold">
                        {{ __('common.two_factor_authentication_setup_store_recovery') }}
                    </p>
                </div>

                <div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg">
                    @foreach (json_decode(decrypt($this->user->two_factor_recovery_codes), true) as $code)
                        <div>{{ $code }}</div>
                    @endforeach
                </div>
            @endif
        @else
            <div class="col-span-6 sm:col-span-4 mt-3">
                <x-label for="two_factor_method" value="{{ __('common.two_factor_authentication_method') }}" />
                <x-select id="two_factor_method" wire:model="two_factor_method" class="w-1/2">
                    <x-slot name="options">
                        <option value="">{{ __('common.option_select') }}</option>
                        <option
                            value="email">{{ __('common.two_factor_authentication_method_email') }}</option>
                        <option
                            value="app">{{ __('common.two_factor_authentication_method_app') }}</option>
                    </x-slot>
                </x-select>
                <x-input-error for="two_factor_method" class="mt-2" />
            </div>
        @endif

        <div class="mt-5">
            @if (! $this->enabled)
                <x-button type="button" wire:click="enableTwoFactorAuthentication" wire:loading.attr="disabled">
                    {{ __('common.enable') }}
                </x-button>
            @else
                @if($method === 'app')
                    @if ($showingRecoveryCodes)
                        <x-secondary-button wire:click="regenerateRecoveryCodes" class="mr-3">
                            {{ __('common.regenerate_recovery_codes') }}
                        </x-secondary-button>
                    @elseif ($showingConfirmation)
                        <x-button type="button" class="mr-3" wire:click="confirmTwoFactorAuthentication" wire:loading.attr="disabled">
                            {{ __('common.confirm') }}
                        </x-button>
                    @else
                        <x-secondary-button wire:click="showRecoveryCodes" class="mr-3">
                            {{ __('common.show_recovery_codes') }}
                        </x-secondary-button>
                    @endif

                    @if ($showingConfirmation)
                        <x-secondary-button wire:click="disableTwoFactorAuthentication" wire:loading.attr="disabled">
                            {{ __('common.cancel') }}
                        </x-secondary-button>
                    @endif
                @endif
                <x-danger-button wire:click="disableTwoFactorAuthentication" wire:loading.attr="disabled">
                    {{ __('common.disable') }}
                </x-danger-button>
            @endif
        </div>
    </x-slot>
</x-action-section>
