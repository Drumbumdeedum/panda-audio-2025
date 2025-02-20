export interface Price {
  id: string;
  unit_amount: number;
  currency: string;
}

export interface Product {
  id: string;
  name: string;
  images: string[];
  description?: string;
  default_price?: Price;
}
