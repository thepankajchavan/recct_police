<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index()
    {
        $statistics = DB::select("SELECT
       (SELECT count(*) FROM users) as total_users,
       (SELECT count(*) FROM users WHERE DATE(created_at) = CURRENT_DATE) as total_users_today,
       (SELECT count(*) FROM admins) as total_admins,
       (SELECT count(*) FROM roles) as total_roles,
       (SELECT count(*) FROM permissions) as total_permissions,
       (SELECT count(*) FROM admin_menus) as total_admin_menus,
       (SELECT count(*) FROM pages) as total_pages
       ")[0];
       return view('admin');
        /* return view('admin::index')->with([
            'page_title' => 'common.dashboard',
            'statistics' => $statistics,
            'latest_users' => User::latest()->limit(10)->get()
        ]); */
    }

    public function criminalGenerate()
    {
        return view('admin');
    }

    
}
