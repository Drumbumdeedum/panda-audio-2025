import { ACCESSORIES, PRODUCTS } from "@/lib/constants";
import ProductGrid from "./components/product-grid";
import CurrencySelect from "@/components/ui/currency-selector";

async function ProductsPage() {
  return (
    <>
      <div className="pt-8">
        <div className="px-4 md:px-8 lg:px-16 flex">
          <h1 className="mb-2 flex-1">Products</h1>
          <CurrencySelect />
        </div>
      </div>
      <div
        className={
          "max-w-[1440] mx-auto p-4 md:p-8 lg:px-16 lg:py-8 space-y-16"
        }
      >
        <ProductGrid products={PRODUCTS} />
      </div>
      <div className="pt-8">
        <div className="px-4 md:px-8 lg:px-16 flex">
          <h1 className="mb-2">Accessories</h1>
        </div>
      </div>
      <div
        className={
          "max-w-[1440] mx-auto p-4 md:p-8 lg:px-16 lg:py-8 space-y-16"
        }
      >
        <ProductGrid products={ACCESSORIES} />
      </div>
    </>
  );
}

export default ProductsPage;
