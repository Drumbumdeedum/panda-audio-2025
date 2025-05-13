import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/layout/navigation";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/layout/footer";
import CurrencyInitializer from "@/components/CurrencyInitializer";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* const headersList = await headers();
  const country = headersList.get("x-vercel-ip-country") || "unknown";
  console.log("headersList: ", headersList);
  console.log("COUNTRY: ", country); */

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CurrencyInitializer />
        <main>
          <Navigation />
          <div className="min-h-screen">{children}</div>
          <Toaster closeButton />
          <Footer />
        </main>
      </body>
    </html>
  );
}
