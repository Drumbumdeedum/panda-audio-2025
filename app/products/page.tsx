import React from "react";
import ProductGrid from "./components/product-grid";
import CurrencySelect from "@/components/ui/currency-select";
import PageHeader from "@/components/layout/page-header";

async function ProductsPage() {
  return (
    <div className="min-h-screen space-y-8">
      <PageHeader
        title="Products"
        subtitle="Discover the full range of Panda Audio's products."
      />
      <div className="container mx-auto px-4 space-y-4">
        <CurrencySelect />
        <ProductGrid />
      </div>
    </div>
  );
}

export default ProductsPage;
