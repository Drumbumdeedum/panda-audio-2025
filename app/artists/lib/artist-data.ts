import chickCorea from "@/public/images/artists/chick_corea.webp";
import chickAndAndras from "@/public/images/artists/chick_andras.webp";
import herbie from "@/public/images/artists/herbie.webp";
import etienneMbappe from "@/public/images/artists/etienne_mbappe.webp";
import robertHarper from "@/public/images/artists/robert_harper.webp";
import bootsyCollins from "@/public/images/artists/bootsy_collins.webp";
import chrisWolstenholme from "@/public/images/artists/chris_wolstenholme.webp";
import howardJones from "@/public/images/artists/howard_jones.webp";
import lasse from "@/public/images/artists/lasse.webp";
import johnMcLauglin from "@/public/images/artists/john_mclaughlin.webp";
import alissiaBenveniste from "@/public/images/artists/alissia_benveniste.webp";
import waldemar_golebski from "@/public/images/artists/waldemar_golebski.webp";
import reinHardRietsch from "@/public/images/artists/reinhard.webp";
import mohiniDey from "@/public/images/artists/mohinidey.webp";
import { StaticImageData } from "next/image";

export type ArtistData = {
  name: string;
  role: string;
  image: StaticImageData;
  description: string;
  quote: boolean;
  link?: string | undefined;
  product: string;
  productHref: string;
};

export const artists: ArtistData[] = [
  {
    name: "Chick Corea",
    role: "Jazz Legend",
    image: chickCorea,
    description: "His legendary KX-5 is midiBeamised already.",
    quote: false,
    link: "https://chickcorea.com",
    product: "midiBeam v2 wireless",
    productHref: "/midibeam-v2-wireless",
  },
  {
    name: "Chick and András",
    role: "Musical Collaboration",
    image: chickAndAndras,
    description:
      "Chick receiving his midiBeam wireless MIDI interface from András personally.",
    quote: false,
    product: "midiBeam v2 wireless",
    productHref: "/midibeam-v2-wireless",
  },
  {
    name: "Herbie Hancock",
    role: "Jazz Pioneer",
    image: herbie,
    description:
      "Herbie opening his brand new midiBeam wireless MIDI interface at NAMM.",
    quote: false,
    link: "https://herbiehancock.com",
    product: "midiBeam v2 wireless",
    productHref: "/midibeam-v2-wireless",
  },
  {
    name: "Chris Wolstenholme",
    role: "Bassist of Muse",
    image: chrisWolstenholme,
    description:
      "The pedal is just as good as the original, which is what I was hoping for. The new presets and bank space are a bonus too.",
    quote: true,
    link: "https://muse.mu",
    product: "Future Impact",
    productHref: "/future-impact-v4",
  },
  {
    name: "Mohini Dey",
    role: "Bass Virtuoso",
    image: mohiniDey,
    description:
      "The Future Impact has been a great investment for me because of the many different sounds that it has to offer.",
    quote: true,
    product: "Future Impact",
    productHref: "/future-impact-v4",
  },
  {
    name: "John McLaughlin",
    role: "Guitar Maestro",
    image: johnMcLauglin,
    description: "Yes, he also uses midiBeam.",
    quote: false,
    link: "https://www.johnmclaughlin.com",
    product: "midiBeam v2 wireless",
    productHref: "/midibeam-v2-wireless",
  },
  {
    name: "Étienne M'Bappé",
    role: "Jazz Funk Artist",
    image: etienneMbappe,
    description: "Jazz funk never sounded this hard!",
    quote: false,
    product: "Future Impact",
    productHref: "/future-impact-v4",
  },
  {
    name: "Bootsy Collins",
    role: "Funk Bassist",
    image: bootsyCollins,
    description:
      "The best Bass Synthesizer pedal hands up or down. The Future Impact, Built to Blast! Now, where'd u get yr Funk from? Bootsy baby!!!",
    quote: true,
    link: "https://www.bootsycollins.com",
    product: "Future Impact",
    productHref: "/future-impact-v4",
  },
  {
    name: "Robert Harper",
    role: "Bassist",
    image: robertHarper,
    description:
      "The tracking on this Future Impact Bass Synth Pedal is very accurate.",
    quote: true,
    product: "Future Impact",
    productHref: "/future-impact-v4",
  },
  {
    name: "Reinhard Rietsch",
    role: "Camo & Krooked",
    image: reinHardRietsch,
    description: "Reinhard from Camo & Krooked celebrates his new midiBeam.",
    quote: false,
    link: "https://www.camoandkrooked.com",
    product: "midiBeam v2 wireless",
    productHref: "/midibeam-v2-wireless",
  },
  {
    name: "Alissia Benveniste",
    role: "Funk Bassist",
    image: alissiaBenveniste,
    description: "The greatest female bassist of the funk world has chosen us.",
    quote: false,
    product: "Future Impact",
    productHref: "/future-impact-v4",
  },
  {
    name: "Howard Jones",
    role: "Synth Pop Artist",
    image: howardJones,
    description:
      "Howard Jones on stage with his Yamaha KX5, equipped with midiBeam. Total freedom.",
    quote: false,
    link: "http://www.howardjones.com",
    product: "midiBeam v2 wireless",
    productHref: "/midibeam-v2-wireless",
  },
  {
    name: "Lasse Raelahti",
    role: "Keyboardist (Fear of Domination)",
    image: lasse,
    description:
      "MidiBeam in action. Lasse Raelahti playing his keytar in Fear of Domination.",
    quote: false,
    product: "midiBeam v2 wireless",
    productHref: "/midibeam-v2-wireless",
  },
  {
    name: "Waldemar Gołębski",
    role: "Musician",
    image: waldemar_golebski,
    description: "MidiBeam in action in Gdansk, Shakespeare Theatre, Poland.",
    quote: false,
    product: "midiBeam v2 wireless",
    productHref: "/midibeam-v2-wireless",
  },
];
