import { ProductPage } from "../product-ui";
import { ProductStructuredData, productMetadata } from "../seo";

export const metadata = productMetadata("readydownloader", "zh");

export default function Page() {
  return <><ProductStructuredData lang="zh" product="readydownloader" /><ProductPage lang="zh" product="readydownloader" /></>;
}
