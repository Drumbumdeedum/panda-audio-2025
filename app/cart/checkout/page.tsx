import PageContent from "@/components/layout/page-content";
import OrderSummary from "../components/order-summary";
import ShippingDetails from "../components/shipping-details";

function CheckoutPage() {
  return (
    <>
      <PageContent type="narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="col-span-1">
            <OrderSummary />
          </section>
          <section className="col-span-1 lg:order-first">
            <ShippingDetails />
          </section>
        </div>
      </PageContent>
    </>
  );
}

export default CheckoutPage;
