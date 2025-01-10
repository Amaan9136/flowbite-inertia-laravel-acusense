import PurchaseCard from "@/Components/Purchase/PurchaseCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useProductStore from "@/Store/useProductStore";
import { Head } from "@inertiajs/react";

export default function Purchase() {
  const { addProductToPurchase, addToPurchase, removeFromPurchase } = useProductStore();

  return (
    <AuthenticatedLayout header="Purchase">
      <Head title="Purchase" />

      <div className="Page-Content">

        {addToPurchase.length != 0 ?
          <div className="p-2 sm:p-4 xl:p-8">
            {addToPurchase.map((product) => (
              <PurchaseCard
                key={product.id + product.name}
                {...product}
              />
            ))}
          </div>
          :
          <div className="p-4 h-full w-full">
            Add Products from Dashboard
          </div>
        }

      </div>
    </AuthenticatedLayout>
  );
}
