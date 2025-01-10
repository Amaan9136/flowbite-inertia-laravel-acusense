import { useMemo } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import useProductStore from "@/Store/useProductStore";
import SecondaryButton from "../SecondaryButton";

export default function PurchaseCard({
  id,
  name,
  price,
  image,
  specs,
  stock,
  isInCart,
}) {
  const { addProductToPurchase, removeFromPurchase, updateProduct } =
    useProductStore();

  const { data, setData, post, processing, reset } = useForm({
    id,
    stock: 0,
  });

  const specsArray = useMemo(
    () =>
      typeof specs === "string" ? specs.split(",").map((s) => s.trim()) : specs,
    [specs]
  );

  const incrementStock = () =>
    setData(
      "stock",
      data.stock >= stock ? stock : data.stock < 0 ? 0 : data.stock + 1
    );

  const decrementStock = () =>
    setData(
      "stock",
      data.stock > stock ? stock : data.stock <= 0 ? 0 : data.stock - 1
    );
  const changeStock = (e) =>
    setData(
      "stock",
      e.target.value > stock ? stock : e.target.value < 0 ? 0 : e.target.value
    );

  const handleAddToPurchase = () => {
    if (!isInCart) {
      const productData = { id, name, price, image, specs, stock };
      addProductToPurchase(productData);
    } else {
      removeFromPurchase(id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    post("/purchase", {
      async: true,
      onSuccess: ({ props }) => {
        const tst = props.success ? toast.success : toast.error;
        tst(props.message);
        updateProduct(id, props.product);
        reset("stock");
      },
    });
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
        <div className="flex flex-col md:flex-row items-center justify-center mt-2 md:mt-0  ml-4">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center gap-6 w-full mt-2 md:mt-0"
          >
            <div className="px-2 text-center content-center flex justify-center bg-[#4F46E5] text-white font-bold text-sm rounded-md">
              <button
                type="button"
                disabled={processing}
                onClick={decrementStock}
                className="px-1"
              >
                -
              </button>
              <input
                type="number"
                className="bg-transparent w-14 border-none"
                value={data.stock}
                onChange={changeStock}
              />
              <button
                type="button"
                disabled={processing}
                onClick={incrementStock}
                className="px-1"
              >
                +
              </button>
            </div>
            <button
              type="button"
              disabled={processing}
              onClick={handleAddToPurchase}
              className="inline-flex items-center rounded-md border border-transparent px-2 py-1 text-xs font-semibold tracking-widest transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
            >
              <MdRemoveShoppingCart className="text-lg" />
            </button>
            <SecondaryButton
              disabled={processing}
              className="flex items-center px-2 py-1"
              type="submit"
            >
              Confirm Purchase
            </SecondaryButton>
          </form>
        </div>
      </div>
    </div>
  );
}
