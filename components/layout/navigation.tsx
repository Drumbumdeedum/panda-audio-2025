"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import panda_logo from "@/public/images/panda_logo.webp";

const links = [
  { name: "Products", href: "/products" },
  { name: "Artists", href: "/artists" },
];

function Navigation() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full  bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-16">
        <div className="flex items-center space-x-4">
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
        </div>
        <nav className="flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "transition-all",
                pathname === link.href
                  ? "text-foreground underline underline-offset-4"
                  : " text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
