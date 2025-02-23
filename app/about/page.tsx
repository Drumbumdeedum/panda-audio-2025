import PageHeader from "@/components/layout/page-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import placeholder from "@/public/placeholder.svg";

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About us"
        subtitle="Get to know the people behind Panda Audio"
      />
      <div className="py-8 px-4 md:px-24 xl:px-64 2xl:px-72 space-y-8">
        <section>
          <h1>Panda Audio</h1>
          <p>
            Panda Audio is a small, independent R&D company located in Budaörs,
            Hungary, primarily focusing on digital signal processing and
            embedded systems development for professional audio applications.
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
            STR7/STM32, austriamicrosystems AS3527 (ARM922TDMI), Texas
            Instruments MSP430 and Microchip PIC18F. We have expertise in
            implementing DSP algorithms in C and assembly, C/C++ programming for
            embedded systems, and real-time operating systems.
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
            product is the <Link href="/future-impact">Future Impact</Link> bass
            guitar synthesizer and analog modeling MIDI expander.
          </p>
        </section>
        <hr />
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start align-baseline space-y-4">
            <h1>András Szalay</h1>
            <p>
              András Szalay, has an M.Sc. in Physics from Kossuth University,
              Debrecen, Hungary (1976). He has also been a former member of the
              progressive rock group Panta Rhei.
            </p>
            <p>
              With Panta Rhei he designed and built much of the band&apos;s
              equipment, including various analog synthesizers, and sequencers
              as well as mixing consoles and effects.
            </p>
          </div>
          <div className="w-full">
            <AspectRatio ratio={9 / 6}>
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/videoseries?si=SZCTbiRnTmFg4dJR&amp;list=PLyC150g2B7Z6djMUbyfhDIbzEKHDchLN2"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </AspectRatio>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start align-baseline space-y-4">
            <h4>Engineering & Innovation Journey</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>1980 - 1985</strong> - Chief Engineer, Muzix, Hungary
              </li>
              <li>
                <strong>1986 - 1987</strong> - Chief Engineer, Shadow, Germany
              </li>
              <li>
                <strong>1988 - 1993</strong> - Engineer, Wersi, Germany
              </li>
              <li>
                <strong>1994 - 1997</strong> - Chief Engineer, Blue Chip Music,
                Germany
              </li>
              <li>
                <strong>1998 - 2005</strong> - Chief Engineer, AKAI
                Professional, Japan
              </li>
              <li>
                <strong>1998 - to date</strong> - Chief Engineer, Panda Audio
                Kft., Hungary
              </li>
            </ul>
          </div>
          <div className="w-full lg:order-first">
            <AspectRatio ratio={3 / 2}>
              <Image
                src={placeholder}
                alt="Future impact"
                className="object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start align-baseline space-y-4">
            <p>
              He has been the inventor and principal designer of the Sinclair
              ZX81-based MUZIX 81 sequencer and digital audio processor (1981).
              The system was widely used in Europe from Hungary (Gabor Presser,
              Omega, PR Computer) to Germany (Frank Farian) and the UK.
            </p>
            <p>
              He also designed several guitar synthesizers: the first one for
              Shadow (1986), and later the neural net based AXON series for Blue
              Chip Music (1994), then Axon Technologies. After Yamaha has
              licensed the technology of the AXON, András developed the
              processing engine of the Yamaha G50 guitar synthesizer.
            </p>
          </div>
          <div className="w-full">
            <AspectRatio ratio={3 / 2}>
              <Image
                src={placeholder}
                alt="Future impact"
                className="object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start align-baseline space-y-4">
            <p>
              At Wersi he was responsible for the design of ASICs and the
              development of system software for Wersi&apos;s CFP-1 digital
              piano. He also created several unique data compression algorithms
              for storing digital audio samples, based on the Karhunen-Loeve
              transform.
            </p>
            <p>
              During the collaboration with AKAI Professional he has been Chief
              Software Engineer of the Hungarian engineering team and has been
              responsible for the design and development of several products of
              AKAI professional, like the electronics for the EWI Wind
              controllers.
            </p>
          </div>
          <div className="w-full lg:order-first">
            <AspectRatio ratio={3 / 2}>
              <Image
                src={placeholder}
                alt="Future impact"
                className="object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-start align-baseline space-y-4">
            <p>
              He has invented the &quot;Acoustic Imaging Technology&quot;,
              currently used in the Aura product line of Fishman Transducers.
            </p>
            <p>
              He developed the Future Impact bass guitar synthesizer and the
              midiBeam 4Control MIDI Interface for analog controllers.
            </p>
          </div>
          <div className="w-full">
            <AspectRatio ratio={3 / 2}>
              <Image
                src={placeholder}
                alt="Future impact"
                className="object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
