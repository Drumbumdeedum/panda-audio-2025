import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import future_impact_v4_vip from "@/public/images/products/future-impact-v4-vip/future_impact_v4_vip.webp";
import Image from "next/image";
import Link from "next/link";

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
          <div className="flex flex-col justify-center items-start space-y-4">
            <h3>Significantly smaller, equally powerful </h3>
            <p>
              Introducing the <strong>Future Impact V4 - VIP</strong>, the
              latest evolution in Panda Audio&apos;s renowned line of bass
              synthesizer pedals.
            </p>
            <p>
              Responding to popular demand, the VIP model retains all the
              groundbreaking features of the{" "}
              <Link href="/future-impact-v4">Future Impact V4</Link> but in a
              more compact and pedalboard-friendly design.
            </p>
          </div>
        </section>
        <section>
          <h3>All the power of the Future Impact V4</h3>
          <ul className="list-disc space-y-2 pl-4">
            <li>
              <strong>CV/Gate output</strong> -{" "}
              <span className="text-foreground/70">
                Simultaneously play a 1V/octave analog synth using the pedal
              </span>
            </li>
            <li>
              <strong>Detented Parameter dial with extended range</strong> -{" "}
              <span className="text-foreground/70">
                More variations on each sound
              </span>
            </li>
            <li>
              <strong>Sturdier knobs</strong> -{" "}
              <span className="text-foreground/70">
                The potentiometer shafts are now made from solid metal
              </span>
            </li>
            <li>
              <strong>Long Release</strong> -{" "}
              <span className="text-foreground/70">
                Audio-triggered sounds now use the full release time of the ADSR
              </span>
            </li>
            <li>
              <strong>Oscillator sync</strong> -{" "}
              <span className="text-foreground/70">
                VCO2 can sync to VCO1 for more harmonically complex sounds
              </span>
            </li>
            <li>
              <strong>Improved audio fidelity</strong> -{" "}
              <span className="text-foreground/70">
                Via an ultra-low-noise CoDec and noise-reduction coding
              </span>
            </li>
            <li>
              <strong>Overwrite programs</strong> -{" "}
              <span className="text-foreground/70">
                On-pedal edits can be saved to patch data before uploading
              </span>
            </li>
            <li>
              <strong>Superior pitch tracking</strong> -{" "}
              <span className="text-foreground/70">
                Greatly reduced latency and increased sensitivity to input
                instrument dynamics. Pitch detection can now be set to
                prioritize speed or accuracy
              </span>
            </li>
            <li>
              <strong>Octave transposition</strong> -{" "}
              <span className="text-foreground/70">
                Two new MIDI CCs to transpose the pitch by ±2 octaves
              </span>
            </li>
            <li>
              <strong>63 new Flexi curves</strong> -{" "}
              <span className="text-foreground/70">
                Create a split point between any two adjacent semitones
              </span>
            </li>
            <li>
              <strong>Robust firmware update process</strong> -{" "}
              <span className="text-foreground/70">
                Now any MIDI interface can be used
              </span>
            </li>
            <li>
              <strong>Alternative quick access to Global Menu</strong> -{" "}
              <span className="text-foreground/70">
                Enter/exit menu without power cycling
              </span>
            </li>
            <li>
              <strong>Better Global Menu layout</strong> -{" "}
              <span className="text-foreground/70">
                Items are repositioned and more meaningfully labelled
              </span>
            </li>
            <li>
              <strong>Fresh Editor look</strong> -{" "}
              <span className="text-foreground/70">
                An updated color scheme with a clearer and more logical layout
              </span>
            </li>
            <li>
              <strong>Onscreen Mod Wheel</strong> -{" "}
              <span className="text-foreground/70">
                Send out MIDI CCs or Aftertouch directly from the Editor
              </span>
            </li>
            <li>
              <strong>midiBeam 4Control integration</strong> -{" "}
              <span className="text-foreground/70">
                MIDI signals from expression pedals and switches are
                automatically passed to the FI4 when connected to the Editor
              </span>
            </li>
          </ul>
        </section>
      </PageContent>
    </>
  );
}

export default FutureImpactV4VipPage;
