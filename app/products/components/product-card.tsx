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
import Link from "next/link";
import clsx from "clsx";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function ProductCard({ product }: { product: Product }) {
  const { currency } = useCurrencyStore();
  const { addProduct } = useProductCartStore();
  const router = useRouter();

  const price = product.prices.find(
    (p) => p.currency.toLowerCase() === currency.toLowerCase()
  );

  const handleAddProduct = () => {
    addProduct(product);
    toast.success(`${product.name} has been added to your cart`, {
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
      <Card className="group overflow-hidden  flex flex-col">
        <div className="w-full">
          <AspectRatio ratio={3 / 2}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </AspectRatio>
        </div>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>
            {price && (
              <>
                {formatCurrency(price.currency)}
                {formatAmount(price.amount)}
              </>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription>
            <p>{product.description}</p>
          </CardDescription>
        </CardContent>
        <div
          className={clsx(
            "p-6 pt-0 flex",
            product.href ? "justify-between" : "justify-end"
          )}
        >
          {product.href && (
            <Link href={product.href}>
              <Button variant="secondary">More Info</Button>
            </Link>
          )}
          <Button onClick={handleAddProduct}>
            <ShoppingCart /> Add to cart
          </Button>
        </div>
      </Card>
    </>
  );
}
