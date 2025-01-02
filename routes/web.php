<?php

// routes/web.php
use App\Http\Controllers\ProductController;

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::post('/products', [ProductController::class, 'store']);
Route::get('/generate-qr/{id}', [ProductController::class, 'generateQr']);
Route::post('/add-similar-products', [ProductController::class, 'addSimilarProducts']);
