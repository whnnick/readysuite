import { notFound } from "next/navigation";
import { ProductPage, ResourcePage } from "../../product-ui";
import { ProductStructuredData, productMetadata, resourceMetadata } from "../../seo";
import type { ProductKey } from "../../product-registry";

const products: Record<string, ProductKey> = {
  readytype: "readytype",
  readycheck: "readycheck",
  readydownloader: "readydownloader",
  "crossfit-whoop-video": "crossfit",
};
const resources = new Set(["downloads", "support", "privacy"] as const);
type ResourceKey = "downloads" | "support" | "privacy";

export function generateStaticParams() {
  return [...Object.keys(products), ...resources].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (products[slug]) return productMetadata(products[slug], "en");
  if (resources.has(slug as ResourceKey)) return resourceMetadata(slug as ResourceKey, "en");
  return {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products[slug];
  if (product) return <><ProductStructuredData lang="en" product={product} /><ProductPage lang="en" product={product} /></>;
  if (resources.has(slug as ResourceKey)) return <ResourcePage lang="en" page={slug as ResourceKey} />;
  notFound();
}
