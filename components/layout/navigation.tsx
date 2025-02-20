import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-4">
          {/* <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://sjc.microlink.io/NScQPLbR8IPXCGDxlqZgdVaVsqqVst1JUOw4M_a_YDn4lpr1Unj8MeFFiW8qcv5Iz1zoc_JOJMCD50CY_YREew.jpeg"
              width={40}
              height={40}
              alt="Panda Audio Logo"
              className="rounded-full"
            />
            <span className="text-xl font-bold">Panda Audio</span>
          </Link> */}
        </div>
        <nav className="flex items-center space-x-6">
          <Link
            href="products"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Products
          </Link>
          {/* <Link
            href="#about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contact
          </Link> */}
          <Link
            href="artists"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Artists
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
