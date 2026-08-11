import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "ReadyDownloader 0.1.4",
  description:
    "在 macOS 与 Windows 解析媒体格式，并按最高画质、iPhone 兼容或指定格式下载；支持 FFmpeg 合并、代理和可选 Cookie。",
  alternates: {
    canonical: "/readydownloader",
  },
  openGraph: {
    title: "ReadyDownloader 0.1.4 — 下载前先看清格式",
    description:
      "查看分辨率、编码、帧率和大小，再选择最高画质、iPhone 兼容或指定格式下载。",
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
    description: "解析媒体格式，选择画质并保存到本地。",
    images: ["/readydownloader-icon.png"],
  },
};

export default function Page() {
  return <ProductPage product="readydownloader" />;
}
