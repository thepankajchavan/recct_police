<!-- Navbar -->
<nav class="main-header navbar navbar-expand {{ adminlte_classes('navbar') }}">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button" title="Toggle Sidebar"><i class="fas fa-bars"></i></a>
        </li>
        @each('admin::partials.menus.navbar-left', $admin_navbar_left_menu, 'link')
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
        @each('admin::partials.menus.navbar-right', $admin_navbar_right_menu, 'link')

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="LanguagesDropdown" role="button" data-toggle="dropdown" aria-expanded="false"href="#">
                {{ strtoupper(app()->getLocale()) }}
            </a>
            <div class="dropdown-menu" aria-labelledby="LanguagesDropdown">
                @foreach(language_list() as $lang)
                    <a href="{{ route('lang', $lang) }}" class="dropdown-item @if($lang === app()->getLocale())active @endif">
                        {{ strtoupper($lang) }}
                    </a>
                @endforeach
            </div>
        </li>

        <li class="nav-item">
            <a href="{{ route('index') }}" class="nav-link" target="_blank" title="{{ __('common.view_site') }}"><i class="fas fa-globe"></i></a>
        </li>
        <li class="nav-item">
            <a href="javascript:void('');" class="nav-link" title="{{ __('common.toggle_dark_light') }}" id="display-mode" onClick="toggleDisplayMode();"><i class="fas fa-sun"></i></a>
        </li>
        <li class="nav-item dropdown user user-menu">
            <a class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" href="#" aria-expanded="false">
                <img src="{{ admin_avatar() }}" class="user-image" alt="User Image">
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" class="dropdown-item disabled">{{ __('common.hi_user', ['name' => auth()->user()->username]) }}</a>
                <div class="dropdown-divider"></div>
                @impersonating('admin')
                    <a href="{{ route('admin.admins.impersonate.stop') }}" class="dropdown-item"><i class="fa fa-undo"></i>
                        {{ __('common.leave_impersonation') }}</a>
                @endImpersonating
                <a href="{{ route('admin.profile') }}" class="dropdown-item"><i class="fa fa-user-edit"></i> {{ __('common.edit_profile') }}</a>
                <a href="{{ route('admin.logout') }}" class="dropdown-item" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="fa fa-sign-out-alt"></i> {{ __('common.logout') }}</a>
            </div>
            <form id="logout-form" action="{{ route('admin.logout') }}" method="POST" class="d-none">
                @csrf
            </form>
        </li>
    </ul>
</nav>
<!-- /.navbar -->
