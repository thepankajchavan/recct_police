@if(!$link->permissions || auth()->user()->canAny($link->permissions))
    @php
        $url_target = $link->type === 'route' ? ($link->url !== '#' ? route($link->url) : $link->url) : $link->url;
    @endphp
<li class="nav-item @if(count($link->activeChilds) > 0)dropdown @endif @if(url()->current() === $url_target)active @endif d-none d-sm-inline-block">
    <a href="{{ $link->type === 'route' ? ($link->url !== '#' ? route($link->url) : $link->url) : $link->url }}"
       @if(count($link->activeChilds) > 0)class="nav-link dropdown-toggle" id="{{ $link->name }}NavLeftDropdown" role="button" data-toggle="dropdown" aria-expanded="false" @else class="nav-link" @endif
        title="{{ $link->name }}"
        {!! $link->blank ? 'target="_blank"' : '' !!}>
        @if($link->icon)
            {!! $link->icon ? '<i class="nav-icon fas ' . $link->icon . '"></i>' : '' !!}
        @else
            {{ $link->name }}
        @endif
        @if(url()->current() === $url_target)<span class="sr-only">(current)</span> @endif
    </a>
    @if (count($link->activeChilds) > 0)
        <div class="dropdown-menu" aria-labelledby="{{ $link->name }}NavLeftDropdown">
            @foreach($link->activeChilds as $link)
                @include('admin::partials.menus.navbar-dropdown-links', $link)
            @endforeach
        </div>
    @endif
</li>
@endif
