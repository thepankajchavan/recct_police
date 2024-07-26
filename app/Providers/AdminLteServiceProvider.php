<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class AdminLteServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        // Set default string length on db
        Schema::defaultStringLength(220);
        // Default pagination compatible with Bootstrap
        Paginator::useBootstrap();
        // Register admin views namespace
        View::addNamespace('admin', resource_path('views/admin/themes/' . setting('admin_theme', 'default') . '/'));
        // Register site views namespace
        View::addNamespace('site', resource_path('views/themes/' . setting('site_theme', 'default') . '/'));
        // Share admin menus
        View::composer([
            'admin.themes.'.setting('admin_theme', 'default').'.partials.sidebar',
            'admin.themes.'.setting('admin_theme', 'default').'.partials.navbar',
        ], static function ($view) {
            return $view->with([
                'admin_sidebar_menu' => Cache::rememberForever('admin_sidebar_menu', static function() {
                    return \App\Models\AdminMenu::tree();
                }),
                'admin_navbar_left_menu' => Cache::rememberForever('admin_navbar_left_menu', static function() {
                    return \App\Models\AdminMenu::navbarLeftTree();
                }),
                'admin_navbar_right_menu' => Cache::rememberForever('admin_navbar_right_menu', static function() {
                    return \App\Models\AdminMenu::navbarRightTree();
                }),
            ]);
        });
    }
}
