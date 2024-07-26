<x-app-layout page-title="common.edit_profile">
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('common.edit_profile') }}
        </h2>
    </x-slot>

    <div>
        <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
            @livewire('site.update-profile-information-form')

            <x-section-border />

            <div class="mt-10 sm:mt-0">
                @livewire('site.update-password-form')
            </div>

            <x-section-border />

            <div class="mt-10 sm:mt-0">
                @livewire('site.two-factor-authentication-form')
            </div>

            <x-section-border />

            <div class="mt-10 sm:mt-0">
                @livewire('site.logout-other-browser-sessions-form')
            </div>

            <x-section-border />

            <div class="mt-10 sm:mt-0">
                @livewire('site.delete-user-form')
            </div>
        </div>
    </div>
</x-app-layout>
