@extends(admin_view('layouts.default'))

@section('content')
    @include('admin::partials.alerts')
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">{{ __($page_title) }}</h3>
                </div>
                <div class="card-body">
                    <form action="{{ $form_params['action_url'] }}" method="post">
                        @csrf
                        @method($form_params['method'])
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="name">{{ __('common.name') }} <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ $item->name ?? old('name') }}" placeholder="{{ __('common.menu_name') }}">
                                    <small class="form-text text-muted">{{ __('common.menu_name') }}</small>
                                    @error('name')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="icon">{{ __('common.icon') }}</label>
                                    <input type="text" class="form-control @error('icon') is-invalid @enderror" id="icon" name="icon" value="{{ $item->icon ?? old('icon') }}" placeholder="Eg: fa-home">
                                    <small class="form-text text-muted">{!! __('common.icon_help') !!} </small>
                                    @error('icon')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="type">{{ __('common.url_type') }} <span class="text-danger">*</span></label>
                                    <select name="type" id="type" class="form-control @error('type') is-invalid @enderror">
                                        <option value="">{{ __('common.option_select') }}</option>
                                        <option value="route" @if((isset($item) && $item->type === 'route') || old('type') == 'route')selected @endif>
                                            {{ __('common.url_types.route') }}</option>
                                        <option value="url" @if((isset($item) && $item->type === 'url') || old('type') == 'url')selected @endif>{{ __('common.url_types.url') }}</option>
                                        <option value="external" @if((isset($item) && $item->type === 'external') || old('type') == 'external')selected @endif>{{ __('common.url_types.external_link') }}</option>
                                    </select>
                                    <small class="form-text text-muted">{{ __('common.url_type_help', ['relsetting' => config('laraminlte.external_urls')]) }}</small>
                                    @error('type')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="url">{{ __('common.url') }} <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control @error('url') is-invalid @enderror" id="url" name="url" value="{{ $item->url ?? old('url') }}" placeholder="{{ __('common.url') }}">
                                    <small class="form-text text-muted">{{ __('common.url_help') }}</small>
                                    @error('url')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="order">{{ __('common.menu_order') }}</label>
                                    <input type="number" step="1" class="form-control @error('order') is-invalid @enderror" id="order" name="order" value="{{ $item->order ?? old('order') }}" placeholder="{{ __('common.menu_order') }}">
                                    <small class="form-text text-muted">{{ __('common.menu_order_help') }}</small>
                                    @error('order')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="permissions">{{ __('common.permissions') }}</label>
                                    <select class="form-control @error('permissions') is-invalid @enderror select2" id="permissions" name="permissions[]" style="width: 100%" multiple>
                                        @foreach($permissions as $permission)
                                            <option value="{{ $permission->name }}" @if(isset($item, $item->permissions) && in_array($permission->name, $item->permissions))selected @endif>{{ $permission->name }}</option>
                                        @endforeach
                                    </select>
                                    <small class="form-text text-muted">{{ __('common.permissions_menu_help') }}</small>
                                    @error('permissions')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="position">{{ __('common.position') }} <span class="text-danger">*</span></label>
                                    <select name="position" id="position" class="form-control @error('position') is-invalid @enderror">
                                        <option value="">{{ __('common.option_select') }}</option>
                                        <option value="sidebar" @if((isset($item) && $item->position === 'sidebar') || old('position', 'sidebar') == 'sidebar')selected @endif>Sidebar</option>
                                        <option value="navbar_right" @if((isset($item) && $item->position === 'navbar_right') || old('position') == 'navbar_right')selected @endif>Navbar Right</option>
                                        <option value="navbar_left" @if((isset($item) && $item->position === 'navbar_left') || old('position') == 'navbar_left')selected @endif>Navbar Left</option>
                                    </select>
                                    <small class="form-text text-muted">{{ __('common.position_menu_help') }}</small>
                                    @error('position')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="parent_id">{{ __('common.parent_menu') }} <span class="text-danger">*</span></label>
                                    <select name="parent_id" id="parent_id" class="form-control @error('parent_id') is-invalid @enderror">
                                        <option value="">{{ __('common.option_select') }}</option>
                                        <optgroup label="Sidebar">
                                        @foreach($menus['sidebar'] as $link)
                                            <option value="{{ $link->id }}" @if((isset($item) && $item->parent_id === $link->id) || old('parent_id') == $link->id)selected @endif>{{ $link->name }}</option>
                                        @endforeach
                                        </optgroup>
                                        <optgroup label="Navbar Left">
                                        @foreach($menus['navbar_left'] as $link)
                                            <option value="{{ $link->id }}" @if((isset($item) && $item->parent_id === $link->id) || old('parent_id') == $link->id)selected @endif>{{ $link->name }}</option>
                                        @endforeach
                                        </optgroup>
                                        <optgroup label="Navbar Right">
                                        @foreach($menus['navbar_right'] as $link)
                                            <option value="{{ $link->id }}" @if((isset($item) && $item->parent_id === $link->id) || old('parent_id') == $link->id)selected @endif>{{ $link->name }}</option>
                                        @endforeach
                                        </optgroup>
                                    </select>
                                    <small class="form-text text-muted">{{ __('common.parent_menu_help') }}</small>
                                    @error('parent_id')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="blank">{{ __('common.target_menu') }} <span class="text-danger">*</span></label>
                                    <select name="blank" id="blank" class="form-control @error('blank') is-invalid @enderror">
                                        <option value="">{{ __('common.option_select') }}</option>
                                        <option value="0" @if((isset($item) && $item->blank === 0) || old('blank', 0) == '0')selected @endif>Default</option>
                                        <option value="1" @if((isset($item) && $item->blank === 1) || old('blank') == '1')selected @endif>Blank</option>
                                    </select>
                                    <small class="form-text text-muted">{{ __('common.target_menu_help') }}</small>
                                    @error('blank')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="status">{{ __('common.status') }} <span class="text-danger">*</span></label>
                                    <select name="status" id="status" class="form-control @error('status') is-invalid @enderror">
                                        <option value="">{{ __('common.option_select') }}</option>
                                        <option value="active" @if((isset($item) && $item->status === 'active') || old('status', 'active') == 'active')selected @endif>
                                            {{ __('common.active') }}</option>
                                        <option value="inactive" @if((isset($item) && $item->status === 'inactive') || old('status') == 'inactive')selected @endif>
                                            {{ __('common.inactive') }}</option>
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
                        <button type="submit" class="btn btn-success"><i class="fa fa-save"></i> {{ $form_params['button_name'] }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
