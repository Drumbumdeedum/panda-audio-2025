import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function GET(): Promise<NextResponse> {
  try {
    const products = await stripe.prices.list({
      expand: ["data.product"],
    });

    return NextResponse.json(products.data);
  } catch (error) {
    const err = error as { message: string };
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
