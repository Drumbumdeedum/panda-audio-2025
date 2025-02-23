import PageHeader from "@/components/layout/page-header";
import ProductsTable from "./components/products-table";
import PageContent from "@/components/layout/page-content";

function Cart() {
  return (
    <>
      <PageHeader title="Cart" subtitle="Current products in your cart" />
      <PageContent type="narrow">
        <ProductsTable />
      </PageContent>
    </>
  );
}

export default Cart;
