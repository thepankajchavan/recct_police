<?php

namespace App\Observers;

use App\Models\AdminMenu;
use Illuminate\Support\Facades\Cache;

class AdminMenuObserver
{
    /**
     * Handle the AdminMenu "created" event.
     *
     * @param  \App\Models\AdminMenu  $adminMenu
     * @return void
     */
    public function created(AdminMenu $adminMenu)
    {
        $this->flushCache();
    }

    /**
     * Handle the AdminMenu "updated" event.
     *
     * @param  \App\Models\AdminMenu  $adminMenu
     * @return void
     */
    public function updated(AdminMenu $adminMenu)
    {
        return $this->flushCache();
    }

    /**
     * Handle the AdminMenu "deleted" event.
     *
     * @param  \App\Models\AdminMenu  $adminMenu
     * @return void
     */
    public function deleted(AdminMenu $adminMenu)
    {
        $this->flushCache();
    }

    /**
     * Handle the AdminMenu "restored" event.
     *
     * @param  \App\Models\AdminMenu  $adminMenu
     * @return void
     */
    public function restored(AdminMenu $adminMenu)
    {
        $this->flushCache();
    }

    /**
     * Handle the AdminMenu "force deleted" event.
     *
     * @param  \App\Models\AdminMenu  $adminMenu
     * @return void
     */
    public function forceDeleted(AdminMenu $adminMenu)
    {
        $this->flushCache();
    }

    protected function flushCache()
    {
        Cache::forget('admin_sidebar_menu');
        Cache::forget('admin_navbar_left_menu');
        Cache::forget('admin_navbar_right_menu');
    }
}
