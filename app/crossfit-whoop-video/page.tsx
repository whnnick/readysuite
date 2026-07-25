import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "CrossFit WHOOP Video 1.0.11",
  description:
    "面向训练素材的竖屏 4K 电影感短片工作流，包含 HyperFrames 模板、Codex Skill、Plugin 和 10 套 WHOOP 风格 HUD。",
};

export default function Page() {
  return <ProductPage product="crossfit" />;
}
