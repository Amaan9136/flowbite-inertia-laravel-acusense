<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{

    protected $fillable = [
        'customer_id',
        'total_material_price',
        'gst',
        'final_amount'
    ];
}
