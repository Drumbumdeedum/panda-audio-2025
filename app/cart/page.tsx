import PageHeader from "@/components/layout/page-header";
import ProductsTable from "./components/products-table";

function Cart() {
  return (
    <div className="space-y-8">
      <PageHeader title="Cart" subtitle="Current products in your cart" />
      <ProductsTable />
    </div>
  );
}

export default Cart;
