"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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

export default function ProductCard({ product }: { product: Product }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Card className="group overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          unoptimized
          width={300}
          height={300}
          className="w-full h-48 object-cover"
        />
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>
            {formatCurrency("eur")}
            {formatAmount(66666)}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription>{product.description}</CardDescription>
        </CardContent>
        <div className="p-6 pt-0 flex justify-between">
          <Button variant="secondary" onClick={() => setIsModalOpen(true)}>
            More Info
          </Button>
          <Button>Buy Now</Button>
        </div>
      </Card>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogDescription>
              Detailed information about {product.name}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={400}
              unoptimized
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <h3 className="text-lg font-semibold mb-2">Features:</h3>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>High-quality audio output</li>
              <li>Durable construction</li>
              <li>Sleek and modern design</li>
              <li>Compatible with various devices</li>
            </ul>
            <p className="text-xl font-bold mb-4">
              Price: {formatCurrency("eur")}
              {formatAmount(66666)}
            </p>
            <Button className="w-full">Add to Cart</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
