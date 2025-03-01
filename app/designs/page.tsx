import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

function DesignsPage() {
  return (
    <>
      <PageHeader
        title="Designs"
        subtitle="Full list of András's designs over the years"
      />
      <PageContent type="narrow">
        <div className="space-y-8">
          <h2>Products developed by Panda Audio</h2>
          <p>
            While Panda Audio designed prototypes of these products and
            developed all the embedded firmware for them, the final products are
            results of joint work with the engineers of the excellent Fishman
            design team, or for the earlier products with the AKAI team in
            Japan.
          </p>
          <section>
            <h3>Fishman Transducers</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Aura Acoustic Imaging product line (Ellipse, Onboard, Pro,
                Imaging Blender, Imaging Pedal, Sixteen, Spectrum DI){" "}
                <Link
                  href="http://www.fishman.com/products/series/aura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                Triple Play Wireless Guitar Controller{" "}
                <Link
                  href="http://www.fishman.com/tripleplay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                AFX Acoustic Effect Pedal product line (
                <Link
                  href="https://youtu.be/n5WcaqafOXo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  Reverb
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
                ,{" "}
                <Link
                  href="https://youtu.be/sTUHbnulN7g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  Chorous
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
                ,{" "}
                <Link
                  href="https://youtu.be/hvZMnk0DVqI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  Delay
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
                )
              </li>
              <li>
                Fission Bass Powerchord Effect Pedal{" "}
                <Link
                  href="https://youtu.be/I2XKZNMR2Pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
            </ul>
          </section>
          <hr />
          <section>
            <h3>AKAI pro/AKAI professional</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Deep Impact Synthbass pedal{" "}
                <Link
                  href="https://youtu.be/LoD5wOdlCK8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                Unibass Harmonised Bass Distortion pedal{" "}
                <Link
                  href="https://www.gearbug.com/product_info/akai_unibass_ub1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                DPS16 Hard disk Recorder (FX section control and a number of
                audio effects){" "}
                <Link
                  href="https://www.soundonsound.com/reviews/akai-dps16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                Z4/8 Sampler (FX section control and a number of audio effects){" "}
                <Link
                  href="http://www.planet-groove.com/akai/z4.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                HV1 DuoBuddy and HV10 DecaBuddy Vocal Harmonizers{" "}
                <Link
                  href="https://www.zikinf.com/manuels/akai-duobuddy-hv1-manuel-utilisateur-en-26000.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>Rotator / PitchRight / DecaBuddy / QuadComp VST plugins</li>
              <li>
                EWI4000s Electronic Wind Synthesizer{" "}
                <Link
                  href="http://www.akaipro.com/ewi4000s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>EWI USB Electronic Wind Controller</li>
              <li>MP3 player module based on a standard ASIC</li>
              <li>
                MP3 recorder module based on an austriamicrosystems ARM-core SoC
              </li>
            </ul>
          </section>
          <hr />
          <section>
            <h3>Panda Audio label</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                midiBeam v2 Wireless MIDI interface{" "}
                <Link
                  href="/midibeam-v2-wireless"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                Future Impact bass guitar synthesizer and analog modeling MIDI
                expander{" "}
                <Link
                  href="/future-impact-v4"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                midiBeam 4Control MIDI interface for footswitches and expression
                pedals{" "}
                <Link
                  href="/midibeam-4control"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
              <li>
                Future Impact V4 - VIP{" "}
                <Link
                  href="/future-impact-v4-vip"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                  <ExternalLink className="ml-1 w-4 h-4" />
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </PageContent>
    </>
  );
}

export default DesignsPage;
