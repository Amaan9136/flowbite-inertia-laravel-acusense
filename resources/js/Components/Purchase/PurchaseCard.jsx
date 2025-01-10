import useProductStore from "@/Store/useProductStore";
import { useMemo } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import SecondaryButton from "../SecondaryButton";

export default function PurchaseCard({ id, name, price, image, specs, stock }) {
  const { addProductToPurchase, addToPurchase, removeFromPurchase } =
    useProductStore();

  const specsArray = useMemo(
    () =>
      typeof specs === "string" ? specs.split(",").map((s) => s.trim()) : specs,
    [specs]
  );

  const isProductAdded = useMemo(
    () => addToPurchase.some((product) => product.id === id),
    [addToPurchase, id]
  );

  const handleAddToPurchase = () => {
    if (!isProductAdded) {
      const productData = { id, name, price, image, specs, stock };
      addProductToPurchase(productData);
    } else {
      removeFromPurchase(id);
    }
  };

  const handleAnyShit = async () => {
    console.log("fack");
  };

  return (
    <div className="flex flex-col md:flex-row items-center rounded-lg shadow-md overflow-hidden bg-gray-50 dark:bg-[#1F2937] border-2 border-[#343E4E] p-4 m-3">
      {image && (
        <div className="flex-shrink-0 w-32 h-32">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
      )}
      <div className="flex-grow flex flex-col md:flex-row items-center justify-between w-full ml-4">
        <div className="flex flex-col">
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
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center mt-2 md:mt-0  ml-4">
          <div className="flex justify-center gap-6 w-full mt-2 md:mt-0">
            <span className="px-2 py-1 flex justify-center bg-[#4F46E5] text-white font-bold text-sm rounded-md">
              Stock: {stock}
            </span>
            <button
              onClick={handleAddToPurchase}
              className="inline-flex items-center rounded-md border border-transparent px-2 py-1 text-xs font-semibold tracking-widest transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
            >
              <MdRemoveShoppingCart className="text-lg" />
            </button>
            <SecondaryButton
              className="flex items-center px-2 py-1"
              type="button"
              onClick={handleAnyShit}
            >
              Shits Accepted
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}
