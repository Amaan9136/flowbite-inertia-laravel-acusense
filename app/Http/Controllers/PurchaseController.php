<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Purchase;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Purchase');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
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
        $product->save();


        $payload = [...($product->toArray()), "specs" => json_decode($product->specs)];

        return Inertia::render('Purchase', ["success" => true, "message" => "Product has been successfully Purchased", "product" => $payload]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Purchase $purchase) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Purchase $purchase) {}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Purchase $purchase) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Purchase $purchase) {}
}
