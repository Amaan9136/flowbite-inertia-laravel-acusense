<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the request data
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|numeric|min:0',
            'image' => 'nullable|url',
            'specs' => 'required|string',  
        ]);

        $data['specs'] = json_encode(explode(',', $data['specs']));

        $new_product = new Product;
        $new_product->name = $data['name'];
        $new_product->price = $data['price'];
        $new_product->stock = $data['stock'];
        $new_product->image = $data['image'];
        $new_product->specs = $data['specs']; 
        $new_product->save();

        // Redirect after saving the product
        return Redirect::to("/dashboard");
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $productId)
    {
        // Find the product by its ID
        $product = Product::find($productId);
    
        if (!$product) {
            // Inertia response with a not found message
            return Inertia::render('Product/Show', [
                'message' => 'Product not found',
            ]);
        }
    
        // Validate the request data
        $data = $request->validate([
            'name' => 'nullable|string|max:255',
            'price' => 'nullable|numeric|min:0',
            'stock' => 'nullable|numeric|min:0',
            'image' => 'nullable|url',
            'specs' => 'nullable|string',
        ]);
    
        // Update the product's fields if provided
        if ($data['name']) $product->name = $data['name'];
        if ($data['price']) $product->price = $data['price'];
        if ($data['stock']) $product->stock = $data['stock'];
        if ($data['image']) $product->image = $data['image'];
        if ($data['specs']) $product->specs = json_encode(explode(',', $data['specs']));
    
        // Save the updated product
        $product->save();
        return Redirect::to("/dashboard");

    }
    
    /**
     * Remove the specified resource from storage.
     */
    public function destroy($productId)
    {
        $product = Product::find($productId);

        if ($product) {
            $product->delete();
            return response()->json(['message' => 'Product deleted successfully']);
        }

        return response()->json(['message' => 'Product not found'], 404);
    }

    
}
