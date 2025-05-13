import type { NextRequest } from "next/server";
import { geolocation } from "@vercel/functions";

export async function GET(request: NextRequest) {
  const details = geolocation(request);
  console.log(details);
  return Response.json(details);
}
