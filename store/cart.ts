import { Product } from "@/types/product";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export type ProductWithAmount = Product & {
  amount: number;
};

interface ProductCartStore {
  products: ProductWithAmount[];
  addProduct: (newProduct: Product) => void;
  decreaseProductAmount: (productName: string) => void;
  increaseProductAmount: (productName: string) => void;
  clearCart: () => void;
}

export const useProductCartStore = create<ProductCartStore>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (newProduct: Product) => {
        set((state) => {
          const productIndex = state.products.findIndex(
            (p) => p.name === newProduct.name
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
      decreaseProductAmount: (productName: string) => {
        set((state) => {
          const productIndex = state.products.findIndex(
            (p) => p.name === productName
          );
          const currentAmount = state.products[productIndex].amount;
          if (currentAmount > 1) {
            const updatedProducts = state.products.map((p, index) =>
              index === productIndex ? { ...p, amount: p.amount - 1 } : p
            );
            return { products: updatedProducts };
          } else {
            const updatedProducts = state.products.filter(
              (p) => p.name !== productName
            );
            return { products: updatedProducts };
          }
        });
      },
      increaseProductAmount: (productName: string) => {
        set((state) => {
          const productIndex = state.products.findIndex(
            (p) => p.name === productName
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
