export type DownloadData = {
  id: number;
  title: string;
  version?: string;
  subtitle?: string;
  href: string;
  tooltip?: string;
};

export const FIV4_DOWNLOADS: DownloadData[] = [
  {
    id: 1,
    title: "Future Impact Editor",
    version: "v4.11",
    subtitle: "mac OS",
    href: "/downloads/future_impact_v4/FI_editor_v4.11_macOS.zip",
    tooltip:
      "<p>macOS uses <strong>Gatekeeper</strong> to ensure only trusted software runs on your Mac. If you download an app from the internet, macOS may classify it as untrusted. To proceed, go to <strong>System Settings > Privacy & Security</strong>, scroll to <strong>Security</strong>, and click <strong>Open Anyway</strong>. Then, right-click <strong>FIEditor411.dmg</strong>, select <strong>Open With > Disk Image Mounter</strong>, and wait for it to open. Drag <strong>FIEditor4</strong> to the <strong>Applications</strong> folder, right-click the app, and open it. After the first launch, it will work as usual.</p>",
  },
  {
    id: 2,
    title: "Future Impact Editor",
    version: "v4.11",
    subtitle: "Windows 32 bit",
    href: "/downloads/future_impact_v4/FI_editor_v4.11_Windows_32bit.zip",
  },
  {
    id: 3,
    title: "Future Impact Editor",
    version: "v4.11",
    subtitle: "Windows 64 bit",
    href: "/downloads/future_impact_v4/FI_editor_v4.11_Windows_64bit.zip",
  },
  {
    id: 4,
    title: "Factory preset sounds",
    version: "v4.11",
    href: "/downloads/future_impact_v4/FI_411_preset_sounds.zip",
  },
  {
    id: 5,
    title: "Firmware file",
    version: "v4.11",
    href: "/downloads/future_impact_v4/FI_4_firmware.fi4",
  },
  {
    id: 6,
    title: "Factory default sounds list",
    version: "v4.11",
    href: "/downloads/future_impact_v4/FI_411_default_sounds_list.pdf",
  },
  {
    id: 7,
    title: "Quick start guide",
    version: "v4.11",
    href: "/downloads/future_impact_v4/FI_4_quickstart.pdf",
  },
  {
    id: 8,
    title: "User guide",
    version: "v4.11",
    href: "/downloads/future_impact_v4/FI_4_User_Guide_v4.11.pdf",
  },
  {
    id: 9,
    title: "Version history",
    version: "v4.11",
    href: "/downloads/future_impact_v4/FI_4_version_history_v4.11.pdf",
  },
];

export const FIV1_TO_V3_DOWNLOADS: DownloadData[] = [
  {
    id: 1,
    title: "Future Impact Editor",
    version: "v3.60",
    subtitle: "mac OS",
    href: "/downloads/future_impact_v1-v3/FI_editor_v3.6.0_macOS.zip",
  },
  {
    id: 2,
    title: "Future Impact Editor",
    version: "v3.60",
    subtitle: "Windows 32 bit",
    href: "/downloads/future_impact_v1-v3/FI_editor_v3.6.0_Windows_32bit.zip",
  },
  {
    id: 3,
    title: "Future Impact Editor",
    version: "v3.60",
    subtitle: "Windows 64 bit",
    href: "/downloads/future_impact_v1-v3/FI_editor_v3.6.0_Windows_64bit.zip",
  },
  {
    id: 4,
    title: "Factory preset sounds",
    version: "v3.50",
    href: "/downloads/future_impact_v1-v3/FI_v35_sounds.zip",
  },
  {
    id: 5,
    title: "Factory preset sounds",
    version: "v3.00",
    href: "/downloads/future_impact_v1-v3/FI_v3_sounds.zip",
  },
  {
    id: 6,
    title: "Factory preset sounds",
    version: "v1.00",
    href: "/downloads/future_impact_v1-v3/FI_v1_sounds.zip",
  },
  {
    id: 7,
    title: "Firmware file",
    version: "v3.61",
    href: "/downloads/future_impact_v1-v3/FI_361_firmware.ldr",
  },
  {
    id: 8,
    title: "Factory default sounds list",
    version: "v3.50",
    href: "/downloads/future_impact_v1-v3/FI_v3.5_Factory_Default_Sounds.pdf",
  },
  {
    id: 9,
    title: "Quick start guide",
    version: "v3.00",
    href: "/downloads/future_impact_v1-v3/FI_quickstart-V300b.pdf",
  },
  {
    id: 10,
    title: "User guide",
    version: "v3.60",
    href: "/downloads/future_impact_v1-v3/FI_User_Guide_v3.60.pdf",
  },
  {
    id: 11,
    title: "Version history",
    version: "v3.61",
    href: "/downloads/future_impact_v1-v3/FI_version_history_361.pdf",
  },
];
