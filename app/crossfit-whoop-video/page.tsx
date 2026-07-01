import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "CrossFit WHOOP Video — 竖屏 4K 视频制作工作流",
  description:
    "CrossFit WHOOP Video 是开源视频制作工作流，包含 HyperFrames 模板、Codex/OpenClaw 自动化资产和 WHOOP 风格 HUD 预设。",
};

export default function Page() {
  return <ProductPage product="crossfit" />;
}
