<!-- Main Sidebar Container -->
<aside class="main-sidebar {{ adminlte_classes('sidebar') }} elevation-4">
    <!-- Brand Logo -->
    <a href="{{ route('admin.index') }}" class="brand-link {{ adminlte_classes('brand') }}">
        <img src="{{ admin_assets('dist/img/logo.png') }}" alt="Logo" class="brand-image img-circle elevation-3"
             style="opacity: .8">
        <span class="brand-text font-weight-light">{{ config('smartyscripts.script_name') }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
            <div class="image">
                <img src="{{ admin_avatar() }}" class="img-circle elevation-2" alt="User Image">
            </div>
            <div class="info">
                <a href="{{ route('admin.profile') }}" class="d-block">{{ auth()->user()->name }}</a>
                @if(!empty(auth('admin')->user()->getRoleNames()))
                    @foreach(auth('admin')->user()->getRoleNames() as $role)
                        <small class="badge bg-primary">{{ $role }}</small>
                    @endforeach
                @endif
            </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column {{ adminlte_classes('sidebar_nav') }}"
                data-widget="treeview" role="menu" data-accordion="false">
                @each('admin::partials.menus.sidebar', $admin_sidebar_menu, 'link')
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
