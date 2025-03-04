"use client";

import { Button } from "@/components/ui/button";
import CurrencySelect from "@/components/ui/currency-selector";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatAmount, formatCurrency } from "@/lib/utils";
import { useProductCartStore } from "@/store/cart";
import { useCurrencyStore } from "@/store/currency";
import { ArrowRightIcon, MinusIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useFilteredAndSortedProductsInCart from "@/hooks/useFilteredAndSortedProductsInCart";

function ProductsTable() {
  const { currency } = useCurrencyStore();
  const { decreaseProductAmount, increaseProductAmount } =
    useProductCartStore();
  const products = useFilteredAndSortedProductsInCart();
  const total = products.reduce((acc, product) => {
    const price = currency === "USD" ? product.prices.usd : product.prices.eur;
    return acc + product.amount * price;
  }, 0);
  console.log(products);
  return (
    <>
      <div className="flex justify-between items-center">
        <h3>Confirm your order</h3>
        <CurrencySelect />
      </div>
      <Table>
        {products.length === 0 && (
          <TableCaption className="text-center">
            Your cart is empty. Visit our{" "}
            <Link href="products">products page</Link> to start shopping.
          </TableCaption>
        )}

        <TableHeader>
          <TableRow>
            <TableHead className="flex-grow">Product</TableHead>
            <TableHead className="text-center w-32">Amount</TableHead>
            <TableHead className="text-right sm:w-32">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const price =
              currency === "USD" ? product.prices.usd : product.prices.eur;
            return (
              <TableRow key={product.name}>
                <TableCell className="flex-grow flex gap-2 items-center">
                  {product.image && (
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="h-[40px] w-[60px] object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg mb-0">
                      {product.name}
                    </h3>
                    <p className="text-foreground/70">
                      {formatCurrency(currency)}
                      {formatAmount(price)}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  <div className="flex justify-center items-center ">
                    <Button
                      className="h-6 w-6 p-0"
                      onClick={() => decreaseProductAmount(product.name)}
                    >
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <p className="px-3">{product.amount}</p>
                    <Button
                      className="h-6 w-6 p-0"
                      onClick={() => increaseProductAmount(product.name)}
                    >
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {formatCurrency(currency)}
                  {formatAmount(product.amount * price)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right font-bold">
              {formatCurrency(currency.toLowerCase())}
              {formatAmount(total)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      {products.length > 0 && (
        <div className="flex justify-end">
          <Link
            href="/cart/checkout"
            tabIndex={-1}
            className="focus:outline-none focus-visible:outline-none"
          >
            <Button className="group font-bold" variant="cta" size="lg">
              To checkout
              <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      )}
    </>
  );
}

export default ProductsTable;
