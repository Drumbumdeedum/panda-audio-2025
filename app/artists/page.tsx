import { artists } from "./lib/artist-data";
import ArtistCard from "./components/artist-card";
import PageHeader from "@/components/layout/page-header";
import PageContent from "@/components/layout/page-content";

export default function ArtistsPage() {
  return (
    <>
      <PageHeader
        title="Our artist partners"
        subtitle="Discover the incredible musicians and producers who trust Panda Audio for their creative expression."
      />
      <PageContent>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist, i) => (
            <ArtistCard
              key={artist.name}
              priority={i < 3}
              artistData={artist}
            />
          ))}
        </div>
      </PageContent>
    </>
  );
}
