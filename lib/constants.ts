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
    prices: [
      { amount: 34900, currency: "eur" },
      { amount: 28900, currency: "usd" },
    ],
  },
  {
    id: 2,
    featured: true,
    newTag: false,
    href: "/future-impact-v4",
    name: "Future Impact V4",
    description: "Bass guitar synthesizer and MIDI expander",
    image: future_impact_v4,
    prices: [
      { amount: 29900, currency: "eur" },
      { amount: 24500, currency: "usd" },
    ],
  },
  {
    id: 3,
    featured: false,
    newTag: false,
    href: "/midibeam-4control",
    name: "midiBeam 4Control",
    description: "Advanced MIDI control system",
    image: midibeam_4control,
    prices: [
      { amount: 6900, currency: "eur" },
      { amount: 5900, currency: "usd" },
    ],
  },
  {
    id: 4,
    featured: false,
    newTag: false,
    href: "/midibeam-v2-wireless",
    name: "midiBeam v2 Wireless",
    description: "Professional wireless MIDI interface",
    image: midibeam_v2,
    prices: [
      { amount: 16900, currency: "eur" },
      { amount: 14000, currency: "usd" },
    ],
  },
];

export const ACCESSORIES: Product[] = [
  {
    id: 1,
    name: "Future Impact power supply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { amount: 1300, currency: "eur" },
      { amount: 0, currency: "usd" },
    ],
  },
  {
    id: 2,
    name: "VM16L expression pedal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { amount: 2500, currency: "eur" },
      { amount: 2200, currency: "usd" },
    ],
  },
  {
    id: 3,
    name: "VM20 momentary switch pedal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { amount: 1400, currency: "eur" },
      { amount: 1300, currency: "usd" },
    ],
  },
  {
    id: 4,
    name: "VM24 momentary switch pedal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { amount: 1700, currency: "eur" },
      { amount: 1500, currency: "usd" },
    ],
  },
  {
    id: 5,
    name: "VM22 latching pedal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { amount: 1400, currency: "eur" },
      { amount: 0, currency: "usd" },
    ],
  },
  {
    id: 6,
    name: "SLYS2J180 1*stereo jack -> 2 * mono jack cable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { amount: 900, currency: "eur" },
      { amount: 800, currency: "usd" },
    ],
  },
  {
    id: 7,
    name: "Future Impact V4 CV/Gate cable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { amount: 1400, currency: "eur" },
      { amount: 1300, currency: "usd" },
    ],
  },
  {
    id: 8,
    name: "Wall-wart USB supply for 4Control",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { amount: 1300, currency: "eur" },
      { amount: 0, currency: "usd" },
    ],
  },
  {
    id: 9,
    name: "MIDI cable, 120 cm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { amount: 600, currency: "eur" },
      { amount: 500, currency: "usd" },
    ],
  },
  {
    id: 10,
    name: "VM26 latching pedal with cable",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    prices: [
      { amount: 1700, currency: "eur" },
      { amount: 1500, currency: "usd" },
    ],
  },
];

export const PANDA_AUDIO_MAILTO_ADDRESS = "info@panda-audio.com";
