import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "ReadyCheck 0.1.72",
  description:
    "在 macOS 与 Windows 查看 Codex 额度状态，支持菜单栏、桌面 Widget、刘海状态条和本地消耗看板。",
};

export default function Page() {
  return <ProductPage product="readycheck" />;
}
