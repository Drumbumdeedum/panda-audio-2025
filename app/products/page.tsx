import React from "react";
import ProductGrid from "./components/product-grid";
import CurrencySelect from "@/components/ui/currency-select";

async function ProductsPage() {
  return (
    <div className="min-h-screen space-y-16">
      <div className="relative overflow-hidden bg-foreground py-8">
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 space-y-6">
              <div className="flex justify-start items-center space-x-3">
                <h1 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
                  Products
                </h1>
                <p className="text-2xl text-background/70">|</p>
                <p className="text-lg tracking-tight text-background/70">
                  Discover the full range of Panda Audio&apos;s products.
                </p>
              </div>
              <CurrencySelect />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <ProductGrid />
      </div>
    </div>
  );
}

export default ProductsPage;
