import { Button } from "@/components/ui/button";
import { FEATURED_PRODUCTS } from "@/lib/constants";
import { AudioLines, Cpu, Headphones, Radio } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="bg-black justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main>
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    Professional Audio Innovation
                  </h1>
                  <p className="text-slate-300 text-lg md:text-xl">
                    Independent R&D company specializing in digital signal
                    processing and embedded systems for professional audio
                    applications.
                  </p>
                  <div className="flex gap-4">
                    <a href="/products">
                      <Button variant="outline" size="lg">
                        Explore Products
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Advanced Audio Technology
                </h2>
                <p className="text-slate-300 max-w-2xl mx-auto">
                  Developing cutting-edge MIDI products and professional audio
                  solutions with expertise in embedded systems and real-time
                  processing.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Headphones className="h-8 w-8" />,
                    title: "Professional Audio",
                    description:
                      "High-quality audio processing for professional applications",
                  },
                  {
                    icon: <AudioLines className="h-8 w-8" />,
                    title: "MIDI Solutions",
                    description: "Wireless MIDI interfaces and controllers",
                  },
                  {
                    icon: <Cpu className="h-8 w-8" />,
                    title: "Embedded Systems",
                    description: "Custom hardware and firmware development",
                  },
                  {
                    icon: <Radio className="h-8 w-8" />,
                    title: "Wireless Technology",
                    description: "Advanced wireless audio applications",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-slate-800/50 border border-slate-700 text-center"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Featured Products
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {FEATURED_PRODUCTS.map((product, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden"
                  >
                    <div className="aspect-[9/6] relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {product.name}
                      </h3>
                      <p className="text-slate-300 mb-4">
                        {product.description}
                      </p>
                      <Button variant="secondary" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-800 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-slate-300 text-sm">
                © {new Date().getFullYear()} Panda Audio. All rights reserved.
              </div>
              <div className="flex gap-6">
                {["About Us", "FAQ", "Contact", "Privacy Policy"].map(
                  (item) => (
                    <Link
                      key={item}
                      href="#"
                      className="text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
