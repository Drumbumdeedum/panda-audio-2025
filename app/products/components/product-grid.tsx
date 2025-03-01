"use client";

import { useCurrencyStore } from "@/store/currency";
import ProductCard from "./product-card";
import { Product } from "@/types/product";

type ProductGridProps = {
  products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
  const { currency } = useCurrencyStore();
  const filteredProducts =
    currency === "USD" ? products.filter((p) => p.prices.usd !== 0) : products;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
