import type { Metadata } from "next";
import { HomePage } from "./product-ui";

export const metadata: Metadata = {
  title: "让常用工作一步到位",
  description:
    "ReadySuite 提供语音输入、Codex 用量查看、多平台视频下载和运动内容制作工具。",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePage />;
}
