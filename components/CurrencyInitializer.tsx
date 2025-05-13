"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useCurrencyStore } from "@/store/currency";

export default function CurrencyInitializer() {
  const { setCurrency } = useCurrencyStore();

  useEffect(() => {
    const storedCurrency = Cookies.get("currency") as "EUR" | "USD" | null;
    console.log("CurrencyInitializer CC DETECTED: ", storedCurrency);
    if (storedCurrency) {
      setCurrency(storedCurrency);
    } else {
      setCurrency("EUR");
    }
  }, [setCurrency]);

  return null;
}
