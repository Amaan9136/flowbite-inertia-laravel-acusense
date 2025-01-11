<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quantity extends Model
{
    protected $fillable = [
        'product_id',
        'purchase_id',
        'quantity',
    ];
}
