import { artists } from "./lib/artist-data";
import ArtistCard from "./components/artist-card";
import PageHeader from "@/components/layout/page-header";

export default function ArtistsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Our Artist Partners"
        subtitle="Discover the incredible musicians and producers who trust Panda Audio for their creative expression."
      />
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
