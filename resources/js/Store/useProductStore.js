import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  addToPurchase: [],
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

    addProductToPurchase: (product) =>
      set((state) => {
        const productExists = state.addToPurchase.some((p) => p.id === product.id);
        if (productExists) return state;
    
        return {
          addToPurchase: [...state.addToPurchase, product], 
        };
      }),

  removeFromPurchase: (productId) =>
    set((state) => ({
      addToPurchase: state.addToPurchase.filter((product) => product.id !== productId),
    })),
}));

export default useProductStore;