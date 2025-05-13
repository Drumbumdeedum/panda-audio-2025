import type { NextRequest } from "next/server";

interface GeoRequest extends NextRequest {
  geo?: {
    country?: string;
    region?: string;
    city?: string;
  };
}

export async function GET(request: NextRequest) {
  const geoRequest = request as GeoRequest;
  const country = geoRequest.geo?.country || "Unknown";
  console.log(country);
  return new Response(JSON.stringify({ country }), {
    headers: { "Content-Type": "application/json" },
  });
}
