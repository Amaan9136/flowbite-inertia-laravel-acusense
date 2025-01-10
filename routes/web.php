<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;
use App\Models\Product;

use function PHPSTORM_META\map;

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

Route::post('/api/products', [ProductController::class, 'store']);
Route::delete('/api/products/{productId}', [ProductController::class, 'destroy']);
Route::put('/api/products/{productId}', [ProductController::class, 'update']);


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
