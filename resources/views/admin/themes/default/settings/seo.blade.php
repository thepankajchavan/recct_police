<div class="row">
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="meta_keywords">{{ __('common.meta_keywords') }}</label>
            <input type="text" class="form-control @error('meta_keywords') is-invalid @enderror" id="meta_keywords" name="meta_keywords" value="{{ setting('meta_keywords') }}" placeholder="{{ __('common.meta_keywords') }}">
            <small class="form-text text-muted">{{ __('common.meta_keywords') }}</small>
            @error('meta_keywords')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="meta_description">{{ __('common.meta_description') }}</label>
            <input type="text" class="form-control @error('meta_description') is-invalid @enderror" id="meta_description" name="meta_description" value="{{ setting('meta_description') }}" placeholder="{{ __('common.meta_description') }}">
            @error('meta_description')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="ga_tracking">{{ __('common.google_analytics_code') }}</label>
            <textarea class="form-control @error('ga_tracking') is-invalid @enderror" id="ga_tracking" name="ga_tracking" rows="5" placeholder="{{ __('common.google_analytics_code') }}">{{ setting('ga_tracking') }}</textarea>
            <small class="form-text text-muted">{{ __('common.google_analytics_code_help') }}</small>
            @error('ga_tracking')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
</div>
