import type { Metadata } from "next";
import { links, productLinks, routes, type ProductKey } from "./product-registry";
import type { GuideKey } from "./guide-content";
import type { Lang } from "./product-ui";

const baseUrl = "https://readysuite.vercel.app";

type SeoEntry = {
  title: string;
  description: string;
  keywords: string[];
};

export const guidePaths: Record<GuideKey, string> = {
  "macos-chinese-voice-input": "/guides/macos-chinese-voice-input",
  "codex-usage-limit": "/guides/codex-usage-limit",
  "download-youtube-instagram-mac": "/guides/download-youtube-instagram-mac",
};

const productSeo: Record<ProductKey, Record<Lang, SeoEntry & { image: string }>> = {
  readytype: {
    zh: { title: "ReadyType：Mac 中文 AI 语音输入工具｜ReadySuite", description: "双击 Option，在 Mac 任意输入框中完成中文语音输入、语音转文字、内容整理、英文翻译和 AI 任务整理。", keywords: ["Mac 语音输入", "macOS 中文语音输入", "AI 语音转文字", "ReadyType"], image: "/readytype-window-clean.png" },
    en: { title: "ReadyType: AI Voice Dictation for macOS | ReadySuite", description: "Double-press Option to dictate in any Mac text field, turn speech into polished writing, translate into English, or create clear AI tasks.", keywords: ["Mac voice dictation", "AI voice input for macOS", "speech to text Mac", "ReadyType"], image: "/readytype-window-clean.png" },
  },
  readycheck: {
    zh: { title: "ReadyCheck：Codex 额度、桌面 Widget 与提醒｜ReadySuite", description: "在 Mac 原生界面、菜单栏与可置顶 Widget 中查看 Codex 双额度、下一事件和本机消耗记录，自主设置额度与重置卡提醒，并提供 Windows 便携预览。", keywords: ["Codex 额度", "Codex Widget", "Codex 用量监控", "ReadyCheck"], image: "/readycheck-widget-zh.png" },
    en: { title: "ReadyCheck: Codex Quota, Desktop Widget and Reminders", description: "Track both Codex quotas, the next event and local consumption in a native Mac app, menu bar or pinned Widget. Includes configurable alerts and a separate Windows preview.", keywords: ["Codex usage monitor", "Codex desktop widget", "Codex limit tracker", "ReadyCheck"], image: "/readycheck-widget-en.png" },
  },
  readydownloader: {
    zh: { title: "ReadyDownloader 免费在线视频下载｜YouTube、Instagram", description: "免费保存有权下载的 YouTube、Instagram、Bilibili、TikTok 等公开视频。优先使用免安装网页版，也提供 Mac 客户端，支持画质选择与 iPhone 兼容输出；具体可用性取决于链接与平台限制。", keywords: ["免费在线视频下载", "YouTube 视频下载", "Instagram 视频下载", "ReadyDownloader 网页版"], image: "/readydownloader-web-0.2.0.png" },
    en: { title: "ReadyDownloader: Free Web and Mac Video Downloader", description: "Save authorized public videos from YouTube, Instagram, Bilibili and TikTok for free. Start online or use the Mac client, with quality and iPhone-compatible output options. Availability varies by source.", keywords: ["free online video downloader", "YouTube video downloader", "Instagram video downloader", "ReadyDownloader Web app"], image: "/readydownloader-web-0.2.0.png" },
  },
  crossfit: {
    zh: { title: "CrossFit WHOOP Video：4K 竖屏运动视频工作流", description: "使用 HyperFrames 模板、Codex Skill 和 WHOOP 风格动态 HUD 制作适合 Shorts、Reels 与 TikTok 的 9:16 竖屏 4K 运动短片。", keywords: ["CrossFit 视频制作", "WHOOP HUD", "4K 竖屏运动视频", "HyperFrames"], image: "/crossfit-digital-athlete.jpg" },
    en: { title: "CrossFit WHOOP Video: Vertical 4K Sports Video Workflow", description: "Create vertical 4K training edits for Shorts, Reels, and TikTok with HyperFrames templates, a Codex Skill, and animated WHOOP-style HUDs.", keywords: ["CrossFit video workflow", "WHOOP HUD", "vertical 4K sports video", "HyperFrames"], image: "/crossfit-digital-athlete.jpg" },
  },
};

const guideSeo: Record<GuideKey, Record<Lang, SeoEntry>> = {
  "macos-chinese-voice-input": {
    zh: { title: "Mac 中文语音输入指南：说完直接变成文字", description: "了解如何在 Mac 任意输入框中用中文语音直接输入、整理成文、翻译英文或生成 AI 任务。", keywords: ["Mac 中文语音输入", "Mac 语音转文字", "macOS 语音输入", "AI 语音输入"] },
    en: { title: "Chinese Voice Input on Mac: A Practical Guide", description: "Learn how to dictate Chinese in any Mac text field and turn speech into polished writing, translations, or AI tasks.", keywords: ["Chinese voice input Mac", "Mac speech to text", "AI dictation macOS", "voice typing Mac"] },
  },
  "codex-usage-limit": {
    zh: { title: "Codex 额度怎么看：消耗记录、Token 与重置时间", description: "理解 Codex 双额度、本机消耗记录、Token 用量和重置时间，通过菜单栏、Widget 与提醒掌握下一事件。", keywords: ["Codex 额度怎么看", "Codex Token 用量", "Codex 重置时间", "Codex 用量限制"] },
    en: { title: "How to Track Codex Limits, Token Usage, and Resets", description: "Understand Codex usage windows, longer-term token consumption, reset times, and practical monitoring options.", keywords: ["Codex usage limits", "Codex token usage", "Codex reset time", "Codex usage tracker"] },
  },
  "download-youtube-instagram-mac": {
    zh: { title: "在线下载 YouTube、Instagram 视频：画质与格式指南", description: "无需安装，在浏览器解析并保存有权下载的 YouTube、Instagram 等公开视频，选择最高画质、iPhone 兼容或指定格式。", keywords: ["在线下载 YouTube 视频", "Instagram 视频下载", "YouTube 最高画质下载", "iPhone 兼容视频"] },
    en: { title: "Download YouTube and Instagram Videos Online", description: "Save authorized public videos without installation and choose Best Quality, iPhone Compatible, or a specific format in your browser.", keywords: ["download YouTube videos online", "Instagram video downloader", "best quality video download", "iPhone compatible video"] },
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
  const title = lang === "zh" ? "ReadySuite AI 工具箱：Mac 语音输入、Codex 用量与视频下载" : "ReadySuite AI Toolkit: Dictation, Codex and Downloads";
  const description = lang === "zh"
    ? "ReadySuite 是面向 macOS 与 Windows 的 AI 工具箱，提供中文语音输入、Codex 额度与 Token 用量查看、多平台视频下载和运动内容制作工具。"
    : "ReadySuite is an AI toolkit for macOS and Windows, covering voice dictation, Codex usage tracking, multi-platform video downloads, and sports content production.";
  const keywords = lang === "zh"
    ? ["ReadySuite AI 工具箱", "Mac AI 工具", "中文语音输入", "Codex 用量", "视频下载工具"]
    : ["ReadySuite AI Toolkit", "AI tools for Mac", "voice dictation", "Codex usage tracker", "video downloader"];
  return {
    title: { absolute: title },
    description,
    keywords,
    category: "software",
    alternates: alternates("/", lang),
    openGraph: { title, description, siteName: "ReadySuite AI", type: "website", locale: lang === "zh" ? "zh_CN" : "en_US", url: path },
    twitter: { card: "summary", title, description },
  };
}

export function productMetadata(product: ProductKey, lang: Lang): Metadata {
  const seo = productSeo[product][lang];
  const path = localizedPath(routes[product], lang);
  return {
    title: { absolute: seo.title },
    description: seo.description,
    keywords: seo.keywords,
    category: "software",
    alternates: alternates(routes[product], lang),
    openGraph: { title: seo.title, description: seo.description, siteName: "ReadySuite AI", type: "website", locale: lang === "zh" ? "zh_CN" : "en_US", images: [{ url: seo.image }], url: path },
    twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: [seo.image] },
  };
}

export function resourceMetadata(page: "downloads" | "support" | "privacy", lang: Lang): Metadata {
  const values = {
    downloads: {
      zh: ["ReadySuite AI 工具箱下载｜macOS 与 Windows", "下载 ReadyType、ReadyCheck、ReadyDownloader，或获取 CrossFit WHOOP Video 工作流源码。"],
      en: ["ReadySuite AI Toolkit Downloads for macOS and Windows", "Download ReadyType, ReadyCheck, and ReadyDownloader, or get the CrossFit WHOOP Video workflow source."],
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
  return { title: { absolute: title }, description, alternates: alternates(basePath, lang), openGraph: { title, description, siteName: "ReadySuite AI", type: "website", locale: lang === "zh" ? "zh_CN" : "en_US", url: localizedPath(basePath, lang) }, twitter: { card: "summary", title, description } };
}

export function guideMetadata(guide: GuideKey, lang: Lang): Metadata {
  const seo = guideSeo[guide][lang];
  const basePath = guidePaths[guide];
  return { title: { absolute: seo.title }, description: seo.description, keywords: seo.keywords, alternates: alternates(basePath, lang), openGraph: { title: seo.title, description: seo.description, siteName: "ReadySuite AI", type: "article", locale: lang === "zh" ? "zh_CN" : "en_US", url: localizedPath(basePath, lang) }, twitter: { card: "summary", title: seo.title, description: seo.description } };
}

function JsonLd({ value }: { value: object | object[] }) {
  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} type="application/ld+json" />;
}

export function HomeStructuredData({ lang }: { lang: Lang }) {
  const url = `${baseUrl}${localizedPath("/", lang)}`;
  const description = lang === "zh"
    ? "面向 macOS 与 Windows 的 AI 工具箱。"
    : "An AI toolkit for macOS and Windows.";
  return <JsonLd value={[
    { "@context": "https://schema.org", "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "ReadySuite AI", alternateName: ["ReadySuite AI Toolkit", "ReadySuite AI 工具箱"], description, url: baseUrl, sameAs: ["https://github.com/whnnick"] },
    { "@context": "https://schema.org", "@type": "WebSite", "@id": `${baseUrl}/#website`, name: "ReadySuite AI Toolkit", alternateName: "ReadySuite AI 工具箱", description, url: baseUrl, inLanguage: ["zh-CN", "en"], publisher: { "@id": `${baseUrl}/#organization` } },
    { "@context": "https://schema.org", "@type": "WebPage", name: lang === "zh" ? "ReadySuite AI 工具箱" : "ReadySuite AI Toolkit", description, url, inLanguage: lang === "zh" ? "zh-CN" : "en", isPartOf: { "@id": `${baseUrl}/#website` }, about: { "@id": `${baseUrl}/#organization` } },
  ]} />;
}

const productSchema = {
  readytype: { name: "ReadyType", version: "1.5.1", operatingSystem: "macOS 14+", category: "ProductivityApplication" },
  readycheck: { name: "ReadyCheck", version: "0.5.4", operatingSystem: "macOS 14+, Windows", category: "DeveloperApplication" },
  readydownloader: { name: "ReadyDownloader", version: "0.2.2", operatingSystem: "Web browser, macOS 13+", category: "MultimediaApplication" },
  crossfit: { name: "CrossFit WHOOP Video", version: "1.0.11", operatingSystem: "macOS, Windows, Linux", category: "MultimediaApplication" },
} as const;

export function ProductStructuredData({ product, lang }: { product: ProductKey; lang: Lang }) {
  const seo = productSeo[product][lang];
  const item = productSchema[product];
  const pageUrl = `${baseUrl}${localizedPath(routes[product], lang)}`;
  const entity = product === "crossfit"
    ? { "@context": "https://schema.org", "@type": "SoftwareSourceCode", name: item.name, description: seo.description, codeRepository: productLinks[product].repository, programmingLanguage: "TypeScript", version: item.version, url: pageUrl, inLanguage: lang === "zh" ? "zh-CN" : "en" }
    : { "@context": "https://schema.org", "@type": "SoftwareApplication", name: item.name, description: seo.description, applicationCategory: item.category, operatingSystem: item.operatingSystem, softwareVersion: item.version, url: pageUrl, downloadUrl: product === "readydownloader" ? links.readydownloaderDownload : productLinks[product].primary, sameAs: productLinks[product].repository, brand: { "@type": "Brand", name: "ReadySuite AI" }, offers: { "@type": "Offer", price: "0", priceCurrency: "CNY" }, inLanguage: lang === "zh" ? "zh-CN" : "en" };
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "ReadySuite AI", item: `${baseUrl}${localizedPath("/", lang)}` },
    { "@type": "ListItem", position: 2, name: item.name, item: pageUrl },
  ] };
  return <JsonLd value={[entity, breadcrumb]} />;
}

export function GuideStructuredData({ guide, lang }: { guide: GuideKey; lang: Lang }) {
  const seo = guideSeo[guide][lang];
  const path = guidePaths[guide];
  const url = `${baseUrl}${localizedPath(path, lang)}`;
  return <JsonLd value={[
    { "@context": "https://schema.org", "@type": "Article", headline: seo.title, description: seo.description, keywords: seo.keywords.join(", "), datePublished: "2026-08-11", dateModified: "2026-10-28", inLanguage: lang === "zh" ? "zh-CN" : "en", mainEntityOfPage: url, author: { "@type": "Organization", name: "ReadySuite AI", url: baseUrl }, publisher: { "@type": "Organization", name: "ReadySuite AI", url: baseUrl } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "ReadySuite AI", item: `${baseUrl}${localizedPath("/", lang)}` },
      { "@type": "ListItem", position: 2, name: seo.title, item: url },
    ] },
  ]} />;
}
