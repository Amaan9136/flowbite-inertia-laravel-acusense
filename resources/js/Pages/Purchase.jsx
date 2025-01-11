import PurchaseCard from "@/Components/Purchase/PurchaseCard";
import PurchaseTable from "@/Components/Purchase/PurchaseTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useProductStore from "@/Store/useProductStore";
import { Head, Link } from "@inertiajs/react";
import { useMemo } from "react";

export default function Purchase() {
  const { products } = useProductStore();

  const addToPurchase = useMemo(
    () => products.filter((p) => p.isInCart),
    [products]
  );

  return (
    <AuthenticatedLayout header="Purchase">
      <Head title="Purchase" />

      <div className="Page-Content">
        {addToPurchase.length != 0 ? (
          <div className="p-2 sm:p-4 xl:p-8">
            {addToPurchase.map((product) => (
              <PurchaseCard key={product.id + product.name} {...product} />
            ))}
            <PurchaseTable addToPurchase={addToPurchase}/>
          </div>
        ) : (
          <div className="p-4 h-full w-full">Add Products from <Link href="/dashboard" className="text-blue-300">Dashboard</Link></div>
        )}
      </div>
    </AuthenticatedLayout>
  );
}
