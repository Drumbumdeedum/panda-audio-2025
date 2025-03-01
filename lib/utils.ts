import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAmount(amountInCents: number): string {
  return (amountInCents / 100).toFixed(2);
}

export function formatCurrency(currency: string): string {
  if (currency.toLowerCase() === "usd") return "$";
  if (currency.toLowerCase() === "eur") return "€";
  return "Unknown";
}
