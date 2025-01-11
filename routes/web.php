<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\PurchaseController;
use App\Http\Controllers\RouteController;
use Illuminate\Support\Facades\Route;

Route::get('/', [RouteController::class, 'home']);
Route::get('/dashboard', [RouteController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/contact', [RouteController::class, 'contact']);

Route::resource('/products', ProductController::class)->except(['index', 'create', 'show', 'edit'])->middleware(['auth', 'verified']);

Route::resource('/purchases', PurchaseController::class)->except(['create', 'show', 'edit', 'update', 'destroy'])->middleware(['auth', 'verified']);

require __DIR__ . '/auth.php';
