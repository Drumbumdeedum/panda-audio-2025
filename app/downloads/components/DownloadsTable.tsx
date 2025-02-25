import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { DownloadData } from "../lib/downloads-data";
import { Button } from "@/components/ui/button";
import { Download, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
              <h4 className="mb-0 text-base flex gap-1">
                {download.title}
                {download.version && (
                  <span className="font-normal text-base italic text-foreground/70">
                    {` - ${download.version}`}
                  </span>
                )}
                {download.subtitle && (
                  <span className="font-normal text-base text-foreground/70">
                    {`- ${download.subtitle}`}
                  </span>
                )}
                {download.tooltip && (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="self-start">
                        <Info size={12} />
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p
                          className="p-2 w-[300px] text-xs font-normal"
                          dangerouslySetInnerHTML={{ __html: download.tooltip }}
                        />
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                )}
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
