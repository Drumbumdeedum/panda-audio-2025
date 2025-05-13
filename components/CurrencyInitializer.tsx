"use client";

import { useEffect } from "react";

export default function CurrencyInitializer() {
  useEffect(() => {
    const fetchGeo = async () => {
      try {
        const res = await fetch("/api/geo");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching geo:", error);
      }
    };
    fetchGeo();
  }, []);

  return null;
}
