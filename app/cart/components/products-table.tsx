"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatAmount, formatCurrency } from "@/lib/utils";
import { useProductCartStore } from "@/store/cart";
import { useCurrencyStore } from "@/store/currency";

function ProductsTable() {
  const { products } = useProductCartStore();
  const { currency } = useCurrencyStore();
  return (
    <div className="px-72 pt-8">
      <Table>
        {products.length === 0 && (
          <TableCaption className="text-center">
            You have no products in your cart.
          </TableCaption>
        )}

        <TableHeader>
          <TableRow>
            <TableHead className="flex-grow">Product name</TableHead>
            <TableHead className="text-center">Amount</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const price = product.prices.find(
              (p) => p.currency.toLowerCase() === currency.toLowerCase()
            )!;
            return (
              <TableRow key={product.id}>
                <TableCell className="flex-grow">
                  <>
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-foreground/70">
                      {formatCurrency(price.currency)}
                      {formatAmount(price.amount)}
                    </p>
                  </>
                </TableCell>
                <TableCell className="text-center">{product.amount}</TableCell>
                <TableCell className="text-right">
                  {formatCurrency(price.currency)}
                  {formatAmount(product.amount * price.amount)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProductsTable;
