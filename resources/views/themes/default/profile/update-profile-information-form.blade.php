<x-form-section submit="updateProfileInformation">
    <x-slot name="title">
        {{ __('common.edit_profile') }}
    </x-slot>

    <x-slot name="description">
        {{ __('common.edit_profile_text') }}
    </x-slot>

    <x-slot name="form">
        <!-- Name -->
        <div class="col-span-6 sm:col-span-4">
            <x-label for="name" value="{{ __('common.name') }}" />
            <x-input id="name" type="text" class="mt-1 block w-full" wire:model.defer="state.name" autocomplete="name" />
            <x-input-error for="name" class="mt-2" />
        </div>

        <!-- Username -->
        <div class="col-span-6 sm:col-span-4">
            <x-label for="username" value="{{ __('common.username') }}" />
            <x-input id="username" type="text" class="mt-1 block w-full" wire:model.defer="state.username" autocomplete="username" />
            <x-input-error for="name" class="mt-2" />
        </div>

        <!-- Email -->
        <div class="col-span-6 sm:col-span-4">
            <x-label for="email" value="{{ __('common.email') }}" />
            <x-input id="email" type="email" class="mt-1 block w-full" wire:model.defer="state.email" />
            <x-input-error for="email" class="mt-2" />

            @if(! $this->user->hasVerifiedEmail())
                <p class="text-sm mt-2">
                    {{ __('common.email_unverified_text') }}

                    <button type="button" class="underline text-sm text-gray-600 hover:text-gray-900" wire:click.prevent="sendEmailVerification">
                        {{ __('common.email_unverified_resend_button') }}
                    </button>
                </p>

                @if ($this->verificationLinkSent)
                    <p v-show="verificationLinkSent" class="mt-2 font-medium text-sm text-green-600">
                        {{ __('common.email_unverified_resend_success') }}
                    </p>
                @endif
            @endif
        </div>
    </x-slot>

    <x-slot name="actions">
        <x-action-message class="mr-3 text-green-500" on="saved">
            {{ __('common.saved') }}
        </x-action-message>

        <x-button wire:loading.attr="disabled" wire:target="photo">
            {{ __('common.save') }}
        </x-button>
    </x-slot>
</x-form-section>
