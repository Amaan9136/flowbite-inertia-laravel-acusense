<?php

// app/Http/Controllers/ProductController.php
namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    // Show all products
    public function index()
    {
        $products = Product::all();  // Fetch all products from the database
        return Inertia::render('Product/Index', [
            'products' => $products
        ]);
    }

    // Handle form submission and store the product
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        // Create a new product
        Product::create([
            'name' => $request->name
        ]);

        // Redirect to products listing
        return redirect()->route('products.index');
    }

    // Generate QR code for a product
    public function generateQr($id)
    {
        $product = Product::findOrFail($id);

        // Generate a QR code using the product's ID and name
        // You can customize this part based on your needs
        $qrCodeData = json_encode([
            'prodkey' => $product->id,
            'name' => $product->name,
        ]);

        return response()->json(['qr_code_data' => $qrCodeData]);
    }

    // Add similar products to the cart (example)
    public function addSimilarProducts(Request $request)
    {
        // Logic to add similar products
        // This is a placeholder for your implementation

        return response()->json(['success' => true]);
    }
}
