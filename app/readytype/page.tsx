import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "ReadyType 1.5.0",
  description:
    "中文优先的 macOS 语音输入工具，支持直接转文字、整理成文、翻译成英文、写给 AI 和自动选择。",
};

export default function Page() {
  return <ProductPage product="readytype" />;
}
