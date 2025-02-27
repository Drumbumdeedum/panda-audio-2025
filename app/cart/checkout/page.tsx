import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import OrderSummary from "../components/order-summary";
import ShippingDetails from "../components/shipping-details-form";

function CheckoutPage() {
  return (
    <>
      <PageHeader
        title="Shipping & billing information"
        subtitle="Enter your shipping and billing details to proceed with your order"
      />
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
