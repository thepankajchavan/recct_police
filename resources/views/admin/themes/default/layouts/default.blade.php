<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ setting('site_name') }} | {{ __($page_title) ?? __('common.home') }}</title>
    <meta name="description" content="{{ setting('meta_description') }}">
    <meta name="keywords" content="{{ setting('meta_keywords') }}">
    <base href="{{ route('admin.index') }}">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Favicons -->
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="{{ asset('assets/admin/favicon/ms-icon-144x144.png') }}">
    <meta name="theme-color" content="#ffffff">
    <link rel="apple-touch-icon" sizes="57x57" href="{{ asset('assets/admin/favicon/apple-icon-57x57.png') }}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{ asset('assets/admin/favicon/apple-icon-60x60.png') }}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{ asset('assets/admin/favicon/apple-icon-72x72.png') }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('assets/admin/favicon/apple-icon-76x76.png') }}">
    <link rel="apple-touch-icon" sizes="114x114" href="{{ asset('assets/admin/favicon/apple-icon-114x114.png') }}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{ asset('assets/admin/favicon/apple-icon-120x120.png') }}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{ asset('assets/admin/favicon/apple-icon-144x144.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('assets/admin/favicon/apple-icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/admin/favicon/apple-icon-180x180.png') }}">
    <link rel="icon" type="image/png" sizes="192x192"  href="{{ asset('assets/admin/favicon/android-icon-192x192.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/admin/favicon/favicon-32x32.png') }}">
    <link rel="icon" type="image/png" sizes="96x96" href="{{ asset('assets/admin/favicon/favicon-96x96.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/admin/favicon/favicon-16x16.png') }}">
    <link rel="manifest" href="{{ asset('assets/admin/favicon/manifest.json') }}">
    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=swap">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ admin_assets('plugins/fontawesome-free/css/all.min.css') }}" media="all">
    <!-- icheck bootstrap -->
    <link rel="stylesheet" href="{{ admin_assets('plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}" media="all">
    <!-- Select2 -->
    <link rel="stylesheet" href="{{ admin_assets('plugins/select2/css/select2.min.css') }}" media="all">
    <link rel="stylesheet" href="{{ admin_assets('plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css') }}" media="all">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ admin_assets('dist/css/adminlte.min.css') }}" media="all">
    <!-- AlpineJs -->
    <script src="//unpkg.com/alpinejs" defer></script>
    <!-- Custom Styles -->
    <script src="{{ admin_assets('dist/css/custom.css') }}" media="all"></script>
    @livewireStyles
    <style>[x-cloak] { display: none !important; }</style>
    @stack('additional_styles')
</head>
<body class="hold-transition sidebar-mini{{ adminlte_classes('body') }}">
<div class="wrapper">
    <div class="preloader flex-column justify-content-center align-items-center">
        <img class="animation__shake" src="{{ admin_assets('dist/img/logo.png') }}" alt="{{ setting('site_name') }} Logo" height="60" width="60">
    </div>
    @include(admin_view('partials.navbar'))
    @include(admin_view('partials.sidebar'))
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">{{ __($page_title) ?? __('common.dashboard') }}</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        @include(admin_view('partials.breadcrumbs'))
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                @yield('content')
            </div>
            <!-- /.content-fluid -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <!-- Main Footer -->
    <footer class="main-footer">
        <!-- To the right -->
        <div class="float-right d-none d-sm-inline">
            {{ config('smartyscripts.script_name') }} v{{ config('smartyscripts.script_version') }} by <strong><a
                    href="{{ config('smartyscripts.script_creator_site') }}"
                    target="_blank">{{ config('smartyscripts.script_creator') }}</a></strong>
        </div>
        <!-- Default to the left -->
        Copyright &copy; {{ date('Y') }} <strong><a href="{{ route('index') }}"
                                                    target="_blank">{{ setting('site_name') }}</a>.</strong>
        {{ __('common.all_rights_reserved') }}
    </footer>
    <!-- /.main-footer -->
</div>
<!-- /.wrapper -->
@include('admin::partials.confirm-delete-modal')
<!-- jQuery -->
<script src="{{ admin_assets('plugins/jquery/jquery.min.js') }}"></script>
<!-- Bootstrap 4 -->
<script src="{{ admin_assets('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<!-- Select2 -->
<script src="{{ admin_assets('plugins/select2/js/select2.full.min.js') }}" defer></script>
<!-- AdminLTE App -->
<script src="{{ admin_assets('dist/js/adminlte.min.js') }}"></script>
<!-- AplineJs Slug -->
<script src="https://unpkg.com/alpinejs-slug@1.x.x/dist/slug.min.js"></script>
<!-- Custom Scripts -->
<script src="{{ admin_assets('dist/js/custom.js') }}"></script>
@livewireScripts
@stack('additional_scripts')
</body>
</html>
