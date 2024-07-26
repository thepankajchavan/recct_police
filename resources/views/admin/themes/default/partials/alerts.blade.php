@if ($errors->any())
    <div class="alert alert-danger alert-dismissible">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        @if(count($errors) > 1)
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        @else
            {{$errors->first()}}
        @endif
    </div>
@endif

@if (setting('default_alerts') === 'alerts')
    @if (session('success'))
        <div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            {{ session('success') }}
        </div>
    @endif

    @if (session('status'))
        <div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            {{ session('status') }}
        </div>
    @endif

    @if (session('error'))
        <div class="alert alert-danger alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            {{ session('error') }}
        </div>
    @endif
@endif

@if (setting('default_alerts') === 'toastr')
    @push('additional_styles')
        <!-- Toastr -->
        <link rel="stylesheet" href="{{ admin_assets('plugins/toastr/toastr.min.css') }}">
    @endpush
    @push('additional_scripts')
        <!-- Toastr -->
        <script src="{{ admin_assets('plugins/toastr/toastr.min.js') }}"></script>
        @if (session('success') || session('error') || session('status'))
        <script>
            //Toastr
            @if (session('status'))
            toastr.success('{{ session('status') }}');
            @endif
            @if (session('success'))
            toastr.success('{{ session('success') }}');
            @endif
            @if (session('error'))
            toastr.error('{{ session('error') }}');
            @endif
        </script>
        @endif
    @endpush
@endif

@if (setting('default_alerts') === 'sweetalert')
    @push('additional_styles')
        <!-- SweetAlert2 -->
        <link rel="stylesheet" href="{{ admin_assets('plugins/sweetalert2-theme-bootstrap-4/bootstrap-4.min.css') }}">
    @endpush
    @push('additional_scripts')
        <!-- SweetAlert2 -->
        <script src="{{ admin_assets('plugins/sweetalert2/sweetalert2.min.js') }}"></script>
        @if (session('success') || session('error') || session('status'))
        <script>
            const sweetAlertTheme = display_cookie === 'dark' ? '#343a40' : '';
            //SweetAlert2
            const SweetAlert = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                background: sweetAlertTheme
            });
            @if (session('success'))
            SweetAlert.fire({
                icon: 'success',
                text: '{{ session('success') }}'
            });
            @endif
            @if (session('status'))
            SweetAlert.fire({
                icon: 'success',
                text: '{{ session('status') }}'
            });
            @endif
            @if (session('error'))
            SweetAlert.fire({
                'icon': 'error',
                'text': '{{ session('error') }}'
            });
            @endif
        </script>
        @endif
    @endpush
@endif
