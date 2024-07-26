@if($status === 'active' || $status === 'enabled' || $status === 'published')
    <span class="badge badge-success">{{ ucfirst(__($status)) }}</span>
@endif
@if($status === 'inactive' || $status === 'disabled' || $status === 'draft')
    <span class="badge badge-danger">{{ ucfirst(__($status)) }}</span>
@endif
@if($status === 'pending')
    <span class="badge badge-warning">{{ ucfirst(__($status)) }}</span>
@endif
