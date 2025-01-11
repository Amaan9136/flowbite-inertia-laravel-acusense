import useProductStore from "@/Store/useProductStore";
import { useMemo } from "react";
import SecondaryButton from "../SecondaryButton";

export default function PurchaseTable({ addToPurchase }) {
  const { products } = useProductStore();

  const { totalMaterialPrice, gst, finalAmount } = useMemo(() => {
    let total = 0;
    Object.keys(products).forEach((id) => {
      const product = addToPurchase.find((p) => p.id === id);
      if (product) {
        total += product.price * products[id].quantity;
      }
    });
    const calculatedGst = total * 0.18; // 18% GST
    const finalAmt = total + calculatedGst;

    return { totalMaterialPrice: total, gst: calculatedGst, finalAmount: finalAmt };
  }, [products]);

  function handleConfirmPurchase() {
    // show the confirm model with the stuffs want to purchase
  }

  return (
    <>
      <header className="bg-gray-100 dark:bg-[#1F2937] text-gray-800 dark:text-gray-200 text-center text-3xl font-bold pb-1 mt-3 mb-2 rounded-lg">
        Estimation
      </header>
      <table className="rounded-lg border-2 w-full bg-white dark:bg-[#2D3748]">
        <thead className="bg-gray-800 dark:bg-[#1F2937] text-white">
          <tr>
            <th className="px-4 py-2 border text-sm">Product Name</th>
            <th className="px-4 py-2 border text-sm">Amount (₹)</th>
            <th className="px-4 py-2 border text-sm">Quantity</th>
            <th className="px-4 py-2 border text-sm">Total Price (₹)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
          {addToPurchase.map((product) => (
            <tr key={product.id} className="bg-white dark:bg-[#1F2937]">
              <td className="px-4 py-2 border text-sm text-gray-800 dark:text-gray-200">{product.name}</td>
              <td className="px-4 py-2 border text-sm text-gray-800 dark:text-gray-200">₹{parseFloat(product.price).toFixed(2)}</td>
              <td className="px-4 py-2 border text-sm text-gray-800 dark:text-gray-200">
                {products.find((p) => p.id === product.id)?.quantity || 0}
              </td>
              <td className="px-4 py-2 border text-sm text-gray-800 dark:text-gray-200">
                ₹{(product.price * (products.find((p) => p.id === product.id)?.quantity || 0)).toFixed(2)}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-800 dark:bg-[#1F2937] text-white font-semibold">
            <td colSpan="3" className="px-4 py-2 border text-sm text-right">
              Total Material Amount:
            </td>
            <td className="px-4 py-2 border text-sm text-right">₹{totalMaterialPrice.toFixed(2)}</td>
          </tr>
          <tr className="bg-gray-800 dark:bg-[#1F2937] text-white font-semibold">
            <td colSpan="3" className="px-4 py-2 border text-sm text-right">
              GST (18%):
            </td>
            <td className="px-4 py-2 border text-sm text-right">₹{gst.toFixed(2)}</td>
          </tr>
          <tr className="bg-green-900 dark:bg-green-700 text-white font-semibold">
            <td colSpan="3" className="px-4 py-2 border text-sm text-right">
              Final Amount:
            </td>
            <td className="px-4 py-2 border text-sm text-right">₹{finalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <SecondaryButton
        className="mt-4 hover:opacity-[0.8]"
        onClick={handleConfirmPurchase}
        type="button"
      >
        Confirm Purchase
      </SecondaryButton>
    </>
  );
}
