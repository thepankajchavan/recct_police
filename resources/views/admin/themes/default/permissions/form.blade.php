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
                    <form action="{{ $form_params['action_url'] }}" method="post">
                        @csrf
                        @method($form_params['method'])
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="name">{{ __('common.name') }} <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control @error('name') is-invalid @enderror" id="name" name="name" value="{{ $item->name ?? old('name') }}" placeholder="{{ __('common.name') }}">
                                    <small class="form-text text-muted">{{ __('common.name') }}</small>
                                    @error('name')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
                                <div class="form-group">
                                    <label for="guard_name">{{ __('common.guard_name') }} <span class="text-danger">*</span></label>
                                    <select name="guard_name" id="guard_name" class="form-control @error('guard_name') is-invalid @enderror">
                                        <option value="">{{ __('common.option_select') }}</option>
                                        @foreach(config('auth.guards') as $key => $guard)
                                            <option value="{{ $key }}" @if((isset($item) && $item->guard_name === $key) || old('guard_name', 'admin') == $key)selected @endif>
                                                {{ ucfirst($key) }}</option>
                                        @endforeach
                                    </select>
                                    <small class="form-text text-muted">{!! __('common.guard_name_help') !!}</small>
                                    @error('guard_name')
                                    <div class="invalid-feedback">
                                        {{ $message }}
                                    </div>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-success"><i class="fa fa-save"></i> {{ $form_params['button_name'] }}</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
