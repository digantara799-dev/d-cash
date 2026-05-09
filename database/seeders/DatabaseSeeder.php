<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Buat atau ambil permissions
        $permissions = [
            'dashboard-access',
            'permissions-access',
            'roles-access',
            'roles-create',
            'roles-update',
            'roles-delete',
            'users-access',
            'users-create',
            'users-update',
            'users-delete',
            'categories-access',
            'categories-create',
            'categories-edit',
            'categories-delete',
            'products-access',
            'products-create',
            'products-edit',
            'products-delete',
            'customers-access',
            'customers-create',
            'customers-edit',
            'customers-delete',
            'transactions-access',
            'receivables-access',
            'receivables-pay',
            'suppliers-access',
            'payables-access',
            'payables-pay',
            'payment-settings-access',
            'reports-access',
            'profits-access',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        // Buat atau ambil roles
        $superAdminRole = Role::firstOrCreate(['name' => 'super-admin']);
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $cashierRole = Role::firstOrCreate(['name' => 'cashier']);

        // Assign permissions to roles
        $superAdminRole->syncPermissions(Permission::all());
        
        $adminRole->syncPermissions([
            'dashboard-access',
            'permissions-access',
            'roles-access',
            'roles-create',
            'roles-update',
            'roles-delete',
            'users-access',
            'users-create',
            'users-update',
            'users-delete',
            'categories-access',
            'categories-create',
            'categories-edit',
            'categories-delete',
            'products-access',
            'products-create',
            'products-edit',
            'products-delete',
            'customers-access',
            'customers-create',
            'customers-edit',
            'customers-delete',
            'transactions-access',
            'receivables-access',
            'receivables-pay',
            'suppliers-access',
            'payables-access',
            'payables-pay',
            'payment-settings-access',
            'reports-access',
            'profits-access',
        ]);

        $cashierRole->syncPermissions([
            'dashboard-access',
            'customers-access',
            'customers-create',
            'customers-edit',
            'transactions-access',
            'receivables-access',
            'receivables-pay',
        ]);

        // Buat default users dengan firstOrCreate
        $superAdmin = User::firstOrCreate(
            ['email' => 'arya@gmail.com'],
            [
                'name' => 'Arya Dwi Putra',
                'password' => bcrypt('password'),
                'verification_status' => 'verified',
                'verified_at' => now(),
            ]
        );
        $superAdmin->assignRole('super-admin');

        $cashier = User::firstOrCreate(
            ['email' => 'cashier@gmail.com'],
            [
                'name' => 'Cashier',
                'password' => bcrypt('password'),
                'verification_status' => 'verified',
                'verified_at' => now(),
            ]
        );
        $cashier->assignRole('cashier');
    }
}