import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants";
import { AudioLines, Cpu, Headphones, Radio } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      <section className="py-20 relative bg-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-background leading-tight">
                  Professional Audio Innovation
                </h1>
                <p className="text-background/70 text-lg md:text-xl">
                  Independent R&D company specializing in digital signal
                  processing and embedded systems for professional audio
                  applications.
                </p>
              </div>
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

      <section>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Audio Technology
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                className="p-6 rounded-lg bg-primary border border-border/30 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-background mb-2">
                  {feature.title}
                </h3>
                <p className="text-background/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.filter((product) => product.featured).map(
              (product, index) => (
                <Card
                  key={index}
                  className="border border-border/30 rounded-lg overflow-hidden"
                >
                  <div className="aspect-[9/6] relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <Button className="w-full">Learn More</Button>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
