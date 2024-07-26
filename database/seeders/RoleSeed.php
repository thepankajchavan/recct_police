<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $roles = [
            'Super Admin',
            'Admin',
            'Demo',
        ];

        foreach ($roles as $role){
            Role::create(['name' => $role, 'guard_name' => 'admin']);
        }

        Role::create(['name' => 'Clients', 'guard_name' => 'web']);

        $permissions = Permission::pluck('id','id')->all();

        Role::find(1)->syncPermissions($permissions);
        Role::find(2)->syncPermissions(['9','10','11','12','13','19','20','21','22']);
        Role::find(3)->syncPermissions(['1','5','9','14','19','23']);
    }
}
