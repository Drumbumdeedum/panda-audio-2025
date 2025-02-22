import PageHeader from "@/components/layout/page-header";
import Link from "next/link";

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About us"
        subtitle="Get to know the people behind Panda Audio"
      />
      <div className="py-8 px-4 md:px-24 xl:px-64 2xl:px-72 space-y-8">
        <h1>Panda Audio</h1>
        <p>
          Panda Audio is a small, independent R&D company located in Budaörs,
          Hungary, primarily focusing on digital signal processing and embedded
          systems development for professional audio applications.
        </p>
        <p>
          Panda is primarily developing products for{" "}
          <a href="http://www.fishman.com" target="_blank">
            Fishman Transducers
          </a>{" "}
          in Boston, although over the years we have worked with{" "}
          <a href="http://www.akaipro.com/" target="_blank">
            AKAI Professional
          </a>{" "}
          and{" "}
          <a href="http://tascam.com/" target="_blank">
            Tascam
          </a>{" "}
          . Our tasks usually include hardware/software system design,
          hardware/software prototype development and production firmware
          development.
        </p>
        <p>
          We have been working with various microprocessors and
          microcontrollers, including Motorola 56300, Analog Devices 21xx and
          Blackfin BF532/BF523C, Hitachi/Renesas H8, STMicroelectronics
          STR7/STM32, austriamicrosystems AS3527 (ARM922TDMI), Texas Instruments
          MSP430 and Microchip PIC18F. We have expertise in implementing DSP
          algorithms in C and assembly, C/C++ programming for embedded systems,
          and real-time operating systems.
        </p>
        <p>
          Recently we got involved in the development of several wireless MIDI
          products, like developing core software for the{" "}
          <a href="http://www.fishman.com/tripleplay" target="_blank">
            Fishman Triple Play
          </a>{" "}
          , and our own{" "}
          <Link href="/midibeam-v2-wireless">midiBeam v2 wireless</Link> MIDI
          interface. Also, currently we are evaluating wireless audio
          technologies for professional audio applications. Our most recent
          product is the <Link href="/futureimpact">Future Impact</Link> bass
          guitar synthesizer and analog modeling MIDI expander.
        </p>
      </div>
    </>
  );
}

export default AboutPage;
