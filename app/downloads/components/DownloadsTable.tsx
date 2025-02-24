import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DownloadData } from "../lib/downloads-data";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

type DownloadsTableProps = {
  title: string;
  downloads: DownloadData[];
};

function DownloadsTable({ title, downloads }: DownloadsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <h3>{title}</h3>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {downloads.map((download) => (
          <TableRow key={download.id}>
            <TableCell className="font-medium">
              <h4 className="mb-0 text-base">
                {download.title}
                <span className="font-normal text-base text-foreground/70">
                  {download.subtitle && ` - ${download.subtitle}`}
                </span>
              </h4>
            </TableCell>
            <TableCell className="text-right">
              <a href={download.href} target="_blank">
                <Button>
                  <Download />
                  Download
                </Button>
              </a>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DownloadsTable;
