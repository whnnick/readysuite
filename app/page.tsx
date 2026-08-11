import { HomePage } from "./product-ui";
import { HomeStructuredData, homeMetadata } from "./seo";

export const metadata = homeMetadata("zh");

export default function Page() {
  return <><HomeStructuredData lang="zh" /><HomePage lang="zh" /></>;
}
