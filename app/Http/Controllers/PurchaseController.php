<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Product;
use App\Models\Purchase;
use App\Models\Quantity;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
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
            'customerName' => 'required|string|max:255',
            'phoneNumber' => 'required|digits:10',
            'finalAmount' => 'required|numeric|min:0',
            'gst' => 'required|numeric|min:0',
            'totalMaterialPrice' => 'required|numeric|min:0',
            'items' => 'required|array|min:1',
            'items.*.id' => 'required|integer|exists:products,id',
            'items.*.quantity' => 'required|integer|min:1',
        ]);

        foreach ($data["items"] as $item) {
            $product = Product::find($item['id']);
            if (!$product)
                return Inertia::render('Purchase', ["success" => false, "message" => "Product Could not be Found"]);
            if ($product->stock < $item['quantity'])
                return Inertia::render('Purchase', ["success" => false, "message" => "Demanded Stock not available"]);

            $product->stock -= $item['quantity'];
            $product->save();
        }

        $customer = Customer::where('contact', $data['phoneNumber'])->first();
        if (!$customer) {
            $customer = new Customer;
            $customer->name = $data['customerName'];
            $customer->contact = $data['phoneNumber'];
            $customer->save();
        }

        $purchase = new Purchase;
        $purchase->customer_id = $customer->id;
        $purchase->total_material_price = $data['totalMaterialPrice'];
        $purchase->gst = $data['gst'];
        $purchase->final_amount = $data['finalAmount'];
        $purchase->save();



        $quantities = array_map(function ($d) use ($purchase) {
            return [
                'purchase_id' => $purchase->id,
                'product_id' => $d['id'],
                'quantity' => $d['quantity'],
            ];
        }, $data['items']);

        Quantity::insert($quantities);

        return Redirect::to("/dashboard");
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
