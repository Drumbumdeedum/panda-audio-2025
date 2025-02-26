import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import React from "react";

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
                Imaging Blender, Imaging Pedal, Sixteen, Spectrum DI)
              </li>
              <li>Triple Play Wireless Guitar Controller</li>
              <li>
                AFX Acoustic Effect Pedal product line (Reverb, Chorus, Delay)
              </li>
              <li>Fission Bass Powerchord Effect Pedal</li>
            </ul>
          </section>
          <hr />
          <section>
            <h3>AKAI pro/AKAI professional</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Deep Impact Synthbass pedal</li>
              <li>Unibass Harmonised Bass Distortion pedal</li>
              <li>
                DPS16 Hard disk Recorder (FX section control and a number of
                audio effects)
              </li>
              <li>
                Z4/8 Sampler (FX section control and a number of audio effects)
              </li>
              <li>HV1 DuoBuddy and HV10 DecaBuddy Vocal Harmonizers</li>
              <li>Rotator / PitchRight / DecaBuddy / QuadComp VST plugins</li>
              <li>EWI4000s Electronic Wind Synthesizer</li>
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
              <li>midiBeam v2 Wireless MIDI interface</li>
              <li>
                Future Impact bass guitar synthesizer and analog modeling MIDI
                expander
              </li>
              <li>
                midiBeam 4Control MIDI interface for footswitches and expression
                pedals
              </li>
            </ul>
          </section>
        </div>
      </PageContent>
    </>
  );
}

export default DesignsPage;
