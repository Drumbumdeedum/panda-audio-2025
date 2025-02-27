import ProductsTable from "./components/products-table";
import PageContent from "@/components/layout/page-content";

function Cart() {
  return (
    <>
      <PageContent type="narrow">
        <ProductsTable />
      </PageContent>
    </>
  );
}

export default Cart;
