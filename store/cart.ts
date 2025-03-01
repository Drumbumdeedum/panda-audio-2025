import { Product } from "@/types/product";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export type ProductWithAmount = Product & {
  amount: number;
};

interface ProductCartStore {
  products: ProductWithAmount[];
  addProduct: (newProduct: Product) => void;
  decreaseProductAmount: (productId: number) => void;
  increaseProductAmount: (productId: number) => void;
  clearCart: () => void;
}

export const useProductCartStore = create<ProductCartStore>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (newProduct: Product) => {
        set((state) => {
          const productIndex = state.products.findIndex(
            (p) => p.id === newProduct.id
          );
          if (productIndex !== -1) {
            const updatedProducts = state.products.map((p, index) =>
              index === productIndex ? { ...p, amount: p.amount + 1 } : p
            );
            return { products: updatedProducts };
          } else {
            return {
              products: [...state.products, { ...newProduct, amount: 1 }],
            };
          }
        });
      },
      decreaseProductAmount: (productId: number) => {
        set((state) => {
          const productIndex = state.products.findIndex(
            (p) => p.id === productId
          );
          const currentAmount = state.products[productIndex].amount;
          if (currentAmount > 1) {
            const updatedProducts = state.products.map((p, index) =>
              index === productIndex ? { ...p, amount: p.amount - 1 } : p
            );
            return { products: updatedProducts };
          } else {
            const updatedProducts = state.products.filter(
              (p) => p.id !== productId
            );
            return { products: updatedProducts };
          }
        });
      },
      increaseProductAmount: (productId: number) => {
        set((state) => {
          const productIndex = state.products.findIndex(
            (p) => p.id === productId
          );
          if (productIndex !== -1) {
            const updatedProducts = state.products.map((p, index) =>
              index === productIndex ? { ...p, amount: p.amount + 1 } : p
            );
            return { products: updatedProducts };
          }
          return state;
        });
      },
      clearCart: () => {
        set({ products: [] });
      },
    }),
    {
      name: "product-cart-store",
    } as PersistOptions<ProductCartStore>
  )
);
