import React from "react";
import ProductGrid from "./components/product-grid";

async function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-background mb-8">
        Panda Audio Products
      </h1>
      <ProductGrid />
    </div>
  );
}

export default ProductsPage;
