import PageHeader from "@/components/layout/page-header";
import ProductsTable from "./components/products-table";

function Cart() {
  return (
    <>
      <PageHeader title="Cart" subtitle="Current products in your cart" />
      <ProductsTable />
    </>
  );
}

export default Cart;
