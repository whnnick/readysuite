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

type Lang = "zh" | "en";
type ResourceKey = "downloads" | "support" | "privacy";
type CampaignContext = Partial<Record<"campaign" | "medium" | "source", string>>;

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
      eyebrow: "ReadySuite",
      title: "让常用工作，一步到位。",
      body: "输入、用量、下载和内容制作。选择一个工具，直接解决眼前的问题。",
      primary: "探索产品",
      secondary: "查看下载",
      productsLabel: "选择产品",
      productsTitle: "每个工具，都把一件事做好。",
      openSourceTitle: "开源、透明，并持续更新。",
      openSourceBody: "版本、下载、更新记录和反馈入口均由对应的 GitHub 项目维护。",
      openSourceAction: "访问 GitHub",
    },
    products: {
      readytype: {
        name: "ReadyType",
        version: "1.5.0",
        platform: "macOS 14+",
        eyebrow: "语音输入",
        title: "开口说，直接得到可用文字。",
        body: "双击 Option 开始说话，再次双击完成输出。直接转文字、整理成文、翻译成英文或写给 AI，无需离开当前输入框。",
        homeTitle: "双击 Option，说出想法。",
        homeBody: "将语音自动整理成清晰文字，并根据场景选择输出方式。DeepSeek V4 Flash，日常使用一天不到 1 毛钱。",
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
          ["成本可控", "AI 输出默认调用 DeepSeek V4 Flash，日常轻量使用通常一天不到 1 毛钱。"],
        ],
        spotlight: "调用 DeepSeek V4 Flash",
        spotlightValue: "日常使用，一天不到 1 毛钱",
        spotlightBody: "直接转文字不调用 DeepSeek；整理、翻译和写给 AI 才会使用你配置的密钥。",
        notesTitle: "ReadyType 1.5.0",
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
        version: "0.1.83",
        platform: "macOS · Windows",
        eyebrow: "Codex 用量",
        title: "随时看清 Codex 剩余额度。",
        body: "在主窗口、菜单栏、桌面 Widget 或 Mac 刘海下方查看 Codex 额度状态。刷新只读取用量数据，不发送模型推理请求。",
        homeTitle: "Codex 额度，随时可见。",
        homeBody: "在主窗口、菜单栏、桌面 Widget 和 Mac 刘海查看额度；主动重置即将到期时及时提醒。",
        homeAction: "了解 ReadyCheck",
        primary: "下载 ReadyCheck",
        secondary: "查看源码",
        highlights: ["macOS 与 Windows", "Token 用量看板", "重置到期提醒"],
        sectionLabel: "始终可见",
        sectionTitle: "把额度状态放在需要它的地方。",
        features: [
          ["菜单栏摘要", "无需切换页面，直接查看当前 Codex 额度窗口。"],
          ["桌面 Widget", "可拖拽并置顶，让剩余额度和刷新状态持续可见。"],
          ["刘海状态条", "在支持的 Mac 内置刘海屏下方显示紧凑额度状态。"],
          ["用量与提醒", "显示 7/30/90 天 Token 用量，并在主动重置到期前 72、48、24 和 12 小时提醒。"],
        ],
        spotlight: "同一个发布页",
        spotlightValue: "macOS DMG + Windows 便携版",
        spotlightBody: "0.1.83 同时提供 macOS 与 Windows 10/11 预览包，并保持主要行为一致。",
        notesTitle: "ReadyCheck 0.1.83",
        notes: [
          "支持 Codex OAuth 订阅方式登录。",
          "OAuth 凭据通过系统安全存储保存。",
          "通知历史会记录投递状态、尝试时间和重试次数。",
          "通过 GitHub Releases 获取最新版本。",
        ],
        finalTitle: "专注构建，不再反复检查额度。",
        finalBody: "下载 ReadyCheck，让 Codex 使用状态保持可见。",
      },
      readydownloader: {
        name: "ReadyDownloader",
        version: "0.1.4",
        platform: "macOS 13+ · Windows",
        eyebrow: "多平台视频下载",
        title: "免费下载 YouTube、Instagram 等平台视频。",
        body: "粘贴视频链接，即可从 YouTube、Bilibili、TikTok、Instagram 等 yt-dlp 可解析平台保存视频。支持最高画质、iPhone 兼容和指定格式，并可按需使用代理与 Cookie。",
        homeTitle: "常用平台视频，免费保存。",
        homeBody: "粘贴 YouTube、Instagram、Bilibili、TikTok 等平台链接即可下载；画质、兼容格式和保存位置都可选择。",
        homeAction: "了解 ReadyDownloader",
        primary: "查看 ReadyDownloader",
        secondary: "查看源码",
        highlights: ["YouTube / Instagram", "免费保存到本地", "画质与格式可选"],
        sectionLabel: "粘贴链接即可下载",
        sectionTitle: "从常用视频平台，直接保存到本地。",
        features: [
          ["多平台解析", "支持 YouTube、Bilibili、TikTok、Instagram 等 yt-dlp 可解析的视频页面。"],
          ["最高画质", "默认选择可用的最高画质，并在视频流没有音频时使用 FFmpeg 合并最佳音频。"],
          ["iPhone 兼容", "检查成品编码，并在需要时转换为 H.264、AAC 和 yuv420p。"],
          ["网络与登录", "支持直连、系统代理、自定义代理，以及可选的 Netscape 格式 Cookie。"],
        ],
        spotlight: "常用平台支持",
        spotlightValue: "YouTube · Instagram · Bilibili · TikTok",
        spotlightBody: "平台支持由内置 yt-dlp 提取器提供，实际可用性取决于视频链接、地区、登录状态和平台变化。",
        notesTitle: "ReadyDownloader 0.1.4 源码预览",
        notes: [
          "当前公开版本面向 macOS 13+ Apple Silicon。",
          "下载进度、取消、保存位置和 Finder 定位均在应用内完成。",
          "项目不提供 DRM 绕过能力，请仅下载你有权保存的内容。",
          "0.1.4 尚未发布 GitHub Release，当前可查看源码与构建说明。",
        ],
        finalTitle: "把有权保存的视频，直接下载到本地。",
        finalBody: "打开 ReadyDownloader 项目，了解当前源码预览、支持平台和构建说明。",
      },
      crossfit: {
        name: "CrossFit WHOOP Video",
        version: "1.0.11",
        platform: "HyperFrames · Codex · OpenClaw",
        eyebrow: "运动短片工作流",
        title: "把训练素材做成电影感数据短片。",
        body: "用可复用的 9:16 4K 模板、Codex Skill 和 WHOOP 风格动态 HUD，把训练素材制作成适合 Shorts、Reels 与 TikTok 的运动短片。",
        homeTitle: "快速制作 4K 竖屏训练视频。",
        homeBody: "用 HyperFrames、Codex 和 OpenClaw 复用完整制作流程，把训练片段转成带 WHOOP HUD 的运动短片。",
        homeAction: "了解制作流程",
        primary: "打开项目",
        secondary: "阅读文档",
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
      eyebrow: "ReadySuite",
      title: "Finish everyday work in fewer steps.",
      body: "Input, usage, downloads, and content production. Pick one tool and solve the task in front of you.",
      primary: "Explore products",
      secondary: "View downloads",
      productsLabel: "Choose a product",
      productsTitle: "Each tool does one job well.",
      openSourceTitle: "Open, transparent, and continuously updated.",
      openSourceBody: "Versions, downloads, changelogs, and feedback are maintained in each product's GitHub repository.",
      openSourceAction: "Visit GitHub",
    },
    products: {
      readytype: {
        name: "ReadyType",
        version: "1.5.0",
        platform: "macOS 14+",
        eyebrow: "Voice input",
        title: "Speak naturally. Get usable text.",
        body: "Double-press Option to start and finish. Dictate, polish writing, translate into English, or create an AI-ready task without leaving the current text field.",
        homeTitle: "Double-press Option. Speak your mind.",
        homeBody: "Turn speech into clear text with the right output for each context. Light daily use with DeepSeek V4 Flash typically costs under RMB 0.10.",
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
          ["Controlled cost", "AI modes use DeepSeek V4 Flash, typically costing less than RMB 0.10 per day for light daily use."],
        ],
        spotlight: "Powered by DeepSeek V4 Flash",
        spotlightValue: "Typical daily use under RMB 0.10",
        spotlightBody: "Direct dictation does not call DeepSeek. Only polish, translation, and AI-task modes use your configured key.",
        notesTitle: "ReadyType 1.5.0",
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
        version: "0.1.83",
        platform: "macOS · Windows",
        eyebrow: "Codex usage",
        title: "Keep Codex quota in sight.",
        body: "View Codex usage in the main window, menu bar, desktop widget, or below a supported Mac notch. Refreshing reads usage data without sending inference requests.",
        homeTitle: "Codex quota, always in sight.",
        homeBody: "See quota in the main window, menu bar, desktop widget, or Mac notch, and get timely reminders before manual resets expire.",
        homeAction: "Explore ReadyCheck",
        primary: "Download ReadyCheck",
        secondary: "View source",
        highlights: ["macOS and Windows", "Token usage dashboard", "Reset-expiry reminders"],
        sectionLabel: "Always visible",
        sectionTitle: "Put usage status where you need it.",
        features: [
          ["Menu-bar summary", "View the current Codex usage window without switching pages."],
          ["Desktop widget", "Drag and pin the widget so remaining quota and refresh status stay visible."],
          ["Notch status", "Show a compact usage strip below the built-in notch on supported Macs."],
          ["Usage and reminders", "Show 7/30/90-day Token usage and remind you 72, 48, 24, and 12 hours before a manual reset expires."],
        ],
        spotlight: "One release page",
        spotlightValue: "macOS DMG + Windows portable build",
        spotlightBody: "Version 0.1.83 includes macOS and Windows 10/11 previews with aligned core behavior.",
        notesTitle: "ReadyCheck 0.1.83",
        notes: [
          "Supports Codex OAuth subscription sign-in.",
          "Stores OAuth credentials in secure system storage.",
          "Notification history records delivery state, attempt time, and retry count.",
          "The latest builds are available through GitHub Releases.",
        ],
        finalTitle: "Stay focused on building.",
        finalBody: "Download ReadyCheck and keep Codex usage visible.",
      },
      readydownloader: {
        name: "ReadyDownloader",
        version: "0.1.4",
        platform: "macOS 13+ · Windows",
        eyebrow: "Multi-platform video downloads",
        title: "Download videos from YouTube, Instagram, and more for free.",
        body: "Paste a video URL to save it locally from YouTube, Bilibili, TikTok, Instagram, and other services handled by yt-dlp. Choose best quality, iPhone compatibility, or a specific format, with proxy and optional cookie support.",
        homeTitle: "Save videos from popular platforms for free.",
        homeBody: "Paste a YouTube, Instagram, Bilibili, or TikTok link to download it, with control over quality, compatibility, and destination.",
        homeAction: "Explore ReadyDownloader",
        primary: "View ReadyDownloader",
        secondary: "View source",
        highlights: ["YouTube / Instagram", "Free local downloads", "Quality and format control"],
        sectionLabel: "Paste a link to download",
        sectionTitle: "Save videos from popular platforms directly to your computer.",
        features: [
          ["Multi-platform parsing", "Supports video pages handled by yt-dlp, including YouTube, Bilibili, TikTok, and Instagram."],
          ["Best quality", "Select the highest available quality and merge the best audio with FFmpeg when needed."],
          ["iPhone compatible", "Inspect the final media and convert to H.264, AAC, and yuv420p only when required."],
          ["Network and sign-in", "Use direct, system-proxy, or custom-proxy modes with optional Netscape-format cookies."],
        ],
        spotlight: "Popular platform support",
        spotlightValue: "YouTube · Instagram · Bilibili · TikTok",
        spotlightBody: "Platform support comes from the bundled yt-dlp extractors. Availability can vary by URL, region, sign-in state, and platform changes.",
        notesTitle: "ReadyDownloader 0.1.4 source preview",
        notes: [
          "The current public target is Apple Silicon on macOS 13 or later.",
          "Progress, cancellation, destination selection, and Finder reveal stay inside the app.",
          "The project does not bypass DRM; download only media you are authorized to save.",
          "Version 0.1.4 has no GitHub Release yet; source and build instructions are available now.",
        ],
        finalTitle: "Download videos you are authorized to save.",
        finalBody: "Open the ReadyDownloader project to review the source preview, platform support, and build instructions.",
      },
      crossfit: {
        name: "CrossFit WHOOP Video",
        version: "1.0.11",
        platform: "HyperFrames · Codex · OpenClaw",
        eyebrow: "Sports video workflow",
        title: "Turn training footage into data-rich films.",
        body: "Use reusable 9:16 4K templates, a Codex Skill, and animated WHOOP-style HUDs to produce training edits for Shorts, Reels, and TikTok.",
        homeTitle: "Produce vertical 4K training videos faster.",
        homeBody: "Reuse a complete HyperFrames, Codex, and OpenClaw workflow to turn training footage into WHOOP-style sports edits.",
        homeAction: "Explore the workflow",
        primary: "Open project",
        secondary: "Read docs",
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
        product: productFromPath(`${destination.pathname}${destination.hash}`),
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

      if (destination.pathname.endsWith("/releases/latest")) {
        track("download_click", eventProperties(baseProperties));
      } else if (destination.pathname.endsWith("/releases")) {
        track("releases_click", eventProperties(baseProperties));
      } else if (destination.pathname.endsWith("/issues")) {
        track("support_click", eventProperties(baseProperties));
      } else if (destination.hash === "#readme") {
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
  onChange,
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
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
    onChange(nextLang);
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
  setLang,
}: {
  activeProduct?: ProductKey;
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  const t = copy[lang].nav;

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand-link" href="/" aria-label="ReadySuite home">
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
                  href={routes[key]}
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
          <a className="nav-link" href="/downloads">
            {t.downloads}
          </a>
          <a className="nav-link" href="/support">
            {t.support}
          </a>
        </div>

        <div className="nav-actions">
          <LanguageToggle lang={lang} onChange={setLang} />
          <a
            className="nav-github"
            href={activeProduct ? productLinks[activeProduct].secondary : links.profile}
            {...externalLinkProps(
              activeProduct ? productLinks[activeProduct].secondary : links.profile,
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
          <a className="footer-brand" href="/">
            ReadySuite
          </a>
          <p>{t.footer.line}</p>
          <p>{t.footer.note}</p>
        </div>
        <div className="footer-links">
          <a href="/readytype">ReadyType</a>
          <a href="/readycheck">ReadyCheck</a>
          <a href="/readydownloader">ReadyDownloader</a>
          <a href="/crossfit-whoop-video">CrossFit WHOOP Video</a>
          <a href="/downloads">{t.nav.downloads}</a>
          <a href="/support">{t.nav.support}</a>
          <a href="/privacy">{t.footer.privacy}</a>
        </div>
      </div>
    </footer>
  );
}

function Shell({
  activeProduct,
  children,
  lang,
  setLang,
}: {
  activeProduct?: ProductKey;
  children: ReactNode;
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  return (
    <main className="site-shell">
      <PromotionAnalytics />
      <MotionObserver />
      <Header activeProduct={activeProduct} lang={lang} setLang={setLang} />
      {children}
      <Footer lang={lang} />
    </main>
  );
}

function ReadyTypeVisual({
  compact = false,
  priority = false,
}: {
  compact?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`product-visual readytype-visual ${compact ? "is-compact" : ""}`}>
      <div className="app-window-frame app-window-light readytype-window-stage">
        <Image
          alt="ReadyType app window"
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
            <span className="is-listening">正在聆听</span>
            <span className="is-processing">正在整理</span>
            <span className="is-complete">已输入</span>
          </div>
          <div className="readytype-demo-field">
            <span className="readytype-demo-raw">
              帮我整理：周五完成界面验收，下周邀请测试用户。
            </span>
            <span className="readytype-demo-final">
              周五完成界面验收，下周邀请首批测试用户。
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
    </div>
  );
}

function ReadyCheckVisual({
  compact = false,
  priority = false,
}: {
  compact?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={`product-visual readycheck-visual ${compact ? "is-compact" : ""}`}>
      <div
        aria-label="ReadyCheck 0.1.83 product preview showing quota views and reminders"
        className="readycheck-stage"
        role="img"
      >
        <div className="app-window-frame app-window-light readycheck-window">
          <video
            autoPlay
            data-motion-video
            loop
            muted
            playsInline
            poster="/readycheck-main-latest.png"
            preload={priority ? "auto" : "metadata"}
          >
            <source src="/readycheck-preview-0.1.83.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </div>
  );
}

function ReadyDownloaderVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-visual downloader-visual ${compact ? "is-compact" : ""}`}>
      <div className="downloader-window" role="img" aria-label="ReadyDownloader link parsing and download progress preview">
        <div className="downloader-titlebar">
          <Image alt="" height={40} src="/readydownloader-icon.png" width={40} />
          <div>
            <strong>ReadyDownloader</strong>
            <span>0.1.4 · macOS</span>
          </div>
          <span className="downloader-ready">READY</span>
        </div>
        <div className="downloader-url-panel">
          <span className="downloader-label">视频链接</span>
          <div className="downloader-url-row">
            <Link2 size={15} />
            <span className="downloader-url-text">https://video.example/watch/demo</span>
            <button type="button" tabIndex={-1}>解析链接</button>
          </div>
        </div>
        <div className="downloader-mode" aria-hidden="true">
          <span className="is-active">最高画质</span>
          <span>iPhone 兼容</span>
          <span>指定格式</span>
        </div>
        <div className="downloader-formats" aria-hidden="true">
          <div className="downloader-format-head">
            <span>分辨率</span><span>编码</span><span>帧率</span><span>大小</span>
          </div>
          <div className="downloader-format-row is-selected">
            <strong>2160p</strong><span>AV1</span><span>60</span><span>1.8 GB</span>
          </div>
          <div className="downloader-format-row">
            <strong>1440p</strong><span>VP9</span><span>60</span><span>982 MB</span>
          </div>
          <div className="downloader-format-row">
            <strong>1080p</strong><span>H.264</span><span>30</span><span>426 MB</span>
          </div>
        </div>
        <div className="downloader-status" aria-hidden="true">
          <div>
            <span><Download size={14} /> 正在下载最高画质</span>
            <strong>68%</strong>
          </div>
          <div className="downloader-progress"><i /></div>
        </div>
      </div>
    </div>
  );
}

function CrossfitVisual({
  compact = false,
  priority = false,
}: {
  compact?: boolean;
  priority?: boolean;
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
            <span>WHOOP LIVE</span>
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
        <span>HyperFrames · 10 HUD presets · Privacy-safe preview</span>
      </div>
    </div>
  );
}

function ProductVisual({
  compact,
  priority,
  product,
}: {
  compact?: boolean;
  priority?: boolean;
  product: ProductKey;
}) {
  if (product === "readytype") {
    return <ReadyTypeVisual compact={compact} priority={priority} />;
  }
  if (product === "readycheck") {
    return <ReadyCheckVisual compact={compact} priority={priority} />;
  }
  if (product === "readydownloader") {
    return <ReadyDownloaderVisual compact={compact} />;
  }
  return <CrossfitVisual compact={compact} priority={priority} />;
}

export function HomePage() {
  const [lang, setLang] = useState<Lang>("zh");
  const [selectedProduct, setSelectedProduct] = useState<ProductKey>("readytype");
  const t = copy[lang];
  const selected = t.products[selectedProduct];

  return (
    <Shell lang={lang} setLang={setLang}>
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
            <Button href="/downloads" variant="secondary">
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
                  key={product}
                  onClick={() => setSelectedProduct(product)}
                  onFocus={() => setSelectedProduct(product)}
                  onMouseEnter={() => setSelectedProduct(product)}
                  role="tab"
                  type="button"
                >
                  <span>{item.name}</span>
                  <small>{item.eyebrow}</small>
                </button>
              );
            })}
          </div>
        </div>
        <div className={`product-showcase-stage product-${selectedProduct}`} id="selected-product-panel" role="tabpanel">
          <div className="product-showcase-copy" key={`${lang}-${selectedProduct}-copy`}>
            <div className="product-meta">
              <span>{selected.name}</span>
              <span>{selected.version}</span>
              <span>{selected.platform}</span>
            </div>
            <h3>{selected.homeTitle}</h3>
            <p>{selected.homeBody}</p>
            <div className="highlight-list">
              {selected.highlights.map((highlight) => (
                <span key={highlight}><Check size={14} />{highlight}</span>
              ))}
            </div>
            <a className="text-link" href={routes[selectedProduct]}>
              {selected.homeAction}<ArrowRight size={16} />
            </a>
          </div>
          <div className="product-showcase-visual" key={`${selectedProduct}-visual`}>
            <ProductVisual compact priority product={selectedProduct} />
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

export function ProductPage({ product }: { product: ProductKey }) {
  const [lang, setLang] = useState<Lang>("zh");
  const t = copy[lang].products[product];
  const icons = featureIcons[product];
  const repositoryFirst = product === "crossfit" || product === "readydownloader";

  return (
    <Shell activeProduct={product} lang={lang} setLang={setLang}>
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
              {repositoryFirst ? <Github size={17} /> : <ArrowDownToLine size={17} />}
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
          <ProductVisual priority product={product} />
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

      <section className="release-section" data-reveal>
        <div className="release-heading">
          <p className="eyebrow">{t.notesTitle}</p>
          <h2>{t.finalTitle}</h2>
          <p>{t.finalBody}</p>
          <Button href={productLinks[product].primary}>
            {repositoryFirst ? <Github size={17} /> : <ArrowDownToLine size={17} />}
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
            {product === "crossfit" || product === "readydownloader"
              ? lang === "zh"
                ? "阅读构建说明"
                : "Read build instructions"
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
        meta: lang === "zh" ? "解析、格式、下载与兼容转换" : "Parsing, formats, downloads, and compatibility",
        body: lang === "zh"
          ? "提交 ReadyDownloader 解析、下载、代理、Cookie 或 iPhone 兼容问题。"
          : "Report ReadyDownloader parsing, download, proxy, cookie, or iPhone-compatibility issues.",
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
      href: "/readytype",
    },
    {
      name: "ReadyCheck",
      meta: lang === "zh" ? "只读用量检查" : "Read-only usage checks",
      body: lang === "zh"
        ? "额度刷新读取已授权的用量数据，不通过发送 Prompt 或调用模型推理来估算额度。"
        : "Usage refresh reads authorized usage data and does not estimate quota by sending prompts or inference requests.",
      action: lang === "zh" ? "查看产品" : "View product",
      href: "/readycheck",
    },
    {
      name: "ReadyDownloader",
      meta: lang === "zh" ? "本地下载与可选认证" : "Local downloads and optional authentication",
      body: lang === "zh"
        ? "下载文件保存在用户选择的位置；Cookie 仅用于用户授权的会话，不应上传到公开反馈。"
        : "Files are saved to the chosen local destination. Cookies are only for authorized sessions and must not be attached to public issues.",
      action: lang === "zh" ? "查看产品" : "View product",
      href: "/readydownloader",
    },
    {
      name: "GitHub Issues",
      meta: lang === "zh" ? "公开反馈区域" : "Public feedback area",
      body: lang === "zh"
        ? "提交问题前，请移除 Token、回调 URL、账户 ID、私人素材和本地文件路径。"
        : "Remove tokens, callback URLs, account IDs, private media, and local file paths before submitting.",
      action: lang === "zh" ? "查看支持" : "View support",
      href: "/support",
    },
  ];
}

export function ResourcePage({ page }: { page: ResourceKey }) {
  const [lang, setLang] = useState<Lang>("zh");
  const t = copy[lang].resources[page];
  const rows = getResourceRows(page, lang);
  const Icon = resourceIcons[page];

  return (
    <Shell lang={lang} setLang={setLang}>
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
