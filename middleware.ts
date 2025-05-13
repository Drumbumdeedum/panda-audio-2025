import { NextRequest, NextResponse } from "next/server";

interface GeoRequest extends NextRequest {
  geo?: {
    country?: string;
    region?: string;
    city?: string;
  };
}

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

export function middleware(request: NextRequest) {
  const geoRequest = request as GeoRequest;
  const country = geoRequest.geo?.country;
  console.log("MIDDLEWARE GEO REQUEST: ", geoRequest.geo);
  console.log("MIDDLEWARE COUNTRY DETECTED: ", country);

  const currency = country ? (euCountries.has(country) ? "EUR" : "USD") : "EUR";
  const response = NextResponse.next();
  const currentCurrency = request.cookies.get("currency");
  if (!currentCurrency || currency !== currentCurrency.value) {
    response.cookies.set("currency", currency, { path: "/" });
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
