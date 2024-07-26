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
                <p class="login-box-msg">{{ __('common.email_verify_text') }}</p>

                @if (session('status') == 'verification-link-sent')
                    <div class="alert alert-success" role="alert">
                        {{ __('common.email_verify_resent_text') }}
                    </div>
                @endif

                <form action="{{ route('admin.verification.send') }}" method="post">
                    @csrf
                    <div class="row">
                        <div class="col-12 text-center">
                            <button type="submit" class="btn btn-success">{{ __('common.email_verify_resent_button') }}</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                <p class="mt-3 mb-1">
                    <form action="{{ route('admin.logout') }}" method="post">
                        @csrf
                        <div class="row">
                            <div class="col-12 text-center">
                                <button type="submit" class="btn btn-link p-0 m-0 align-baseline">{{ __('common.logout') }}</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                </p>
            </div>
            <!-- /.login-card-body -->
        </div>
    </div>
    <!-- /.login-box -->
@endsection
