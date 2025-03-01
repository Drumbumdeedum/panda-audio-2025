import future_impact_v4 from "@/public/images/products/future-impact/future_impact_v4.jpg";
import future_impact_v4_vip from "@/public/images/products/future-impact-v4-vip/future_impact_v4_vip.webp";
import midibeam_v2 from "@/public/images/products/midibeam-v2-wireless/midiBeam_v2_wireless.jpg";
import midibeam_4control from "@/public/images/products/midibeam-4Control/midiBeam_4Control.jpg";
import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    featured: true,
    newTag: true,
    href: "/future-impact-v4-vip",
    name: "Future Impact V4 - VIP",
    description: "Bass guitar synthesizer and MIDI expander - minified",
    image: future_impact_v4_vip,
    prices: {
      eur: 34900,
      usd: 28900,
    },
  },
  {
    id: 2,
    featured: true,
    newTag: false,
    href: "/future-impact-v4",
    name: "Future Impact V4",
    description: "Bass guitar synthesizer and MIDI expander",
    image: future_impact_v4,
    prices: {
      eur: 29900,
      usd: 24500,
    },
  },
  {
    id: 3,
    featured: false,
    newTag: false,
    href: "/midibeam-4control",
    name: "midiBeam 4Control",
    description: "Advanced MIDI control system",
    image: midibeam_4control,
    prices: {
      eur: 6900,
      usd: 5900,
    },
  },
  {
    id: 4,
    featured: false,
    newTag: false,
    href: "/midibeam-v2-wireless",
    name: "midiBeam v2 Wireless",
    description: "Professional wireless MIDI interface",
    image: midibeam_v2,
    prices: {
      eur: 16900,
      usd: 14000,
    },
  },
];

export const ACCESSORIES: Product[] = [
  {
    id: 1,
    name: "Future Impact power supply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: {
      eur: 1300,
      usd: 0,
    },
  },
  {
    id: 2,
    name: "VM16L expression pedal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: {
      eur: 2500,
      usd: 2200,
    },
  },
  {
    id: 3,
    name: "VM20 momentary switch pedal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: {
      eur: 1400,
      usd: 1300,
    },
  },
  {
    id: 4,
    name: "VM24 momentary switch pedal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: {
      eur: 1700,
      usd: 1500,
    },
  },
  {
    id: 5,
    name: "VM22 latching pedal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: {
      eur: 1400,
      usd: 0,
    },
  },
  {
    id: 6,
    name: "SLYS2J180 1*stereo jack -> 2 * mono jack cable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: {
      eur: 900,
      usd: 800,
    },
  },
  {
    id: 7,
    name: "Future Impact V4 CV/Gate cable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: {
      eur: 1400,
      usd: 1300,
    },
  },
  {
    id: 8,
    name: "Wall-wart USB supply for 4Control",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: {
      eur: 1300,
      usd: 0,
    },
  },
  {
    id: 9,
    name: "MIDI cable, 120 cm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: {
      eur: 600,
      usd: 500,
    },
  },
  {
    id: 10,
    name: "VM26 latching pedal with cable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: {
      eur: 1700,
      usd: 1500,
    },
  },
];

export const PANDA_AUDIO_MAILTO_ADDRESS = "info@panda-audio.com";
