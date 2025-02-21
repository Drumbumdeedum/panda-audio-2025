import { Button } from "@/components/ui/button";
import { artists } from "./lib/artist-data";
import ArtistCard from "./components/artist-card";
import { PANDA_AUDIO_MAILTO_ADDRESS } from "@/lib/constants";

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-foreground py-24 sm:py-32">
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
                Our Artist Partners
              </h1>
              <p className="mt-6 text-lg leading-8 text-background/70">
                Discover the incredible musicians and producers who trust Panda
                Audio for their creative expression.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, i) => (
            <ArtistCard
              key={artist.name}
              priority={i < 3}
              artistData={artist}
            />
          ))}
        </div>
      </div>

      <footer className="border-t bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Join Our Artist Family
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Are you a professional musician interested in Panda Audio
              products? We&apos;d love to hear from you.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg">
                <a href={`mailto:${PANDA_AUDIO_MAILTO_ADDRESS}`}>Contact Us</a>
              </Button>
              <a href="/products">
                <Button variant="outline" size="lg">
                  View Products
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
