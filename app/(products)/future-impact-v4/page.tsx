import PageHeader from "@/components/layout/page-header";
import Image from "next/image";
import future_impact_v4 from "@/public/images/products/future-impact/future_impact_v4.jpg";
import future_impact_v4_top from "@/public/images/products/future-impact/future_impact_v4_top.webp";
import future_impact_v4_back from "@/public/images/products/future-impact/future_impact_v4_back.webp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import PageContent from "@/components/layout/page-content";
import DownloadsTable from "@/app/downloads/components/DownloadsTable";
import {
  FIV1_TO_V3_DOWNLOADS,
  FIV4_DOWNLOADS,
} from "@/app/downloads/lib/downloads-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FutureImpactV4Page() {
  return (
    <>
      <PageHeader
        title="Future Impact V4"
        subtitle="Bass guitar synthesizer and MIDI expander"
      />
      <PageContent type="narrow">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center items-center">
          <Image
            src={future_impact_v4}
            alt="Future impact"
            className=" object-cover"
          />
          <div className="flex flex-col justify-center align-baseline">
            <h3>How it began</h3>
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
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center items-center">
          <Image
            src={future_impact_v4_top}
            alt="Future impact"
            className="object-cover px-8"
          />
          <div className="flex flex-col justify-center align-baseline lg:order-first">
            <h3>From grassroots support to global recognition</h3>
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
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center items-center">
          <Image
            src={future_impact_v4_back}
            alt="Future impact"
            className="object-cover px-8 py-24"
          />
          <div className="flex flex-col justify-center align-baseline">
            <h3>
              Pushing the limits: transitioning to the FI4 for future growth
            </h3>
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
        <hr />
        <section>
          <h3>New Features for V4</h3>
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
        <hr />
        <section>
          <h2>Product videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/fxbbgeUfoIA?si=u5TqR5aUQB9kVnD2"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </AspectRatio>
            </div>

            <div className="w-full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/uMddCxSDACY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </AspectRatio>
            </div>
            <div className="w-full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/RBH9UDVkG6c?start=664"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </AspectRatio>
            </div>
            <div className="w-full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/G0A-3MnNrWw"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </AspectRatio>
            </div>
            {/* <div className="w-full">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/7F3SbUk8Uas"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </AspectRatio>
            </div> */}
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

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h3 className="mb-0">Future Impact V4</h3>
            </AccordionTrigger>
            <AccordionContent>
              <section className="space-y-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/60">
                      <strong>
                        Make sure you always refresh your firmware to our latest
                        release.
                      </strong>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p>
                      We are constantly developing / improving the Future Impact
                      V4 synth pedal. Before updating, you can check what
                      happened in our{" "}
                      <a
                        href="/downloads/future_impact_v4/FI_4_version_history_v4.11.pdf"
                        target="_blank"
                      >
                        Version history.
                      </a>
                    </p>
                    <p>
                      <strong>Important note:</strong> if you use a midiBeam
                      4Control to edit your sounds and to upgrade your FI4, then
                      your 4Control must be upgraded to version 1.4 or higher!
                      You can do the upgrade either with the Chrome browser
                      based updater, or with the PC/MAC Editor, then use{" "}
                      <a
                        href="/downloads/midibeam_4_control/midibeam_4_control_14.bin"
                        target="_blank"
                      >
                        this firmware update file
                      </a>
                      .
                    </p>
                    <p>
                      <a
                        href="https://auraplug.com/panda/fiupdate411/start.html"
                        target="_blank"
                      >
                        Click here
                      </a>{" "}
                      to run our browser app to refresh your FI4 firmware
                      (Google Chrome only)
                    </p>
                    <p>
                      After upgrading your FI4, please check if you have the
                      most recent Editor, and if not then please refresh it too.
                    </p>
                  </div>
                </div>
                <DownloadsTable title="Downloads" downloads={FIV4_DOWNLOADS} />
              </section>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h3>Future Impact V1 - V3.61</h3>
            </AccordionTrigger>
            <AccordionContent>
              <section className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-4">
                    <p>
                      We have been constantly developing / improving the Future
                      Impact synth pedal from version I. to the current, last
                      version that is labeled 3.61. Before updating, you can
                      check what happened in our{" "}
                      <a
                        href="/downloads/future_impact_v4/FI_version_history_361.pdf"
                        target="_blank"
                      >
                        Version history
                      </a>{" "}
                      or in our{" "}
                      <a
                        href="/downloads/future_impact_v1-v3/FI_new_features_v360.pdf"
                        target="_blank"
                      >
                        What&apos;s new
                      </a>{" "}
                      file you can check what&apos;s happened.
                    </p>
                    <p>
                      <strong>Important note:</strong> if you update your
                      firmware from version earlier than 3.00 you must upgrade
                      your sound set during the process. If you upgrade from
                      3.xx you don&apos;t need to rewrite all your patches,
                      everything will work fine with your existing presets.
                    </p>
                    <p>
                      <a
                        href="https://auraplug.com/panda/fiupdate411/start.html"
                        target="_blank"
                      >
                        Click here
                      </a>{" "}
                      to run our browser app to refresh your firmware to v3.61
                      (Google Chrome only)
                    </p>
                    <p>
                      After updating to 3.61 you will need our new Editor
                      version 3.60 to manage your Future Impact so please
                      download it as well.
                    </p>
                  </div>
                </div>
                <DownloadsTable
                  title="Downloads"
                  downloads={FIV1_TO_V3_DOWNLOADS}
                />
              </section>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </PageContent>
    </>
  );
}

export default FutureImpactV4Page;
