import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import React from "react";
import { FIV4_AND_VIP_DOWNLOADS } from "./lib/downloads-data";
import DownloadsTable from "./components/DownloadsTable";

function DownloadsPage() {
  return (
    <>
      <PageHeader
        title="Downloads"
        subtitle="Firmware, software, and manuals for all Panda Audio products"
      />
      <PageContent type="narrow">
        <DownloadsTable
          title="Future Impact vI - v3.61"
          downloads={FIV4_AND_VIP_DOWNLOADS}
        />
      </PageContent>
    </>
  );
}

export default DownloadsPage;
