import React from "react";
import ProductGrid from "./components/product-grid";
import CurrencySelect from "@/components/ui/currency-select";
import PageContent from "@/components/layout/page-content";

async function ProductsPage() {
  return (
    <>
      <header className="pt-8">
        <div className="px-4 md:px-8 lg:px-16 flex">
          <h1 className="mb-2 flex-1">Products</h1>
          <CurrencySelect />
        </div>
      </header>
      <PageContent>
        <ProductGrid />
      </PageContent>
    </>
  );
}

export default ProductsPage;
