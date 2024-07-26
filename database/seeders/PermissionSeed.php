<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'manage-role',
            'create-role',
            'edit-role',
            'destroy-role',
            'manage-permission',
            'create-permission',
            'edit-permission',
            'destroy-permission',
            'manage-user',
            'create-user',
            'edit-user',
            'destroy-user',
            'impersonate-user',
            'manage-admin',
            'create-admin',
            'edit-admin',
            'destroy-admin',
            'impersonate-admin',
            'manage-page',
            'create-page',
            'edit-page',
            'destroy-page',
            'manage-setting',
            'edit-setting',
            'manage-admin-menu',
            'create-admin-menu',
            'edit-admin-menu',
            'destroy-admin-menu',
            'manage-translation',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission, 'guard_name' => 'admin']);
        }
    }
}
