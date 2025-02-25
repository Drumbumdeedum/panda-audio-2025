import DownloadsTable from "@/app/downloads/components/DownloadsTable";
import { MIDIBEAM_V2_WIRELESS_DOWNLOADS } from "@/app/downloads/lib/downloads-data";
import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import Image from "next/image";
import midibeam_v2 from "@/public/images/products/midibeam-v2-wireless/midiBeam_v2_wireless.jpg";
import rx02 from "@/public/images/products/midibeam-v2-wireless/midibeam_v2_RX02.webp";
import tx02 from "@/public/images/products/midibeam-v2-wireless/midibeam_v2_TX02.webp";

function MidibeamV2WirelessPage() {
  return (
    <>
      <PageHeader
        title="midiBeam v2 Wireless"
        subtitle="Professional wireless MIDI interface"
      />
      <PageContent type="narrow">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center items-center">
          <Image
            src={midibeam_v2}
            alt="midiBeam v2 wireless"
            className=" object-cover"
          />
          <div className="flex flex-col justify-center align-baseline">
            <h3>Wireless MIDI Interface</h3>
            <p>
              The midiBeam wireless MIDI interface connects your MIDI instrument
              (or any source) to your synthesizer or computer through radio
              waves, without any cable connection.
            </p>
          </div>
        </section>
        <section>
          <h3>Two key applications with clear advantages:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              If you have a battery powered mobile MIDI instrument you will be
              free to move around the stage without any cable if you use
              midiBeam. You can use a mobile keyboard hanging in your neck from
              Roland, Casio, etc., or a wind controller, like the AKAI EWI 4000s
              or the Yamaha WX5.
            </li>
            <li>
              If you are fed up with the many cables hanging around in your
              studio, you can reduce the number of cables if you use midiBeam.
              Unlike other wireless MIDI solutions midiBeam is a very cost
              efficient replacement for a MIDI cable, while the delay latency is
              perfectly negligible, just about 10% of other wireless solutions.
            </li>
          </ul>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center items-center">
          <Image
            src={tx02}
            alt="midiBeam v2 wireless transmitter"
            className=" object-cover"
          />
          <div className="flex flex-col justify-center align-baseline lg:order-first">
            <h3>The transmitter</h3>
            <p>The midiBeam system consists of two boxes, TX02 and RX02.</p>
            <p>
              Attached to the instrument is the TX02 transmitter, powered by two
              AAA batteries. It is a small plastic box, with an LED and one
              pushbutton on the top for &quot;PAIRING&quot;. The MIDI plug is
              hanging on one end of a short cable. The TX02 can be attached to
              the instrument by Velcro tape.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center items-center">
          <Image
            src={rx02}
            alt="midiBeam v2 wireless receiver"
            className=" object-cover"
          />
          <div className="flex flex-col justify-center align-baseline">
            <h3>The receiver</h3>
            <p>
              The RX02 receiver is powered through the mini USB socket either
              from a computer or from a USB power supply. It has an LED and a
              &quot;PAIRING&quot; pushbutton as well. The MIDI output is
              provided either through USB or the DIN MIDI Output socket. There
              is a DIN MIDI Input socket as well; if the device has no radio
              connection then it functions as a standard MIDI Interface to a
              computer. No special driver installation is necessary.
            </p>
          </div>
        </section>
        <hr />
        <div>
          <h1 className="mb-0">Product support</h1>
          <p className="text-foreground/60">
            Firmware updates, user manuals, presets, and other useful downloads
            and links
          </p>
        </div>
        <DownloadsTable downloads={MIDIBEAM_V2_WIRELESS_DOWNLOADS} />
      </PageContent>
    </>
  );
}

export default MidibeamV2WirelessPage;
