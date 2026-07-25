import type { Metadata } from "next";
import { ResourcePage } from "../product-ui";

export const metadata: Metadata = {
  title: "隐私说明",
  description:
    "了解 ReadySuite 产品的数据边界、系统权限、外部 API 使用和公开反馈注意事项。",
};

export default function Page() {
  return <ResourcePage page="privacy" />;
}
