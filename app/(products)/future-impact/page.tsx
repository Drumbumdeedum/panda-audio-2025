import PageHeader from "@/components/layout/page-header";
import Image from "next/image";
import future_impact_v4 from "@/public/images/products/future-impact/future_impact_v4.jpg";
import future_impact_v4_top from "@/public/images/products/future-impact/future_impact_v4_top.webp";
import future_impact_v4_back from "@/public/images/products/future-impact/future_impact_v4_back.webp";

function FutureImpactPage() {
  return (
    <>
      <PageHeader
        title="Future Impact V4"
        subtitle="Bass guitar synthesizer and MIDI expander"
      />
      <div className="py-8 px-4 md:px-24 xl:px-64 2xl:px-72 space-y-8">
        <section className="flex flex-col space-y-4 lg:flex-row p-4 rounded-lg">
          <Image
            src={future_impact_v4}
            alt="Future impact"
            className=" object-cover"
          />
          <div className="flex flex-col justify-center align-baseline">
            <h1 className="font-bold text-2xl mb-4">How it began</h1>
            <p>
              The <strong>Future Impact</strong> is the subject of one of those
              heartwarming stories of the internet as a force for good. It began
              life back in late 2014 when an enthusiastic member of the Talkbass
              forum tracked down Andras Szalay to ask him if he&apos;d be able
              to reissue the discontinued Deep Impact, which he had designed for
              Akai. However, Andras had much more ambitious plans: the Future
              Impact was conceived of not as a reissue, but as an entirely new
              and vastly-improved pedal.
            </p>
          </div>
        </section>
        <hr className="my-4 border-t-2 border-border" />
        <section className="flex flex-col space-y-4 lg:flex-row px-8 py-4 rounded-lg">
          <Image
            src={future_impact_v4_top}
            alt="Future impact"
            className="object-cover px-8"
          />
          <div className="flex flex-col justify-center align-baseline lg:order-first">
            <h1 className="font-bold text-2xl mb-4">
              From grassroots support to global recognition
            </h1>
            <p>
              The project garnered tremendous support from forum members who
              funded the first batch of 100 pedals in late 2015. From there, the
              FI&apos;s popularity and reputation grew; ever more people
              clamoured to own one, including notable players such as{" "}
              <strong>Chris Wolstenholme</strong> (Muse),{" "}
              <strong>Doug Wimbish</strong> (Living Colour, The Rolling Stones)
              and <strong>Bootsy Collins</strong>. Thanks to the generous input
              of members of the online bass-playing community, the FI continued
              to go from strength to strength.
            </p>
          </div>
        </section>
        <hr className="my-4 border-t-2 border-border" />
        <section className="flex flex-col space-y-4 lg:flex-row p-4 rounded-lg">
          <Image
            src={future_impact_v4_back}
            alt="Future impact"
            className="object-cover px-8 py-24"
          />
          <div className="flex flex-col justify-center align-baseline">
            <h1 className="font-bold text-2xl mb-4">
              Pushing the limits: transitioning to the FI4 for future growth
            </h1>
            <p>
              With each successive update, we gradually added more and more
              features and refinements. With the v3.60 update of June 2021, we
              had to admit that we had finally squeezed every last drop of juice
              out of the pedal: we had completely exhausted the available code
              space. In order to continue developing our ideas further, we have
              thus had to move to new hardware and implement a new firmware
              structure. While the FI4 can load patches from all the previous
              versions of the FI, unfortunately v3 users cannot run the V4
              firmware or V4 patches on their device. However, the good news is
              that our new platform gives us the breathing space to develop well
              into the future. We already have big plans, so stay tuned!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default FutureImpactPage;
