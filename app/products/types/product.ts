export interface Price {
  id: string;
  unit_amount: number;
  currency: string;
  product: Product;
}

export interface Product {
  id: string;
  name: string;
  images: string[];
  description?: string;
}
