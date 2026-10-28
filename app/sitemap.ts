import type { MetadataRoute } from "next";

const baseUrl = "https://readysuite.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/readytype", priority: 0.9 },
    { path: "/readycheck", priority: 0.9 },
    { path: "/readydownloader", priority: 0.9 },
    { path: "/crossfit-whoop-video", priority: 0.8 },
    { path: "/downloads", priority: 0.7 },
    { path: "/support", priority: 0.5 },
    { path: "/privacy", priority: 0.4 },
    { path: "/guides/macos-chinese-voice-input", priority: 0.75 },
    { path: "/guides/codex-usage-limit", priority: 0.75 },
    { path: "/guides/download-youtube-instagram-mac", priority: 0.75 },
  ];

  return routes.flatMap(({ path, priority }) => {
    const zhPath = path;
    const enPath = `/en${path}`;
    const languages = {
      "zh-CN": `${baseUrl}${zhPath}`,
      en: `${baseUrl}${enPath}`,
    };
    return [
      {
        url: `${baseUrl}${zhPath}`,
        lastModified: new Date("2026-10-28"),
        changeFrequency: "weekly" as const,
        priority,
        alternates: { languages },
      },
      {
        url: `${baseUrl}${enPath}`,
        lastModified: new Date("2026-10-28"),
        changeFrequency: "weekly" as const,
        priority: Math.max(priority - 0.05, 0.3),
        alternates: { languages },
      },
    ];
  });
}
