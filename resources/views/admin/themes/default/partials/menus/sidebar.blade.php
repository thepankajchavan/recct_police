@if(!$link->permissions || auth()->user()->canAny($link->permissions))
<li class="nav-item">
    <a href="{{ $link->type === 'route' ? ($link->url !== '#' ? route($link->url) : $link->url) : $link->url }}" class="nav-link" {!! $link->blank ? 'target="_blank"' : '' !!} title="{{ $link->name }}">
        {!! $link->icon ? '<i class="nav-icon fas ' . $link->icon . '"></i>' : '' !!}
        <p>{{ $link->name }}</p>
        @if(count($link->activeChilds) > 0)
            <i class="right fas fa-angle-left"></i>
        @endif
    </a>
    @if (count($link->activeChilds) > 0)
        <ul class="@if($link->parent_id !== 0 && (count($link->activeChilds) > 0)) nav nav-treeview @endif">
            @foreach($link->activeChilds as $link)
                @include('admin::partials.menus.sidebar', $link)
            @endforeach
        </ul>
    @endif
</li>
@endif
