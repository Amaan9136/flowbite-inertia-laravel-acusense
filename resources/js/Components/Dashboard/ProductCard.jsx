import { useMemo, useState } from "react";
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { router } from "@inertiajs/react";

import useProductStore from "@/Store/useProductStore";
import ConfirmModal from "../ConfirmModel";
import DangerButton from "../DangerButton";
import SecondaryButton from "../SecondaryButton";
import EditProductForm from "./EditProductForm";
import toast from "react-hot-toast";

export default function ProductCard({
  id,
  name,
  price,
  image,
  specs,
  stock,
  isInCart,
}) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { removeProduct, addProductToPurchase, removeFromPurchase } =
    useProductStore();

  const specsArray = useMemo(
    () =>
      typeof specs === "string" ? specs.split(",").map((s) => s.trim()) : specs,
    [specs]
  );

  const handleAddToPurchase = () => {
    !isInCart ? addProductToPurchase(id) : removeFromPurchase(id);
  };

  const handleDelete = async () => {
    router.delete(`/products/${id}`, {
      async: true,
      onSuccess: () => {
        toast.success("Product has been successfully Deleted");
        removeProduct(id);
        setShowDeleteModal(false);
      },
    });
  };

  const handleEditClick = () => {
    setSelectedProduct({ id, name, price, image, specs, stock });
    setShowEditModal(true);
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg shadow-md overflow-hidden bg-gray-50 dark:bg-[#1F2937] border-2 border-[#343E4E]">
      {image && (
        <div className="relative flex justify-center w-full">
          <img src={image} alt={name} className="object-cover p-2 max-h-52" />
        </div>
      )}
      <div className="p-2 flex-grow flex flex-col">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-md font-bold mb-2">${price.toFixed(2)}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {specsArray.map((spec, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>
        <span className="px-2 py-1 flex justify-center bg-[#4F46E5] text-white font-bold text-sm rounded-md mt-2">
          Stock : {stock}
        </span>
      </div>
      <div className="flex justify-center gap-3 w-full mb-1">
        <button
          onClick={handleAddToPurchase}
          className={`inline-flex items-center rounded-md border border-transparent px-2 py-1 text-xs font-semibold tracking-widest transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isInCart
              ? "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
              : "bg-[#4F46E5] text-white hover:bg-blue-700 focus:ring-indigo-500"
          }`}
        >
          {isInCart ? (
            <MdRemoveShoppingCart className="text-lg" />
          ) : (
            <MdAddShoppingCart className="text-lg" />
          )}
        </button>
        {/* {user.name == "admin" &&
          <>
        */}
        <SecondaryButton
          className="flex items-center px-2 py-1"
          type="button"
          onClick={handleEditClick}
        >
          Edit
        </SecondaryButton>

        <DangerButton
          className="flex items-center px-2 py-1"
          type="button"
          onClick={() => {
            setShowDeleteModal(true);
          }}
        >
          Delete
        </DangerButton>
        {/* </>} */}
      </div>

      {showDeleteModal && (
        <ConfirmModal
          show={showDeleteModal}
          setShow={setShowDeleteModal}
          handleFunction={handleDelete}
          btnName="Confirm Delete"
          buttonType="danger"
          confirmMsg="Are you sure you want to delete this product?"
        />
      )}

      {showEditModal && (
        <EditProductForm
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          productData={selectedProduct}
        />
      )}
    </div>
  );
}
