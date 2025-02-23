import PageHeader from "@/components/layout/page-header";
import Image from "next/image";
import future_impact_v4 from "@/public/images/products/future-impact/future_impact_v4.jpg";
import future_impact_v4_top from "@/public/images/products/future-impact/future_impact_v4_top.webp";
import future_impact_v4_back from "@/public/images/products/future-impact/future_impact_v4_back.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function FutureImpactPage() {
  return (
    <>
      <PageHeader
        title="Future Impact V4"
        subtitle="Bass guitar synthesizer and MIDI expander"
      />
      <div className="py-8 px-4 md:px-24 xl:px-64 2xl:px-72 space-y-8">
        <section className="flex flex-col space-y-4 lg:flex-row py-4 rounded-lg justify-center items-center">
          <Image
            src={future_impact_v4}
            alt="Future impact"
            className=" object-cover"
          />
          <div className="flex flex-col justify-center align-baseline">
            <h2>How it began</h2>
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
        <section className="flex flex-col space-y-4 lg:flex-row py-4 rounded-lg justify-center items-center">
          <Image
            src={future_impact_v4_top}
            alt="Future impact"
            className="object-cover px-8"
          />
          <div className="flex flex-col justify-center align-baseline lg:order-first">
            <h2>From grassroots support to global recognition</h2>
            <p>
              The project garnered tremendous support from forum members who
              funded the first batch of 100 pedals in late 2015. From there, the
              FI&apos;s popularity and reputation grew; ever more people
              clamoured to own one, including notable players such as{" "}
              <strong>Chris Wolstenholme</strong> (Muse),{" "}
              <strong>Doug Wimbish</strong> (Living Colour, The Rolling Stones),{" "}
              <strong>Mohini Dey</strong> and <strong>Bootsy Collins</strong>.
              Thanks to the generous input of members of the online bass-playing
              community, the FI continued to go from strength to strength.
            </p>
          </div>
        </section>
        <hr className="my-4 border-t-2 border-border" />
        <section className="flex flex-col space-y-4 lg:flex-row py-4 rounded-lg justify-center items-center">
          <Image
            src={future_impact_v4_back}
            alt="Future impact"
            className="object-cover px-8 py-24"
          />
          <div className="flex flex-col justify-center align-baseline">
            <h2>
              Pushing the limits: transitioning to the FI4 for future growth
            </h2>
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
        <hr className="my-4 border-t-2 border-border" />
        <section>
          <h2>New Features for V4</h2>
          <ul className="list-disc space-y-2 pl-4">
            <li>
              <strong>CV/Gate output</strong> - Simultaneously play a 1V/octave
              analog synth using the pedal
            </li>
            <li>
              <strong>Detented Parameter dial with extended range</strong> -
              More variations on each sound
            </li>
            <li>
              <strong>Sturdier knobs</strong> - The potentiometer shafts are now
              made from solid metal
            </li>
            <li>
              <strong>Long Release</strong> - Audio-triggered sounds now use the
              full release time of the ADSR
            </li>
            <li>
              <strong>Oscillator sync</strong> - VCO2 can sync to VCO1 for more
              harmonically complex sounds
            </li>
            <li>
              <strong>Improved audio fidelity</strong> - Via an ultra-low-noise
              CoDec and noise-reduction coding
            </li>
            <li>
              <strong>Overwrite programs</strong> - On-pedal edits can be saved
              to patch data before uploading
            </li>
            <li>
              <strong>Superior pitch tracking</strong> - Greatly reduced latency
              and increased sensitivity to input instrument dynamics. Pitch
              detection can now be set to prioritize speed or accuracy
            </li>
            <li>
              <strong>Octave transposition</strong> - Two new MIDI CCs to
              transpose the pitch by ±2 octaves
            </li>
            <li>
              <strong>63 new Flexi curves</strong> - Create a split point
              between any two adjacent semitones
            </li>
            <li>
              <strong>Robust firmware update process</strong> - Now any MIDI
              interface can be used
            </li>
            <li>
              <strong>Alternative quick access to Global Menu</strong> -
              Enter/exit menu without power cycling
            </li>
            <li>
              <strong>Better Global Menu layout</strong> - Items are
              repositioned and more meaningfully labelled
            </li>
            <li>
              <strong>Fresh Editor look</strong> - An updated color scheme with
              a clearer and more logical layout
            </li>
            <li>
              <strong>Onscreen Mod Wheel</strong> - Send out MIDI CCs or
              Aftertouch directly from the Editor
            </li>
            <li>
              <strong>midiBeam 4Control integration</strong> - MIDI signals from
              expression pedals and switches are automatically passed to the FI4
              when connected to the Editor
            </li>
          </ul>
        </section>
        <hr className="my-4 border-t-2 border-border" />
        <section>
          <h2>Check out these product videos:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <AspectRatio ratio={9 / 6}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/RBH9UDVkG6c?start=664"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </AspectRatio>
            </div>
            <div className="w-full">
              <AspectRatio ratio={9 / 6}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/uMddCxSDACY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </AspectRatio>
            </div>
            <div className="w-full">
              <AspectRatio ratio={9 / 6}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/G0A-3MnNrWw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </AspectRatio>
            </div>
            <div className="w-full">
              <AspectRatio ratio={9 / 6}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/7F3SbUk8Uas"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </AspectRatio>
            </div>
          </div>
        </section>
        <hr className="my-4 border-t-2 border-border" />
        <h2>Product support</h2>
      </div>
    </>
  );
}

export default FutureImpactPage;
