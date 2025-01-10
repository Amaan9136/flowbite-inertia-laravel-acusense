<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class PurchaseController extends Controller
{
    public function purchase(Request $request)
    {
        $data = $request->validate([
            'id' => 'required|numeric',
            'stock' => 'required|numeric',
        ]);

        $product = Product::find($data['id']);

        // TODO: Find Better way for Error handling
        if (!$product)
            return Inertia::render('Purchase', ["success" => false, "message" => "Product Could not be Found"]);

        if ($product->stock < $data['stock'])
            return Inertia::render('Purchase', ["success" => false, "message" => "Demanded Stock not available"]);

        $product->stock -= $data['stock'];
        Log::info($product);
        $product->save();


        $payload = [...($product->toArray()), "specs" => json_decode($product->specs)];

        return Inertia::render('Purchase', ["success" => true, "message" => "Product has been successfully Purchased", "product" => $payload]);
    }
}
