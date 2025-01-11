import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

import DangerButton from "@/Components/DangerButton";
import AddProductModal from "@/Components/Dashboard/AddProductForm";
import ProductCard from "@/Components/Dashboard/ProductCard";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import useProductStore from "@/Store/useProductStore";

export default function Dashboard({ products: initialProducts }) {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    if (initialProducts) {
      const newProducts = initialProducts.map(
        (initProduct) =>
          products.find((p) => initProduct.id === p.id) || {
            ...initProduct,
            isInCart: false,
            quantity: 0
          });

          // this allows only genuine differences to set as states and avoids re rendering of products prop
      if (JSON.stringify(newProducts) !== JSON.stringify(products)) {
        setProducts(newProducts);
      }
    }
  }, [initialProducts, products, setProducts]);

  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <AuthenticatedLayout header="Dashboard">
      <Head title="Dashboard" />

      <div className="Page-Content">
        {/* {user.name === "admin" && */}
        <div className="tools pt-8 sm:pl-4">
          <div className="flex">
            <PrimaryButton
              className="ms-4 flex items-center space-x-2"
              onClick={() => setShowAddModal(true)}
            >
              <AiOutlinePlusCircle className="text-xl" />
              <span>Add New Product</span>
            </PrimaryButton>
            <DangerButton className="ms-4 flex items-center space-x-2">
              <AiOutlineMinusCircle className="text-xl" />
              <span>Maybe you need me someday button</span>
            </DangerButton>
          </div>
        </div>
        {/* } */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2 sm:p-4 xl:p-8">
          {products.map((product) => (
            <ProductCard key={product.id+product.name} {...product} />
          ))}
        </div>
      </div>

      {/* Add Product Modal */}
      <AddProductModal
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
      />
    </AuthenticatedLayout>
  );
}
