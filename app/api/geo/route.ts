import type { NextRequest } from "next/server";
import { geolocation } from "@vercel/functions";

const euCountries = new Set([
  "AT",
  "BE",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "DE",
  "GR",
  "HU",
  "IE",
  "IT",
  "LV",
  "LT",
  "LU",
  "MT",
  "NL",
  "PL",
  "PT",
  "RO",
  "SK",
  "SI",
  "ES",
  "SE",
]);

export async function GET(request: NextRequest) {
  const { country } = geolocation(request);
  const currency = country ? (euCountries.has(country) ? "EUR" : "USD") : "EUR";
  return Response.json({ currency });
}
