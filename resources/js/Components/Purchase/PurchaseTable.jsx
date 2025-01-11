import { router } from "@inertiajs/react";
import { useState } from "react";

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import toast from "react-hot-toast";
import Modal from "../Modal";
import SecondaryButton from "../SecondaryButton";

export default function PurchaseTable({ addToPurchase }) {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({ custname: "", phone: "" });
  const [errors, setErrors] = useState({ custname: "", phone: "" });

  let total = 0;
  let calculatedGst = 0;
  let finalAmt = 0;

  addToPurchase.forEach((product) => {
    total += product.price * (product.quantity || 0);
  });

  calculatedGst = total * 0.18; // 18% GST
  finalAmt = total + calculatedGst;

  const totalMaterialPrice = total;
  const gst = calculatedGst;
  const finalAmount = finalAmt;

  function validateForm(data) {
    const errors = {};

    if (!data.custname.trim()) {
      errors.custname = "Customer name is required.";
    }

    if (!data.phone.trim()) {
      errors.phone = "Customer phone number is required.";
    }

    if (data.phone.length != 10) {
      errors.phone = "Invalid number.";
    }

    const invalidQuant = addToPurchase.find((product) => product.quantity <= 0);
    if (invalidQuant) {
      errors.quantity = "All Product quantity must be greater than 0.";
    }

    return Object.keys(errors).length > 0 ? errors : {};
  }

  async function handleConfirmPurchase() {
    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }

    const payload = {
      customerName: data.custname,
      phoneNumber: data.phone,
      items: addToPurchase.map((p) => ({ id: p.id, quantity: p.quantity })),
      totalMaterialPrice: totalMaterialPrice,
      gst: gst,
      finalAmount: finalAmount,
    };

    console.log({ payload });

    router.post("/purchases", payload, {
      async: true,
      preserveScroll: true,
      onSuccess: () => {
        // you: TODO: Reset the Quantity and isInCart for all products
        // me:
        addToPurchase.forEach((product) => {
          product.quantity = 0;
          product.isInCart = false;
        });

        // jff lol:
        // cleaning all not needed ig
        setData({ custname: "", phone: "" });
        setErrors({});

        // you: Added delay because the toast is glitching...try to fix if possible  
        /* me: re-rendering of the page to dashboard interrupts the display of the toast message. 
        this is better i think... cuz 0.001 s works*/
        // also tried ()=>toast as inline function it doesnt work 
        setTimeout(() => toast.success("Purchase Successful"), 1);
      },
      onError: (err) => {
        console.error("Error:", err);
        toast.error("Failed to complete the purchase.");
      }
    });
  }

  return (
    <>
      <div className="border-2 border-[#343E4E] rounded-md m-3">
        <header className="bg-gray-100 p-3 dark:bg-[#1F2937] text-gray-800 dark:text-gray-200 text-center text-3xl font-bold shadow-lg">
          Estimation
        </header>
        <table className="w-full bg-white dark:bg-[#2D3748] shadow-lg">
          <thead className="bg-gray-800 dark:bg-[#1F2937] text-white">
            <tr>
              <th className="px-6 py-3 border border-[#343E4E]">
                Product Name
              </th>
              <th className="px-6 py-3 border border-[#343E4E]">Amount (₹)</th>
              <th className="px-6 py-3 border border-[#343E4E]">Quantity</th>
              <th className="px-6 py-3 border border-[#343E4E]">
                Total Price (₹)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 dark:divide-gray-700">
            {addToPurchase.map((product) => (
              <tr key={product.id} className="bg-white dark:bg-[#1F2937]">
                <td className="px-6 py-4 border border-[#343E4E] text-gray-800 dark:text-gray-200">
                  {product.name}
                </td>
                <td className="px-6 py-4 border border-[#343E4E] text-gray-800 dark:text-gray-200">
                  ₹{parseFloat(product.price).toFixed(2)}
                </td>
                <td className="px-6 py-4 border border-[#343E4E] text-gray-800 dark:text-gray-200">
                  {product.quantity || 0}
                </td>
                <td className="px-6 py-4 border border-[#343E4E] text-gray-800 dark:text-gray-200">
                  ₹{(product.price * (product.quantity || 0)).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-800 dark:bg-[#1F2937] text-white font-semibold">
              <td
                colSpan="3"
                className="px-6 py-3 border border-[#343E4E] text-right"
              >
                Total Material Amount:
              </td>
              <td className="px-6 py-3 border border-[#343E4E] text-right">
                ₹{totalMaterialPrice.toFixed(2)}
              </td>
            </tr>
            <tr className="bg-gray-800 dark:bg-[#1F2937] text-white font-semibold">
              <td
                colSpan="3"
                className="px-6 py-3 border border-[#343E4E] text-right"
              >
                GST (18%):
              </td>
              <td className="px-6 py-3 border border-[#343E4E] text-right">
                ₹{gst.toFixed(2)}
              </td>
            </tr>
            <tr className="bg-green-900 dark:bg-green-700 text-white font-semibold">
              <td
                colSpan="3"
                className="px-6 py-3 border border-[#343E4E] text-right"
              >
                Final Amount:
              </td>
              <td className="px-6 py-3 text-right">
                ₹{finalAmount.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <SecondaryButton
        className="hover:opacity-[0.8] m-3 mt-0"
        onClick={() => setShowModal(true)}
        type="button"
      >
        Purchase
      </SecondaryButton>

      {/* Modal for Adding Customer Name and Phone */}
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <form className="p-6 space-y-4">
            <h2 className="text-xl font-semibold dark:text-white">
              Customer Information
            </h2>

            {/* Customer Name */}
            <div>
              <InputLabel htmlFor="name" className="dark:text-white">
                Customer Name
              </InputLabel>
              <TextInput
                id="name"
                name="custname"
                type="text"
                value={data.custname}
                onChange={(e) => setData({ ...data, custname: e.target.value })}
                className="mt-1 block w-full text-gray-900"
              />
              <InputError message={errors.custname} />
            </div>

            {/* Customer Phone */}
            <div>
              <InputLabel htmlFor="phone" className="dark:text-white">
                Customer Phone
              </InputLabel>
              <TextInput
                id="phone"
                name="phone"
                type="text"
                value={data.phone}
                onChange={(e) => setData({ ...data, phone: e.target.value })}
                className="mt-1 block w-full text-gray-900"
              />
              <InputError message={errors.phone} />
            </div>

            <div className="text-red-600 text-sm mt-2">
              <InputError message={errors.quantity} />
            </div>

            <div className="mt-4 flex justify-end space-x-4">
              <SecondaryButton onClick={() => setShowModal(false)}>
                Cancel
              </SecondaryButton>
              <SecondaryButton
                type="button"
                onClick={handleConfirmPurchase}
                className="border border-[#343E4E]"
              >
                Confirm Purchase
              </SecondaryButton>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
}

/*
STRUCT 
{
  "custname": "Yasir",
  "phone": "8080808080",
  "items": [
    {
      "productName": "Product 1",
      "productId": "1",
      "quantity": 2,
      "price": 150,
      "totalPrice": 300
    },
    {
      "productName": "Product 2",
      "productId": "2",
      "quantity": 1,
      "price": 250,
      "totalPrice": 250
    }
  ],
  "totalMaterialPrice": 550,
  "gst": 99,
  "finalAmount": 649
}


*/