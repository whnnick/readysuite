import type { Metadata } from "next";
import { HomePage } from "./product-ui";

export const metadata: Metadata = {
  title: "让 AI 工具更顺手",
  description:
    "从语音输入、用量管理到运动内容制作，ReadySuite 把实用工具放进每天的工作流。",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
