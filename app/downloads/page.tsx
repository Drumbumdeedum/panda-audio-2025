import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import React from "react";
import { FIV1_TO_V3_DOWNLOADS, FIV4_DOWNLOADS } from "./lib/downloads-data";
import DownloadsTable from "./components/DownloadsTable";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="Downloads"
        subtitle="Firmware, software, and manuals for all Panda Audio products"
      />
      <PageContent type="narrow">
        <Accordion type="single" collapsible>
          <AccordionItem value="future_impact_v4">
            <AccordionTrigger>
              <h4 className="mb-0">Future Impact V4</h4>
            </AccordionTrigger>
            <AccordionContent>
              <DownloadsTable downloads={FIV4_DOWNLOADS} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="future_impact_v1_v3">
            <AccordionTrigger>
              <h4 className="mb-0">Future Impact V1 - V3.61</h4>
            </AccordionTrigger>
            <AccordionContent>
              <DownloadsTable downloads={FIV1_TO_V3_DOWNLOADS} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </PageContent>
    </>
  );
}

export default DownloadsPage;
