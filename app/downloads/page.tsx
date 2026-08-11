import type { Metadata } from "next";
import { ResourcePage } from "../product-ui";

export const metadata: Metadata = {
  title: "下载中心",
  description:
    "获取 ReadyType、ReadyCheck、ReadyDownloader 与 CrossFit WHOOP Video 的最新公开版本或源码预览。",
  alternates: {
    canonical: "/downloads",
  },
};

export default function Page() {
  return <ResourcePage page="downloads" />;
}
