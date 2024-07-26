<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Setting;

class SettingSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Setting::set([
            'site_name' => config('app.name', 'LaraMinLTE'),
            'admin_theme' => 'default',
            'site_theme' => 'default',
            'admin_pagination' => 10,
            'site_pagination' => 10,
            'default_editor' => 'summernote',
            'default_alerts' => 'toastr',
            'maintenance_status' => 'inactive',
        ]);
        Setting::save();
    }
}
