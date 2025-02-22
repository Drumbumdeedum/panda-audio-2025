import future_impact_v4 from "@/public/images/products/future-impact/future_impact_v4.jpg";
import midibeam_v2 from "@/public/images/products/midiBeam_v2_wireless.jpg";
import midibeam_4control from "@/public/images/products/midiBeam_4Control.jpg";
import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    featured: true,
    href: "/future-impact",
    name: "Future Impact",
    description: "Bass guitar synthesizer and MIDI expander",
    image: future_impact_v4,
    prices: [
      { amount: 29900, currency: "eur" },
      { amount: 24500, currency: "usd" },
    ],
  },
  {
    id: 2,
    featured: true,
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
    id: 3,
    featured: true,
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

export const PANDA_AUDIO_MAILTO_ADDRESS = "info@panda-audio.com";
