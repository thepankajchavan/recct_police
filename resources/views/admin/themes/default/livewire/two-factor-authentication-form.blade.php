<div>
        <div class="card">
            <div class="card-header">
                <h3 class="card-title"><i class="fa fa-user-lock"></i> {{ __('common.two_factor_authentication') }}</h3>
                <div class="card-tools">
                    @if($enabled)
                        @if($showingConfirmation)
                            <span class="badge badge-warning">{{ __('common.pending') }}</span>
                        @else
                            <span class="badge badge-success">{{ __('common.enabled') }}</span>
                        @endif
                    @else
                        <span class="badge badge-danger">{{ __('common.disabled') }}</span>
                    @endif
                </div>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
                <p>{{ __('common.two_factor_authentication_text1') }}</p>
                <p>{{ __('common.two_factor_authentication_text2') }}</p>
                @if(!$enabled)
                    <div class="form-group">
                        <label for="two_factor_method">{{ __('common.two_factor_authentication_method') }}</label>
                        <select id="two_factor_method" wire:model="two_factor_method"
                                class="form-control @error('two_factor_method')is-invalid @enderror">
                            <option value="">{{ __('common.option_select') }}</option>
                            <option
                                value="email">{{ __('common.two_factor_authentication_method_email') }}</option>
                            <option
                                value="app">{{ __('common.two_factor_authentication_method_app') }}</option>
                        </select>
                        @error('two_factor_method')
                        <div class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </div>
                        @enderror
                    </div>
                @else
                    @if($method === 'email')
                        <div class="alert alert-success">{{ __('common.two_factor_authentication_active_method_email') }}</div>
                    @else
                        <div class="alert alert-success">{{ __('common.two_factor_authentication_active_method_app') }}</div>
                    @endif
                    @if($method === 'app')
                        @if($showingQrCode)
                            <h5>{{ __('common.two_factor_authentication_setup') }}</h5>
                            <p>
                                @if ($showingConfirmation)
                                    {{ __('common.two_factor_authentication_setup_confirming_text1') }}
                                @else
                                    {{ __('common.two_factor_authentication_setup_confirming_text2') }}
                                @endif
                            </p>
                            <p>
                                {!! $this->user->twoFactorQrCodeSvg() !!}
                            </p>
                            <p class="font-weight-bold">{{ __('common.two_factor_authentication_setup_key') }}: {{ decrypt($this->user->two_factor_secret) }}</p>
                            <p>{{ __('common.two_factor_authentication_setup_apps') }}</p>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2"
                                       target="_blank" title="Android">
                                        <i class="fab fa-android"></i> Google Authenticator
                                        (Android)
                                    </a>
                                </li>
                                <li>
                                    <a href="https://apps.apple.com/us/app/google-authenticator/id388497605"
                                       target="_blank" title="iOS">
                                        <i class="fab fa-app-store-ios"></i>
                                        Google Authenticator (iOS)
                                    </a>
                                </li>
                                <li>
                                    <a href="https://play.google.com/store/apps/details?id=com.authy.authy"
                                       target="_blank" title="Android">
                                        <i class="fab fa-android"></i>
                                        Authy (Android)
                                    </a>
                                </li>
                                <li>
                                    <a href="https://apps.apple.com/us/app/authy/id494168017"
                                       target="_blank" title="iOS">
                                        <i class="fab fa-app-store-ios"></i>
                                        Authy (iOS)
                                    </a>
                                </li>
                            </ul>
                            @if ($showingConfirmation)
                                <div class="form-group">
                                    <label for="code">{{ __('common.code') }}</label>
                                    <div class="input-group">
                                        <input type="text" class="form-control @error('code')is-invalid @enderror" id="code" name="code" autofocus autocomplete="one-time-code"
                                               placeholder="{{ __('common.code') }}"
                                               wire:model.defer="code"
                                               wire:keydown.enter="confirmTwoFactorAuthentication">
                                        <div class="input-group-append">
                                            <button type="submit" class="btn btn-success" wire:click="confirmTwoFactorAuthentication" wire:loading.attr="disabled">
                                               <i class="fa fa-check"></i> {{ __('common.confirm') }}</button>
                                        </div>
                                        @error('code')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                    <small class="form-text text-muted">{{ __('common.two_factor_authentication_setup_confirm_code') }}</small>
                                </div>
                            @endif
                        @endif
                        @if($showingRecoveryCodes)
                            <p>{{ __('common.two_factor_authentication_setup_store_recovery') }}</p>
                            <div class="card p-2 bg-gray rounded">
                                @foreach (json_decode(decrypt($this->user->two_factor_recovery_codes), true) as $code)
                                    <div>{{ $code }}</div>
                                @endforeach
                            </div>
                        @endif

                    @endif
                @endif
                <!-- Actions -->
                <div class="mt-4">
                    @if(!$enabled)
                        <button type="button" class="btn btn-success" wire:loading.attr="disabled" wire:click="enableTwoFactorAuthentication">
                            <i class="fa fa-toggle-on"></i> {{ __('common.enable') }}
                        </button>
                    @else
                        @if($method === 'app')
                            @if($showingRecoveryCodes)
                                <button type="button" class="btn btn-primary" wire:click="regenerateRecoveryCodes" wire:loading.attr="disabled">
                                   <i class="fa fa-refresh"></i> {{ __('common.regenerate_recovery_codes') }}</button>
                            @elseif($showingConfirmation)
                                <button type="button" class="btn btn-warning" wire:click="disableTwoFactorAuthentication" wire:loading.attr="disabled">
                                    <i class="fa fa-times"></i> {{ __('common.cancel') }}</button>
                            @else
                                <button type="button" class="btn btn-info" wire:click="showRecoveryCodes" wire:loading.attr="disabled">
                                   <i class="fa fa-eye"></i> {{ __('common.show_recovery_codes') }}</button>
                            @endif
                        @endif
                        <button type="button" class="btn btn-danger" wire:click="disableTwoFactorAuthentication" wire:loading.attr="disabled">
                            <i class="fa fa-power-off"></i> {{ __('common.disable') }}</button>
                    @endif
                </div>
            </div>
            <!-- /.card-body -->
        </div>
</div>
