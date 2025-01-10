import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, { product, isInCart: false }],
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

  addProductToPurchase: (productId) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === productId ? { ...p, isInCart: true } : p
      ),
    })),

  removeFromPurchase: (productId) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === productId ? { ...p, isInCart: false } : p
      ),
    })),
}));

export default useProductStore;
