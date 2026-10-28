"use client";

import { track } from "@vercel/analytics";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowDownToLine,
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  Film,
  Folder,
  Github,
  Globe2,
  Gauge,
  Keyboard,
  Languages,
  Link2,
  LockKeyhole,
  Monitor,
  PanelTop,
  RefreshCcw,
  ShieldCheck,
  Smartphone,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import {
  links,
  productLinks,
  productOrder,
  routes,
  type ProductKey,
} from "./product-registry";
import { guideContent, type GuideKey } from "./guide-content";

export type Lang = "zh" | "en";
type ResourceKey = "downloads" | "support" | "privacy";
type CampaignContext = Partial<Record<"campaign" | "medium" | "source", string>>;
const languageCookie = "readysuite-language";

const copy = {
  zh: {
    nav: {
      products: "产品",
      downloads: "下载",
      support: "支持",
      github: "GitHub",
      readytype: "ReadyType",
      readycheck: "ReadyCheck",
      readydownloader: "ReadyDownloader",
      crossfit: "CrossFit WHOOP Video",
    },
    home: {
      eyebrow: "让常用工作，少几步。",
      title: "ReadySuite",
      body: "开口输入，看清 Codex 额度，保存需要的视频。找到适合你的工具，接着把事情做好。",
      primary: "探索产品",
      secondary: "查看下载",
      productsLabel: "选择产品",
      productsTitle: "从你要做的事开始。",
      openSourceTitle: "开源、透明，并持续更新。",
      openSourceBody: "版本、下载、更新记录和反馈入口均由对应的 GitHub 项目维护。",
      openSourceAction: "访问 GitHub",
    },
    products: {
      readytype: {
        name: "ReadyType",
        version: "1.5.1",
        platform: "macOS 14+",
        eyebrow: "语音输入",
        title: "说出想法，\n直接成文。",
        body: "双击 Option 开始说话，再次双击完成输出。直接转文字、整理成文、翻译成英文或写给 AI，无需离开当前输入框。",
        homeTitle: "双击 Option，说出想法。",
        homeBody: "口述一段想法，直接转成文字、整理成文或翻译成英文，回到你正在使用的输入框。",
        homeAction: "了解 ReadyType",
        primary: "下载 ReadyType",
        secondary: "查看源码",
        highlights: ["四种输出方式", "自动选择", "高精度语音包"],
        sectionLabel: "不只是转写",
        sectionTitle: "从自然表达，到可以直接发送的文字。",
        features: [
          ["双击 Option", "在任意输入框中开始和结束语音输入，按 Esc 随时取消。"],
          ["四种输出", "直接转文字、整理成文、翻译成英文，以及整理成适合发给 AI 的任务说明。"],
          ["自动选择", "短句优先速度，高精度语音包准备好时自动提升识别准确率。"],
          ["长段口述也顺畅", "较长输入并行准备快速与高精度识别结果，在有限等待内选择完整候选。"],
        ],
        spotlight: "按自己的节奏使用",
        spotlightValue: "直接转写，或交给 AI 整理。",
        spotlightBody: "AI 输出默认使用 DeepSeek V4 Flash 与你自己的密钥，费用按实际用量和服务商价格计算。直接转文字无需调用 DeepSeek。",
        notesTitle: "ReadyType 1.5.1",
        notes: [
          "支持 macOS 14 及以上版本。",
          "DeepSeek 密钥安全存储在 macOS 钥匙串。",
          "公开源码构建默认不发送匿名统计。",
          "通过 GitHub Releases 获取最新 DMG。",
        ],
        finalTitle: "少打字，多表达。",
        finalBody: "下载 ReadyType，把自然口述直接变成可用文字。",
      },
      readycheck: {
        name: "ReadyCheck",
        version: "0.5.4",
        platform: "macOS 14+ · Windows 预览版",
        eyebrow: "Codex 用量",
        title: "看清额度，\n安排下一步。",
        body: "5 小时与 7 天额度、重置时间和下一件需要关注的事，放在同一个原生界面里。通过菜单栏、可置顶 Widget 或刘海，工作时也能一眼确认。",
        homeTitle: "Codex 额度，随时可见。",
        homeBody: "一眼看清双额度与下一事件。把 Widget 留在桌面，让重置时间和最近消耗随时可见。",
        homeAction: "了解 ReadyCheck",
        primary: "下载 ReadyCheck",
        secondary: "查看源码",
        highlights: ["5 小时 / 7 天额度", "可置顶 Widget", "额度与到期提醒"],
        sectionLabel: "始终可见",
        sectionTitle: "把额度状态放在需要它的地方。",
        features: [
          ["下一件事，一处看清", "概览、菜单栏与 Widget 共享下一事件，显示预计重置、符合条件的重置卡使用窗口或需要处理的问题。"],
          ["Widget 随桌面调整", "拖到屏幕边缘变成窄条，移回桌面变成气泡；信息卡可拖拽并保持展开，带最近一小时消耗图。"],
          ["区分额度与 Token", "查看本机记录的 24 小时、7 天和 30 天额度消耗；账户 Token 数据可用时单独展示，两者各有含义。"],
          ["提醒由你决定", "低额度、恢复和重置卡到期分别设置；可查看通知记录，自动使用到期卡需要当前账户单独授权。"],
        ],
        spotlight: "少一次来回检查",
        spotlightValue: "状态常驻，提醒有据。",
        spotlightBody: "额度刷新只读取已授权数据，不发送模型生成请求。提醒记录和重置卡结果各自保留，方便需要时核对。",
        notesTitle: "ReadyCheck 0.5.4",
        notes: [
          "macOS 14+ Apple Silicon 原生应用；Windows x64 提供保留原界面的便携预览版。",
          "通过 ChatGPT 账户 OAuth 授权，Mac 凭据保存在系统钥匙串。",
          "可独立设置低额度、恢复及 72/48/24/12 小时重置卡到期提醒。",
          "发布页提供自签名预览包与安装指南，首次启动可能需要手动确认。",
        ],
        finalTitle: "专注构建，不再反复检查额度。",
        finalBody: "下载 ReadyCheck，让 Codex 使用状态保持可见。",
      },
      readydownloader: {
        name: "ReadyDownloader",
        version: "0.2.2",
        platform: "Web · macOS 13+ Apple Silicon",
        eyebrow: "免安装 Web 版",
        title: "粘贴链接，\n保存需要的视频。",
        body: "免费保存你有权下载的 YouTube、Instagram、Bilibili、TikTok 等平台视频。先用免安装网页版解析公开链接，再选择画质或 iPhone 兼容格式；具体链接的可用性取决于来源平台。",
        homeTitle: "多平台视频，免费保存。",
        homeBody: "粘贴 YouTube、Instagram 等公开视频链接，先用网页版下载；需要本机网络环境时，选用 Mac 客户端。",
        homeAction: "了解 ReadyDownloader",
        primary: "立即使用网页版",
        secondary: "下载 macOS 客户端",
        highlights: ["无需安装", "最高画质 / iPhone 兼容", "临时文件 24 小时清理"],
        sectionLabel: "网页版优先",
        sectionTitle: "从解析到下载，都在浏览器完成。",
        features: [
          ["无需安装", "打开网页即可使用，粘贴受支持的公开视频链接后查看可用画质与格式。"],
          ["三种下载方式", "选择最高画质、iPhone 兼容或指定格式；服务端按需完成音视频合并与兼容转换。"],
          ["保存到手边", "下载完成后通过限时链接保存文件，临时文件私有存储，并按 24 小时保留规则清理。"],
          ["网页与 Mac 各有所长", "网页适合免安装保存公开内容；Mac 客户端使用本机网络，可配置代理与自行导入的 Cookie。"],
        ],
        spotlight: "立即在线使用",
        spotlightValue: "先试网页版，随时选择 Mac。",
        spotlightBody: "YouTube 可能对云端请求进行机器人验证。网页版会提供明确提示，可改用本机客户端；具体链接、地区与来源站点变化会影响可用性。",
        notesTitle: "ReadyDownloader 0.2.2",
        notes: [
          "Web 版已在 readydownloader.vercel.app 正式上线，并提供中英文界面。",
          "macOS 13+ Apple Silicon 客户端继续通过 GitHub Releases 提供。",
          "网页版适用于受支持的公开视频；仅保存自己拥有或获得许可的内容。",
          "Web 版限制单个成品不超过 500 MB，并按 24 小时规则清理临时文件。",
        ],
        finalTitle: "不安装，也能直接下载。",
        finalBody: "打开 ReadyDownloader 网页版，粘贴公开视频链接并选择适合的下载方式。",
      },
      crossfit: {
        name: "CrossFit WHOOP Video",
        version: "1.0.11",
        platform: "HyperFrames · Codex · OpenClaw",
        eyebrow: "运动短片工作流",
        title: "把训练片段，\n做成数据短片。",
        body: "用可复用的 9:16 4K 模板、Codex Skill 和 WHOOP 风格动态 HUD，把训练素材制作成适合 Shorts、Reels 与 TikTok 的运动短片。",
        homeTitle: "让训练片段，带上表现数据。",
        homeBody: "用 HyperFrames、Codex 和 OpenClaw 复用完整制作流程，把训练片段转成带 WHOOP HUD 的运动短片。",
        homeAction: "了解制作流程",
        primary: "查看制作指南",
        secondary: "查看源码",
        highlights: ["9:16 4K", "10 套 HUD", "Codex / OpenClaw"],
        sectionLabel: "完整工作流",
        sectionTitle: "从素材检查，到电影感运动成片。",
        features: [
          ["HyperFrames 模板", "替换素材和数据后即可复用同一套竖屏 4K composition。"],
          ["Codex Skill", "让 Codex 按既定方法检查素材、挑选动作、安排 HUD 并验证输出。"],
          ["10 套 HUD", "包含全息矩阵、速度 BPM、恢复环和冲击标题等数据视觉预设。"],
          ["多种数据来源", "支持 WHOOP、Apple Health 导出、FIT、TCX、GPX、CSV 和手动指标。"],
        ],
        spotlight: "三种使用方式",
        spotlightValue: "模板 · Skill · Plugin",
        spotlightBody: "既可在本地修改模板，也可让 Codex 或 OpenClaw 按工作流完成制作。",
        notesTitle: "CrossFit WHOOP Video 1.0.11",
        notes: [
          "支持 9:16 竖屏 4K 运动视频制作。",
          "提供 Codex Skill 与 Plugin bundle。",
          "提供 OpenClaw 使用参考流程。",
          "使用隐私安全的合成预览素材。",
        ],
        finalTitle: "让运动数据成为画面的一部分。",
        finalBody: "打开项目，选择模板、HUD 和适合你的制作方式。",
      },
    },
    resources: {
      downloads: {
        eyebrow: "下载",
        title: "获取最新版本。",
        body: "每个产品独立发布。应用通过 GitHub Releases 分发，工作流项目直接进入对应仓库。",
      },
      support: {
        eyebrow: "支持",
        title: "按产品提交问题。",
        body: "GitHub Issues 是公开反馈入口。提交前请移除 API Key、账号信息、私人内容和本地路径。",
      },
      privacy: {
        eyebrow: "隐私",
        title: "清楚说明数据边界。",
        body: "ReadySuite 官网不托管用户数据。产品仅在对应功能需要时使用系统权限或外部服务。",
      },
    },
    footer: {
      line: "© 2026 ReadySuite",
      note: "源码、下载与更新记录由对应 GitHub 项目维护。",
      privacy: "隐私",
    },
  },
  en: {
    nav: {
      products: "Products",
      downloads: "Downloads",
      support: "Support",
      github: "GitHub",
      readytype: "ReadyType",
      readycheck: "ReadyCheck",
      readydownloader: "ReadyDownloader",
      crossfit: "CrossFit WHOOP Video",
    },
    home: {
      eyebrow: "Useful tools. Fewer steps.",
      title: "ReadySuite",
      body: "Speak your thoughts, check Codex quota, and save the videos you need. Find your tool and get back to work.",
      primary: "Explore products",
      secondary: "View downloads",
      productsLabel: "Choose a product",
      productsTitle: "Start with what you want to do.",
      openSourceTitle: "Open, transparent, and continuously updated.",
      openSourceBody: "Versions, downloads, changelogs, and feedback are maintained in each product's GitHub repository.",
      openSourceAction: "Visit GitHub",
    },
    products: {
      readytype: {
        name: "ReadyType",
        version: "1.5.1",
        platform: "macOS 14+",
        eyebrow: "Voice input",
        title: "Speak naturally. Get usable text.",
        body: "Double-press Option to start and finish. Dictate, polish writing, translate into English, or create an AI-ready task without leaving the current text field.",
        homeTitle: "Double-press Option. Speak your mind.",
        homeBody: "Dictate, polish, or translate a thought into English, then send the result straight to the text field you are using.",
        homeAction: "Explore ReadyType",
        primary: "Download ReadyType",
        secondary: "View source",
        highlights: ["Four output modes", "Automatic selection", "High-accuracy model"],
        sectionLabel: "Beyond transcription",
        sectionTitle: "From natural speech to text ready to send.",
        features: [
          ["Double-press Option", "Start and finish voice input in any text field, and press Esc to cancel."],
          ["Four outputs", "Direct dictation, polished writing, English translation, and clear AI-ready instructions."],
          ["Automatic selection", "Short phrases prioritize speed; the high-accuracy model is selected when it is ready and useful."],
          ["Longer thoughts, less waiting", "Longer input prepares fast and high-accuracy recognition in parallel, choosing complete candidates within a bounded wait."],
        ],
        spotlight: "Work at your own pace",
        spotlightValue: "Dictate directly. Or let AI polish it.",
        spotlightBody: "AI outputs use DeepSeek V4 Flash and your own key. Cost depends on actual usage and provider pricing; direct dictation requires no DeepSeek call.",
        notesTitle: "ReadyType 1.5.1",
        notes: [
          "Supports macOS 14 and later.",
          "Stores the DeepSeek key securely in macOS Keychain.",
          "Public source builds disable anonymous analytics by default.",
          "The latest DMG is available through GitHub Releases.",
        ],
        finalTitle: "Type less. Express more.",
        finalBody: "Download ReadyType and turn natural speech into usable text.",
      },
      readycheck: {
        name: "ReadyCheck",
        version: "0.5.4",
        platform: "macOS 14+ · Windows preview",
        eyebrow: "Codex usage",
        title: "See your quota. Know what comes next.",
        body: "Both 5-hour and 7-day quotas, reset times, and your next event in one native interface. Keep a menu-bar summary, pinned Widget, or notch view within reach as you work.",
        homeTitle: "Codex quota, always in sight.",
        homeBody: "See both quotas and the next event at a glance. Keep a Widget on your desktop for reset times and recent consumption.",
        homeAction: "Explore ReadyCheck",
        primary: "Download ReadyCheck",
        secondary: "View source",
        highlights: ["5-hour / 7-day quotas", "Pinned Widget", "Quota and expiry alerts"],
        sectionLabel: "Always visible",
        sectionTitle: "Put usage status where you need it.",
        features: [
          ["One shared next event", "Overview, menu, and Widget share the expected reset, a conditional card-use window, or an issue needing attention."],
          ["A Widget that adapts", "Drag to an edge for a slim strip or inward for a bubble. Move and pin details, including the last-hour consumption chart."],
          ["Quota and Tokens, clearly separated", "Review locally recorded quota consumption over 24 hours, 7 days, or 30 days. Account Token data appears separately when available."],
          ["Reminders you control", "Set low-quota, recovery, and expiry alerts independently. Inspect notification records; automatic card use needs account-specific consent."],
        ],
        spotlight: "One less interruption",
        spotlightValue: "Visible status. Traceable reminders.",
        spotlightBody: "Quota refresh reads authorized data without model-generation requests. Notification records and reset-card outcomes remain separate and available to inspect.",
        notesTitle: "ReadyCheck 0.5.4",
        notes: [
          "Native Mac app for macOS 14+ Apple Silicon; Windows x64 offers a portable preview with its previous interface.",
          "Authorize your ChatGPT account with OAuth; Mac credentials stay in Keychain.",
          "Control low-quota, recovery, and 72/48/24/12-hour reset-card expiry reminders independently.",
          "Self-signed preview packages and installation guidance are available in Releases; first launch may need manual approval.",
        ],
        finalTitle: "Stay focused on building.",
        finalBody: "Download ReadyCheck and keep Codex usage visible.",
      },
      readydownloader: {
        name: "ReadyDownloader",
        version: "0.2.2",
        platform: "Web · macOS 13+ Apple Silicon",
        eyebrow: "No-install Web app",
        title: "Paste a link. Keep the video.",
        body: "Save authorized videos from YouTube, Instagram, Bilibili, TikTok, and more for free. Start with the no-install Web app, then choose quality or an iPhone-compatible format. Availability depends on the source URL.",
        homeTitle: "Videos from your platforms. Saved for free.",
        homeBody: "Start with a public YouTube or Instagram link in the Web app. Choose the Mac client when you need your local network environment.",
        homeAction: "Explore ReadyDownloader",
        primary: "Use the Web app",
        secondary: "Download the macOS app",
        highlights: ["No installation", "Best quality / iPhone compatible", "24-hour temporary files"],
        sectionLabel: "Web first",
        sectionTitle: "Analyze and download without leaving your browser.",
        features: [
          ["No installation", "Open the Web app, paste a supported public media URL, and inspect the available quality and format options."],
          ["Three download modes", "Choose Best Quality, iPhone Compatible, or Selected Format, with server-side merge and conversion when needed."],
          ["Save it where you need it", "Save the finished file through an expiring link. Temporary files stay private and follow a 24-hour cleanup rule."],
          ["Web and Mac, by task", "Use the Web for no-install public downloads. The Mac client uses your local network and supports proxy settings and your own cookie import."],
        ],
        spotlight: "Use it online",
        spotlightValue: "Start on the Web. Choose Mac when needed.",
        spotlightBody: "YouTube may challenge cloud requests with bot checks. The Web app explains the issue and points to the local client. Availability varies by URL, region, and source changes.",
        notesTitle: "ReadyDownloader 0.2.2",
        notes: [
          "The bilingual Web app is live in production at readydownloader.vercel.app.",
          "The macOS 13+ Apple Silicon client remains available through GitHub Releases.",
          "The Web app handles supported public media; save only content you own or are authorized to download.",
          "Web outputs are capped at 500 MB and follow a 24-hour temporary-file cleanup rule.",
        ],
        finalTitle: "Download without installing an app.",
        finalBody: "Open ReadyDownloader on the Web, paste a public media URL, and choose the download mode that fits.",
      },
      crossfit: {
        name: "CrossFit WHOOP Video",
        version: "1.0.11",
        platform: "HyperFrames · Codex · OpenClaw",
        eyebrow: "Sports video workflow",
        title: "Turn training footage into data-rich films.",
        body: "Use reusable 9:16 4K templates, a Codex Skill, and animated WHOOP-style HUDs to produce training edits for Shorts, Reels, and TikTok.",
        homeTitle: "Put performance data in the picture.",
        homeBody: "Reuse a complete HyperFrames, Codex, and OpenClaw workflow to turn training footage into WHOOP-style sports edits.",
        homeAction: "Explore the workflow",
        primary: "Read the production guide",
        secondary: "View source",
        highlights: ["9:16 4K", "10 HUD presets", "Codex / OpenClaw"],
        sectionLabel: "Complete workflow",
        sectionTitle: "From footage review to a cinematic sports edit.",
        features: [
          ["HyperFrames template", "Replace footage and data while reusing the same vertical 4K composition."],
          ["Codex Skill", "Guide Codex through footage review, action selection, HUD timing, and output validation."],
          ["10 HUD presets", "Includes holographic matrix, speed BPM, recovery orbit, and impact-title treatments."],
          ["Multiple data sources", "Supports WHOOP, Apple Health export, FIT, TCX, GPX, CSV, and manual metrics."],
        ],
        spotlight: "Three ways to use it",
        spotlightValue: "Template · Skill · Plugin",
        spotlightBody: "Edit the template locally or let Codex and OpenClaw follow the reusable production workflow.",
        notesTitle: "CrossFit WHOOP Video 1.0.11",
        notes: [
          "Supports vertical 9:16 4K sports video production.",
          "Includes a Codex Skill and plugin bundle.",
          "Includes an OpenClaw reference workflow.",
          "Uses privacy-safe synthetic preview assets.",
        ],
        finalTitle: "Make performance data part of the picture.",
        finalBody: "Open the project and choose the template, HUD, and workflow that fits.",
      },
    },
    resources: {
      downloads: {
        eyebrow: "Downloads",
        title: "Get the latest version.",
        body: "Each product is released independently. Apps use GitHub Releases, while the workflow project opens its repository.",
      },
      support: {
        eyebrow: "Support",
        title: "Submit feedback by product.",
        body: "GitHub Issues are public. Remove API keys, account data, private content, and local paths before submitting.",
      },
      privacy: {
        eyebrow: "Privacy",
        title: "Clear data boundaries.",
        body: "The ReadySuite website does not host user data. Products use system permissions or external services only when required by a feature.",
      },
    },
    footer: {
      line: "© 2026 ReadySuite",
      note: "Source, downloads, and release records are maintained in each GitHub project.",
      privacy: "Privacy",
    },
  },
} as const;

const featureIcons: Record<ProductKey, readonly LucideIcon[]> = {
  readytype: [Keyboard, Languages, Sparkles, WandSparkles],
  readycheck: [PanelTop, Monitor, Gauge, RefreshCcw],
  readydownloader: [Link2, Download, Smartphone, Folder],
  crossfit: [Film, WandSparkles, Activity, Gauge],
};

function externalLinkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
}

function localizedHref(href: string, lang: Lang) {
  if (lang === "zh" || href.startsWith("#") || !href.startsWith("/")) {
    return href;
  }
  return href === "/" ? "/en" : `/en${href}`;
}

const campaignStorageKey = "readysuite-campaign";

function sanitizeCampaignValue(value: string | null) {
  return value?.trim().slice(0, 80) || undefined;
}

function getCampaignContext(): CampaignContext {
  const params = new URLSearchParams(window.location.search);
  const current = {
    campaign: sanitizeCampaignValue(params.get("utm_campaign")),
    medium: sanitizeCampaignValue(params.get("utm_medium")),
    source: sanitizeCampaignValue(params.get("utm_source")),
  };

  if (Object.values(current).some(Boolean)) {
    try {
      sessionStorage.setItem(campaignStorageKey, JSON.stringify(current));
    } catch {
      // Attribution remains available for the current page when storage is disabled.
    }
    return current;
  }

  try {
    return JSON.parse(sessionStorage.getItem(campaignStorageKey) || "{}");
  } catch {
    return {};
  }
}

function eventProperties(properties: Record<string, string>) {
  const campaign = getCampaignContext();
  return Object.fromEntries(
    Object.entries({ ...properties, ...campaign }).filter(([, value]) => Boolean(value)),
  );
}

function productFromPath(path: string): ProductKey | "readysuite" {
  if (path.includes("readytype")) return "readytype";
  if (path.includes("readycheck")) return "readycheck";
  if (path.includes("readydownloader")) return "readydownloader";
  if (path.includes("crossfit-whoop-video")) return "crossfit";
  return "readysuite";
}

function clickPlacement(anchor: HTMLAnchorElement) {
  if (anchor.closest(".site-header")) return "header";
  if (anchor.closest(".site-footer")) return "footer";
  if (anchor.closest(".hero-actions")) return "hero";
  if (anchor.closest(".release-section")) return "release";
  if (anchor.closest(".resource-list")) return "resource_list";
  if (anchor.closest(".product-showcase")) return "product_showcase";
  return "body";
}

function PromotionAnalytics() {
  useEffect(() => {
    getCampaignContext();

    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;

      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      const destination = new URL(href, window.location.href);
      const baseProperties = {
        page: window.location.pathname,
        placement: clickPlacement(anchor),
        product: productFromPath(`${destination.hostname}${destination.pathname}${destination.hash}`),
      };

      if (destination.origin === window.location.origin) {
        if (Object.values(routes).includes(destination.pathname)) {
          track("product_open", eventProperties(baseProperties));
        } else if (destination.pathname === "/downloads") {
          track("downloads_open", eventProperties(baseProperties));
        } else if (destination.hash === "#products") {
          track("products_explore", eventProperties(baseProperties));
        }
        return;
      }

      if (destination.hostname === "readydownloader.vercel.app") {
        track("web_app_open", eventProperties(baseProperties));
      } else if (destination.pathname.endsWith("/releases/latest")) {
        track("download_click", eventProperties(baseProperties));
      } else if (destination.pathname.endsWith("/releases")) {
        track("releases_click", eventProperties(baseProperties));
      } else if (destination.pathname.endsWith("/issues")) {
        track("support_click", eventProperties(baseProperties));
      } else if (destination.hash === "#readme" || destination.pathname.includes("/docs/")) {
        track("docs_click", eventProperties(baseProperties));
      } else {
        track("github_click", eventProperties(baseProperties));
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

function MotionObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      if (reduceMotion) {
        document
          .querySelectorAll<HTMLVideoElement>("[data-motion-video]")
          .forEach((video) => video.pause());
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.01 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}

function LanguageToggle({
  lang,
}: {
  lang: Lang;
}) {
  const changeLanguage = (nextLang: Lang) => {
    if (nextLang !== lang) {
      track(
        "language_change",
        eventProperties({
          language: nextLang === "zh" ? "zh-CN" : "en",
          page: window.location.pathname,
        }),
      );
    }
    const { hash, pathname, search } = window.location;
    document.cookie = `${languageCookie}=${nextLang}; Max-Age=31536000; Path=/; SameSite=Lax; Secure`;
    const unprefixedPath = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
    const nextPath = nextLang === "en"
      ? unprefixedPath === "/" ? "/en" : `/en${unprefixedPath}`
      : unprefixedPath;
    window.location.assign(`${nextPath}${search}${hash}`);
  };

  return (
    <div className="language-toggle" aria-label="Language">
      <button
        aria-pressed={lang === "zh"}
        className={lang === "zh" ? "is-active" : ""}
        onClick={() => changeLanguage("zh")}
        type="button"
      >
        中文
      </button>
      <button
        aria-pressed={lang === "en"}
        className={lang === "en" ? "is-active" : ""}
        onClick={() => changeLanguage("en")}
        type="button"
      >
        EN
      </button>
    </div>
  );
}

function Button({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "light";
}) {
  return (
    <a
      className={`site-button site-button-${variant}`}
      href={href}
      {...externalLinkProps(href)}
    >
      {children}
    </a>
  );
}

function Header({
  activeProduct,
  lang,
}: {
  activeProduct?: ProductKey;
  lang: Lang;
}) {
  const t = copy[lang].nav;

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-link" href={localizedHref("/", lang)} aria-label="ReadySuite home">
          <span className="brand-mark">R</span>
          <span className="brand-name">ReadySuite</span>
        </a>

        <div className="nav-center">
          <details className="product-menu">
            <summary>
              {t.products}
              <ChevronDown size={14} />
            </summary>
            <div className="product-menu-panel">
              {productOrder.map((key) => (
                <a
                  className={activeProduct === key ? "is-active" : ""}
                  href={localizedHref(routes[key], lang)}
                  key={key}
                >
                  <span>{copy[lang].products[key].name}</span>
                  <small>
                    {copy[lang].products[key].version} ·{" "}
                    {copy[lang].products[key].eyebrow}
                  </small>
                </a>
              ))}
            </div>
          </details>
          <a className="nav-link" href={localizedHref("/downloads", lang)}>
            {t.downloads}
          </a>
          <a className="nav-link" href={localizedHref("/support", lang)}>
            {t.support}
          </a>
        </div>

        <div className="nav-actions">
          <LanguageToggle lang={lang} />
          <a
            className="nav-github"
            href={activeProduct ? productLinks[activeProduct].repository : links.profile}
            {...externalLinkProps(
              activeProduct ? productLinks[activeProduct].repository : links.profile,
            )}
          >
            <Github size={16} />
            <span>{t.github}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <a className="footer-brand" href={localizedHref("/", lang)}>
            ReadySuite
          </a>
          <p>{t.footer.line}</p>
          <p>{t.footer.note}</p>
        </div>
        <div className="footer-links">
          <a href={localizedHref("/readytype", lang)}>ReadyType</a>
          <a href={localizedHref("/readycheck", lang)}>ReadyCheck</a>
          <a href={localizedHref("/readydownloader", lang)}>ReadyDownloader</a>
          <a href={localizedHref("/crossfit-whoop-video", lang)}>CrossFit WHOOP Video</a>
          <a href={localizedHref("/downloads", lang)}>{t.nav.downloads}</a>
          <a href={localizedHref("/support", lang)}>{t.nav.support}</a>
          <a href={localizedHref("/privacy", lang)}>{t.footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
}

function Shell({
  activeProduct,
  children,
  lang,
}: {
  activeProduct?: ProductKey;
  children: ReactNode;
  lang: Lang;
}) {
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  return (
    <main className="site-shell" lang={lang === "zh" ? "zh-CN" : "en"}>
      <PromotionAnalytics />
      <MotionObserver />
      <Header activeProduct={activeProduct} lang={lang} />
      {children}
      <Footer lang={lang} />
    </main>
  );
}

function ReadyTypeVisual({
  compact = false,
  priority = false,
  lang,
}: {
  compact?: boolean;
  priority?: boolean;
  lang: Lang;
}) {
  return (
    <div className={`product-visual readytype-visual ${compact ? "is-compact" : ""}`}>
      <div className="app-window-frame app-window-light readytype-window-stage">
        <Image
          alt={lang === "zh" ? "ReadyType 真实应用界面" : "ReadyType app shown with its Chinese interface"}
          className="app-window-image"
          height={680}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
          sizes={compact ? "(max-width: 768px) 90vw, 620px" : "(max-width: 900px) 92vw, 760px"}
          src="/readytype-window-clean.png"
          width={900}
        />
        <div aria-hidden="true" className="readytype-input-demo">
          <div className="readytype-demo-status">
            <span className="is-listening">{lang === "zh" ? "正在聆听" : "Listening"}</span>
            <span className="is-processing">{lang === "zh" ? "正在整理" : "Polishing"}</span>
            <span className="is-complete">{lang === "zh" ? "已输入" : "Inserted"}</span>
          </div>
          <div className="readytype-demo-field">
            <span className="readytype-demo-raw">
              {lang === "zh" ? "帮我整理：周五完成界面验收，下周邀请测试用户。" : "Finish the review Friday, then invite testers next week."}
            </span>
            <span className="readytype-demo-final">
              {lang === "zh" ? "周五完成界面验收，下周邀请首批测试用户。" : "Complete the review by Friday. Invite testers next week."}
            </span>
          </div>
        </div>
      </div>
      <div
        aria-label="ReadyType voice input changes from listening to processing and completion"
        className="readytype-hud-sequence"
        role="img"
      >
        <div className="readytype-hud-mask">
          <Image
            alt=""
            className="readytype-hud-state is-listening"
            height={96}
            loading={priority ? "eager" : "lazy"}
            priority={priority}
            sizes={compact ? "(max-width: 768px) 58vw, 340px" : "(max-width: 900px) 54vw, 360px"}
            src="/readytype-hud-recording-latest.png"
            width={500}
          />
          <Image
            alt=""
            className="readytype-hud-state is-processing"
            height={96}
            loading={priority ? "eager" : "lazy"}
            sizes={compact ? "(max-width: 768px) 58vw, 340px" : "(max-width: 900px) 54vw, 360px"}
            src="/readytype-hud-processing-latest.png"
            width={500}
          />
          <Image
            alt=""
            className="readytype-hud-state is-complete"
            height={96}
            loading={priority ? "eager" : "lazy"}
            sizes={compact ? "(max-width: 768px) 58vw, 340px" : "(max-width: 900px) 54vw, 360px"}
            src="/readytype-hud-pasted-latest.png"
            width={500}
          />
        </div>
      </div>
      <p className="visual-caption">{lang === "zh" ? "真实应用界面 · 输入过程为演示" : "Real app interface · illustrative input sequence"}</p>
    </div>
  );
}

function ReadyCheckVisual({
  compact = false,
  priority = false,
  lang,
}: {
  compact?: boolean;
  priority?: boolean;
  lang: Lang;
}) {
  const [view, setView] = useState<"overview" | "widget">(compact ? "widget" : "overview");
  const label = view === "overview" ? (lang === "zh" ? "概览节选" : "Overview excerpt") : "Widget";
  return (
    <div className={`product-visual readycheck-visual ${compact ? "is-compact" : ""}`}>
      <div className="preview-switcher" role="group" aria-label={lang === "zh" ? "ReadyCheck 界面预览" : "ReadyCheck interface preview"}>
        <button aria-pressed={view === "overview"} onClick={() => setView("overview")} type="button"><PanelTop size={14} />{lang === "zh" ? "概览" : "Overview"}</button>
        <button aria-pressed={view === "widget"} onClick={() => setView("widget")} type="button"><Monitor size={14} />Widget</button>
      </div>
      <div className={`readycheck-native-preview is-${view}`}>
        <Image
          alt={lang === "zh" ? `ReadyCheck ${label}，展示双额度、下一事件与消耗记录，使用合成演示数据` : `ReadyCheck ${label} with both quotas, next event and consumption, using synthetic data`}
          key={view}
          width={view === "overview" ? 1800 : 760}
          height={view === "overview" ? 1960 : 688}
          priority={priority}
          sizes="(max-width: 820px) 90vw, 640px"
          src={`/readycheck-${view}-${lang}.png`}
        />
      </div>
      <p className="visual-caption">{label} · {lang === "zh" ? "原生界面 · 合成演示数据" : "native interface · synthetic demo data"}</p>
    </div>
  );
}

function ReadyDownloaderVisual({
  compact = false,
  priority = false,
  lang,
}: {
  compact?: boolean;
  priority?: boolean;
  lang: Lang;
}) {
  return (
      <div className={`product-visual downloader-visual ${compact ? "is-compact" : ""}`}>
        <div className="readydownloader-web-frame">
          <div className="readydownloader-web-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <strong>readydownloader.vercel.app</strong>
            <em>Web</em>
          </div>
          <Image
            alt={lang === "zh" ? "ReadyDownloader 网页版真实界面，提供链接解析与三种下载方式" : "ReadyDownloader Web interface with URL analysis and three download modes; Chinese interface shown"}
            className="readydownloader-web-image"
            height={1000}
            priority={priority}
            sizes="(max-width: 900px) 92vw, 700px"
            src="/readydownloader-web-0.2.0.png"
            width={1440}
          />
        </div>
        <p className="visual-caption">{lang === "zh" ? "网页版真实界面 · 无需安装" : "Real Web interface · no installation"}</p>
      </div>
  );
}

function CrossfitVisual({
  compact = false,
  priority = false,
  lang,
}: {
  compact?: boolean;
  priority?: boolean;
  lang: Lang;
}) {
  return (
    <div className={`product-visual crossfit-visual ${compact ? "is-compact" : ""}`}>
      <div className="crossfit-phone">
        <Image
          alt="Privacy-safe synthetic athlete with WHOOP-style HUD"
          className="crossfit-image"
          fill
          priority={priority}
          sizes={compact ? "(max-width: 768px) 66vw, 330px" : "(max-width: 900px) 72vw, 420px"}
          src="/crossfit-digital-athlete.jpg"
        />
        <div className="crossfit-shade" />
        <div className="crossfit-scan" />
        <div className="crossfit-hud">
          <div className="crossfit-hud-top">
            <span>WORKOUT DATA</span>
            <span>00:18</span>
          </div>
          <div className="crossfit-metrics">
            <div>
              <small>HR</small>
              <strong>156</strong>
            </div>
            <div>
              <small>STRAIN</small>
              <strong>12.4</strong>
            </div>
            <div>
              <small>ZONE</small>
              <strong>4</strong>
            </div>
          </div>
        </div>
        <div className="crossfit-output">
          <span>9:16 · 4K</span>
          <div>
            <i />
          </div>
        </div>
      </div>
      <div className="crossfit-caption">
        <Film size={18} />
        <span>{lang === "zh" ? "HyperFrames · 合成人像与示例数据" : "HyperFrames · synthetic athlete and sample data"}</span>
      </div>
    </div>
  );
}

function ProductVisual({
  compact,
  priority,
  product,
  lang,
}: {
  compact?: boolean;
  priority?: boolean;
  product: ProductKey;
  lang: Lang;
}) {
  if (product === "readytype") {
    return <ReadyTypeVisual compact={compact} priority={priority} lang={lang} />;
  }
  if (product === "readycheck") {
    return <ReadyCheckVisual compact={compact} priority={priority} lang={lang} />;
  }
  if (product === "readydownloader") {
    return <ReadyDownloaderVisual compact={compact} priority={priority} lang={lang} />;
  }
  return <CrossfitVisual compact={compact} priority={priority} lang={lang} />;
}

const guideRoutes: Partial<Record<ProductKey, string>> = {
  readytype: "/guides/macos-chinese-voice-input",
  readycheck: "/guides/codex-usage-limit",
  readydownloader: "/guides/download-youtube-instagram-mac",
};

const guideLabels: Record<Lang, Record<ProductKey, string>> = {
  zh: {
    readytype: "如何在 Mac 上用中文语音直接输入和整理文字",
    readycheck: "如何查看 Codex 额度、Token 用量和重置时间",
    readydownloader: "如何在线保存 YouTube 与 Instagram 视频",
    crossfit: "",
  },
  en: {
    readytype: "How to use Chinese voice input on Mac",
    readycheck: "How to track Codex limits, token usage, and resets",
    readydownloader: "How to save YouTube and Instagram videos online",
    crossfit: "",
  },
};

export function HomePage({ lang = "zh" }: { lang?: Lang }) {
  const [selectedProduct, setSelectedProduct] = useState<ProductKey>("readytype");
  const t = copy[lang];
  const selected = t.products[selectedProduct];

  return (
    <Shell lang={lang}>
      <section className="home-hero">
        <div className="home-hero-copy" data-reveal>
          <p className="eyebrow">{t.home.eyebrow}</p>
          <h1>{t.home.title}</h1>
          <p className="hero-body">{t.home.body}</p>
          <div className="hero-actions">
            <Button href="#products">
              {t.home.primary}
              <ArrowRight size={17} />
            </Button>
            <Button href={localizedHref("/downloads", lang)} variant="secondary">
              {t.home.secondary}
            </Button>
          </div>
        </div>
      </section>

      <section className="product-showcase" id="products" data-reveal>
        <div className="product-showcase-rail">
          <p className="eyebrow">{t.home.productsLabel}</p>
          <h2>{t.home.productsTitle}</h2>
          <div aria-label={t.home.productsLabel} className="product-selector" role="tablist">
            {productOrder.map((product) => {
              const item = t.products[product];
              const active = selectedProduct === product;
              return (
                <button
                  aria-controls="selected-product-panel"
                  aria-selected={active}
                  className={active ? "is-active" : ""}
                  id={`product-tab-${product}`}
                  key={product}
                  onClick={() => setSelectedProduct(product)}
                  onKeyDown={(event) => {
                    const index = productOrder.indexOf(product);
                    const next = event.key === "ArrowRight" || event.key === "ArrowDown"
                      ? (index + 1) % productOrder.length
                      : event.key === "ArrowLeft" || event.key === "ArrowUp"
                        ? (index + productOrder.length - 1) % productOrder.length
                        : event.key === "Home" ? 0 : event.key === "End" ? productOrder.length - 1 : null;
                    if (next === null) return;
                    event.preventDefault();
                    setSelectedProduct(productOrder[next]);
                    document.getElementById(`product-tab-${productOrder[next]}`)?.focus();
                  }}
                  role="tab"
                  tabIndex={active ? 0 : -1}
                  type="button"
                >
                  <span>{item.name}</span>
                  <small>{item.eyebrow}</small>
                </button>
              );
            })}
          </div>
        </div>
        <div aria-labelledby={`product-tab-${selectedProduct}`} className={`product-showcase-stage product-${selectedProduct}`} id="selected-product-panel" role="tabpanel">
          <div className="product-showcase-copy" key={`${lang}-${selectedProduct}-copy`}>
            <div className="product-meta">
              <span>{selected.name}</span>
              <span>{selected.platform}</span>
            </div>
            <h3>{selected.homeTitle}</h3>
            <p>{selected.homeBody}</p>
            <div className="showcase-actions">
              <Button href={productLinks[selectedProduct].primary}>
                {selectedProduct === "readydownloader" ? <Globe2 size={16} /> : selectedProduct === "crossfit" ? <Film size={16} /> : <ArrowDownToLine size={16} />}
                {selected.primary}
              </Button>
              <a className="text-link" href={localizedHref(routes[selectedProduct], lang)}>
                {selected.homeAction}<ArrowRight size={16} />
              </a>
            </div>
          </div>
          <div className="product-showcase-visual" key={`${selectedProduct}-visual`}>
            <ProductVisual compact priority product={selectedProduct} lang={lang} />
          </div>
        </div>
      </section>

      <section className="open-source-band" data-reveal>
        <div>
          <Github size={28} />
          <h2>{t.home.openSourceTitle}</h2>
          <p>{t.home.openSourceBody}</p>
        </div>
        <Button href={links.profile} variant="light">
          {t.home.openSourceAction}
          <ArrowRight size={17} />
        </Button>
      </section>
    </Shell>
  );
}

export function ProductPage({ product, lang = "zh" }: { product: ProductKey; lang?: Lang }) {
  const t = copy[lang].products[product];
  const icons = featureIcons[product];
  const repositoryFirst = product === "crossfit";
  const webFirst = product === "readydownloader";

  return (
    <Shell activeProduct={product} lang={lang}>
      <section className={`product-hero product-${product}`}>
        <div className="product-hero-copy" data-reveal>
          <div className="product-meta">
            <span>{t.name}</span>
            <span>{t.version}</span>
            <span>{t.platform}</span>
          </div>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-body">{t.body}</p>
          <div className="hero-actions">
            <Button href={productLinks[product].primary}>
              {repositoryFirst ? <Github size={17} /> : webFirst ? <Globe2 size={17} /> : <ArrowDownToLine size={17} />}
              {t.primary}
            </Button>
            <Button href={productLinks[product].secondary} variant="secondary">
              {t.secondary}
              <ArrowRight size={17} />
            </Button>
          </div>
          <div className="highlight-list">
            {t.highlights.map((highlight) => (
              <span key={highlight}>
                <Check size={14} />
                {highlight}
              </span>
            ))}
          </div>
        </div>
        <div data-reveal>
          <ProductVisual priority product={product} lang={lang} />
        </div>
      </section>

      <section className="feature-section" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">{t.sectionLabel}</p>
          <h2>{t.sectionTitle}</h2>
        </div>
        <div className="feature-grid">
          {t.features.map(([title, body], index) => {
            const Icon = icons[index];
            return (
              <article key={title}>
                <Icon size={22} />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className={`spotlight-band product-${product}`} data-reveal>
        <p>{t.spotlight}</p>
        <h2>{t.spotlightValue}</h2>
        <span>{t.spotlightBody}</span>
      </section>

      {guideRoutes[product] ? (
        <section className="guide-entry" data-reveal>
          <div>
            <p className="eyebrow">{lang === "zh" ? "使用指南" : "Practical guide"}</p>
            <h2>{guideLabels[lang][product]}</h2>
          </div>
          <a href={localizedHref(guideRoutes[product], lang)}>
            {lang === "zh" ? "阅读指南" : "Read guide"}
            <ArrowRight size={16} />
          </a>
        </section>
      ) : null}

      <section className="release-section" data-reveal>
        <div className="release-heading">
          <p className="eyebrow">{t.notesTitle}</p>
          <h2>{t.finalTitle}</h2>
          <p>{t.finalBody}</p>
          <Button href={productLinks[product].primary}>
            {repositoryFirst ? <Github size={17} /> : webFirst ? <Globe2 size={17} /> : <ArrowDownToLine size={17} />}
            {t.primary}
          </Button>
        </div>
        <div className="release-notes">
          {t.notes.map((note) => (
            <div key={note}>
              <ShieldCheck size={19} />
              <span>{note}</span>
            </div>
          ))}
          <a
            className="release-link"
            href={productLinks[product].tertiary}
            {...externalLinkProps(productLinks[product].tertiary)}
          >
            {product === "crossfit"
              ? lang === "zh"
                ? "阅读构建说明"
                : "Read build instructions"
              : product === "readydownloader"
                ? lang === "zh"
                  ? "查看桌面版发布"
                  : "View desktop releases"
              : lang === "zh"
                ? "查看所有发布"
                : "View all releases"}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </Shell>
  );
}

const resourceIcons: Record<ResourceKey, LucideIcon> = {
  downloads: ArrowDownToLine,
  support: Github,
  privacy: LockKeyhole,
};

function getResourceRows(page: ResourceKey, lang: Lang) {
  const products = copy[lang].products;

  if (page === "downloads") {
    return productOrder.map((product) => ({
      name: products[product].name,
      meta: `${products[product].version} · ${products[product].platform}`,
      body: products[product].body,
      action: products[product].primary,
      href: productLinks[product].primary,
    }));
  }

  if (page === "support") {
    return [
      {
        name: products.readytype.name,
        meta: lang === "zh" ? "安装、权限、识别与输出" : "Install, permissions, recognition, and output",
        body: lang === "zh"
          ? "提交 ReadyType 安装、快捷键、语音识别、DeepSeek 或粘贴问题。"
          : "Report ReadyType installation, shortcut, recognition, DeepSeek, or paste issues.",
        action: lang === "zh" ? "提交问题" : "Open issue",
        href: links.readytypeIssues,
      },
      {
        name: products.readycheck.name,
        meta: lang === "zh" ? "OAuth、额度读取与桌面显示" : "OAuth, usage reading, and desktop UI",
        body: lang === "zh"
          ? "提交 ReadyCheck 连接、刷新、菜单栏、Widget 或平台兼容问题。"
          : "Report ReadyCheck connection, refresh, menu-bar, widget, or platform issues.",
        action: lang === "zh" ? "提交问题" : "Open issue",
        href: links.readycheckIssues,
      },
      {
        name: products.readydownloader.name,
        meta: lang === "zh" ? "网页版、解析、下载与兼容转换" : "Web app, parsing, downloads, and compatibility",
        body: lang === "zh"
          ? "提交 ReadyDownloader 网页版、解析、下载或 iPhone 兼容问题；代理与 Cookie 仅属于桌面客户端。"
          : "Report ReadyDownloader Web app, parsing, download, or iPhone-compatibility issues; proxy and cookie options apply to the desktop client only.",
        action: lang === "zh" ? "提交问题" : "Open issue",
        href: links.readydownloaderIssues,
      },
      {
        name: products.crossfit.name,
        meta: lang === "zh" ? "模板、HUD 与渲染工作流" : "Templates, HUDs, and rendering workflow",
        body: lang === "zh"
          ? "提交模板结构、素材处理、HUD 预设、Skill 或 Plugin 问题。"
          : "Report template, footage, HUD preset, Skill, or Plugin issues.",
        action: lang === "zh" ? "提交问题" : "Open issue",
        href: links.crossfitIssues,
      },
    ];
  }

  return [
    {
      name: "ReadyType",
      meta: lang === "zh" ? "本机权限与安全存储" : "Local permissions and secure storage",
      body: lang === "zh"
        ? "麦克风、语音识别和辅助功能权限由 macOS 管理；DeepSeek 密钥存储在 macOS 钥匙串。"
        : "macOS manages microphone, speech-recognition, and accessibility permissions; the DeepSeek key is stored in Keychain.",
      action: lang === "zh" ? "查看产品" : "View product",
      href: localizedHref("/readytype", lang),
    },
    {
      name: "ReadyCheck",
      meta: lang === "zh" ? "只读用量检查" : "Read-only usage checks",
      body: lang === "zh"
        ? "额度刷新只读取已授权数据；可选的自动重置卡使用需要当前账户单独授权。Mac 凭据保存在钥匙串，历史记录按账户隔离。"
        : "Quota refresh reads authorized data. Optional automatic reset-card use needs account-specific consent. Mac credentials stay in Keychain and history is account-scoped.",
      action: lang === "zh" ? "查看产品" : "View product",
      href: localizedHref("/readycheck", lang),
    },
    {
      name: "ReadyDownloader",
      meta: lang === "zh" ? "网页临时存储与桌面下载" : "Web temporary storage and desktop downloads",
      body: lang === "zh"
        ? "网页版使用私有临时存储和限时下载链接，并按 24 小时规则清理；桌面版文件保存在用户选择的位置。"
        : "The Web app uses private temporary storage and expiring links under a 24-hour cleanup rule; the desktop app saves files to the destination you choose.",
      action: lang === "zh" ? "查看产品" : "View product",
      href: localizedHref("/readydownloader", lang),
    },
    {
      name: "GitHub Issues",
      meta: lang === "zh" ? "公开反馈区域" : "Public feedback area",
      body: lang === "zh"
        ? "提交问题前，请移除 Token、回调 URL、账户 ID、私人素材和本地文件路径。"
        : "Remove tokens, callback URLs, account IDs, private media, and local file paths before submitting.",
      action: lang === "zh" ? "查看支持" : "View support",
      href: localizedHref("/support", lang),
    },
  ];
}

export function ResourcePage({ page, lang = "zh" }: { page: ResourceKey; lang?: Lang }) {
  const t = copy[lang].resources[page];
  const rows = getResourceRows(page, lang);
  const Icon = resourceIcons[page];

  return (
    <Shell lang={lang}>
      <section className="resource-hero" data-reveal>
        <Icon size={28} />
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p>{t.body}</p>
      </section>
      <section className="resource-list" data-reveal>
        {rows.map((row) => (
          <article key={row.name}>
            <div>
              <p className="resource-meta">{row.meta}</p>
              <h2>{row.name}</h2>
              <p>{row.body}</p>
            </div>
            <a href={row.href} {...externalLinkProps(row.href)}>
              {row.action}
              <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </section>
    </Shell>
  );
}

export function GuidePage({ guide, lang = "zh" }: { guide: GuideKey; lang?: Lang }) {
  const content = guideContent[lang][guide];
  const product = copy[lang].products[content.product];

  return (
    <Shell activeProduct={content.product} lang={lang}>
      <article className="guide-page">
        <header className="guide-hero" data-reveal>
          <div>
            <p className="eyebrow">{content.eyebrow}</p>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
            <div className="highlight-list">
              {content.summary.map((item) => (
                <span key={item}><Check size={14} />{item}</span>
              ))}
            </div>
          </div>
          <ProductVisual compact priority product={content.product} lang={lang} />
        </header>

        <div className="guide-body" data-reveal>
          {content.sections.map((section, index) => (
            <section key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.steps ? (
                  <ol>
                    {section.steps.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <section className="guide-cta" data-reveal>
          <div>
            <p className="eyebrow">{product.name}</p>
            <h2>{product.finalTitle}</h2>
          </div>
          <Button href={localizedHref(routes[content.product], lang)}>
            {content.cta}<ArrowRight size={17} />
          </Button>
        </section>
      </article>
    </Shell>
  );
}
