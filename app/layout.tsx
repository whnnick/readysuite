import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://readysuite.vercel.app"),
  title: {
    default: "ReadySuite AI 工具箱",
    template: "%s — ReadySuite",
  },
  description:
    "面向 macOS 与 Windows 的 AI 工具箱，覆盖中文语音输入、Codex 用量查看、多平台视频下载和运动内容制作。",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  verification: {
    google: "9H24-EJPHHJr1xqq8iX3Gc2vcb_6rYh3EakOFRaLkqI",
  },
  openGraph: {
    title: "ReadySuite AI 工具箱",
    description:
      "从语音输入、用量查看到多平台视频下载和运动内容制作，让常用工作一步到位。",
    siteName: "ReadySuite AI",
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
