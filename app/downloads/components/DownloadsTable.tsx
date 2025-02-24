import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { DownloadData } from "../lib/downloads-data";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

type DownloadsTableProps = {
  downloads: DownloadData[];
};

function DownloadsTable({ downloads }: DownloadsTableProps) {
  return (
    <Table>
      <TableBody>
        {downloads.map((download) => (
          <TableRow key={download.id}>
            <TableCell className="font-medium">
              <h4 className="mb-0 text-base">
                {download.title}
                <span className="font-normal text-base italic text-foreground/70">
                  {download.version && ` - ${download.version}`}
                </span>
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
