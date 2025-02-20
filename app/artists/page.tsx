import { Button } from "@/components/ui/button";
import { artists } from "./lib/artist-data";
import ArtistCard from "./components/artist-card";

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-black py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Our Artist Partners
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Discover the incredible musicians and producers who trust Panda
                Audio for their creative expression.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <ArtistCard key={artist.name} artistData={artist} />
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
              <Button size="lg">Contact Us</Button>
              <Button variant="outline" size="lg">
                View Products
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
