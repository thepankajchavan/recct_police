@if(!$link->permissions || auth()->user()->canAny($link->permissions))
    @php
        $url_target = $link->type === 'route' ? ($link->url !== '#' ? route($link->url) : $link->url) : $link->url;
    @endphp
    <a class="dropdown-item @if(url()->current()===$url_target)active @endif" href="{{ $url_target }}"
        {!! $link->blank ? 'target="_blank"' : '' !!} title="{{ $link->name }}">
        {!! $link->icon ? '<i class="nav-icon fas ' . $link->icon . '"></i>' : '' !!}
        {{ $link->name }}
    </a>
@endif
