<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;

Route::post('/purchase', [PurchaseController::class, 'purchase']);

Route::post('/api/products', [ProductController::class, 'store']);
Route::delete('/api/products/{productId}', [ProductController::class, 'destroy']);
Route::put('/api/products/{productId}', [ProductController::class, 'update']);
