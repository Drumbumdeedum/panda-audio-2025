import PageHeader from "@/components/layout/page-header";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";
import placeholder from "@/public/placeholder.svg";
import PageContent from "@/components/layout/page-content";

function AboutPage() {
  return (
    <>
      <PageHeader
        title="About us"
        subtitle="Get to know the people behind Panda Audio"
      />
      <PageContent type="narrow">
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
            product is the <Link href="/future-impact-v4">Future Impact</Link>{" "}
            bass guitar synthesizer and analog modeling MIDI expander.
          </p>
        </section>
        <hr />
        <div className="space-y-8">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-start align-baseline space-y-4">
              <h1>András Szalay</h1>
              <p>
                András Szalay, has an M.Sc. in Physics from Kossuth University,
                Debrecen, Hungary (1976). He has also been a former member of
                the progressive rock group Panta Rhei.
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
                  <strong>1994 - 1997</strong> - Chief Engineer, Blue Chip
                  Music, Germany
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
                ZX81-based MUZIX 81 sequencer and digital audio processor
                (1981). The system was widely used in Europe from Hungary (Gabor
                Presser, Omega, PR Computer) to Germany (Frank Farian) and the
                UK.
              </p>
              <p>
                He also designed several guitar synthesizers: the first one for
                Shadow (1986), and later the neural net based AXON series for
                Blue Chip Music (1994), then Axon Technologies. After Yamaha has
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
                piano. He also created several unique data compression
                algorithms for storing digital audio samples, based on the
                Karhunen-Loeve transform.
              </p>
              <p>
                During the collaboration with AKAI Professional he has been
                Chief Software Engineer of the Hungarian engineering team and
                has been responsible for the design and development of several
                products of AKAI professional, like the electronics for the EWI
                Wind controllers.
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
        <section>
          <h4>Press & publications on András Szalay&apos;s work</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <a href="/downloads/about/EMM-83.pdf" target="_blank">
                Muzix81 in Electronics & MusicMaker (UK, 1983)
              </a>
            </li>
            <li>
              <a href="/downloads/about/ESCM-85.pdf" target="_blank">
                Muzix81 in Electronic Soundmaker and Electronic Music (UK, 1985)
              </a>
            </li>
            <li>
              <a
                href="/downloads/about/muzix81-keyboards-feb-1985.pdf"
                target="_blank"
              >
                Muzix81 in Keyboards (Germany, Feb 1985)
              </a>
            </li>
            <li>
              <a
                href="/downloads/about/wersi-keyboard-aug-1992.pdf"
                target="_blank"
              >
                Jim Aikin&quot;s review of the Wersi CPF-1 in Keyboard (Aug
                &apos;92)
              </a>
            </li>
            <li>
              <a href="/downloads/about/axon-flyer.pdf" target="_blank">
                Flyer for the Blue Chip Music Axon NGC66 system (1994)
              </a>
            </li>
          </ul>
        </section>
        <hr />
        <section>
          <h1>Zsolt Rammer</h1>
          <p>
            Zsolt Rammer joined Panda-Audio early 2015. He has a very wide
            spectrum of activities covering practically everything in connection
            with the development of musical instruments, especially guitar
            effects. He can do hardware design, PCB design, building his own
            prototypes. But his most important activity is writing guitar effect
            algorithms and user interfaces on all possible platforms (PC, MAC,
            IOS). He released amazing guitar effect plugin series under the
            brand name{" "}
            <a href="https://www.audiorammer.com/site/" target="_blank">
              audiorammer
            </a>
            .
          </p>
        </section>
        <hr />
        <section>
          <h1>George Peng</h1>
          <p>
            George Peng joined Panda-Audio formally in 2016, but he did the PCB
            and 3D mechanical design of all products and prototypes since 2010.
            Beyond these activities he has experience in hardware and software
            development and web programming. He is responsible for the
            production management of Panda-Audio&apos;s own products.
          </p>
        </section>
      </PageContent>
      <div className="py-8 px-4 md:px-24 xl:px-64 2xl:px-72 space-y-8"></div>
    </>
  );
}

export default AboutPage;
