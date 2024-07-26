@if(\Route::has($route_name.'.destroy'))
<form action="{{ route($route_name.'.destroy', $row->id) }}" method="post">
    @csrf
    @method('DELETE')
@endif
    <div class="btn-group btn-group-sm" role="group" aria-label="Table row actions">
        @if(\Route::has($route_name.'.show'))
            <a href="{{ route($route_name.'.show', $row->id) }}" class="btn btn-primary @isset($permissions['show'])@cannot($permissions['show'])disabled @endcannot @endisset">
                <i class="fa fa-eye"></i> {{ __('common.show') }}
            </a>
        @endif
        @if(\Route::has($route_name.'.edit'))
            <a href="{{ route($route_name.'.edit', $row->id) }}" class="btn btn-primary @isset($permissions['edit'])@cannot($permissions['edit'])disabled @endcannot @endisset">
                <i class="fa fa-edit"></i> {{ __('common.edit') }}
            </a>
        @endif
        @if(\Route::has($route_name.'.clone'))
            <a href="{{ route($route_name.'.clone', $row->id) }}" class="btn btn-info @isset($permissions['create'])@cannot($permissions['create'])disabled @endcannot @endisset">
                <i class="fa fa-copy"></i> {{ __('common.clone') }}
            </a>
        @endif
        @if(\Route::has($route_name.'.impersonate'))
            <a href="{{ route($route_name.'.impersonate', $row->id) }}" class="btn btn-secondary @isset($permissions['impersonate'])@cannot($permissions['impersonate'])disabled @endcannot @endisset" @if($route_name === 'admin.users')target="_blank"@endif>
                <i class="fa fa-sign-in"></i> {{ __('common.impersonate') }}
            </a>
        @endif
        @if(\Route::has($route_name.'.destroy'))
            <button type="button" class="btn btn-danger @isset($permissions['destroy'])@cannot($permissions['destroy'])disabled @else confirmDelete @endcannot @endisset"><i class="fa fa-trash"></i> {{ __('common.destroy') }}</button>
        @endif
    </div>
@if(\Route::has($route_name.'.destroy'))
</form>
@endif
