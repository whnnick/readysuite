import type { Metadata } from "next";
import { productLinks, routes, type ProductKey } from "./product-registry";
import type { GuideKey } from "./guide-content";
import type { Lang } from "./product-ui";

const baseUrl = "https://readysuite.vercel.app";

export const guidePaths: Record<GuideKey, string> = {
  "macos-chinese-voice-input": "/guides/macos-chinese-voice-input",
  "codex-usage-limit": "/guides/codex-usage-limit",
  "download-youtube-instagram-mac": "/guides/download-youtube-instagram-mac",
};

const productSeo: Record<ProductKey, Record<Lang, { title: string; description: string; image: string }>> = {
  readytype: {
    zh: { title: "ReadyType：macOS 中文 AI 语音输入工具", description: "双击 Option 在任意输入框中使用中文语音输入，支持直接转文字、整理成文、英文翻译和 AI 任务整理。", image: "/readytype-window-clean.png" },
    en: { title: "ReadyType: Chinese AI Voice Input for macOS", description: "Double-press Option to dictate in any text field, polish spoken thoughts, translate into English, or create clear AI tasks.", image: "/readytype-window-clean.png" },
  },
  readycheck: {
    zh: { title: "ReadyCheck：Codex 额度与 Token 用量监控", description: "在 macOS 与 Windows 查看 Codex 额度、Token 用量和重置时间，并通过菜单栏、Widget 和本地通知保持状态可见。", image: "/readycheck-preview-0.1.83.jpg" },
    en: { title: "ReadyCheck: Codex Limits and Token Usage Monitor", description: "Track Codex limits, token usage, reset times, and expiry reminders on macOS and Windows.", image: "/readycheck-preview-0.1.83.jpg" },
  },
  readydownloader: {
    zh: { title: "ReadyDownloader：YouTube、Instagram 视频下载工具", description: "免费保存 YouTube、Instagram、Bilibili、TikTok 等平台视频，并选择画质、iPhone 兼容格式和保存位置。", image: "/readydownloader-icon.png" },
    en: { title: "ReadyDownloader: YouTube and Instagram Video Downloader", description: "Save videos from YouTube, Instagram, Bilibili, TikTok, and other supported platforms with quality and format control.", image: "/readydownloader-icon.png" },
  },
  crossfit: {
    zh: { title: "CrossFit WHOOP Video：4K 竖屏运动视频工作流", description: "使用 HyperFrames 模板、Codex Skill 和 WHOOP 风格动态 HUD 制作 9:16 竖屏 4K 运动短片。", image: "/crossfit-digital-athlete.jpg" },
    en: { title: "CrossFit WHOOP Video: Vertical 4K Sports Video Workflow", description: "Create vertical 4K training edits with HyperFrames templates, a Codex Skill, and animated WHOOP-style HUDs.", image: "/crossfit-digital-athlete.jpg" },
  },
};

const guideSeo: Record<GuideKey, Record<Lang, { title: string; description: string }>> = {
  "macos-chinese-voice-input": {
    zh: { title: "Mac 中文语音输入指南：说完直接变成文字", description: "了解如何在 Mac 任意输入框中用中文语音直接输入、整理成文、翻译英文或生成 AI 任务。" },
    en: { title: "Chinese Voice Input on Mac: A Practical Guide", description: "Learn how to dictate Chinese in any Mac text field and turn speech into polished writing, translations, or AI tasks." },
  },
  "codex-usage-limit": {
    zh: { title: "Codex 额度怎么看：Token 用量与重置时间指南", description: "理解 Codex 额度窗口、Token 用量和主动重置时间，并通过菜单栏、Widget 与提醒持续查看。" },
    en: { title: "How to Track Codex Limits, Token Usage, and Resets", description: "Understand Codex usage windows, longer-term token consumption, reset times, and practical monitoring options." },
  },
  "download-youtube-instagram-mac": {
    zh: { title: "Mac 下载 YouTube、Instagram 视频：画质与格式指南", description: "在 Mac 上解析并保存有权下载的 YouTube、Instagram 等平台视频，选择最高画质或 iPhone 兼容格式。" },
    en: { title: "Download YouTube and Instagram Videos on Mac", description: "Learn how to save authorized videos on a Mac with format, quality, iPhone compatibility, proxy, and cookie options." },
  },
};

function localizedPath(path: string, lang: Lang) {
  return lang === "en" ? `/en${path === "/" ? "" : path}` : path;
}

function alternates(path: string, lang: Lang) {
  return {
    canonical: localizedPath(path, lang),
    languages: {
      "zh-CN": path,
      en: `/en${path === "/" ? "" : path}`,
      "x-default": path,
    },
  };
}

export function homeMetadata(lang: Lang): Metadata {
  const path = localizedPath("/", lang);
  const title = lang === "zh" ? "ReadySuite：macOS 与 Windows AI 工具" : "ReadySuite: Practical AI Tools for macOS and Windows";
  const description = lang === "zh"
    ? "ReadySuite 提供中文语音输入、Codex 用量查看、多平台视频下载和运动内容制作工具。"
    : "ReadySuite provides focused tools for voice input, Codex usage, multi-platform video downloads, and sports content production.";
  return { title: { absolute: title }, description, alternates: alternates("/", lang), openGraph: { title, description, siteName: "ReadySuite", type: "website", locale: lang === "zh" ? "zh_CN" : "en_US", url: path } };
}

export function productMetadata(product: ProductKey, lang: Lang): Metadata {
  const seo = productSeo[product][lang];
  const path = localizedPath(routes[product], lang);
  return {
    title: { absolute: seo.title },
    description: seo.description,
    alternates: alternates(routes[product], lang),
    openGraph: { title: seo.title, description: seo.description, siteName: "ReadySuite", type: "website", locale: lang === "zh" ? "zh_CN" : "en_US", images: [{ url: seo.image }], url: path },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [seo.image] },
  };
}

export function resourceMetadata(page: "downloads" | "support" | "privacy", lang: Lang): Metadata {
  const values = {
    downloads: {
      zh: ["ReadySuite 下载中心", "获取 ReadyType、ReadyCheck、ReadyDownloader 与 CrossFit WHOOP Video 的最新版本或源码。"],
      en: ["ReadySuite Downloads", "Get the latest ReadyType, ReadyCheck, ReadyDownloader, and CrossFit WHOOP Video releases or source."],
    },
    support: {
      zh: ["ReadySuite 支持与反馈", "通过对应 GitHub Issues 获取 ReadySuite 产品支持并提交公开反馈。"],
      en: ["ReadySuite Support", "Get support and submit public feedback through each ReadySuite product's GitHub Issues."],
    },
    privacy: {
      zh: ["ReadySuite 隐私说明", "了解 ReadySuite 官网与各产品的权限、外部服务和数据处理边界。"],
      en: ["ReadySuite Privacy", "Understand the website and product boundaries for permissions, external services, and data handling."],
    },
  } as const;
  const [title, description] = values[page][lang];
  const basePath = `/${page}`;
  return { title: { absolute: title }, description, alternates: alternates(basePath, lang), openGraph: { title, description, siteName: "ReadySuite", type: "website", locale: lang === "zh" ? "zh_CN" : "en_US", url: localizedPath(basePath, lang) } };
}

export function guideMetadata(guide: GuideKey, lang: Lang): Metadata {
  const seo = guideSeo[guide][lang];
  const basePath = guidePaths[guide];
  return { title: { absolute: seo.title }, description: seo.description, alternates: alternates(basePath, lang), openGraph: { title: seo.title, description: seo.description, siteName: "ReadySuite", type: "article", locale: lang === "zh" ? "zh_CN" : "en_US", url: localizedPath(basePath, lang) } };
}

function JsonLd({ value }: { value: object | object[] }) {
  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} type="application/ld+json" />;
}

export function HomeStructuredData({ lang }: { lang: Lang }) {
  const url = `${baseUrl}${localizedPath("/", lang)}`;
  return <JsonLd value={[
    { "@context": "https://schema.org", "@type": "Organization", name: "ReadySuite", url: baseUrl, sameAs: ["https://github.com/whnnick"] },
    { "@context": "https://schema.org", "@type": "WebSite", name: "ReadySuite", url, inLanguage: lang === "zh" ? "zh-CN" : "en" },
  ]} />;
}

const productSchema = {
  readytype: { name: "ReadyType", version: "1.5.0", operatingSystem: "macOS 14+", category: "ProductivityApplication" },
  readycheck: { name: "ReadyCheck", version: "0.1.83", operatingSystem: "macOS, Windows", category: "DeveloperApplication" },
  readydownloader: { name: "ReadyDownloader", version: "0.1.4", operatingSystem: "macOS 13+, Windows", category: "MultimediaApplication" },
  crossfit: { name: "CrossFit WHOOP Video", version: "1.0.11", operatingSystem: "macOS, Windows, Linux", category: "MultimediaApplication" },
} as const;

export function ProductStructuredData({ product, lang }: { product: ProductKey; lang: Lang }) {
  const seo = productSeo[product][lang];
  const item = productSchema[product];
  const pageUrl = `${baseUrl}${localizedPath(routes[product], lang)}`;
  const entity = product === "crossfit"
    ? { "@context": "https://schema.org", "@type": "SoftwareSourceCode", name: item.name, description: seo.description, codeRepository: productLinks[product].secondary, programmingLanguage: "TypeScript", version: item.version, url: pageUrl, inLanguage: lang === "zh" ? "zh-CN" : "en" }
    : { "@context": "https://schema.org", "@type": "SoftwareApplication", name: item.name, description: seo.description, applicationCategory: item.category, operatingSystem: item.operatingSystem, softwareVersion: item.version, url: pageUrl, downloadUrl: productLinks[product].primary, offers: { "@type": "Offer", price: "0", priceCurrency: "CNY" }, inLanguage: lang === "zh" ? "zh-CN" : "en" };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReadySuite", item: `${baseUrl}${localizedPath("/", lang)}` },
    { "@type": "ListItem", position: 2, name: item.name, item: pageUrl },
  ] };
  return <JsonLd value={[entity, breadcrumb]} />;
}

export function GuideStructuredData({ guide, lang }: { guide: GuideKey; lang: Lang }) {
  const seo = guideSeo[guide][lang];
  const path = guidePaths[guide];
  const url = `${baseUrl}${localizedPath(path, lang)}`;
  return <JsonLd value={[
    { "@context": "https://schema.org", "@type": "Article", headline: seo.title, description: seo.description, datePublished: "2026-08-11", dateModified: "2026-08-11", inLanguage: lang === "zh" ? "zh-CN" : "en", mainEntityOfPage: url, author: { "@type": "Organization", name: "ReadySuite" }, publisher: { "@type": "Organization", name: "ReadySuite", url: baseUrl } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "ReadySuite", item: `${baseUrl}${localizedPath("/", lang)}` },
      { "@type": "ListItem", position: 2, name: lang === "zh" ? "指南" : "Guides", item: url },
      { "@type": "ListItem", position: 3, name: seo.title, item: url },
    ] },
  ]} />;
}
