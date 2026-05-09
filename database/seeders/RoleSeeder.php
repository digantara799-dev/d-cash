<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superAdminRole = Role::firstOrCreate(['name' => 'super-admin']);
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $cashierRole = Role::firstOrCreate(['name' => 'cashier']);

        // Super admin dapat semua permission
        $superAdminRole->syncPermissions(Permission::all());

        // Admin dapat permission untuk manage users (termasuk verification)
        $adminRole->syncPermissions([
            'dashboard-access',
            'users-access',
            'users-create',
            'users-update',
            'users-delete',
            // ... permissions lainnya ...
        ]);

        // Cashier hanya dapat permission untuk transaksi
        $cashierRole->syncPermissions([
            'dashboard-access',
            'transactions-access',
            // ... permissions lainnya ...
        ]);
    }
}