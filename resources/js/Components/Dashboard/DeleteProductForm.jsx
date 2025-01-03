import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import useProductStore from "@/Store/useProductStore";
import { useState } from "react";

export default function DeleteProductModal({ showDeleteModal, setShowDeleteModal }) {
  const { removeProduct } = useProductStore();
  const [deleteName, setDeleteName] = useState("");
  const [errors, setErrors] = useState({});

  const handleDelete = (e) => {
    e.preventDefault();
    if (!deleteName.trim()) {
      setErrors({ deleteName: "Product name is required." });
      return;
    }

    const isDeleted = removeProduct(deleteName.trim());
    if (!isDeleted) {
      setErrors({ deleteName: "Product not found." });
      return;
    }

    setDeleteName("");
    setErrors({});
    setShowDeleteModal(false);
  };

  return (
    <Modal show={showDeleteModal} onClose={() => setShowDeleteModal(false)}>
      <form onSubmit={handleDelete} className="p-6 space-y-4">
        <div>
          <InputLabel htmlFor="deleteName" value="Product Name to Delete" className="dark:text-white"/>
          <TextInput
            id="deleteName"
            name="deleteName"
            type="text"
            value={deleteName}
            onChange={(e) => setDeleteName(e.target.value)}
          />
          <InputError message={errors.deleteName} />
        </div>

        <div className="mt-4 flex justify-end">
          <DangerButton type="submit">Delete Product</DangerButton>
        </div>
      </form>
    </Modal>
  );
}
