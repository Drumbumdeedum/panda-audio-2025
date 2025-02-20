import { Product } from "../types/product";

export async function fetchProducts(): Promise<Product[]> {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL!}/api/products`;
  console.log(url);
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
