<x-guest-layout page-title="common.2fa">
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
            </a>
        </x-slot>

        <div x-data="{ recovery: false }">
            @if(session('web.method') === 'app')
                <div class="mb-4 text-sm text-gray-600" x-show="! recovery">
                    {{ __('common.two_factor_code_text') }}
                </div>
                <div class="mb-4 text-sm text-gray-600" x-show="recovery">
                    {{ __('common.two_factor_recovery_text') }}
                </div>
            @else
                <div class="mb-4 text-sm text-gray-600">
                    {{ __('common.two_factor_email_text') }}
                </div>
            @endif

            <!-- Validation Errors -->
            <x-auth-validation-errors class="mb-4" :errors="$errors" />

                <!-- Session Success -->
                <x-auth-session-status class="mb-4" :status="session('success')" />

            <form method="POST" action="{{ route('2fa') }}">
                @csrf

                <div class="mt-4" x-show="! recovery">
                    <x-label for="code" value="{{ __('common.code') }}" />
                    <x-input id="code" class="block mt-1 w-full" type="text" inputmode="numeric" name="code" autofocus x-ref="code" autocomplete="one-time-code" />
                </div>

                <div class="mt-4" x-show="recovery">
                    <x-label for="recovery_code" value="{{ __('common.recovery_code') }}" />
                    <x-input id="recovery_code" class="block mt-1 w-full" type="text" name="recovery_code" x-ref="recovery_code" autocomplete="one-time-code" />
                </div>

                <div class="flex items-center justify-end mt-4">
                    @if(session('web.method') === 'email')
                        <button type="submit" class="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer" onclick="event.preventDefault();
                                                document.getElementById('resendCode').submit();">{{ __('common.resend_email_code') }}</button>
                    @else
                        <button type="button" class="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer"
                                x-show="! recovery"
                                x-on:click="
                                        recovery = true;
                                        $nextTick(() => { $refs.recovery_code.focus() })
                                    ">
                            {{ __('common.two_factor_use_recovery') }}
                        </button>

                        <button type="button" class="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer"
                                x-show="recovery"
                                x-on:click="
                                        recovery = false;
                                        $nextTick(() => { $refs.code.focus() })
                                    ">
                            {{ __('common.two_factor_use_code') }}
                        </button>
                    @endif

                    <x-button class="ml-4">
                        {{ __('Log in') }}
                    </x-button>
                </div>
            </form>
            @if(session('web.method') === 'email')
                <form action="{{ route('2fa.resend') }}" method="post" id="resendCode">
                    @csrf
                </form>
            @endif
        </div>
    </x-auth-card>
</x-guest-layout>
