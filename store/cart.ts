import { Product } from "@/types/product";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

export type ProductWithAmount = Product & {
  amount: number;
};

interface ProductCartStore {
  products: ProductWithAmount[];
  addProduct: (newProduct: Product) => void;
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
    }),
    {
      name: "product-cart-store",
    } as PersistOptions<ProductCartStore>
  )
);
