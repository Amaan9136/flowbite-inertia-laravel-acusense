import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [], 
  setProducts: (products) => set({ products }),
  
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product], 
    })),

  removeProduct: (productId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId), 
    })),

  updateProduct: (productId, updatedProduct) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId ? { ...product, ...updatedProduct } : product
      ), 
    })),
}));

export default useProductStore;
