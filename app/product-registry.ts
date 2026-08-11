export type ProductKey = "readytype" | "readycheck" | "readydownloader" | "crossfit";

export const productOrder: readonly ProductKey[] = [
  "readytype",
  "readycheck",
  "readydownloader",
  "crossfit",
];

export const links = {
  profile: "https://github.com/whnnick",
  readytype: "https://github.com/whnnick/readytype",
  readytypeDownload: "https://github.com/whnnick/readytype/releases/latest",
  readytypeReleases: "https://github.com/whnnick/readytype/releases",
  readytypeIssues: "https://github.com/whnnick/readytype/issues",
  readycheck: "https://github.com/whnnick/readycheck",
  readycheckDownload: "https://github.com/whnnick/readycheck/releases/latest",
  readycheckReleases: "https://github.com/whnnick/readycheck/releases",
  readycheckIssues: "https://github.com/whnnick/readycheck/issues",
  readydownloader: "https://github.com/whnnick/readydownloader",
  readydownloaderReleases: "https://github.com/whnnick/readydownloader/releases",
  readydownloaderIssues: "https://github.com/whnnick/readydownloader/issues",
  crossfit: "https://github.com/whnnick/crossfit-whoop-video",
  crossfitDocs: "https://github.com/whnnick/crossfit-whoop-video#readme",
  crossfitIssues: "https://github.com/whnnick/crossfit-whoop-video/issues",
} as const;

export const routes: Record<ProductKey, string> = {
  readytype: "/readytype",
  readycheck: "/readycheck",
  readydownloader: "/readydownloader",
  crossfit: "/crossfit-whoop-video",
};

export const productLinks: Record<
  ProductKey,
  { primary: string; secondary: string; tertiary: string }
> = {
  readytype: {
    primary: links.readytypeDownload,
    secondary: links.readytype,
    tertiary: links.readytypeReleases,
  },
  readycheck: {
    primary: links.readycheckDownload,
    secondary: links.readycheck,
    tertiary: links.readycheckReleases,
  },
  readydownloader: {
    primary: links.readydownloader,
    secondary: links.readydownloader,
    tertiary: `${links.readydownloader}#readme`,
  },
  crossfit: {
    primary: links.crossfit,
    secondary: links.crossfitDocs,
    tertiary: links.crossfitDocs,
  },
};
