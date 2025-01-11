import useProductStore from "@/Store/useProductStore";
import { useMemo } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";

export default function PurchaseCard({ id, name, price, image, specs, stock, isInCart, quantity }) {
  const { addProductToPurchase, removeFromPurchase, updateProduct } = useProductStore();

  const specsArray = useMemo(
    () => (typeof specs === "string" ? specs.split(",").map((s) => s.trim()) : specs),
    [specs]
  );

  const incrementStock = () => {
    updateProduct(id, {
      quantity: (quantity >= stock ? stock : quantity < 0 ? 0 : quantity + 1),
    });
  };

  const decrementStock = () => {
    updateProduct(id, {
      quantity: (quantity > 0 ? quantity - 1 : 0),
    });
  };

  const handleQuantityChange = (e) => {
    updateProduct(id, {
      quantity: (e.target.value > stock ? stock : e.target.value < 0 ? 0 : e.target.value),
    });
  };

  const togglePurchase = () => {
    if (!isInCart) {
      const productpurchase = { id, name, price, image, specs, stock };
      addProductToPurchase(productpurchase);
    } else {
      removeFromPurchase(id);
    }
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
          <p className="text-md font-bold">${price.toFixed(2)}</p>
          <p className="text-md mb-2">Available: {stock}</p>
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
        <div className="flex flex-col md:flex-row items-center justify-center mt-2 md:mt-0 ml-4">
          <div className="flex items-center space-x-2 bg-[#4F46E5] text-white font-bold text-sm rounded-md">
            <button
              type="button"
              onClick={decrementStock}
              className="px-2 py-1"
            >
              -
            </button>
            <input
              type="number"
              className="bg-transparent w-14 border-none text-center"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <button
              type="button"
              onClick={incrementStock}
              className="px-2 py-1"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={togglePurchase}
            className="ml-4 inline-flex items-center rounded-md border border-transparent px-3 py-[0.6rem]  font-semibold tracking-widest transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
          >
            <MdRemoveShoppingCart className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
