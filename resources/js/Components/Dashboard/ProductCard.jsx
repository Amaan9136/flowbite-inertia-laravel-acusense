import { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import ConfirmModal from "../ConfirmModel";
import DangerButton from "../DangerButton";
import SecondaryButton from "../SecondaryButton";

export default function ProductCard({ id, name, price, image, specs, stock }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const specsArray =
    typeof specs === "string" ? specs.split(",").map((s) => s.trim()) : specs;

  const handleDelete = () => {
    console.log("Deleting product with ID:", selectedProductId);
    setShowDeleteModal(false);
    // Add your deletion logic here (e.g., API call to delete the product)
  };

  return (
    <div className="flex flex-col justify-center items-center rounded-lg shadow-md overflow-hidden bg-gray-50 dark:bg-[#1F2937] border-2 border-[#343E4E]">
      {image && (
        <div className="relative w-full">
          <img src={image} alt={name} fill="true" className="object-cover p-2" />
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
        <span className="px-2 py-1 flex justify-center bg-[#4F46E5] text-white font-bold text-gray-700 text-sm rounded-md mt-2">
          Stock : {stock}
        </span>
      </div>
      <div className="flex space-x-1 mb-1">
        <button className="inline-flex items-center rounded-md border border-transparent bg-[#4F46E5] px-2 py-1 text-xs font-semibold tracking-widest text-white transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900">
          <MdAddShoppingCart className="text-lg" />
        </button>
        <SecondaryButton className="flex items-center px-2 py-1" type="submit">
          Edit
        </SecondaryButton>
        <DangerButton
          className="flex items-center px-2 py-1"
          type="button"
          onClick={() => {
            setSelectedProductId(id);
            setShowDeleteModal(true);
          }}
        >
          Delete
        </DangerButton>
      </div>
      {showDeleteModal && (
        <ConfirmModal
          showDeleteModal={showDeleteModal}
          setShowDeleteModal={setShowDeleteModal}
          handleDelete={handleDelete}
          btnName="Confirm Delete"
          buttonType="danger"
        />
      )}
    </div>
  );
}
