@extends(admin_view('layouts.default'))

@section('content')
    @include('admin::partials.alerts')
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">{{ __($page_title) }}</h3>
                </div>
                <div class="card-body" x-data="{ pageTitle : '{{ isset($item) ? $item->name : '' }}'}">
                    <form action="{{ $form_params['action_url'] }}" method="post">
                        @csrf
                        @method($form_params['method'])
                        <div class="form-group">
                            <label for="name">{{ __('common.name') }} <span class="text-danger">*</span></label>
                            <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ $item->name ?? old('name') }}" placeholder="{{ __('common.name') }}" x-model="pageTitle">
                            <small class="form-text text-muted">{{ __('common.name') }}</small>
                            @error('name')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="slug">{{ __('common.slug_url') }} <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control @error('slug') is-invalid @enderror" id="slug" name="slug" value="{{ $item->slug ?? old('slug') }}" placeholder="Eg.: my-page, terms-of-service" x-slug="pageTitle">
                                    @error('slug')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                                <small class="form-text text-muted">{{ __('common.slug_url') }}</small>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="status">{{ __('common.status') }} <span class="text-danger">*</span></label>
                                    <select name="status" id="status" class="form-control @error('status') is-invalid @enderror">
                                        <option value="">{{ __('common.option_select') }}</option>
                                        <option value="published" @if((isset($item) && $item->status === 'published') || old('status', 'published') == 'published')selected @endif>
                                            {{ __('common.published') }}</option>
                                        <option value="draft" @if((isset($item) && $item->status === 'draft') || old('status') == 'draft')selected @endif>
                                            {{ __('common.draft') }}</option>
                                    </select>
                                    <small class="form-text text-muted">{{ __('common.status') }}</small>
                                    @error('status')
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
                                    <label for="meta_keywords">{{ __('common.meta_keywords') }}</label>
                                    <input type="text" class="form-control @error('meta_keywords') is-invalid @enderror" id="meta_keywords" name="meta_keywords" value="{{ $item->meta_keywords ?? old('meta_keywords') }}" placeholder="{{ __('common.meta_keywords') }}">
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
                                    <input type="text" class="form-control @error('meta_description') is-invalid @enderror" id="meta_description" name="meta_description" value="{{ $item->meta_description ?? old('meta_description') }}" placeholder="{{ __('common.meta_description') }}">
                                    <small class="form-text text-muted">{{ __('common.meta_description') }}</small>
                                    @error('meta_description')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="content">{{ __('common.content_text') }} <span class="text-danger">*</span></label>
                            <textarea class="form-control custom_wysiwyg @error('content') is-invalid @enderror" id="content" name="content" rows="15" placeholder="{{ __('common.content_text') }}">{{ $item->content ?? old('content') }}</textarea>
                            <small class="form-text text-muted">{{ __('common.content_text') }}</small>
                            @error('content')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <button type="submit" class="btn btn-success"><i class="fa fa-save"></i> {{ $form_params['button_name'] }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
@include('admin::partials.wysiwyg')
