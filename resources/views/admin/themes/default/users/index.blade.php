@extends(admin_view('layouts.default'))

@section('content')
    @include('admin::partials.alerts')
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">{{ __($page_title) }}</h3>
                    <div class="card-tools">
                        <a href="{{ route('admin.users.create') }}" class="btn btn-primary btn-sm @cannot('create-user')disabled @endcannot">
                            <i class="fa fa-plus"></i> {{ __('common.create') }}
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <livewire:admin.tables.user-table />
                </div>
            </div>
        </div>
    </div>
@endsection
