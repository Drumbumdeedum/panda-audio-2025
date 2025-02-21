import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/layout/navigation";
import "./globals.css";
import { Toaster } from "sonner";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Panda Audio",
  description: "Panda Audio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <Navigation />
          {children}
          <Toaster />
          <footer className="border-t py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-muted-foreground text-sm">
                  &copy; {new Date().getFullYear()} Panda Audio. All rights
                  reserved.
                </div>
                <div className="flex gap-6">
                  {["About Us", "FAQ", "Contact", "Privacy Policy"].map(
                    (item) => (
                      <Link
                        key={item}
                        href="#"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
