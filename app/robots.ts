import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: "https://readysuite.vercel.app",
    sitemap: "https://readysuite.vercel.app/sitemap.xml",
  };
}
