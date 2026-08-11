import type { Metadata } from "next";
import { ResourcePage } from "../product-ui";

export const metadata: Metadata = {
  title: "支持与反馈",
  description:
    "通过 GitHub Issues 为 ReadyType、ReadyCheck、ReadyDownloader 和 CrossFit WHOOP Video 提交公开反馈。",
  alternates: {
    canonical: "/support",
  },
};

export default function Page() {
  return <ResourcePage page="support" />;
}
