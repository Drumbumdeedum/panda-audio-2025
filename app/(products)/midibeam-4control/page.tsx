import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import Image from "next/image";
import midibeam_4control from "@/public/images/products/midibeam-4Control/midiBeam_4Control.jpg";

function Midibeam4ControlPage() {
  return (
    <>
      <PageHeader
        title="midiBeam 4Control"
        subtitle="Advanced MIDI control system"
      />
      <PageContent type="narrow">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center items-center">
          <Image
            src={midibeam_4control}
            alt="midibeam 4Control"
            className=" object-cover"
          />
          <div className="flex flex-col justify-center align-baseline">
            <h3></h3>
            <p></p>
          </div>
        </section>
      </PageContent>
    </>
  );
}

export default Midibeam4ControlPage;
