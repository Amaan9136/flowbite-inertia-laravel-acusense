<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Foundation\Application;

class RouteController extends Controller
{

    public function home()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function dashboard()
    {
        $products = Product::all()->toArray();
        $parsed_prducts = array_map(fn($p) => ([...$p, "specs" => json_decode($p['specs'])]), $products);
        return Inertia::render('Dashboard', ["products" => $parsed_prducts]);
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }
}
