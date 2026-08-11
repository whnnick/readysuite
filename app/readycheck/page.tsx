import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "ReadyCheck 0.1.83",
  description:
    "在 macOS 与 Windows 查看 Codex 额度、Token 用量和重置时间，并在主动重置到期前获得本地提醒。",
  alternates: {
    canonical: "/readycheck",
  },
  openGraph: {
    title: "ReadyCheck 0.1.83 — 随时看清 Codex 剩余额度",
    description:
      "在主窗口、菜单栏、桌面 Widget 或 Mac 刘海查看 Codex 额度，并追踪 Token 用量与重置提醒。",
    images: [
      {
        url: "/readycheck-preview-0.1.83.jpg",
        width: 960,
        height: 540,
        alt: "ReadyCheck app",
      },
    ],
    url: "/readycheck",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadyCheck 0.1.83",
    description: "随时查看 Codex 剩余额度、Token 用量与重置提醒。",
    images: ["/readycheck-preview-0.1.83.jpg"],
  },
};

export default function Page() {
  return <ProductPage product="readycheck" />;
}
