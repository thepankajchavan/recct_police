@extends(admin_view('layouts.auth'))
@push('page_class')login-page @endpush

@section('content')
    <div class="login-box">
        <div class="login-logo">
            <a href="{{ route('admin.index') }}"><b>{{ setting('site_name') }}</b></a>
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body" x-data="{ recovery: false }">
                @if(session('admin.method') === 'app')
                <p class="login-box-msg" x-show="! recovery">{{ __('common.two_factor_code_text') }}</p>
                <p class="login-box-msg" x-show="recovery">{{ __('common.two_factor_recovery_text') }}</p>
                @else
                <p class="login-box-msg">{{ __('common.two_factor_email_text') }}</p>
                @endif
                @include('admin::partials.alerts')

                <form action="{{ route('admin.2fa') }}" method="post">
                    @csrf
                    <div class="form-group mb-3" x-show="! recovery">
                        <input type="text" name="code" class="form-control @error('code')is-invalid @enderror"
                               placeholder="{{ __('common.code') }}" autofocus x-ref="code" required autocomplete="one-time-code">
                        @error('code')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                    <div class="form-group mb-3" x-show="recovery">
                        <input type="text" name="recovery_code" class="form-control @error('recovery_code')is-invalid @enderror"
                               placeholder="{{ __('common.recovery_code') }}" x-ref="recovery_code" autocomplete="one-time-code">
                        @error('recovery_code')
                        <div class="invalid-feedback">
                            {{ $message }}
                        </div>
                        @enderror
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <button type="submit" class="btn btn-primary btn-block">{{ __('common.confirm') }}</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>

                @if(session('admin.method') === 'email')
                <form action="{{ route('admin.2fa.resend') }}" method="post">
                    @csrf
                    <div class="row">
                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-link">{{ __('common.resend_email_code') }}</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                @else
                    <div class="row">
                        <div class="col-12 text-center">
                            <button type="button" class="btn btn-link"
                                    x-show="! recovery"
                                    x-on:click="
                                        recovery = true;
                                        $nextTick(() => { $refs.recovery_code.focus(), $refs.recovery_code.setAttribute('required', 'required'), $refs.code.removeAttribute('required') })
                                    ">
                                {{ __('common.two_factor_use_recovery') }}</button>
                            <button type="button" class="btn btn-link"
                                    x-show="recovery"
                                    x-on:click="
                                        recovery = false;
                                        $nextTick(() => { $refs.code.focus(), $refs.code.setAttribute('required', 'required'), $refs.recovery_code.removeAttribute('required') })
                                    ">
                                {{ __('common.two_factor_use_code') }}</button>
                        </div>
                        <!-- /.col -->
                    </div>
                @endif
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    <!-- /.login-box -->
@endsection
