import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import useProductStore from "@/Store/useProductStore";
import { useForm } from "@inertiajs/react";
import { useState } from "react";

export default function AddProductModal({ showAddModal, setShowAddModal }) {
  const { addProduct } = useProductStore();

  const { data, setData, post, reset } = useForm({
    name: "",
    image: "",
    price: "",
    specs: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!data.name.trim()) newErrors.name = "Product name is required.";
    if (!data.price) newErrors.price = "Price is required.";
    if (!data.specs.trim()) newErrors.specs = "Specifications are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Focus on the first invalid input
      const firstErrorField = Object.keys(errors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    const parsedData = {
      ...data,
      specs: data.specs.split(",").map((spec) => spec.trim()), // Convert specs to an array
    };

    post("/products", {
      data: parsedData,
      onSuccess: () => {
        addProduct(parsedData);
        reset();
        setShowAddModal(false);
      },
      onError: (errors) => setErrors(errors),
    });
  };

  return (
    <Modal show={showAddModal} onClose={() => setShowAddModal(false)}>
      <form onSubmit={addItem} className="p-6 space-y-4">
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

        <div className="mt-4 flex justify-end">
          <PrimaryButton type="submit">Add Product</PrimaryButton>
        </div>
      </form>
    </Modal>
  );
}
