import { create } from "zustand";

const useProductStore = create((set) => ({
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (productName) =>
    set((state) => ({
      products: state.products.filter((product) => product.name !== productName),
    })),
}));

export default useProductStore;
