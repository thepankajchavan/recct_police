@extends(admin_view('layouts.default'))

@section('content')
    @include('admin::partials.alerts')
    <div class="row">
        <div class="col-lg-12 col-sm-12">
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">{{ __($page_title) }}</h3>
                </div>
                <div class="card-body">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="general-tab" data-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">{{ __('common.settings_tab_general') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="seo-tab" data-toggle="tab" href="#seo" role="tab" aria-controls="seo" aria-selected="false">{{ __('common.settings_tab_seo') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="company-tab" data-toggle="tab" href="#company" role="tab" aria-controls="company" aria-selected="false">{{ __('common.settings_tab_company') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="social-tab" data-toggle="tab" href="#social" role="tab" aria-controls="social" aria-selected="false">{{ __('common.settings_tab_social') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="design-tab" data-toggle="tab" href="#design" role="tab" aria-controls="design" aria-selected="false">{{ __('common.settings_tab_design') }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="maintenance-tab" data-toggle="tab" href="#maintenance" role="tab" aria-controls="maintenance" aria-selected="false">{{ __('common.settings_tab_maintenance') }}</a>
                        </li>
                    </ul>
                    <form action="{{ route('admin.settings') }}" method="post">
                        @method('put')
                        @csrf
                        <!-- Tab panes -->
                        <div class="tab-content mt-2">
                            <div class="tab-pane active" id="general" role="tabpanel" aria-labelledby="general-tab">
                                @include('admin::settings.general')
                            </div>
                            <div class="tab-pane" id="seo" role="tabpanel" aria-labelledby="seo-tab">
                                @include('admin::settings.seo')
                            </div>
                            <div class="tab-pane" id="company" role="tabpanel" aria-labelledby="company-tab">
                                @include('admin::settings.company')
                            </div>
                            <div class="tab-pane" id="social" role="tabpanel" aria-labelledby="social-tab">
                                @include('admin::settings.social')
                            </div>
                            <div class="tab-pane" id="design" role="tabpanel" aria-labelledby="design-tab">
                                @include('admin::settings.design')
                            </div>
                            <div class="tab-pane" id="maintenance" role="tabpanel" aria-labelledby="maintenance-tab">
                                @include('admin::settings.maintenance')
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success" @cannot('edit-settings')disabled="disabled" @endcannot><i class="fa fa-save"></i>
                            {{ __('common.save') }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
