import { ProductPage } from "../product-ui";
import { ProductStructuredData, productMetadata } from "../seo";

export const metadata = productMetadata("crossfit", "zh");

export default function Page() {
  return <><ProductStructuredData lang="zh" product="crossfit" /><ProductPage lang="zh" product="crossfit" /></>;
}
