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
                            <div class="col-lg-4 col-sm-12">
                                <div class="form-group">
                                    <label for="name">{{ __('common.name') }} <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ $item->name ?? old('name') }}" placeholder="{{ __('common.name') }}">
                                    <small class="form-text text-muted">{{ __('common.name') }}</small>
                                    @error('name')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <div class="form-group">
                                    <label for="username">{{ __('common.username') }} <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control @error('username') is-invalid @enderror" id="username" name="username" value="{{ $item->username ?? old('username') }}" placeholder="{{ __('common.username') }}">
                                    <small class="form-text text-muted">{{ __('common.username') }}</small>
                                    @error('username')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-12">
                                <div class="form-group">
                                    <label for="email">{{ __('common.email') }} <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control @error('email') is-invalid @enderror" id="email" name="email" value="{{ $item->email ?? old('email') }}" placeholder="{{ __('common.email') }}">
                                    <small class="form-text text-muted">{{ __('common.email') }}</small>
                                    @error('email')
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
                                    <label for="password">@isset($item){{ __('common.password_new') }} @else {{ __('common.password') }} @endisset @if(!isset($item)) <span class="text-danger">*</span>@endif</label>
                                    <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password" placeholder="@isset($item){{ __('common.leave_blank_to_do_not_change') }} @else Password @endisset">
                                    <small class="form-text text-muted">{{ __('common.password_min') }}</small>
                                    @error('password')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="password_confirmation">@isset($item){{ __('common.password_new_confirm') }} @else {{ __('common.password_confirm') }} @endisset @if(!isset($item)) <span class="text-danger">*</span>@endif</label>
                                    <input type="password" class="form-control" id="password_confirmation" name="password_confirmation" placeholder="@isset($item){{ __('common.leave_blank_to_do_not_change') }} @else {{ __('common.password_confirm') }} @endisset">
                                    <small class="form-text text-muted">{{ __('common.password_min') }}</small>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="roles">{{ __('common.roles') }}</label>
                            <select name="roles[]" id="roles" class="form-control @error('roles') is-invalid @enderror" multiple>
                                @foreach($roles as $value)
                                    <option value="{{ $value }}" @if(isset($user_roles) && in_array($value, $user_roles))selected @endif>{{ $value }}</option>
                                @endforeach
                            </select>
                            @error('roles')
                            <div class="invalid-feedback">
                                {{ $message }}
                            </div>
                            @enderror
                        </div>
                        <div class="form-check mb-3">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="reset_2fa" id="reset_2fa"> {{ __('common.reset_two_factor_authentication') }}
                            </label>
                        </div>
                        <button type="submit" class="btn btn-success"><i class="fa fa-save"></i> {{ $form_params['button_name'] }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
