import type { Metadata } from "next";
import { ResourcePage } from "../product-ui";

export const metadata: Metadata = {
  title: "下载中心",
  description:
    "选择 ReadySuite 产品并获取最新版本。ReadyType、ReadyCheck 通过 GitHub Releases 分发，开源工作流通过 GitHub 仓库发布。",
  alternates: {
    canonical: "/downloads",
  },
};

export default function Page() {
  return <ResourcePage page="downloads" />;
}
