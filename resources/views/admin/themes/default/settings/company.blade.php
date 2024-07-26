<div class="form-group">
    <label for="company_name">{{ __('common.company_name') }}</label>
    <input type="text" class="form-control @error('company_name') is-invalid @enderror" id="company_name" name="company_name" value="{{ setting('company_name') }}" placeholder="{{ __('common.company_name') }}">
    @error('company_name')
    <div class="invalid-feedback">
        {{ $message }}
    </div>
    @enderror
</div>
<div class="form-group">
    <label for="company_address">{{ __('common.company_address') }}</label>
    <input type="text" class="form-control @error('company_address') is-invalid @enderror" id="company_address" name="company_address" value="{{ setting('company_address') }}" placeholder="{{ __('common.company_address') }}">
    @error('company_address')
    <div class="invalid-feedback">
        {{ $message }}
    </div>
    @enderror
</div>
<div class="row">
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="company_city">{{ __('common.company_city') }}</label>
            <input type="text" class="form-control @error('company_city') is-invalid @enderror" id="company_city" name="company_city" value="{{ setting('company_city') }}" placeholder="{{ __('common.company_city') }}">
            @error('company_city')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="company_state">{{ __('common.company_state') }}</label>
            <input type="text" class="form-control @error('company_state') is-invalid @enderror" id="company_state" name="company_state" value="{{ setting('company_state') }}" placeholder="{{ __('common.company_state') }}">
            @error('company_state')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="company_zip_code">{{ __('common.company_zip_code') }}</label>
            <input type="text" class="form-control @error('company_zip_code') is-invalid @enderror" id="company_zip_code" name="company_zip_code" value="{{ setting('company_zip_code') }}" placeholder="{{ __('common.company_zip_code') }}">
            @error('company_zip_code')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="company_country">{{ __('common.company_country') }}</label>
            <input type="text" class="form-control @error('company_country') is-invalid @enderror" id="company_country" name="company_country" value="{{ setting('company_country') }}" placeholder="{{ __('common.company_country') }}">
            @error('company_country')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="company_phone">{{ __('common.company_phone') }}</label>
            <input type="tel" class="form-control @error('company_phone') is-invalid @enderror" id="company_phone" name="company_phone" value="{{ setting('company_phone') }}" placeholder="{{ __('common.company_phone') }}">
            @error('company_phone')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="company_opening_hours">{{ __('common.company_opening_hours') }}</label>
            <input type="text" class="form-control @error('company_opening_hours') is-invalid @enderror" id="company_opening_hours" name="company_opening_hours" value="{{ setting('company_opening_hours') }}" placeholder="{{ __('common.company_opening_hours') }}">
            @error('company_opening_hours')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
</div>
