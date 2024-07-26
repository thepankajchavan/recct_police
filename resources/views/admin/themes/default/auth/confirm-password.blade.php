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
                <p class="login-box-msg">{{ __('common.confirm_password_text') }}</p>

                <form action="{{ route('admin.password.confirm') }}" method="post">
                    @csrf
                    <div class="input-group mb-3">
                        <input type="password" name="password" class="form-control @error('password')is-invalid @enderror"
                               placeholder="Password" required autofocus autocomplete="current-password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        @error('password')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-block">{{ __('common.password_confirm') }}</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    <!-- /.login-box -->
@endsection
