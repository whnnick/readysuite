import type { Metadata } from "next";
import { ProductPage } from "../product-ui";

export const metadata: Metadata = {
  title: "ReadyType — macOS 中文语音输入工具",
  description:
    "ReadyType 是中文优先的 macOS 语音输入工具，支持直接转文字、整理成文、翻译成英文和写给 AI，并调用 DeepSeek-v4-flash 提供低成本 AI 输出。",
};

export default function Page() {
  return <ProductPage product="readytype" />;
}
