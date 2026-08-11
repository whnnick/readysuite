import { ResourcePage } from "../product-ui";
import { resourceMetadata } from "../seo";

export const metadata = resourceMetadata("support", "zh");

export default function Page() {
  return <ResourcePage lang="zh" page="support" />;
}
