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
  useEffect(() => {
    if (currentProducts.length === 0) {
      setCurrentProducts(products);
    }
  }, [products, currentProducts]);

  const [saleIsVisible, setSaleIsVisible] = useState(false);
  useEffect(() => {
    const endCET = new Date("2025-12-25T00:00:00");
    const checkTime = () => {
      const nowCET = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Europe/Berlin" })
      );
      setSaleIsVisible(nowCET < endCET);
    };
    checkTime();
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, []);

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
                    }, 0)
                  )}
                  *
                </strong>
              </p>
            </div>
            <div className="text-xs text-muted-foreground mt-4">
              * Additional shipping costs are based on package size, weight, and location. After ordering, you&apos;ll receive an email with the cost. Once confirmed, an invoice will be sent for credit card payment.
            </div>

            { saleIsVisible &&
              <section className="mt-4">
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-8 text-center shadow-lg">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">🎄 Christmas Sale 🎄</h2>
                  <p className="text-white text-lg">
                    Free Shipping on orders above <span className="font-bold text-yellow-200">{formatCurrency(currency)}{formatAmount(15000)}</span>
                  </p>
                  <p className="mt-3 text-sm text-white/80">
                    * Sale lasts until <span className="font-semibold">December 24, 2025 at 00:00 CET</span>
                  </p>
                </div>
              </section>
            }
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default OrderSummary;
