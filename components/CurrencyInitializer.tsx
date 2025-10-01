"use client";

import { useCurrencyStore } from "@/store/currency";
import { useEffect } from "react";

export default function CurrencyInitializer() {
  const { setCurrency } = useCurrencyStore();

  useEffect(() => {
    const fetchGeo = async () => {
      try {
        const res = await fetch("/api/geo");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setCurrency(data.currency);
      } catch (error) {
        console.error("Error fetching geolocation:", error);
      }
    };
    fetchGeo();
  }, [setCurrency]);

  return null;
}
