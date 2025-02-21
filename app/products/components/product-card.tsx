"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatAmount, formatCurrency } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/product";
import { useCurrencyStore } from "@/store/currency";
import { ShoppingCart } from "lucide-react";
import { useProductCartStore } from "@/store/cart";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: Product }) {
  const { currency } = useCurrencyStore();
  const { addProduct } = useProductCartStore();
  const router = useRouter();

  const price = product.prices.find(
    (p) => p.currency.toLowerCase() === currency.toLowerCase()
  );

  const handleAddProduct = () => {
    addProduct(product);
    toast(`${product.name} has been added to your cart`, {
      action: {
        label: "View Cart",
        onClick: () => {
          router.push("/cart");
        },
      },
    });
  };

  return (
    <>
      <Card className="group overflow-hidden h-['400px'] flex flex-col">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>
            {price && (
              <>
                {formatCurrency(price?.currency)}
                {formatAmount(price?.amount)}
              </>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription>{product.description}</CardDescription>
        </CardContent>
        <div className="p-6 pt-0 flex justify-between">
          <Button variant="secondary">More Info</Button>
          <Button onClick={handleAddProduct}>
            <ShoppingCart /> Add to cart
          </Button>
        </div>
      </Card>
    </>
  );
}
