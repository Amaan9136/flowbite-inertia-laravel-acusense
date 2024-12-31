<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

// Route for the home page
Route::get('/', [PageController::class, 'welcome']);

// Route for the test page
Route::get('/testpage', [PageController::class, 'testpage']);
