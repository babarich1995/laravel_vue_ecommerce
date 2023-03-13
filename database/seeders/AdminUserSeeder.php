<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
           'name'=>'Admin',
           'email'=>'richnaldcharles1995@gmail.com',
           'email_verified_at'=> now(),
           'password'=>bcrypt('rich40nal'),
           'is_admin'=>true
        ]);
    }
}
