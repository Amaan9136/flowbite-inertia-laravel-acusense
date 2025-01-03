import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import ProductCard from "@/Components/ProductCard";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useProductStore from "@/Store/useProductStore";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

export default function Dashboard({ products }) {
  const { addProduct, removeProduct } = useProductStore(); // Assuming removeProduct exists in the store
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { data, setData, post, reset } = useForm({
    name: "",
    image: "",
    price: "",
    specs: [],
  });

  const [deleteName, setDeleteName] = useState("");
  const [errors, setErrors] = useState({});

  const handleDeleteInputChange = (e) => {
    setDeleteName(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!data.name) newErrors.name = "Product name is required.";
    if (!data.price) newErrors.price = "Price is required.";
    if (!data.specs) newErrors.specs = "Specifications are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    post("/products", {
      async: true,
      onSuccess: () => reset(),
      onFinish: () => setShowAddModal(false),
    });
  };

  const submitDelete = (e) => {
    e.preventDefault();

    const productToDelete = products.find(
      (product) => product.name === deleteName
    );
    if (!productToDelete) {
      setErrors({ deleteName: "Product not found." });
      return;
    }

    removeProduct(productToDelete.name);
    setDeleteName("");
    setErrors({});
    setShowDeleteModal(false);
  };

  return (
    <AuthenticatedLayout header="Dashboard">
      <Head title="Dashboard" />

      <div className="Page-Content">
        <div className="tools pt-8 sm:pl-4">
          <div className="flex">
            <PrimaryButton
              className="ms-4 flex items-center space-x-2"
              onClick={() => setShowAddModal(true)}
            >
              <AiOutlinePlusCircle className="text-xl" />
              <span>Add New Product</span>
            </PrimaryButton>
            <DangerButton
              className="ms-4 flex items-center space-x-2"
              onClick={() => setShowDeleteModal(true)}
            >
              <AiOutlineMinusCircle className="text-xl" />
              <span>Delete Product</span>
            </DangerButton>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2 sm:p-4 xl:p-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>

      {/* Add Product Modal */}
      <Modal show={showAddModal} onClose={() => setShowAddModal(false)}>
        <form onSubmit={addItem} className="p-6 space-y-4">
          <div>
            <InputLabel htmlFor="name" value="Product Name" />
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

          <div>
            <InputLabel htmlFor="image" value="Product Image URL (optional)" />
            <TextInput
              id="image"
              name="image"
              type="url"
              value={data.image}
              onChange={(e) => setData("image", e.target.value)}
              className="mt-1 block w-full text-gray-900"
            />
            <InputError message={errors.image} />
          </div>

          <div>
            <InputLabel htmlFor="price" value="Price" />
            <TextInput
              id="price"
              name="price"
              type="number"
              value={data.price}
              onChange={(e) => parseFloat(setData("price", e.target.value))}
              className="mt-1 block w-full text-gray-900"
            />
            <InputError message={errors.price} />
          </div>

          <div>
            <InputLabel
              htmlFor="specs"
              value="Specifications (comma-separated)"
            />
            <TextInput
              id="specs"
              name="specs"
              type="text"
              value={data.specs.join(",")}
              onChange={(e) => setData("specs", e.target.value.split(","))}
              className="mt-1 block w-full text-gray-900"
            />
            <InputError message={errors.specs} />
          </div>

          <div className="mt-4 flex justify-end">
            <PrimaryButton type="submit">Add Product</PrimaryButton>
          </div>
        </form>
      </Modal>

      {/* Delete Product Modal */}
      <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
        <form onSubmit={submitDelete} className="p-6 space-y-4">
          <div>
            <InputLabel htmlFor="deleteName" value="Product Name to Delete" />
            <TextInput
              id="deleteName"
              name="deleteName"
              type="text"
              value={deleteName}
              onChange={handleDeleteInputChange}
              className="mt-1 block w-full text-gray-900"
            />
            <InputError message={errors.deleteName} />
          </div>

          <div className="mt-4 flex justify-end">
            <DangerButton type="submit">Delete Product</DangerButton>
          </div>
        </form>
      </Modal>
    </AuthenticatedLayout>
  );
}
