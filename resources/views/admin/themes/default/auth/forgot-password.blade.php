@extends(admin_view('layouts.auth'))
@push('page_class')login-page @endpush

@section('content')
    <div class="login-box">
        <div class="login-logo">
            <a href="{{ route('admin.index') }}"><b>{{ setting('site_name') }}</b></a>
        </div>

        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
                <p class="login-box-msg">{{ __('common.forgot_password_text') }}</p>

                @include(admin_view('partials.alerts'))

                <form action="{{ route('admin.password.email') }}" method="post">
                    @csrf
                    <div class="input-group mb-3">
                        <input type="email" name="email" class="form-control @error('email')is-invalid @enderror" placeholder="{{ __('common.email') }}" autofocus required>
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        @error('email')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-block">{{ __('common.forgot_password_button') }}</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

                <p class="mt-3 mb-1">
                    <a href="{{ route('admin.login') }}">{{ __('common.login') }}</a>
                </p>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    <!-- /.login-box -->
@endsection
