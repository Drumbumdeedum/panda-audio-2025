import { create } from "zustand";

type Currency = "EUR" | "USD";

interface CurrencyStore {
  currency: Currency;
  setCurrency: (newCurrency: Currency) => void;
}

export const useCurrencyStore = create<CurrencyStore>((set) => ({
  currency: "EUR",
  setCurrency: (newCurrency) => set({ currency: newCurrency }),
}));

export type { Currency };
