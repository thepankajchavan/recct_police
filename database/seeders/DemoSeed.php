<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use App\Models\User;

class DemoSeed extends Seeder
{
    /**
     * Create users for demo site
     */
    public function run(): void
    {
        Admin::factory()->count(50)->create()->each(function ($user) {
            $user->assignRole(random_int(1, 3));
        });

        User::factory()->count(50)->create();
    }
}
