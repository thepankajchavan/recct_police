<ol class="breadcrumb float-sm-right">
    <li class="breadcrumb-item"><a href="{{ route('admin.index') }}">{{ __('common.home') }}</a></li>
    @if(isset($breadcrumbs))
        @foreach ($breadcrumbs as $breadcrumb)
            <li class="breadcrumb-item"><a href="{{ $breadcrumb['route'] }}">{{ __($breadcrumb['name']) }}</a>
            </li>
        @endforeach
    @endif
    <li class="breadcrumb-item active">{{ __($page_title) ?? __('common.dashboard') }}</li>
</ol>
