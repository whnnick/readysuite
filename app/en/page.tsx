import { HomePage } from "../product-ui";
import { HomeStructuredData, homeMetadata } from "../seo";

export const metadata = homeMetadata("en");

export default function Page() {
  return <><HomeStructuredData lang="en" /><HomePage lang="en" /></>;
}
