<div class="row">
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="maintenance_status">{{ __('common.maintenance_mode') }}</label>
            <div class="input-group">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-power-off"></i></div>
                </div>
                <select name="maintenance_status" id="maintenance_status" class="form-control @error('maintenance_status')is-invalid @enderror">
                    <option value="">{{ __('common.option_select') }}</option>
                    <option value="active" @if(setting('maintenance_status')==='active')selected @endif>{{ __('common.active') }}</option>
                    <option value="inactive" @if(setting('maintenance_status', 'inactive')==='inactive')selected @endif>
                        {{ __('common.inactive') }}</option>
                </select>
                @error('maintenance_status')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
            <small class="form-text text-muted">{{ __('common.maintenance_mode_help') }}</small>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="maintenance_retry">{{ __('common.maintenance_retry') }}</label>
            <div class="input-group">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-stopwatch"></i></div>
                </div>
                <input type="number" step="1" min="0" class="form-control @error('maintenance_retry')is-invalid @enderror" name="maintenance_retry" id="maintenance_retry" value="{{setting('maintenance_retry') ?? old('maintenance_retry', 60)}}" />
                <div class="input-group-append">
                    <div class="input-group-text">{{ __('common.seconds') }}</div>
                </div>
                @error('maintenance_retry')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
            <small class="form-text text-muted">{{ __('common.maintenance_retry_help') }}</small>
        </div>
    </div>
    <div class="col-lg-4 col-sm-12">
        <div class="form-group">
            <label for="maintenance_excluded_uris">{{ __('common.maintenance_excluded_urls') }}</label>
            <input type="text" class="form-control @error('maintenance_excluded_uris')is-invalid @enderror" name="maintenance_excluded_uris" id="maintenance_excluded_uris" value="{{setting('maintenance_excluded_uris') ?? old('maintenance_excluded_uris')}}" />
            <small class="form-text text-muted">{{ __('common.maintenance_excluded_urls_help') }}</small>
            @error('maintenance_excluded_uris')
            <div class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </div>
            @enderror
        </div>
    </div>
    <div class="col-lg-4 col-sm-12">
        <div class="form-group">
            <label for="maintenance_excluded_ips">{{ __('common.maintenance_excluded_ips') }}</label>
            <input type="text" class="form-control @error('maintenance_excluded_ips')is-invalid @enderror" name="maintenance_excluded_ips" id="maintenance_excluded_ips" value="{{setting('maintenance_excluded_ips') ?? old('maintenance_excluded_ips')}}" />
            <small class="form-text text-muted">{{ __('common.maintenance_excluded_ips_help') }}</small>
            @error('maintenance_excluded_ips')
            <div class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </div>
            @enderror
        </div>
    </div>
    <div class="col-lg-4 col-sm-12">
        <div class="form-group">
            <label for="maintenance_secret">{{ __('common.maintenance_bypass') }}</label>
            <input type="text" class="form-control @error('maintenance_secret')is-invalid @enderror" name="maintenance_secret" id="maintenance_secret" value="{{setting('maintenance_secret') ?? old('maintenance_secret')}}" />
            <small class="form-text text-muted">{!! __('common.maintenance_bypass_help') !!}</small>
            @error('maintenance_secret')
            <div class="invalid-feedback" role="alert">
                <strong>{{ $message }}</strong>
            </div>
            @enderror
        </div>
    </div>
    <div class="col-12">
        <div class="form-group">
            <label for="maintenance_message">{{ __('common.maintenance_message') }}</label>
            <div class="input-group">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-comment"></i></div>
                </div>
                <input type="text" class="form-control @error('maintenance_message')is-invalid @enderror" name="maintenance_message" id="maintenance_message" value="{{setting('maintenance_message') ?? old('maintenance_message', __('common.maintenance_message_default'))}}" />
                @error('maintenance_message')
                <div class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </div>
                @enderror
            </div>
            <small class="form-text text-muted">{{ __('common.maintenance_message_help') }}</small>
        </div>
    </div>
</div>
