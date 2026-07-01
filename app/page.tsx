import type { Metadata } from "next";
import { HomePage } from "./product-ui";

export const metadata: Metadata = {
  title: "ReadySuite — AI 原生工作流工具箱",
  description:
    "ReadySuite 为开发者和创作者提供轻量工具，包含 ReadyCheck、ReadyType 和开源视频制作工作流。",
};

export default function Page() {
  return <HomePage />;
}
