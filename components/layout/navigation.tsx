"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import panda_logo from "@/public/images/panda_logo.webp";
import { Button } from "../ui/button";
import { Menu, ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import useFilteredAndSortedProductsInCart from "@/hooks/useFilteredAndSortedProductsInCart";
import clsx from "clsx";

const links = [
  { name: "Products", href: "/products" },
  { name: "Artists", href: "/artists" },
  { name: "Downloads", href: "/downloads" },
  { name: "About us", href: "/about" },
];

function Navigation() {
  const pathname = usePathname();
  const products = useFilteredAndSortedProductsInCart();
  const productsCount = products.reduce(
    (acc, product) => acc + product.amount,
    0
  );
  return (
    <header className="sticky top-0 z-50 w-full bg-background backdrop-blur-lg supports-[backdrop-filter]:bg-background/85">
      <div className="flex h-16 justify-between sm:space-x-0 px-4 md:px-8 lg:px-16">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={panda_logo}
              width={45}
              height={45}
              alt="Panda Audio Logo"
              className="rounded-full "
            />
            <span className="text-xl font-bold text-foreground">
              Panda Audio
            </span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-6 items-center ">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "transition-all text-foreground hover:text-foreground",
                  pathname === link.href
                    ? "text-foreground underline underline-offset-4"
                    : " text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link href={"/cart"} className="flex gap-2">
            <Button className="relative">
              <span className="hidden sm:block">View Cart</span>
              <ShoppingCart />
              {productsCount > 0 && (
                <span className="absolute -bottom-2 -right-2 bg-background text-foreground shadow border-foreground text-2xs rounded-full w-5 h-5 flex items-center justify-center">
                  {productsCount}
                </span>
              )}
            </Button>
          </Link>
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent side="top" className="h-screen">
                <SheetHeader>
                  <SheetTitle className="text-4xl mb-8">
                    <SheetClose asChild>
                      <Link href="/" className="flex items-center space-x-3">
                        <Image
                          src={panda_logo}
                          width={45}
                          height={45}
                          alt="Panda Audio Logo"
                          className="rounded-full "
                        />
                        <span className="text-xl font-bold">Panda Audio</span>
                      </Link>
                    </SheetClose>
                  </SheetTitle>
                  <SheetDescription className="flex flex-col space-y-8 mx-auto text-left">
                    {links.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={clsx(
                            "transition-all text-3xl",
                            pathname === link.href
                              ? "text-foreground underline underline-offset-4"
                              : " text-foreground/80 hover:text-foreground"
                          )}
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
