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
import { PriceWithProduct } from "../types/product";

export default function ProductCard({ price }: { price: PriceWithProduct }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(price.product.images[0]);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        src={price.product.images[0] || "/placeholder.svg"}
        alt={price.product.name}
        unoptimized
        width={300}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{price.product.name}</h2>
        <p className="text-gray-600 mb-4">${price.unit_amount}</p>
        <div className="flex justify-between">
          <Button onClick={() => setIsModalOpen(true)}>More Info</Button>
          <Button variant="secondary">Buy Now</Button>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{price.product.name}</DialogTitle>
            <DialogDescription>
              Detailed information about {price.product.name}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Image
              src={price.product.images[0] || "/placeholder.svg"}
              alt={price.product.name}
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
              Price: ${price.unit_amount}
            </p>
            <Button className="w-full">Add to Cart</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
