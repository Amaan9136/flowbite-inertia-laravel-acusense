<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PageController extends Controller
{
    // This method will handle the home page request.
    public function welcome()
    {
        return view('welcome.index');
    }

    // This method will handle the test page request.
    public function testpage()
    {
        return view('testpage.index');
    }
}
