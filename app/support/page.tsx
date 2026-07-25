import type { Metadata } from "next";
import { ResourcePage } from "../product-ui";

export const metadata: Metadata = {
  title: "支持与反馈",
  description:
    "通过 GitHub Issues 为 ReadyType、ReadyCheck 和 CrossFit WHOOP Video 提交公开反馈和问题报告。",
};

export default function Page() {
  return <ResourcePage page="support" />;
}
