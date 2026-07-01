import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "ReadyCheck — macOS Codex 额度监控工具",
  description:
    "ReadyCheck 是 macOS 菜单栏和桌面小组件应用，让 Codex 额度状态常驻可见，并通过置顶 widget 减少反复检查配额的打断。",
};

export default function Page() {
  return <ProductPage product="readycheck" />;
}
