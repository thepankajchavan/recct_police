<div class="form-group">
    <label for="site_name">{{ __('common.site_name') }}</label>
    <input type="text" class="form-control @error('site_name') is-invalid @enderror" id="site_name" name="site_name" value="{{ setting('site_name') }}" placeholder="{{ __('common.site_name') }}">
    @error('site_name')
    <div class="invalid-feedback">
        {{ $message }}
    </div>
    @enderror
</div>
