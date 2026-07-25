import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "ReadyType 1.5.0",
  description:
    "中文优先的 macOS 语音输入工具，支持直接转文字、整理成文、翻译成英文、写给 AI 和自动选择。",
  alternates: {
    canonical: "/readytype",
  },
  openGraph: {
    title: "ReadyType 1.5.0 — 开口说，直接得到可用文字",
    description:
      "双击 Option 开始说话，把口述内容直接输入、整理成文、翻译成英文或写给 AI。",
    images: [
      {
        url: "/readytype-window-light.png",
        width: 900,
        height: 680,
        alt: "ReadyType macOS app",
      },
    ],
    url: "/readytype",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadyType 1.5.0",
    description: "双击 Option，说出想法，ReadyType 自动整理成可以直接发送的文字。",
    images: ["/readytype-window-light.png"],
  },
};

export default function Page() {
  return <ProductPage product="readytype" />;
}
