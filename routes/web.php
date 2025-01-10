<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Product;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    $products = Product::all()->toArray();
    $parsed_prducts = array_map(fn($p) => ([...$p, "specs" => json_decode($p['specs'])]), $products);
    return Inertia::render('Dashboard', ["products" => $parsed_prducts]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/purchase', function () {
    return Inertia::render('Purchase');
})->name('purchase');

Route::get('/contact', function () {
    return Inertia::render('Contact');
})->name('contact');

require __DIR__ . '/auth.php';
require __DIR__ . '/api.php';
