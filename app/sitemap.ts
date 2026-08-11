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
  ];

  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
