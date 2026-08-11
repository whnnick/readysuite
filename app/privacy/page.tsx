import { ResourcePage } from "../product-ui";
import { resourceMetadata } from "../seo";

export const metadata = resourceMetadata("privacy", "zh");

export default function Page() {
  return <ResourcePage lang="zh" page="privacy" />;
}
