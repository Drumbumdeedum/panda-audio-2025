import DownloadsTable from "@/app/downloads/components/DownloadsTable";
import { MIDIBEAM_V2_WIRELESS_DOWNLOADS } from "@/app/downloads/lib/downloads-data";
import PageContent from "@/components/layout/page-content";
import PageHeader from "@/components/layout/page-header";
import React from "react";

function MidibeamV2WirelessPage() {
  return (
    <>
      <PageHeader
        title="midiBeam v2 Wireless"
        subtitle="Professional wireless MIDI interface"
      />
      <PageContent type="narrow">
        <hr />
        <div>
          <h1 className="mb-0">Product support</h1>
          <p className="text-foreground/60">
            Firmware updates, user manuals, presets, and other useful downloads
            and links
          </p>
        </div>
        <DownloadsTable downloads={MIDIBEAM_V2_WIRELESS_DOWNLOADS} />
      </PageContent>
    </>
  );
}

export default MidibeamV2WirelessPage;
