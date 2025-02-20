import React from "react";
import { fetchProducts } from "./lib/fetchProducts";

async function ProductsPage() {
  const products = await fetchProducts();
  console.log(products);
  return <div>ProductsPage</div>;
}

export default ProductsPage;
