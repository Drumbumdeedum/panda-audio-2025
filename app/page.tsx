import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants";
import { AudioLines, Cpu, Headphones, Radio } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Hero from "@/components/layout/hero";
import PageContent from "@/components/layout/page-content";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <>
      <Hero />
      <PageContent>
        <div className="space-y-24 pb-8">
          <section>
            <div className="text-center mb-4">
              <h1 className="mb-0">Advanced Audio Technology</h1>
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
          </section>

          <section>
            <div className="text-center mb-4">
              <h1 className="mb-0">Featured Products</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Check out some of our most popular products.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 px-0 md:px-16 lg:px-44">
              {PRODUCTS.filter((product) => product.featured).map(
                (product, index) => (
                  <Card
                    key={index}
                    className="relative group border border-border/30 rounded-lg overflow-hidden flex flex-col"
                  >
                    {product.newTag && <Badge variant="new">New!</Badge>}
                    <div className="w-full">
                      <AspectRatio ratio={5 / 4}>
                        <Image
                          src={product.image}
                          alt={product.name}
                          sizes="(max-width: 700px) 100vw, 700px"
                          fill
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </AspectRatio>
                    </div>
                    <CardHeader>
                      <CardTitle>{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1">
                      <p className="text-muted-foreground mb-4 flex-1">
                        {product.description}
                      </p>
                      <Link href={product.href}>
                        <Button className="w-full py-6 text-lg">
                          Learn more
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </section>
        </div>
      </PageContent>
    </>
  );
}
