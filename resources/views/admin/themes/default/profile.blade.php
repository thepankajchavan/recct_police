@extends(admin_view('layouts.default'))

@section('content')
    @include('admin::partials.alerts')
    <div class="row">
        <div class="col-lg-3 col-sm-12">
            <div class="card card-primary card-outline">
                <div class="card-body box-profile">
                    <div class="text-center">
                        <img class="profile-user-img img-fluid img-circle" src="{{ admin_avatar() }}" alt="User profile picture">
                    </div>

                    <h3 class="profile-username text-center">{{ auth()->user()->name }}</h3>

                    <p class="text-muted text-center">{{ auth()->user()->username }}</p>
                    <p class="text-muted text-center">{{ auth()->user()->email }}</p>

                    <ul class="list-group list-group-unbordered mb-3">
                        <li class="list-group-item">
                            <b>{{ __('common.registered_at') }}</b> <a class="float-right">{{ auth()->user()->created_at }}</a>
                        </li>
                        <li class="list-group-item">
                            <b>{{ __('common.updated_at') }}</b> <a class="float-right">{{ auth()->user()->updated_at }}</a>
                        </li>
                        <li class="list-group-item">
                            <b>{{ __('common.email_verified') }}</b> <a class="float-right">{!! auth()->user()->email_verified_at ? '<span class="badge badge-success">'.__('common.yes').'</span>' : '<span class="badge badge-danger">'.__('common.no').'</span>' !!}</a>
                        </li>
                    </ul>
                </div>
                <!-- /.card-body -->
            </div>
        </div>
        <div class="col-lg-9 col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title"><i class="fa fa-user-edit"></i> {{ __('common.edit_profile') }}</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form method="post" action="{{ route('admin.profile') }}">
                    @csrf
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="name">{{ __('common.name') }} <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ auth()->user()->name }}" placeholder="{{ __('common.name') }}">
                                    @error('name')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="username">{{ __('common.username') }} <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control @error('username') is-invalid @enderror" id="username" name="username" value="{{ auth()->user()->username }}" placeholder="{{ __('common.username') }}">
                                    @error('username')
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
                                    <label for="email">{{ __('common.email_new') }}</label>
                                    <input type="email" class="form-control @error('email') is-invalid @enderror" id="email" name="email" placeholder="{{ __('common.leave_blank_to_do_not_change') }}">
                                    @error('email')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="email_confirmation">{{ __('common.email_new_confirm') }}</label>
                                    <input type="email" class="form-control" id="email_confirmation" name="email_confirmation" placeholder="{{ __('common.leave_blank_to_do_not_change') }}">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="new_password">{{ __('common.password_new') }}</label>
                                    <input type="password" class="form-control @error('new_password') is-invalid @enderror" id="new_password" name="new_password" placeholder="{{ __('common.leave_blank_to_do_not_change') }}">
                                    <small class="form-text text-muted">{{ __('common.password_min') }}</small>
                                    @error('new_password')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="new_password_confirmation">{{ __('common.password_new_confirm') }}</label>
                                    <input type="password" class="form-control" id="new_password_confirmation" name="new_password_confirmation" placeholder="{{ __('common.leave_blank_to_do_not_change') }}">
                                    <small class="form-text text-muted">{{ __('common.password_min') }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <button type="submit" class="btn btn-success"><i class="fa fa-save"></i> {{ __('common.update') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-4 col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title"><i class="fa fa-image-portrait"></i> {{ __('common.update_avatar') }}</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form method="post" action="{{ route('admin.profile.avatar') }}" enctype="multipart/form-data">
                    @csrf
                    <div class="card-body">
                        <div class="form-group">
                            <label for="avatar">{{ __('common.avatar') }}</label>
                            <div class="input-group">
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input @error('avatar') is-invalid @enderror" id="avatar" name="avatar" accept="image/*">
                                    <label class="custom-file-label" for="avatar">{{ __('common.choose_file') }}</label>
                                </div>
                            </div>
                            @error('avatar')
                            <div class="invalid-feedback d-block">
                                {{ $message }}
                            </div>
                            @enderror
                            <small class="form-text text-muted">{{ __('common.avatar_file_help') }}</small>
                        </div>
                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer">
                        <button type="submit" class="btn btn-success"><i class="fa fa-save"></i> {{ __('common.update') }}</button>
                    </div>
                </form>
            </div>
        </div>

        <div class="col-lg-4 col-sm-12">
            <livewire:admin.two-factor-authentication-form />
        </div>

        <div class="col-lg-4 col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title"><i class="fa fa-globe"></i> {{ __('common.browser_sessions') }}</h3>
                </div>
                <!-- /.card-header -->
                <!-- form start -->
                <form method="post" action="{{ route('admin.profile.logout.other.browsers') }}">
                    @csrf
                    <div class="card-body">
                        <p>{{ __('common.browser_sessions_text1') }}</p>
                        <p>{{ __('common.browser_sessions_text2') }}</p>

                        @if (count($user_sessions) > 0)
                            <div class="row list-group">
                                <!-- Other Browser Sessions -->
                                @foreach ($user_sessions as $session)
                                    <div class="col-sm-12">
                                        <div class="list-group-item">
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    @if ($session->agent->isDesktop())
                                                        <i class="fa fa-desktop"></i>
                                                    @else
                                                        <i class="fa fa-mobile"></i>
                                                    @endif
                                                </div>

                                                <div class="col-sm-9">
                                                    <div class="text-sm font-weight-bold">
                                                        {{ $session->agent->platform() ? $session->agent->platform() : __('common.unknown') }} - {{ $session->agent->browser() ? $session->agent->browser() : __('common.unknown') }}
                                                    </div>

                                                    <div>
                                                        <div class="text-xs text-muted">
                                                            {{ $session->ip_address }},

                                                            @if ($session->is_current_device)
                                                                <span class="badge badge-success">{{ __('common.this_device') }}</span>
                                                            @else
                                                                {{ __('common.last_active') }} {{ $session->last_active }}
                                                            @endif
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                            <div class="form-group mt-2">
                                <label for="password">{{ __('common.password_current') }}</label>
                                <input type="password" class="form-control @error('password') is-invalid @enderror" id="password" name="password" placeholder="{{ __('common.password_current') }}" required>
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
                        @endif
                    </div>
                    <!-- /.card-body -->

                    <div class="card-footer text-center">
                        <button type="submit" class="btn btn-danger"><i class="fa fa-sign-out"></i> {{ __('common.browser_sessions_logout_button') }}</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
@endsection
