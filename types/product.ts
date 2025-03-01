import { StaticImageData } from "next/image";

export type Product = {
  id: number;
  featured?: boolean;
  newTag?: boolean;
  href?: string;
  name: string;
  description: string;
  image?: StaticImageData;
  prices: {
    eur: number;
    usd: number;
  };
};
