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
  readydownloaderWeb: "https://readydownloader.vercel.app/",
  readydownloaderDownload: "https://github.com/whnnick/readydownloader/releases/latest",
  readydownloaderReleases: "https://github.com/whnnick/readydownloader/releases",
  readydownloaderIssues: "https://github.com/whnnick/readydownloader/issues",
  crossfit: "https://github.com/whnnick/crossfit-whoop-video",
  crossfitDocs: "https://github.com/whnnick/crossfit-whoop-video/blob/main/docs/CODEX_USAGE.md",
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
  { primary: string; secondary: string; tertiary: string; repository: string }
> = {
  readytype: {
    primary: links.readytypeDownload,
    secondary: links.readytype,
    tertiary: links.readytypeReleases,
    repository: links.readytype,
  },
  readycheck: {
    primary: links.readycheckDownload,
    secondary: links.readycheck,
    tertiary: links.readycheckReleases,
    repository: links.readycheck,
  },
  readydownloader: {
    primary: links.readydownloaderWeb,
    secondary: links.readydownloaderDownload,
    tertiary: links.readydownloaderReleases,
    repository: links.readydownloader,
  },
  crossfit: {
    primary: links.crossfitDocs,
    secondary: links.crossfit,
    tertiary: links.crossfitDocs,
    repository: links.crossfit,
  },
};
