import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ExternalLink, Quote } from "lucide-react";
import { ArtistData } from "../lib/artist-data";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import clsx from "clsx";

type ArtistCardProps = {
  artistData: ArtistData;
  priority: boolean;
};

function ArtistCard({ artistData, priority = false }: ArtistCardProps) {
  return (
    <Card className="group overflow-hidden flex flex-col">
      <div className="w-full">
        <AspectRatio ratio={16 / 15}>
          <Image
            priority={priority}
            src={artistData.image}
            alt={artistData.name}
            fill
            sizes="(max-width: 700px) 100vw, 700px"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{artistData.name}</CardTitle>
            <CardDescription>{artistData.role}</CardDescription>
          </div>
          {artistData.link && (
            <Link
              href={artistData.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon" asChild>
                <>
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">
                    Visit {artistData.name}&apos;s website
                  </span>
                </>
              </Button>
            </Link>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <div className="flex flex-1 gap-4">
          {artistData.quote && (
            <Quote className="h-5 w-5 shrink-0 text-muted-foreground" />
          )}
          <p
            className={clsx(
              "text-sm text-muted-foreground",
              artistData.quote && "italic"
            )}
          >
            {artistData.description}
          </p>
        </div>
        <div className="mt-4">
          <Link
            href={artistData.productHref}
            tabIndex={-1}
            className="focus:outline-none focus-visible:outline-none"
          >
            <Button
              variant="secondary"
              size="sm"
              aria-label={`More info about ${artistData.product}`}
            >
              Using {artistData.product}
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ArtistCard;
