"use client";

import { ProductWithAmount } from "@/store/cart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useCurrencyStore } from "@/store/currency";
import { formatAmount, formatCurrency } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import Link from "next/link";
import useFilteredAndSortedProductsInCart from "@/hooks/useFilteredAndSortedProductsInCart";

function OrderSummary() {
  const products = useFilteredAndSortedProductsInCart();
  const [currentProducts, setCurrentProducts] = useState<ProductWithAmount[]>(
    []
  );
  const { currency } = useCurrencyStore();
  const shippingCost = currency === "EUR" ? 5000 : 6500;

  useEffect(() => {
    if (currentProducts.length === 0) {
      setCurrentProducts(products);
    }
  }, [products, currentProducts]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h3>Order summary</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {currentProducts.length === 0 && (
          <div className="text-center py-6 text-muted-foreground">
            Your cart is empty.
            <br /> Visit our <Link href="/products">products page</Link> to
            start shopping.
          </div>
        )}

        {currentProducts.length !== 0 && (
          <>
            <ul className="space-y-4">
              {currentProducts.map((product) => {
                const price =
                  currency === "USD" ? product.prices.usd : product.prices.eur;
                return (
                  <li key={product.name} className="flex gap-2 items-center">
                    {product.image && (
                      <Image
                        src={product.image}
                        alt={product.name}
                        className="h-[80px] w-[100px] object-cover transition duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="flex-1">
                      <p>
                        <strong>{product.name}</strong>
                      </p>
                      <p className="text-foreground/60">
                        {formatCurrency(currency)}
                        {formatAmount(price)} x {product.amount}
                      </p>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p>
                        {formatCurrency(currency)}
                        {formatAmount(price * product.amount)}
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
                  {formatCurrency(currency)}
                  {formatAmount(
                    currentProducts.reduce((acc, product) => {
                      const price =
                        currency === "USD"
                          ? product.prices.usd
                          : product.prices.eur;
                      return acc + product.amount * price;
                    }, 0)
                  )}
                </span>
              </p>
              <p className="flex justify-between">
                <span className="text-foreground/60">Shipping</span>
                <span>
                  {formatCurrency(currency)}
                  {formatAmount(shippingCost)}
                </span>
              </p>
            </div>
            <Separator className="my-4" />
            <div>
              <p className="flex justify-between">
                <strong>Total</strong>
                <strong>
                  {formatCurrency(currency)}
                  {formatAmount(
                    currentProducts.reduce((acc, product) => {
                      const price =
                        currency === "USD"
                          ? product.prices.usd
                          : product.prices.eur;
                      return acc + product.amount * price;
                    }, shippingCost)
                  )}
                </strong>
              </p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default OrderSummary;
