<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            [
                'name' => 'Hikvision DS-2CD2143G0-I',
                'image' => 'https://tse4.mm.bing.net/th?id=OIP.Gn_xCJ2p6fvzPBZI2LXdEgHaFj&pid=Api',
                'price' => 5999,
                'specs' => json_encode(["4 MP", "Infrared Night Vision", "Weatherproof", "Wide Dynamic Range"]),
                'stock' => 50,
            ],
            [
                'name' => 'Dahua IPC-HFW1431S',
                'image' => 'https://tse1.mm.bing.net/th?id=OIP.x7qenAWmOYZJwkxG2PJuCgHaGT&pid=Api',
                'price' => 6899,
                'specs' => json_encode(["4 MP", "30m IR Distance", "Smart Motion Detection", "H.265 Compression"]),
                'stock' => 30,
            ],
            [
                'name' => 'TP-Link Tapo C200',
                'image' => 'https://tse2.mm.bing.net/th?id=OIP._SEGUu7a8p8NUUonk4G5DAHaFc&pid=Api',
                'price' => 2499,
                'specs' => json_encode(["Full HD", "Pan/Tilt", "Two-Way Audio", "Motion Detection"]),
                'stock' => 100,
            ],
            [
                'name' => 'CP PLUS CP-UNC-T41L3',
                'image' => 'https://tse2.mm.bing.net/th?id=OIP.tNvLaVgZVXOMYu_po5tCrAHaE8&pid=Api',
                'price' => 7999,
                'specs' => json_encode(["4 MP", "30m IR Range", "PoE Support", "ONVIF Compatible"]),
                'stock' => 20,
            ],
            [
                'name' => 'Zmodo Outdoor Wireless Camera',
                'image' => 'https://tse1.mm.bing.net/th?id=OIP.Gn_xCJ2p6fvzPBZI2LXdEgHaFj&pid=Api',
                'price' => 4599,
                'specs' => json_encode(["720p HD", "Wi-Fi Connectivity", "Motion Alerts", "Weatherproof Design"]),
                'stock' => 40,
            ],
            [
                'name' => 'Reolink Argus 2',
                'image' => 'https://tse2.mm.bing.net/th?id=OIP.tNvLaVgZVXOMYu_po5tCrAHaE8&pid=Api',
                'price' => 8999,
                'specs' => json_encode(["1080p Full HD", "Solar Powered", "Two-Way Audio", "Starlight Night Vision"]),
                'stock' => 10,
            ],
        ]);
    }
}
