import PageContent from "@/components/layout/page-content";
import OrderSummary from "../components/order-summary";
import ShippingDetails from "../components/shipping-details";

function CheckoutPage() {
  return (
    <>
      <PageContent type="narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="col-span-1">
            <ShippingDetails />
          </section>
          <section className="col-span-1">
            <OrderSummary />
          </section>
        </div>
      </PageContent>
    </>
  );
}

export default CheckoutPage;
