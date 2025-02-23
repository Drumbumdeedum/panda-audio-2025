import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function Hero() {
  return (
    <header className="py-20 px-4 md:px-8 lg:px-16 bg-foreground">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-background leading-tight">
              Professional Audio Innovation
            </h1>
            <p className="text-background/70 text-lg md:text-xl">
              Independent R&D company specializing in digital signal processing
              and embedded systems for professional audio applications.
            </p>
          </div>
          <div className="flex gap-4">
            <Link className="group" href="/products">
              <Button className="text-foreground" variant="outline" size="lg">
                Explore Products
                <ChevronRightIcon className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
