import { artists } from "./lib/artist-data";
import ArtistCard from "./components/artist-card";

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden bg-foreground py-12">
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto lg:mx-0">
              <h1 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
                Our Artist Partners
              </h1>
              <p className="text-lg leading-none text-background/70">
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
    </div>
  );
}
