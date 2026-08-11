import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "ReadyDownloader 0.1.4",
  description:
    "免费保存 YouTube、Instagram、Bilibili、TikTok 等 yt-dlp 可解析平台的视频，并选择画质、兼容格式和保存位置。",
  alternates: {
    canonical: "/readydownloader",
  },
  openGraph: {
    title: "ReadyDownloader 0.1.4 — 免费下载常用平台视频",
    description:
      "粘贴 YouTube、Instagram、Bilibili、TikTok 等平台链接，将可解析的视频保存到本地，并选择画质与兼容格式。",
    images: [
      {
        url: "/readydownloader-icon.png",
        width: 1024,
        height: 1024,
        alt: "ReadyDownloader app icon",
      },
    ],
    url: "/readydownloader",
  },
  twitter: {
    card: "summary",
    title: "ReadyDownloader 0.1.4",
    description: "免费保存 YouTube、Instagram 等平台视频，并按需选择画质与兼容格式。",
    images: ["/readydownloader-icon.png"],
  },
};

export default function Page() {
  return <ProductPage product="readydownloader" />;
}
