import { notFound } from "next/navigation";
import { GuidePage } from "../../../product-ui";
import { GuideStructuredData, guideMetadata, guidePaths } from "../../../seo";
import type { GuideKey } from "../../../guide-content";

const guides = Object.keys(guidePaths) as GuideKey[];

export function generateStaticParams() {
  return guides.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!guides.includes(slug as GuideKey)) return {};
  return guideMetadata(slug as GuideKey, "en");
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!guides.includes(slug as GuideKey)) notFound();
  const guide = slug as GuideKey;
  return <><GuideStructuredData guide={guide} lang="en" /><GuidePage guide={guide} lang="en" /></>;
}
