"use client";

import { useProductCartStore } from "@/store/cart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useCurrencyStore } from "@/store/currency";
import { formatAmount, formatCurrency } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

function OrderSummary() {
  const { products } = useProductCartStore();
  const { currency } = useCurrencyStore();
  const shippingCost = currency === "EUR" ? 5000 : 6500;

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h3>Order summary</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul>
          {products.length === 0 && (
            <div className="text-center py-6 text-muted-foreground">
              Your cart is empty
            </div>
          )}
          {products.length !== 0 &&
            products.map((product) => {
              const price = product.prices.find(
                (p) => p.currency.toLowerCase() === currency.toLowerCase()
              )!;
              return (
                <li key={product.id} className="flex gap-2 items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="h-[80px] w-[100px] object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="flex-1">
                    <p>
                      <strong>{product.name}</strong>
                    </p>
                    <p className="text-foreground/60">
                      {formatCurrency(price.currency)}
                      {formatAmount(price.amount)} x {product.amount}
                    </p>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p>
                      {formatCurrency(price.currency)}
                      {formatAmount(price.amount * product.amount)}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
        <Separator className="my-4" />
        <div>
          <p className="flex justify-between">
            <span className="text-foreground/60">Subtotal</span>
            <span>
              {formatCurrency(currency.toLowerCase())}
              {formatAmount(
                products.reduce((acc, product) => {
                  const price = product.prices.find(
                    (p) => p.currency.toLowerCase() === currency.toLowerCase()
                  )!;
                  return acc + product.amount * price.amount;
                }, 0)
              )}
            </span>
          </p>
          <p className="flex justify-between">
            <span className="text-foreground/60">Shipping</span>
            <span>
              {formatCurrency(currency.toLowerCase())}
              {formatAmount(shippingCost)}
            </span>
          </p>
        </div>
        <Separator className="my-4" />
        <div>
          <p className="flex justify-between">
            <strong>Total</strong>
            <strong>
              {formatCurrency(currency.toLowerCase())}
              {formatAmount(
                products.reduce((acc, product) => {
                  const price = product.prices.find(
                    (p) => p.currency.toLowerCase() === currency.toLowerCase()
                  )!;
                  return acc + product.amount * price.amount;
                }, shippingCost)
              )}
            </strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default OrderSummary;
