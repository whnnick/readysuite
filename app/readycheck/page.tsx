import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "ReadyCheck 0.1.75",
  description:
    "在 macOS 与 Windows 查看 Codex 额度、Credits 与重置时间，支持菜单栏、桌面 Widget、刘海状态条和本地消耗看板。",
  alternates: {
    canonical: "/readycheck",
  },
  openGraph: {
    title: "ReadyCheck 0.1.75 — 随时看清 Codex 剩余额度",
    description:
      "在主窗口、菜单栏、桌面 Widget 或 Mac 刘海下方查看 Codex 额度，并显示经验证的 Credits 与重置时间。",
    images: [
      {
        url: "/readycheck-main-latest.png",
        width: 740,
        height: 314,
        alt: "ReadyCheck app",
      },
    ],
    url: "/readycheck",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadyCheck 0.1.75",
    description: "随时查看 Codex 剩余额度、Credits 与重置时间。",
    images: ["/readycheck-main-latest.png"],
  },
};

export default function Page() {
  return <ProductPage product="readycheck" />;
}
