import { ProductPage } from "../product-ui";
import { ProductStructuredData, productMetadata } from "../seo";

export const metadata = productMetadata("readycheck", "zh");

export default function Page() {
  return <><ProductStructuredData lang="zh" product="readycheck" /><ProductPage lang="zh" product="readycheck" /></>;
}
