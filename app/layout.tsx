import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://readysuite.vercel.app"),
  title: {
    default: "ReadySuite — 让 AI 工具更顺手",
    template: "%s — ReadySuite",
  },
  description:
    "ReadySuite 为语音输入、Codex 用量管理和运动内容制作提供实用的开源工具。",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "ReadySuite — 让 AI 工具更顺手",
    description:
      "从语音输入、用量管理到运动内容制作，把实用工具放进每天的工作流。",
    siteName: "ReadySuite",
    type: "website",
    locale: "zh_CN",
    url: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
