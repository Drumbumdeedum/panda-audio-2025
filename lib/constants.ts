import future_impact_v4 from "@/public/images/products/future-impact/future_impact_v4.jpg";
import future_impact_v4_vip from "@/public/images/products/future-impact-v4-vip/future_impact_v4_vip.webp";
import midibeam_v2 from "@/public/images/products/midibeam-v2-wireless/midiBeam_v2_wireless.jpg";
import midibeam_4control from "@/public/images/products/midibeam-4Control/midiBeam_4Control.jpg";
import { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  {
    featured: true,
    newTag: true,
    href: "/future-impact-v4-vip",
    name: "Future Impact V4 - VIP",
    description: "Bass guitar synthesizer and MIDI expander - minified",
    image: future_impact_v4_vip,
    prices: {
      eur: 34900,
      usd: 33900,
    },
  },
  {
    featured: true,
    newTag: false,
    href: "/future-impact-v4",
    name: "Future Impact V4",
    description: "Bass guitar synthesizer and MIDI expander",
    image: future_impact_v4,
    prices: {
      eur: 29900,
      usd: 28900,
    },
  },
  {
    featured: false,
    newTag: false,
    href: "/midibeam-4control",
    name: "midiBeam 4Control",
    description: "Advanced MIDI control system",
    image: midibeam_4control,
    prices: {
      eur: 6900,
      usd: 6400,
    },
  },
  {
    featured: false,
    newTag: false,
    href: "/midibeam-v2-wireless",
    name: "midiBeam v2 Wireless",
    description: "Professional wireless MIDI interface",
    image: midibeam_v2,
    prices: {
      eur: 18900,
      usd: 17900,
    },
  },
];

export const ACCESSORIES: Product[] = [
  {
    name: "Future Impact power supply",
    description: "Compatible with EU power outlets only.",
    prices: {
      eur: 1300,
      usd: 0,
    },
  },
  {
    name: "Wall-wart USB supply for 4Control",
    description: "Compatible with EU power outlets only.",
    prices: {
      eur: 1300,
      usd: 0,
    },
  },
  {
    name: "Future Impact V4 CV/Gate cable",
    description:
      "Provides seamless integration between your analog synthesizers and modern MIDI controllers.",
    prices: {
      eur: 1400,
      usd: 1300,
    },
  },
  {
    name: "MIDI cable, 0.3 m",
    description:
      "Reliable digital connectivity between your music production devices.",
    prices: {
      eur: 400,
      usd: 300,
    },
  },
  {
    name: "MIDI cable, 2 m",
    description:
      "Reliable digital connectivity between your music production devices.",
    prices: {
      eur: 700,
      usd: 600,
    },
  },
  {
    name: "MIDI cable, 3 m",
    description:
      "Reliable digital connectivity between your music production devices.",
    prices: {
      eur: 800,
      usd: 700,
    },
  },
  {
    name: "VM20 momentary switch pedal",
    description:
      "Momentary / Sustain “unlatch” pedal with ABS base and rubber feet. Metal body that allows to couple pedals together.",
    prices: {
      eur: 1400,
      usd: 1300,
    },
  },
  {
    name: "VM24 momentary switch pedal with cable",
    description:
      "Momentary / Sustain “unlatch” pedal with ABS base and rubber feet. Metal body that allows to couple pedals together.",
    prices: {
      eur: 1700,
      usd: 1500,
    },
  },
  {
    name: "VM22 latching pedal",
    description:
      "ON/OFF “latch” pedal with ABS base and rubber feet. Metal body that allows to couple pedals together.",
    prices: {
      eur: 1400,
      usd: 1300,
    },
  },
  {
    name: "VM26 latching pedal with cable",
    description:
      "ON/OFF “latch” pedal with ABS base and rubber feet. Metal body that allows to couple pedals together.",
    prices: {
      eur: 1700,
      usd: 1500,
    },
  },
  {
    name: "SLYS2J180 1 x stereo jack to 2 x mono jack cable",
    description:
      "Recommended for connecting one expression pedal and two switch pedals.",
    prices: {
      eur: 900,
      usd: 800,
    },
  },
  {
    name: "VM16L expression pedal",
    description:
      "Smooth, precise effects control with rugged aluminum body. Non-slip base ensures stability, TRS output compatible with most pedals.",
    prices: {
      eur: 2500,
      usd: 2200,
    },
  },
];

export const PANDA_AUDIO_MAILTO_ADDRESS = "info@panda-audio.com";

export const FEDEX_CSV_HEADER = [
  "Nickname","FullName","FirstName","LastName","Title","Company","Department",
  "AddressOne","AddressTwo","City","State","Zip","PhoneNumber","ExtensionNumber",
  "FAXNumber","PagerNumber","MobilePhoneNumber","CountryCode","EmailAddress",
  "VerifiedFlag","AcceptedFlag","ValidFlag","ResidentialFlag","CustomsIDEIN",
  "ReferenceDescription","ServiceTypeCode","PackageTypeCode","CollectionMethodCode",
  "BillCode","BillAccountNumber","DutyBillCode","DutyBillAccountNumber",
  "CurrencyTypeCode","InsightIDNumber","GroundReferenceDescription",
  "ShipmentNotificationRecipientEmail","RecipientEmailLanguage",
  "RecipientEmailShipmentnotification","RecipientEmailExceptionnotification",
  "RecipientEmailDeliverynotification","PartnerTypeCodes","NetReturnBillAccountNumber",
  "CustomsIDTypeCode","AddressTypeCode","ShipmentNotificationSenderEmail",
  "SenderEmailLanguage","SenderEmailShipmentnotification",
  "SenderEmailExceptionnotification","SenderEmailDeliverynotification",
  "RecipientEmailPickupnotification","SenderEmailPickupnotification","OpCoTypeCd",
  "BrokerAccounttID","BrokerTaxID","DefaultBrokerID","RecipientEmailTenderednotification",
  "SenderEmailTenderednotification","UserAccountNumber","DeliveryInstructions",
  "EstimatedDeliveryFlag","SenderEstimatedDeliveryFlag",
  "ShipmentNotificationSenderDeliveryChannel","ShipmentNotificationSenderMobileNo",
  "ShipmentNotificationSenderMobileNoCountry","ShipmentNotificationSenderMobileNoLanguage"
];
