<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Admin;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Carbon;

class AdminSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = Admin::create([
            'name' => 'Administrator',
            'email' => config('mail.from.address', 'laraminlte@local'),
            'username' => 'admin',
            'password' => '123456789',
            'email_verified_at' => Carbon::now(),
        ]);

        $role = Role::where('name', 'Super Admin')->find(1);

        $user->assignRole([$role->id]);
    }
}
