import React from "react";
import ProductGrid from "./components/product-grid";
import CurrencySelect from "@/components/ui/currency-select";
import PageHeader from "@/components/layout/page-header";
import PageContent from "@/components/layout/page-content";

async function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Products"
        subtitle="Discover the full range of Panda Audio's products."
      />
      <PageContent>
        <div className="pt-8 space-y-8">
          <CurrencySelect />
          <ProductGrid />
        </div>
      </PageContent>
    </>
  );
}

export default ProductsPage;
