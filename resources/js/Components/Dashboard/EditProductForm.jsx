import { useForm } from "@inertiajs/react";
import { useState } from "react";
import { toast } from "react-hot-toast";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import useProductStore from "@/Store/useProductStore";
import SecondaryButton from "../SecondaryButton";

export default function EditProductForm({
  showEditModal,
  setShowEditModal,
  productData,
}) {
  const { updateProduct } = useProductStore();
  const [errors, setErrors] = useState({});

  // Initialize the form with default values
  const { data, setData, put } = useForm({
    name: productData?.name || "",
    image: productData?.image || "",
    price: productData?.price || "",
    specs: productData?.specs?.join(", ") || "",
    stock: productData?.stock || "",
  });

  const validateForm = () => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = "Product name is required.";
    if (!data.price) newErrors.price = "Price is required.";
    if (!data.stock) newErrors.stock = "Stock is required.";
    if (!data.specs.trim()) newErrors.specs = "Specifications are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const editItem = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    const parsedData = {
      ...data,
      specs: data.specs.split(",").map((spec) => spec.trim()),
    };

    // Optionally make the PUT request if you need to update the server
    put(`/products/${productData.id}`, {
      data: parsedData,
      onSuccess: () => {
        // Update the product in the store directly instead of using PUT request
        updateProduct(productData.id, parsedData);
        toast.success("Product has been successfully Updated!");
        setShowEditModal(false); // Close the modal on success
      },
      onError: (err) => {
        console.error("Error:", err);
        toast.error("Failed to edit this product.");
      }
    });
  };

  return (
    <Modal show={showEditModal} onClose={() => setShowEditModal(false)}>
      <form onSubmit={editItem} className="p-6 space-y-4">
        <h2 className="text-xl font-semibold dark:text-white">Edit Product</h2>

        {/* Product Name */}
        <div>
          <InputLabel
            htmlFor="name"
            value="Product Name"
            className="dark:text-white"
          />
          <TextInput
            id="name"
            name="name"
            type="text"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            className="mt-1 block w-full text-gray-900"
          />
          <InputError message={errors.name} />
        </div>

        {/* Product Image */}
        <div>
          <InputLabel
            htmlFor="image"
            value="Product Image URL (optional)"
            className="dark:text-white"
          />
          <TextInput
            id="image"
            name="image"
            type="url"
            value={data.image}
            onChange={(e) => setData("image", e.target.value)}
            className="mt-1 block w-full text-gray-900"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Price */}
        <div>
          <InputLabel
            htmlFor="price"
            value="Price"
            className="dark:text-white"
          />
          <TextInput
            id="price"
            name="price"
            type="number"
            step="0.01"
            min="0"
            value={data.price}
            onChange={(e) =>
              setData("price", e.target.value ? parseFloat(e.target.value) : "")
            }
            className="mt-1 block w-full text-gray-900"
          />
          <InputError message={errors.price} />
        </div>

        {/* Specifications */}
        <div>
          <InputLabel
            htmlFor="specs"
            value="Specifications (comma-separated)"
            className="dark:text-white"
          />
          <TextInput
            id="specs"
            name="specs"
            type="text"
            value={data.specs}
            onChange={(e) => setData("specs", e.target.value)}
            className="mt-1 block w-full text-gray-900"
            placeholder="e.g., Durable, Lightweight, Fast"
          />
          <InputError message={errors.specs} />
        </div>

        {/* Stock */}
        <div>
          <InputLabel
            htmlFor="stock"
            value="Stock"
            className="dark:text-white"
          />
          <TextInput
            id="stock"
            name="stock"
            type="number"
            min="0"
            value={data.stock}
            onChange={(e) =>
              setData("stock", e.target.value ? parseFloat(e.target.value) : "")
            }
            className="mt-1 block w-full text-gray-900"
          />
          <InputError message={errors.stock} />
        </div>

        <div className="mt-4 flex justify-end space-x-4">
          <SecondaryButton onClick={() => setShowEditModal(false)}>
            Close
          </SecondaryButton>
          <PrimaryButton type="submit" className="border border-white">
            Save Changes
          </PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}
