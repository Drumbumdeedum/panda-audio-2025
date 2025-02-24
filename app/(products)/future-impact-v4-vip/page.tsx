import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import future_impact_v4_vip from "@/public/images/products/future-impact-v4-vip/future_impact_v4_vip.webp";
import Image from "next/image";

function FutureImpactV4VipPage() {
  return (
    <>
      <PageHeader
        title="Future Impact V4 - VIP"
        subtitle="Bass guitar synthesizer and MIDI expander - minified"
      />
      <PageContent type="narrow">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center items-center">
          <Image
            src={future_impact_v4_vip}
            alt="Future impact"
            className=" object-cover"
          />
          <div className="flex flex-col justify-center align-baseline">
            <h3>The power of Future Impact - minified</h3>
            <p>
              Introducing the <strong>Future Impact V4 - VIP</strong>, the
              latest evolution in Panda Audio&apos;s renowned line of bass and
              guitar synthesizer pedals. Responding to popular demand, the VIP
              model retains all the groundbreaking features of the Future Impact
              V4 but in a more compact and pedalboard-friendly design.
            </p>
          </div>
        </section>
      </PageContent>
    </>
  );
}

export default FutureImpactV4VipPage;
