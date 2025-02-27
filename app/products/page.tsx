import React from "react";
import ProductGrid from "./components/product-grid";
import CurrencySelect from "@/components/ui/currency-select";

async function ProductsPage() {
  return (
    <>
      <header className="pt-8">
        <div className="px-4 md:px-8 lg:px-16 flex">
          <h1 className="mb-2 flex-1">Products</h1>
          <CurrencySelect />
        </div>
      </header>
      <div
        className={"max-w-[1440] mx-auto p-4 md:p-8 lg:px-16 lg:py-8 space-y-8"}
      >
        <ProductGrid />
      </div>
    </>
  );
}

export default ProductsPage;
