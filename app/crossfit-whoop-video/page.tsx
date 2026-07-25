import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "CrossFit WHOOP Video 1.0.11",
  description:
    "面向训练素材的竖屏 4K 电影感短片工作流，包含 HyperFrames 模板、Codex Skill、Plugin 和 10 套 WHOOP 风格 HUD。",
  alternates: {
    canonical: "/crossfit-whoop-video",
  },
  openGraph: {
    title: "CrossFit WHOOP Video — 4K 竖屏运动短片工作流",
    description:
      "用 HyperFrames、Codex 和 OpenClaw 把训练素材制作成带动态 WHOOP HUD 的运动短片。",
    images: [
      {
        url: "/crossfit-digital-athlete.jpg",
        alt: "Privacy-safe CrossFit WHOOP video preview",
      },
    ],
    url: "/crossfit-whoop-video",
  },
  twitter: {
    card: "summary_large_image",
    title: "CrossFit WHOOP Video",
    description: "将训练素材制作成带 WHOOP 数据 HUD 的 4K 竖屏运动短片。",
    images: ["/crossfit-digital-athlete.jpg"],
  },
};

export default function Page() {
  return <ProductPage product="crossfit" />;
}
