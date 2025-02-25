import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import Image from "next/image";
import midibeam_4control from "@/public/images/products/midibeam-4Control/midiBeam_4Control.jpg";
import midibeam_4control_connected from "@/public/images/products/midibeam-4Control/midibeam_4control_connected.webp";
import DownloadsTable from "@/app/downloads/components/DownloadsTable";
import { MIDIBEAM_4CONTROL_DOWNLOADS } from "@/app/downloads/lib/downloads-data";

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
            <h3>Compact, versatile, affordable</h3>
            <p>
              The midiBeam 4Control is a compact, versatile and affordable
              device which can function either as a class-compliant USB-to-MIDI
              interface or as a means to connect passive TRS expression pedals
              or footswitches to a MIDI instrument or to a computer.
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center items-center">
          <Image
            src={midibeam_4control_connected}
            alt="midibeam 4Control connected"
            className=" object-cover"
          />
          <div className="flex flex-col justify-center align-baseline lg:order-first space-y-4">
            <p>
              Each of the two stereo 6.35mm TRS jack sockets on the rear of the
              device can be configured to accept either an expression pedal or a
              1- or 2-button footswitch (as shown below). The jack sockets can
              be further configured to accept connectors of either polarity.
            </p>
            <p>
              The device is capable of generating PC, CC, Note-On/Off,
              Aftertouch, Pitch Bend and MIDI start/stop messages. Messages can
              be sent using either a pedal or a switch and the maximum and
              minimum values are fully configurable. Switches can be set to be
              either momentary or latching. Each message generator (pedal or
              switch) can be set to a different MIDI channel, if so desired.
            </p>
            <p>
              All of the aforementioned settings can be configured quickly and
              easily using the accompanying Mac/Windows software Editor.
              Settings can be backed up to a file to be loaded onto the device
              at a later date, which allows for easy recall of different device
              setups.
            </p>
          </div>
        </section>
        <section className="space-y-4">
          <p>
            Due to its diminutive form factor and weight (83 x 54 x 31 mm, 55g)
            and simple power requirements (20mA @ 5V via USB micro B socket),
            the midiBeam 4Control will fit easily and unobtrusively into any
            desktop or pedalboard setup.
          </p>
          <p>
            With its standard 5-pin DIN and USB MIDI ports it can be used with
            almost any MIDI-capable equipment. A high quality USB micro-B cable
            is included.
          </p>
          <p>
            It is the perfect partner to our Future Impact synth pedal, allowing
            you to perform firmware updates, use the Editor Suite and access the
            online library of community presets. It also allows you to unlock
            the potential of the FI&apos;s powerful Flexi Controllers and other
            MIDI-related performance features.
          </p>
        </section>
        <hr />
        <div>
          <h1 className="mb-0">Product support</h1>
          <p className="text-foreground/60">
            Firmware updates, user manuals, presets, and other useful downloads
            and links
          </p>
        </div>
        <DownloadsTable downloads={MIDIBEAM_4CONTROL_DOWNLOADS} />
      </PageContent>
    </>
  );
}

export default Midibeam4ControlPage;
