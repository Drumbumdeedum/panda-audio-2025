import chickCorea from "@/public/images/artists/chick_corea.jpeg";
import chickAndAndras from "@/public/images/artists/chick_andras.jpg";
import herbie from "@/public/images/artists/herbie.png";
import etienneMbappe from "@/public/images/artists/etienne_mbappe.jpeg";
import robertHarper from "@/public/images/artists/robert_harper.jpeg";
import bootsyCollins from "@/public/images/artists/bootsy_collins.jpeg";
import chrisWolstenholme from "@/public/images/artists/chris_wolstenholme.jpeg";
import howardJones from "@/public/images/artists/howard_jones.jpeg";
import lasse from "@/public/images/artists/lasse.jpeg";
import johnMcLauglin from "@/public/images/artists/john_mclaughlin.jpeg";
import alissiaBenveniste from "@/public/images/artists/alissia_benveniste.jpeg";
import waldemar_golebski from "@/public/images/artists/waldemar_golebski.jpeg";
import reinHardRietsch from "@/public/images/artists/reinhard.jpeg";
import mohiniDey from "@/public/images/artists/mohinidey.jpg";
import { StaticImageData } from "next/image";

export type ArtistData = {
  name: string;
  role: string;
  image: StaticImageData;
  quote: string;
  link?: string | undefined;
  product: string;
};

export const artists: ArtistData[] = [
  {
    name: "Chick Corea",
    role: "Jazz Legend",
    image: chickCorea,
    quote: "His legendary KX-5 is midiBeamised already.",
    link: "https://chickcorea.com",
    product: "midiBeam",
  },
  {
    name: "Chick and András",
    role: "Musical Collaboration",
    image: chickAndAndras,
    quote:
      "Chick receiving his midiBeam wireless MIDI interface from András personally.",
    product: "midiBeam Wireless",
  },
  {
    name: "Herbie Hancock",
    role: "Jazz Pioneer",
    image: herbie,
    quote:
      "Herbie opening his brand new midiBeam wireless MIDI interface at NAMM.",
    link: "https://herbiehancock.com",
    product: "midiBeam Wireless",
  },
  {
    name: "Chris Wolstenholme",
    role: "Bassist of Muse",
    image: chrisWolstenholme,
    quote:
      "The pedal is just as good as the original, which is what I was hoping for. The new presets and bank space are a bonus too.",
    link: "https://muse.mu",
    product: "Future Impact",
  },
  {
    name: "Mohini Dey",
    role: "Bass Virtuoso",
    image: mohiniDey,
    quote:
      "The Future Impact has been a great investment for me because of the many different sounds that it has to offer.",
    product: "Future Impact",
  },
  {
    name: "Étienne M'Bappé",
    role: "Jazz Funk Artist",
    image: etienneMbappe,
    quote: "Jazz funk never sounded this hard!",
    product: "Future Impact",
  },
  {
    name: "John McLaughlin",
    role: "Guitar Maestro",
    image: johnMcLauglin,
    quote: "Yes, he also uses midiBeam.",
    link: "https://www.johnmclaughlin.com",
    product: "midiBeam",
  },
  {
    name: "Bootsy Collins",
    role: "Funk Bassist",
    image: bootsyCollins,
    quote:
      "The best Bass Synthesizer pedal hands up or down. The Future Impact, Built to Blast! Now, where'd u get yr Funk from? Bootsy baby!!!",
    link: "https://www.bootsycollins.com",
    product: "Future Impact",
  },
  {
    name: "Robert Harper",
    role: "Bassist",
    image: robertHarper,
    quote:
      "The tracking on this Future Impact Bass Synth Pedal is very accurate.",
    product: "Future Impact",
  },
  {
    name: "Reinhard Rietsch",
    role: "Producer (Camo & Krooked)",
    image: reinHardRietsch,
    quote: "Reinhard from Camo & Krooked celebrates his new midiBeam.",
    link: "https://www.camoandkrooked.com",
    product: "midiBeam",
  },
  {
    name: "Alissia Benveniste",
    role: "Funk Bassist",
    image: alissiaBenveniste,
    quote: "The greatest female bassist of the funk world has chosen us.",
    product: "Future Impact",
  },
  {
    name: "Howard Jones",
    role: "Synth Pop Artist",
    image: howardJones,
    quote:
      "Howard Jones on stage with his Yamaha KX5, equipped with midiBeam. Total freedom.",
    link: "http://www.howardjones.com",
    product: "midiBeam",
  },
  {
    name: "Lasse Raelahti",
    role: "Keyboardist (Fear of Domination)",
    image: lasse,
    quote:
      "MidiBeam in action. Lasse Raelahti playing his keytar in Fear of Domination.",
    product: "midiBeam",
  },
  {
    name: "Waldemar Gołębski",
    role: "Musician",
    image: waldemar_golebski,
    quote: "MidiBeam in action in Gdansk, Shakespeare Theatre, Poland.",
    product: "midiBeam",
  },
];
