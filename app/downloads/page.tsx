import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import React from "react";
import { FIV1_TO_V3_DOWNLOADS, FIV4_DOWNLOADS } from "./lib/downloads-data";
import DownloadsTable from "./components/DownloadsTable";

function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="Downloads"
        subtitle="Firmware, software, and manuals for all Panda Audio products"
      />
      <PageContent type="narrow">
        <DownloadsTable title="Future Impact v4" downloads={FIV4_DOWNLOADS} />
        <DownloadsTable
          title="Future Impact v1 - v3.61"
          downloads={FIV1_TO_V3_DOWNLOADS}
        />
      </PageContent>
    </>
  );
}

export default DownloadsPage;
