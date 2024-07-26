<div class="row">
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="admin_pagination">{{ __('common.admin_pagination') }}</label>
            <input type="number" step="1" min="1" class="form-control @error('admin_pagination') is-invalid @enderror" id="admin_pagination" name="admin_pagination" value="{{ setting('admin_pagination') }}" placeholder="{{ __('common.admin_pagination') }}">
            <small class="form-text text-muted">{{ __('common.pagination_help') }}</small>
            @error('admin_pagination')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="site_pagination">{{ __('common.site_pagination') }}</label>
            <input type="number" step="1" min="1" class="form-control @error('site_pagination') is-invalid @enderror" id="site_pagination" name="site_pagination" value="{{ setting('site_pagination') }}" placeholder="{{ __('common.site_pagination') }}">
            <small class="form-text text-muted">{{ __('common.pagination_help') }}</small>
            @error('site_pagination')
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
            <label for="default_editor">{{ __('common.default_text_editor') }}</label>
            <div class="input-group">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-font"></i></div>
                </div>
                <select name="default_editor" id="default_editor" class="form-control @error('default_editor') is-invalid @enderror">
                    <option value="">{{ __('common.option_select') }}</option>
                    <option value="summernote" @if(setting('default_editor') === 'summernote')selected @endif>Summernote({{ __('common.default') }})</option>
                    <option value="tinymce" @if(setting('default_editor') === 'tinymce')selected @endif>TinyMCE</option>
                </select>
                @error('default_editor')
                <div class="invalid-feedback">
                    {{ $message }}
                </div>
                @enderror
            </div>
            <small class="form-text text-muted">{{ __('common.default_text_editor') }}</small>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="default_alerts">{{ __('common.default_alerts') }}</label>
            <div class="input-group">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-exclamation-triangle"></i></div>
                </div>
                <select name="default_alerts" id="default_alerts" class="form-control @error('default_alerts') is-invalid @enderror">
                    <option value="">{{ __('common.option_select') }}</option>
                    <option value="alerts" @if(setting('default_alerts') === 'alerts')selected @endif>Bootstrap Alerts({{ __('common.default') }})</option>
                    <option value="toastr" @if(setting('default_alerts') === 'toastr')selected @endif>Toastr</option>
                    <option value="sweetalert" @if(setting('default_alerts') === 'sweetalert')selected @endif>SweetAlert2</option>
                </select>
                @error('default_alerts')
                <div class="invalid-feedback">
                    {{ $message }}
                </div>
                @enderror
            </div>
            <small class="form-text text-muted">{{ __('common.default_alerts_help') }}</small>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="admin_theme">{{ __('common.admin_theme') }}</label>
            <div class="input-group">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-palette"></i></div>
                </div>
                <select name="admin_theme" id="admin_theme" class="form-control @error('admin_theme') is-invalid @enderror">
                    <option value="">{{ __('common.option_select') }}</option>
                    @foreach(admin_theme_detect() as $admin_theme)
                        <option value="{{ $admin_theme }}" @if(setting('admin_theme') === $admin_theme)selected @endif>{{ $admin_theme }}</option>
                    @endforeach
                </select>
                @error('admin_theme')
                <div class="invalid-feedback">
                    {{ $message }}
                </div>
                @enderror
            </div>
            <small class="form-text text-muted">{{ __('common.admin_theme_help') }}</small>
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="site_theme">{{ __('common.site_theme') }}</label>
            <div class="input-group">
                <div class="input-group-append">
                    <div class="input-group-text"><i class="fa fa-palette"></i></div>
                </div>
                <select name="site_theme" id="site_theme" class="form-control @error('site_theme') is-invalid @enderror">
                    <option value="">{{ __('common.option_select') }}</option>
                    @foreach(site_theme_detect() as $site_theme)
                        <option value="{{ $site_theme }}" @if(setting('site_theme') === $site_theme)selected @endif>{{ $site_theme }}</option>
                    @endforeach
                </select>
                @error('site_theme')
                <div class="invalid-feedback">
                    {{ $message }}
                </div>
                @enderror
            </div>
            <small class="form-text text-muted">{{ __('common.site_theme_help') }}</small>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="header_codes">{{ __('common.header_codes') }}</label>
            <textarea class="form-control @error('header_codes') is-invalid @enderror" id="header_codes" name="header_codes" rows="5" placeholder="Header Codes">{{ setting('header_codes') }}</textarea>
            <small class="form-text text-muted">{{ __('common.header_codes_help') }}</small>
            @error('header_codes')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
    <div class="col-lg-6 col-sm-12">
        <div class="form-group">
            <label for="footer_codes">{{ __('common.footer_codes') }}</label>
            <textarea class="form-control @error('footer_codes') is-invalid @enderror" id="footer_codes" name="footer_codes" rows="5" placeholder="Footer Codes">{{ setting('footer_codes') }}</textarea>
            <small class="form-text text-muted">{{ __('common.footer_codes_help') }}</small>
            @error('footer_codes')
            <div class="invalid-feedback">
                {{ $message }}
            </div>
            @enderror
        </div>
    </div>
</div>
