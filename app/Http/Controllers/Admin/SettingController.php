<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SettingRequest;
use Setting;

class SettingController extends Controller
{
    public function __construct()
    {
        // Set permissions
        $this->middleware('permission:manage-setting');
        $this->middleware('permission:edit-setting', ['only' => ['update']]);
    }

    public function index()
    {
        // return view('admin::settings.index')->with(['page_title' => 'common.settings']);
        return view('admin');
    }

    /**
     * @param SettingRequest $request
     * @return mixed
     */
    public function update(SettingRequest $request)
    {
        $filled = array_filter($request->except('_method', '_token'));

        Setting::forgetAll();
        Setting::set($filled);
        Setting::save();

        $this->toggleMaintenanceMode($request);

        return redirect()->refresh()->withSuccess(__('common.item_updated_success', ['item' => __('common.settings')]));
    }

    /**
     * @param SettingRequest $request
     * @return void
     * @throws \JsonException
     */
    private function toggleMaintenanceMode(SettingRequest $request)
    {
        if ($request->maintenance_status === 'active') {
            $new_down['redirect'] = null;
            $new_down['retry'] = (int)$request->maintenance_retry;
            $new_down['secret'] = $request->maintenance_secret ?? null;
            $new_down['status'] = 503;
            $new_down['template'] = null;

            if (app()->isDownForMaintenance()) {
                $down_file = json_decode(file_get_contents(storage_path('/framework/down')), true);
                if ($down_file['retry'] !== $new_down['retry']) {
                    $down_file['redirect'] = $new_down['redirect'];
                    $down_file['retry'] = $new_down['retry'];
                    $down_file['secret'] = $new_down['secret'];
                    $down_file['template'] = $new_down['template'];
                    file_put_contents(storage_path('/framework/down'), json_encode($down_file, JSON_THROW_ON_ERROR | JSON_PRETTY_PRINT));
                }
            } else {
                file_put_contents(storage_path('/framework/down'), json_encode($new_down, JSON_THROW_ON_ERROR | JSON_PRETTY_PRINT));
            }
        }

        if ($request->maintenance_status === 'inactive') {
            if (file_exists(storage_path('framework/down'))) {
                unlink(storage_path('framework/down'));
            }
        }
    }

    public function fetchSettigns()
    {
        $data['general'] = ["site_name"=>Setting('site_name')];
        $maintenance['mode'] = setting('maintenance_status');
        $maintenance['retry'] = setting('maintenance_retry') ?? old('maintenance_retry', 60);
        $maintenance['exclude_uris'] = setting('maintenance_excluded_uris')??'';
        $maintenance['exclude_ips'] = setting('maintenance_excluded_ips')??'';
        $maintenance['secrete'] = setting('maintenance_secret')??'';
        $maintenance['msg'] = setting('maintenance_message')??'';
        $data['mainatenace'] = $maintenance;
        return response()->json($data);
    }
}
