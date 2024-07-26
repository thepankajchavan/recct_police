@extends(admin_view('layouts.default'))

@section('content')
    @include('admin::partials.alerts')
    <!-- Small boxes (Stat box) -->
    <div class="row">
        <div class="col-lg-4 col-sm-12">
            <!-- small box -->
            <div class="small-box bg-success">
                <div class="inner">
                    <h3>{{ $statistics->total_admins }}</h3>
                    <p>{{ __('common.total_admins') }}</p>
                </div>
                <div class="icon">
                    <i class="fa fa-user-secret"></i>
                </div>
                @can('manage-admin')
                <a href="{{ route('admin.admins.index') }}" class="small-box-footer" title="{{ __('common.more_info') }}">{{ __('common.more_info') }} <i
                        class="fas fa-arrow-circle-right"></i></a>
                @endcan
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-4 col-sm-12">
            <!-- small box -->
            <div class="small-box bg-info">
                <div class="inner">
                    <h3>{{ $statistics->total_users }}</h3>
                    <p>{{ __('common.total_users') }}</p>
                </div>
                <div class="icon">
                    <i class="fa fa-users"></i>
                </div>
                @can('manage-users')
                    <a href="{{ route('admin.users.index') }}" class="small-box-footer" title="{{ __('common.more_info') }}">{{ __('common.more_info') }} <i
                            class="fas fa-arrow-circle-right"></i></a>
                @endcan
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-4 col-sm-12">
            <!-- small box -->
            <div class="small-box bg-purple">
                <div class="inner">
                    <h3>{{ $statistics->total_pages }}</h3>
                    <p>{{ __('common.total_pages') }}</p>
                </div>
                <div class="icon">
                    <i class="fa fa-file"></i>
                </div>
                @can('manage-page')
                    <a href="{{ route('admin.pages.index') }}" class="small-box-footer" title="{{ __('common.more_info') }}">{{ __('common.more_info') }} <i
                            class="fas fa-arrow-circle-right"></i></a>
                @endcan
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-4 col-sm-12">
            <!-- small box -->
            <div class="small-box bg-dark">
                <div class="inner">
                    <h3>{{ $statistics->total_roles }}</h3>
                    <p>{{ __('common.total_roles') }}</p>
                </div>
                <div class="icon">
                    <i class="fa fa-briefcase"></i>
                </div>
                @can('manage-role')
                    <a href="{{ route('admin.roles.index') }}" class="small-box-footer" title="{{ __('common.more_info') }}">{{ __('common.more_info') }} <i
                            class="fas fa-arrow-circle-right"></i></a>
                @endcan
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-4 col-sm-12">
            <!-- small box -->
            <div class="small-box bg-primary">
                <div class="inner">
                    <h3>{{ $statistics->total_permissions }}</h3>
                    <p>{{ __('common.total_permissions') }}</p>
                </div>
                <div class="icon">
                    <i class="fa fa-unlock"></i>
                </div>
                @can('manage-permission')
                    <a href="{{ route('admin.permissions.index') }}" class="small-box-footer" title="{{ __('common.more_info') }}">{{ __('common.more_info') }} <i
                            class="fas fa-arrow-circle-right"></i></a>
                @endcan
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-4 col-sm-12">
            <!-- small box -->
            <div class="small-box bg-secondary">
                <div class="inner">
                    <h3>{{ $statistics->total_admin_menus }}</h3>
                    <p>{{ __('common.total_admin_menus') }}</p>
                </div>
                <div class="icon">
                    <i class="fa fa-bars"></i>
                </div>
                @can('manage-admin-menu')
                    <a href="{{ route('admin.admin.menus.index') }}" class="small-box-footer" title="{{ __('common.more_info') }}">{{ __('common.more_info') }} <i
                            class="fas fa-arrow-circle-right"></i></a>
                @endcan
            </div>
        </div>
        <!-- ./col -->
    </div>
    <!-- /.row -->

    @can('manage-user')
    <div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header border-transparent">
                    <h3 class="card-title">{{ __('common.latest_users') }} <span class="badge badge-success">{{ $statistics->total_users_today }} {{ __('common.latest_users_today') }}</span></h3>
                    <div class="card-tools">
                        <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Minimize">
                            <i class="fas fa-minus"></i>
                        </button>
                    </div>
                </div>

                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table m-0">
                            <thead>
                            <tr>
                                <th>{{ __('common.name') }}</th>
                                <th>{{ __('common.email') }}</th>
                                <th>{{ __('common.registered_at') }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            @forelse($latest_users as $latest_user)
                            <tr>
                                <td><a href="{{ route('admin.users.edit', $latest_user->id) }}" class="btn btn-link @cannot('edit-user')disabled @endcannot">{{ $latest_user->name }}</a></td>
                                <td>{{ $latest_user->email }}</td>
                                <td>{{ $latest_user->created_at }}</td>
                            </tr>
                            @empty
                                <tr><td colspan="3" class="text-center">{{ __('common.no_results') }}</td></tr>
                            @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer text-center">
                    <a href="{{ route('admin.users.index') }}" class="btn btn-link">{{ __('common.view_all_users') }}</a>
                </div>
            </div>
        </div>
    </div>
    @endcan
@endsection
