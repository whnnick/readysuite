"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  Activity,
  ArrowDownToLine,
  ArrowRight,
  Clipboard,
  Film,
  Github,
  Languages,
  LockKeyhole,
  Mic,
  MonitorUp,
  RefreshCcw,
  ShieldCheck,
  Terminal,
  Video,
  WifiOff,
  WandSparkles,
} from "lucide-react";

type Lang = "zh" | "en";
type ProductKey = "readycheck" | "readytype" | "crossfit";
type ResourceKey = "downloads" | "support" | "privacy";

const links = {
  readyCheckDownload: "https://github.com/whnnick/readycheck/releases/latest",
  readyCheckGitHub: "https://github.com/whnnick/readycheck",
  readyCheckReleases: "https://github.com/whnnick/readycheck/releases",
  readyCheckIssues: "https://github.com/whnnick/readycheck/issues",
  readyTypeDownload: "https://github.com/whnnick/readytype/releases/latest",
  readyTypeGitHub: "https://github.com/whnnick/readytype",
  readyTypeReleases: "https://github.com/whnnick/readytype/releases",
  readyTypeIssues: "https://github.com/whnnick/readytype/issues",
  crossfitGitHub: "https://github.com/whnnick/crossfit-whoop-video",
  crossfitDocs: "https://github.com/whnnick/crossfit-whoop-video#readme",
  crossfitIssues: "https://github.com/whnnick/crossfit-whoop-video/issues",
};

const copy = {
  zh: {
    nav: {
      software: "软件",
      readycheck: "ReadyCheck",
      readytype: "ReadyType",
      crossfit: "CrossFit WHOOP Video",
      downloads: "下载",
      support: "支持",
      github: "GitHub",
    },
    home: {
      eyebrow: "ReadySuite",
      title: "AI 原生工作流工具箱。",
      body: "ReadySuite 面向 AI 原生工作流，提供可下载、可验证、可持续迭代的轻量工具。优先解决高频输入、额度可视化和自动化内容制作中的真实效率问题。",
      primary: "查看 ReadyType",
      secondary: "查看 ReadyCheck",
      note: "每个产品独立成页、独立发布，下载、源码和版本记录保持透明。",
      panelTitle: "产品",
      panelBody: "从当前发布的工具开始。",
      products: [
        ["ReadyType", "中文优先的 macOS 语音输入工具", "下载 1.0"],
        ["ReadyCheck", "macOS Codex 额度监控工具", "下载预览版"],
        ["CrossFit WHOOP Video", "竖屏 4K 视频制作工作流", "查看仓库"],
      ],
    },
    readycheck: {
      eyebrow: "macOS 预览版",
      title: "让 Codex 额度状态常驻可见。",
      body: "ReadyCheck 是一款 macOS 菜单栏和桌面小组件应用，用于查看 Codex 订阅额度窗口。桌面 widget 可常驻置顶，让剩余额度和刷新状态保持可见，减少反复输入命令或切换页面查看配额的打断；检查过程不发送模型推理请求。",
      primary: "下载最新 DMG",
      secondary: "查看源码",
      sections: {
        features: "核心能力",
        notes: "发布说明",
        download: "下载 ReadyCheck",
      },
      features: [
        ["菜单栏状态", "在系统菜单栏中查看 Codex 额度摘要，减少切换页面的成本。"],
        ["桌面小组件", "将可拖拽小组件放在工作区，持续显示关键使用状态。"],
        ["可控刷新", "支持手动刷新，也支持 1 分钟、3 分钟或 5 分钟自动刷新。"],
        ["失败不猜测", "当数据无法验证时显示降级状态，不估算或编造额度。"],
      ],
      notes: [
        "支持 Codex OAuth 订阅使用方式，不支持密码登录。",
        "OAuth 凭据存储在 macOS Keychain。",
        "预览版构建为 ad-hoc 签名，暂未 notarize。",
        "下载来源为 GitHub Releases。",
      ],
      ctaBody: "主下载按钮会打开 ReadyCheck 的 GitHub 最新 release。每次发布都以 GitHub Releases 作为可信下载来源。",
      releaseLabel: "所有发布",
    },
    readytype: {
      eyebrow: "macOS 1.0",
      title: "把自然口述变成可直接使用的文字。",
      body: "ReadyType 是中文优先的 macOS 语音输入工具。双击 Option 开始说话，再次双击完成输出；可直接转文字、整理成文、翻译成英文，或整理成适合发给 AI 的任务说明。",
      primary: "下载 ReadyType",
      secondary: "查看源码",
      sections: {
        features: "核心能力",
        notes: "发布说明",
        download: "下载 ReadyType",
      },
      features: [
        ["双击 Option", "在任意输入框中双击 Option 开始和结束语音输入。"],
        ["四种输出方式", "支持直接转文字、整理成文、翻译成英文和写给 AI。"],
        ["DeepSeek-v4-flash", "调用 DeepSeek-v4-flash 处理 AI 输出，爽用一天不到 1 毛钱。"],
        ["粘贴降级", "自动粘贴不可用时，会把结果复制到剪贴板。"],
      ],
      notes: [
        "需要 macOS 14 或更高版本。",
        "整理成文、翻译成英文和写给 AI 需要 DeepSeek 密钥，默认调用 DeepSeek-v4-flash。",
        "直接转文字不调用 DeepSeek。",
        "当前 1.0.0 分发包未签名、未公证。",
      ],
      ctaBody: "ReadyType 通过 GitHub Releases 分发 `ReadyType.dmg`。首次打开未签名构建时，请在 Applications 中右键应用并选择打开，不要关闭 macOS 系统安全设置。",
      releaseLabel: "所有发布",
    },
    crossfit: {
      eyebrow: "开源视频制作工作流",
      title: "把运动数据做进竖屏 4K 视频。",
      body: "CrossFit WHOOP Video 是一个开源视频制作工作流，用 HyperFrames 模板、自动化资产和 WHOOP 风格 HUD，把训练片段包装成适合 Shorts、Reels 和 TikTok 的发布素材。",
      primary: "打开仓库",
      secondary: "阅读文档",
      sections: {
        features: "工作流内容",
        notes: "仓库边界",
        download: "项目资源",
      },
      features: [
        ["竖屏 4K 输出", "面向 Shorts、Reels 和 TikTok 的 9:16 视频制作目标。"],
        ["HyperFrames 模板", "提供可复用的视频组合结构和制作脚手架。"],
        ["自动化资产", "包含 Codex/OpenClaw skill 与 plugin 相关资源。"],
        ["HUD 预设", "提供 WHOOP 风格的运动数据叠加层预设。"],
      ],
      notes: [
        "仓库不包含真实训练视频。",
        "仓库不包含渲染完成的 MP4 文件。",
        "仓库不包含 token、.env 或真实 WHOOP 数据。",
        "这是开源工作流资源，不是可安装桌面应用。",
      ],
      ctaBody: "该项目以 GitHub 仓库形式发布。请从仓库 README 查看结构、使用说明和资源边界。",
      releaseLabel: "查看文档",
    },
    resources: {
      downloads: {
        eyebrow: "下载中心",
        title: "选择产品并获取最新版本。",
        body: "ReadySuite 的下载入口按产品独立维护。可安装软件通过 GitHub Releases 分发，开源工作流直接进入项目仓库。",
        primary: "打开下载",
        secondary: "查看源码",
        cards: [
          ["ReadyType", "macOS 中文语音输入工具，支持 DeepSeek-v4-flash AI 输出。", "下载最新版本"],
          ["ReadyCheck", "macOS Codex 额度监控工具，支持菜单栏和桌面 widget。", "下载预览版"],
          ["CrossFit WHOOP Video", "开源竖屏 4K 健身视频制作工作流。", "打开仓库"],
        ],
      },
      support: {
        eyebrow: "支持与反馈",
        title: "用 GitHub Issues 处理公开反馈。",
        body: "请按产品提交问题，避免在公开 issue 中粘贴 API key、私人聊天记录、内部文件路径或敏感业务内容。",
        primary: "提交反馈",
        secondary: "查看仓库",
        cards: [
          ["ReadyType", "安装、权限、快捷键、语音识别、AI 输出和粘贴问题。", "提交 ReadyType 反馈"],
          ["ReadyCheck", "OAuth、额度读取、刷新、菜单栏和桌面 widget 问题。", "提交 ReadyCheck 反馈"],
          ["CrossFit WHOOP Video", "模板结构、渲染流程、HUD 预设和自动化资源问题。", "提交工作流反馈"],
        ],
      },
      privacy: {
        eyebrow: "隐私说明",
        title: "尽量把敏感数据留在本机和你控制的服务中。",
        body: "ReadySuite 产品会按功能需要请求系统权限或外部 API。本站不托管用户数据，下载、源码和反馈入口由 GitHub 提供。",
        primary: "查看产品",
        secondary: "提交问题",
        cards: [
          ["本地优先", "ReadyType 的快捷键、剪贴板和系统权限由 macOS 管理；ReadyCheck 的 OAuth 凭据存储在 macOS Keychain。", "查看 ReadyType"],
          ["外部 API", "ReadyType 的 AI 输出模式需要 DeepSeek key；直接转文字不调用 DeepSeek。ReadyCheck 检查 Codex 状态不发送模型推理请求。", "查看 ReadyCheck"],
          ["公开反馈", "GitHub Issues 是公开区域，提交前请移除 token、账号、私人文件路径和敏感上下文。", "查看支持"],
        ],
      },
    },
    mock: {
      quota: "额度窗口",
      ready: "可以继续构建",
      fiveHour: "5 小时窗口",
      sevenDay: "7 天窗口",
      lastRefresh: "上次刷新",
      validation: "校验",
      passed: "通过",
      menuBar: "菜单栏",
      refresh: "刷新",
      ago: "12 秒前",
      vertical: "竖屏 4K 模板",
      workflow: "Shorts / Reels / TikTok 工作流",
    },
    footer: "© 2026 ReadySuite。产品下载、源码和发布记录由 GitHub 托管。",
  },
  en: {
    nav: {
      software: "Software",
      readycheck: "ReadyCheck",
      readytype: "ReadyType",
      crossfit: "CrossFit WHOOP Video",
      downloads: "Downloads",
      support: "Support",
      github: "GitHub",
    },
    home: {
      eyebrow: "ReadySuite",
      title: "An AI-native workflow toolkit.",
      body: "ReadySuite provides downloadable, verifiable, and continuously improving tools for AI-native workflows, starting with high-frequency input, quota visibility, and automated content production.",
      primary: "View ReadyType",
      secondary: "View ReadyCheck",
      note: "Each product has its own page, release track, downloads, source, and version history.",
      panelTitle: "Products",
      panelBody: "Start with the tools currently available.",
      products: [
        ["ReadyType", "Chinese-first macOS voice input", "Download 1.0"],
        ["ReadyCheck", "macOS Codex quota monitor", "Download preview"],
        ["CrossFit WHOOP Video", "Vertical 4K video workflow", "Open repository"],
      ],
    },
    readycheck: {
      eyebrow: "macOS preview",
      title: "Keep Codex quota status visible.",
      body: "ReadyCheck is a macOS menu-bar and desktop-widget app for monitoring Codex subscription usage windows. The desktop widget can stay pinned on top, keeping remaining quota and refresh status visible so you do not need to repeatedly run commands or switch contexts to check usage. Usage checks do not send model inference requests.",
      primary: "Download latest DMG",
      secondary: "View source",
      sections: {
        features: "Core Capabilities",
        notes: "Release Notes",
        download: "Download ReadyCheck",
      },
      features: [
        ["Menu-bar status", "View Codex quota summaries from the macOS menu bar without switching pages."],
        ["Desktop widget", "Place a draggable widget in the workspace for persistent usage visibility."],
        ["Controlled refresh", "Refresh manually or choose 1-minute, 3-minute, or 5-minute auto-refresh intervals."],
        ["Fails closed", "When usage data cannot be validated, the app shows a degraded state instead of inventing values."],
      ],
      notes: [
        "Supports Codex OAuth subscription usage, not password-based access.",
        "OAuth credentials are stored in macOS Keychain.",
        "Preview builds are ad-hoc signed and not notarized yet.",
        "Downloads are distributed through GitHub Releases.",
      ],
      ctaBody: "The primary download opens the latest ReadyCheck GitHub release. GitHub Releases is used as the trusted source for distributed builds.",
      releaseLabel: "All releases",
    },
    readytype: {
      eyebrow: "macOS 1.0",
      title: "Turn natural speech into usable text.",
      body: "ReadyType is a Chinese-first macOS voice input tool. Double-press Option to start speaking, press it again to output text, then choose direct dictation, polished writing, English translation, or AI-ready instructions.",
      primary: "Download ReadyType",
      secondary: "View source",
      sections: {
        features: "Core Capabilities",
        notes: "Release Notes",
        download: "Download ReadyType",
      },
      features: [
        ["Double-press Option", "Start and finish voice input from any text field."],
        ["Four output modes", "Use direct dictation, polished writing, English translation, or AI-instruction output."],
        ["DeepSeek-v4-flash", "AI output modes call DeepSeek-v4-flash, keeping daily use under RMB 0.10 in typical use."],
        ["Paste fallback", "If automatic paste is unavailable, ReadyType copies the result to the clipboard."],
      ],
      notes: [
        "Requires macOS 14 or later.",
        "Polished writing, English translation, and AI-instruction output require a DeepSeek key and call DeepSeek-v4-flash by default.",
        "Direct dictation does not call DeepSeek.",
        "The 1.0.0 distributed build is unsigned and not notarized.",
      ],
      ctaBody: "ReadyType distributes `ReadyType.dmg` through GitHub Releases. For the unsigned build, open the app from Applications with right-click Open; do not disable macOS security settings.",
      releaseLabel: "All releases",
    },
    crossfit: {
      eyebrow: "open video-production workflow",
      title: "Turn workout data into vertical 4K video.",
      body: "CrossFit WHOOP Video is an open production workflow that combines HyperFrames templates, automation assets, and WHOOP-style HUD presets for Shorts, Reels, and TikTok-ready training edits.",
      primary: "Open repository",
      secondary: "Read docs",
      sections: {
        features: "Workflow Contents",
        notes: "Repository Boundaries",
        download: "Project Resources",
      },
      features: [
        ["Vertical 4K output", "Targets 9:16 Shorts, Reels, and TikTok video production."],
        ["HyperFrames templates", "Provides reusable composition structure and production scaffolding."],
        ["Automation assets", "Includes Codex/OpenClaw skill and plugin resources."],
        ["HUD presets", "Provides WHOOP-style athletic data overlay presets."],
      ],
      notes: [
        "The repository does not include real training footage.",
        "The repository does not include rendered MP4 files.",
        "The repository does not include tokens, .env files, or real WHOOP data.",
        "This is an open workflow resource, not an installable desktop app.",
      ],
      ctaBody: "This project is distributed as a GitHub repository. Use the README for structure, usage notes, and resource boundaries.",
      releaseLabel: "Read docs",
    },
    resources: {
      downloads: {
        eyebrow: "Download Center",
        title: "Choose a product and get the latest version.",
        body: "ReadySuite download entry points are maintained per product. Installable apps are distributed through GitHub Releases; open workflows link directly to their repositories.",
        primary: "Open download",
        secondary: "View source",
        cards: [
          ["ReadyType", "A macOS Chinese-first voice input app with DeepSeek-v4-flash AI output modes.", "Download latest"],
          ["ReadyCheck", "A macOS Codex quota monitor with menu-bar and desktop-widget visibility.", "Download preview"],
          ["CrossFit WHOOP Video", "An open vertical 4K fitness video production workflow.", "Open repository"],
        ],
      },
      support: {
        eyebrow: "Support",
        title: "Public feedback is handled through GitHub Issues.",
        body: "Submit feedback by product, and do not include API keys, private chats, internal file paths, or sensitive business context in public issues.",
        primary: "Submit feedback",
        secondary: "View repository",
        cards: [
          ["ReadyType", "Installation, permissions, shortcuts, speech recognition, AI output, and paste behavior.", "Submit ReadyType feedback"],
          ["ReadyCheck", "OAuth, quota reading, refresh behavior, menu-bar status, and desktop widget issues.", "Submit ReadyCheck feedback"],
          ["CrossFit WHOOP Video", "Template structure, rendering workflow, HUD presets, and automation resources.", "Submit workflow feedback"],
        ],
      },
      privacy: {
        eyebrow: "Privacy",
        title: "Keep sensitive data local or in services you control.",
        body: "ReadySuite products request system permissions or external APIs only when the feature requires them. This website does not host user data; downloads, source, and feedback are provided through GitHub.",
        primary: "View product",
        secondary: "Submit issue",
        cards: [
          ["Local first", "ReadyType shortcuts, clipboard access, and system permissions are managed by macOS. ReadyCheck stores OAuth credentials in macOS Keychain.", "View ReadyType"],
          ["External APIs", "ReadyType AI output modes require a DeepSeek key; direct dictation does not call DeepSeek. ReadyCheck does not send model inference requests when checking Codex status.", "View ReadyCheck"],
          ["Public feedback", "GitHub Issues are public. Remove tokens, accounts, private paths, and sensitive context before submitting.", "View support"],
        ],
      },
    },
    mock: {
      quota: "Quota windows",
      ready: "Ready to build",
      fiveHour: "5-hour window",
      sevenDay: "7-day window",
      lastRefresh: "Last refresh",
      validation: "Validation",
      passed: "Passed",
      menuBar: "Menu bar",
      refresh: "Refresh",
      ago: "12 sec ago",
      vertical: "Vertical 4K template",
      workflow: "Shorts / Reels / TikTok workflow",
    },
    footer: "© 2026 ReadySuite. Product downloads, source code, and release history are hosted on GitHub.",
  },
} as const;

const productLinks = {
  readycheck: {
    href: "/readycheck",
    primary: links.readyCheckDownload,
    secondary: links.readyCheckGitHub,
    tertiary: links.readyCheckReleases,
    repo: links.readyCheckGitHub,
  },
  readytype: {
    href: "/readytype",
    primary: links.readyTypeDownload,
    secondary: links.readyTypeGitHub,
    tertiary: links.readyTypeReleases,
    repo: links.readyTypeGitHub,
  },
  crossfit: {
    href: "/crossfit-whoop-video",
    primary: links.crossfitGitHub,
    secondary: links.crossfitDocs,
    tertiary: links.crossfitDocs,
    repo: links.crossfitGitHub,
  },
};

const featureIcons = [MonitorUp, Activity, RefreshCcw, WifiOff] as const;
const readyTypeIcons = [Mic, WandSparkles, Languages, Clipboard] as const;
const crossfitIcons = [Video, Film, Terminal, Activity] as const;
const crossfitPipeline = [
  { label: "Motion Capture", body: "pose map" },
  { label: "Digital Athlete", body: "privacy-safe render" },
  { label: "WHOOP HUD", body: "data overlay" },
] as const;

function externalLinkProps(href: string) {
  return href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {};
}

function Button({
  children,
  href,
  variant = "primary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      className={
        variant === "primary"
          ? "inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-lg bg-cyan px-4 py-3 text-center text-sm font-black leading-5 text-[#06101d] shadow-glow transition hover:-translate-y-0.5 hover:bg-[#6addff] sm:px-5"
          : "inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-lg border border-white/16 bg-white/[.06] px-4 py-3 text-center text-sm font-black leading-5 text-white transition hover:bg-white/[.11] sm:px-5"
      }
      href={href}
      {...externalLinkProps(href)}
    >
      {children}
    </a>
  );
}

function LanguageToggle({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return (
    <div className="inline-grid grid-cols-2 overflow-hidden rounded-lg border border-white/15 bg-white/[.06] p-1 text-xs font-black sm:text-sm">
      <button
        className={`rounded-md px-2 py-2 transition sm:px-3 ${lang === "zh" ? "bg-cyan text-[#06101d]" : "text-white/70 hover:text-white"}`}
        type="button"
        onClick={() => onChange("zh")}
      >
        中文
      </button>
      <button
        className={`rounded-md px-2 py-2 transition sm:px-3 ${lang === "en" ? "bg-cyan text-[#06101d]" : "text-white/70 hover:text-white"}`}
        type="button"
        onClick={() => onChange("en")}
      >
        EN
      </button>
    </div>
  );
}

function Header({
  lang,
  setLang,
  activeProduct,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
  activeProduct?: ProductKey;
}) {
  const t = copy[lang];

  return (
    <header className="relative mx-auto mt-5 max-w-7xl px-4 sm:px-5">
      <nav className="flex items-center justify-between gap-3 py-4">
        <a className="flex items-center gap-3" href="/">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-cyan font-black text-[#06101d]">R</div>
          <span className="hidden text-lg font-black tracking-tight sm:inline">ReadySuite</span>
        </a>
        <div className="hidden items-center gap-6 text-sm font-semibold text-white/70 md:flex">
          <span className="text-white/45">{t.nav.software}</span>
          <a className={activeProduct === "readytype" ? "text-white" : ""} href={productLinks.readytype.href}>
            {t.nav.readytype}
          </a>
          <a className={activeProduct === "readycheck" ? "text-white" : ""} href={productLinks.readycheck.href}>
            {t.nav.readycheck}
          </a>
          <a className={activeProduct === "crossfit" ? "text-white" : ""} href={productLinks.crossfit.href}>
            {t.nav.crossfit}
          </a>
          <a href="/downloads">{t.nav.downloads}</a>
          <a href="/support">{t.nav.support}</a>
        </div>
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <select
            className="h-11 w-[132px] rounded-lg border border-white/15 bg-[#111827] px-2 text-sm font-bold text-white md:hidden"
            value={activeProduct ? productLinks[activeProduct].href : ""}
            onChange={(event) => {
              if (event.target.value) {
                window.location.href = event.target.value;
              }
            }}
          >
            <option value="">{t.nav.software}</option>
            <option value={productLinks.readytype.href}>{t.nav.readytype}</option>
            <option value={productLinks.readycheck.href}>{t.nav.readycheck}</option>
            <option value={productLinks.crossfit.href}>{t.nav.crossfit}</option>
          </select>
          <div className="hidden sm:block">
            <LanguageToggle lang={lang} onChange={setLang} />
          </div>
          <a
            className="hidden items-center gap-2 rounded-lg border border-white/15 bg-white/[.06] px-4 py-3 text-sm font-bold lg:flex"
            href={activeProduct ? productLinks[activeProduct].repo : links.readyCheckGitHub}
            {...externalLinkProps(activeProduct ? productLinks[activeProduct].repo : links.readyCheckGitHub)}
          >
            <Github size={16} />
            {t.nav.github}
          </a>
        </div>
      </nav>
      <div className="flex justify-end sm:hidden">
        <LanguageToggle lang={lang} onChange={setLang} />
      </div>
    </header>
  );
}

function Shell({
  children,
  lang,
  setLang,
  activeProduct,
}: {
  children: ReactNode;
  lang: Lang;
  setLang: (lang: Lang) => void;
  activeProduct?: ProductKey;
}) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-base text-white">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute -left-48 top-16 h-[30rem] w-[30rem] rounded-full bg-cyan/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-[26rem] w-[26rem] rounded-full bg-green/10 blur-3xl" />
      <Header lang={lang} setLang={setLang} activeProduct={activeProduct} />
      {children}
      <footer className="relative border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-muted md:flex-row">
          <div>
            <p className="font-black text-white">ReadySuite</p>
            <p className="mt-2">{copy[lang].footer}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href={productLinks.readytype.href}>ReadyType</a>
            <a href={productLinks.readycheck.href}>ReadyCheck</a>
            <a href={productLinks.crossfit.href}>CrossFit WHOOP Video</a>
            <a href="/downloads">{copy[lang].nav.downloads}</a>
            <a href="/support">{copy[lang].nav.support}</a>
            <a href="/privacy">{lang === "zh" ? "隐私" : "Privacy"}</a>
            <a href={links.readyCheckReleases} {...externalLinkProps(links.readyCheckReleases)}>Releases</a>
            <a href={links.readyCheckIssues} {...externalLinkProps(links.readyCheckIssues)}>Issues</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export function HomePage() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = copy[lang];

  return (
    <Shell lang={lang} setLang={setLang}>
      <section className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-20 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-md border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-bold text-cyan">
            {t.home.eyebrow}
          </span>
          <h1 className="mt-8 max-w-5xl break-all text-3xl font-black leading-tight tracking-tight text-white sm:break-words sm:text-5xl md:text-6xl xl:whitespace-nowrap">
            {t.home.title}
          </h1>
          <p className="mt-7 max-w-2xl break-words text-lg leading-8 text-white/70">{t.home.body}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={productLinks.readytype.href}>
              {t.home.primary}
              <ArrowRight size={16} />
            </Button>
            <Button href={productLinks.readycheck.href} variant="secondary">
              {t.home.secondary}
              <ArrowRight size={16} />
            </Button>
          </div>
          <p className="mt-6 max-w-xl text-sm leading-6 text-muted">{t.home.note}</p>
        </div>
        <HomeMotionShowcase lang={lang} />
      </section>
    </Shell>
  );
}

function HomeMotionShowcase({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <div className="motion-stage relative overflow-hidden rounded-lg border border-white/10 bg-[#0d1426] p-5 shadow-panel md:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_12%,rgba(72,208,245,.18),transparent_32%),radial-gradient(circle_at_16%_82%,rgba(53,229,153,.14),transparent_34%)]" />
      <div className="relative flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black tracking-[0.24em] text-cyan">{t.home.panelTitle}</p>
          <p className="mt-2 text-sm leading-6 text-white/60">{t.home.panelBody}</p>
        </div>
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan motion-dot motion-dot-a" />
          <span className="h-2 w-2 rounded-full bg-green motion-dot motion-dot-b" />
          <span className="h-2 w-2 rounded-full bg-purple motion-dot motion-dot-c" />
        </div>
      </div>

      <div className="relative mt-7 min-h-[440px] overflow-hidden rounded-lg border border-white/10 bg-[#070d19] p-4 sm:min-h-[390px]">
        <div className="motion-card motion-card-type">
          <ReadyTypeMini />
        </div>
        <div className="motion-card motion-card-check">
          <ReadyCheckMini />
        </div>
        <div className="motion-card motion-card-fit">
          <CrossfitMini t={copy[lang].mock} />
        </div>
      </div>

      <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
        <SoftwarePill
          title={t.home.products[0][0]}
          action={t.home.products[0][2]}
          href={productLinks.readytype.href}
        />
        <SoftwarePill
          title={t.home.products[1][0]}
          action={t.home.products[1][2]}
          href={productLinks.readycheck.href}
        />
        <SoftwarePill
          title={t.home.products[2][0]}
          action={t.home.products[2][2]}
          href={productLinks.crossfit.href}
        />
      </div>
    </div>
  );
}

function SoftwarePill({ title, action, href }: { title: string; action: string; href: string }) {
  return (
    <a className="group rounded-lg border border-white/10 bg-white/[.045] p-4 transition hover:bg-white/[.08]" href={href}>
      <span className="block text-sm font-black text-white">{title}</span>
      <span className="mt-2 inline-flex items-center gap-2 text-xs font-black text-cyan">
        {action}
        <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}

const resourceTargets = {
  downloads: [
    { primary: links.readyTypeDownload, secondary: links.readyTypeGitHub },
    { primary: links.readyCheckDownload, secondary: links.readyCheckGitHub },
    { primary: links.crossfitGitHub, secondary: links.crossfitDocs },
  ],
  support: [
    { primary: links.readyTypeIssues, secondary: links.readyTypeGitHub },
    { primary: links.readyCheckIssues, secondary: links.readyCheckGitHub },
    { primary: links.crossfitIssues, secondary: links.crossfitGitHub },
  ],
  privacy: [
    { primary: productLinks.readytype.href, secondary: links.readyTypeIssues },
    { primary: productLinks.readycheck.href, secondary: links.readyCheckIssues },
    { primary: "/support", secondary: "/support" },
  ],
} as const;

export function ResourcePage({ page }: { page: ResourceKey }) {
  const [lang, setLang] = useState<Lang>("zh");
  const t = copy[lang].resources[page];
  const targets = resourceTargets[page];

  return (
    <Shell lang={lang} setLang={setLang}>
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20">
        <span className="inline-flex rounded-md border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-bold text-cyan">
          {t.eyebrow}
        </span>
        <h1 className="mt-8 max-w-4xl break-all text-3xl font-black leading-tight tracking-tight text-white [text-wrap:balance] sm:break-words sm:text-5xl md:text-6xl">{t.title}</h1>
        <p className="mt-7 max-w-3xl break-words text-lg leading-8 text-white/70">{t.body}</p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.cards.map(([title, body, action], index) => (
            <article key={title} className="flex min-h-[320px] flex-col rounded-lg border border-white/10 bg-panel/82 p-6 shadow-panel">
              <div className="grid h-12 w-12 place-items-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
                {index === 0 ? <Mic size={20} /> : index === 1 ? <MonitorUp size={20} /> : <Film size={20} />}
              </div>
              <h2 className="mt-7 break-words text-2xl font-black text-white">{title}</h2>
              <p className="mt-4 flex-1 break-words text-base leading-7 text-white/66">{body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={targets[index].primary}>{action}</Button>
                <Button href={targets[index].secondary} variant="secondary">
                  {t.secondary}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}

export function ProductPage({ product }: { product: ProductKey }) {
  const [lang, setLang] = useState<Lang>("zh");
  const t = copy[lang][product];
  const productLink = productLinks[product];
  const isReadyCheck = product === "readycheck";
  const isReadyType = product === "readytype";
  const isCrossfit = product === "crossfit";
  const icons = isReadyCheck ? featureIcons : isReadyType ? readyTypeIcons : crossfitIcons;
  const readyTypeCost =
    lang === "zh"
      ? {
          label: "低成本 AI 处理",
          title: "调用 DeepSeek-v4-flash",
          body: "爽用一天不到 1 毛钱",
        }
      : {
          label: "Low-cost AI processing",
          title: "Powered by DeepSeek-v4-flash",
          body: "Typical daily use stays under RMB 0.10",
        };

  return (
    <Shell lang={lang} setLang={setLang} activeProduct={product}>
      <section className="relative mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-20 lg:grid-cols-[1fr_.95fr] lg:items-center">
        <div>
          <span className="inline-flex rounded-md border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-bold text-cyan">
            {t.eyebrow}
          </span>
          <h1
            className={`mt-8 max-w-4xl break-all font-black leading-tight tracking-tight text-white [text-wrap:balance] sm:break-words ${
              isCrossfit ? "text-3xl sm:text-4xl md:text-5xl" : "text-3xl sm:text-5xl md:text-6xl"
            }`}
          >
            {t.title}
          </h1>
          <p className="mt-7 max-w-2xl break-words text-lg leading-8 text-white/70">{t.body}</p>
          {isReadyType ? (
            <div className="mt-7 max-w-2xl rounded-lg border border-green/25 bg-green/10 p-5 shadow-panel">
              <p className="text-xs font-black tracking-[0.22em] text-green">{readyTypeCost.label}</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <p className="break-words text-2xl font-black text-white">{readyTypeCost.title}</p>
                <p className="break-words text-lg font-black text-green">{readyTypeCost.body}</p>
              </div>
            </div>
          ) : null}
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={productLink.primary}>
              {isReadyCheck ? <ArrowDownToLine size={18} /> : <Github size={18} />}
              {t.primary}
            </Button>
            <Button href={productLink.secondary} variant="secondary">
              {t.secondary}
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
        {isReadyCheck ? <ReadyCheckScreenshot /> : isReadyType ? <ReadyTypePreview /> : <CrossfitPreview t={copy[lang].mock} />}
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <p className="text-sm font-black tracking-[0.24em] text-cyan">{t.sections.features}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.features.map(([title, body], index) => {
            const Icon = icons[index];
            return (
              <article key={title} className="rounded-lg border border-white/10 bg-panel/82 p-6 shadow-panel">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-cyan/25 bg-cyan/10 text-cyan">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 break-words text-xl font-black">{title}</h3>
                <p className="mt-3 break-words text-sm leading-6 text-white/65">{body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="grid overflow-hidden rounded-lg border border-white/10 bg-[#0d1426] shadow-panel lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-sm font-black tracking-[0.24em] text-cyan">{t.sections.notes}</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{t.sections.download}</h2>
            <p className="mt-6 text-lg leading-8 text-white/70">{t.ctaBody}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={productLink.primary}>{t.primary}</Button>
              <Button href={productLink.tertiary} variant="secondary">{t.releaseLabel}</Button>
            </div>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {t.notes.map((item, index) => (
              <div key={item} className="bg-[#09101f] p-6">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-white/[.06] text-cyan">
                  {index === 0 ? <Terminal size={19} /> : index === 1 ? <LockKeyhole size={19} /> : <ShieldCheck size={19} />}
                </div>
                <p className="mt-5 text-base font-bold leading-7 text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}

function ReadyCheckScreenshot() {
  return (
    <div className="motion-shell readycheck-shell relative mx-auto w-full max-w-[660px] overflow-hidden rounded-lg border border-white/12 bg-[#07101e] p-3 shadow-panel">
      <div className="readycheck-backlight pointer-events-none absolute inset-0" />
      <div className="scan-line pointer-events-none absolute left-3 right-3 top-3 z-20 h-16 rounded-md" />
      <div className="readycheck-focus pointer-events-none absolute z-20 rounded-md border border-cyan/35" />
      <ReadyCheckMenuCard className="readycheck-menu-large absolute left-5 top-5 z-30 w-[280px]" />
      <Image
        alt="ReadyCheck macOS app quota window"
        className="readycheck-main-shot relative z-10 block w-full rounded-md border border-white/10"
        height={1110}
        priority
        sizes="(min-width: 1024px) 660px, calc(100vw - 48px)"
        src="/readycheck-main-real.jpg"
        width={1488}
      />
      <div className="readycheck-widget-shot absolute bottom-5 right-5 z-30 w-[38%] min-w-[172px] max-w-[260px] rounded-lg border border-white/14 bg-[#09101f] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,.48)]">
        <Image
          alt="ReadyCheck desktop widget"
          className="block w-full rounded-md"
          height={650}
          sizes="260px"
          src="/readycheck-widget-real.jpg"
          width={700}
        />
      </div>
    </div>
  );
}

function ReadyCheckMenuCard({ className = "" }: { className?: string }) {
  return (
    <div className={`readycheck-menu-card rounded-lg border border-white/14 bg-[#111827]/92 p-4 shadow-[0_24px_70px_rgba(0,0,0,.48)] backdrop-blur ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-black text-white">菜单栏速览</p>
          <p className="mt-1 text-xs font-bold text-white/55">ReadyCheck</p>
        </div>
        <div className="readycheck-spinner grid h-9 w-9 place-items-center rounded-md bg-[linear-gradient(135deg,#48d0f5,#35e599)]">
          <span className="h-4 w-4 rounded-full border-[3px] border-white border-t-white/40" />
        </div>
      </div>
      <div className="mt-4 grid gap-3">
        <MenuMetric label="5 小时窗口" value="88%" tone="cyan" />
        <MenuMetric label="7 天窗口" value="78%" tone="green" />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 text-[11px] font-black text-white/60">
        <span>自动刷新</span>
        <span className="text-green">不消耗模型额度</span>
      </div>
    </div>
  );
}

function MenuMetric({ label, value, tone }: { label: string; value: string; tone: "cyan" | "green" }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-black text-white/82">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/12">
        <div className={`readycheck-menu-fill h-full rounded-full ${tone === "cyan" ? "bg-cyan" : "bg-green"}`} />
      </div>
    </div>
  );
}

function ReadyTypePreview() {
  return (
    <div className="motion-shell relative mx-auto w-full max-w-[620px] overflow-hidden rounded-lg border border-white/12 bg-[#09101f] shadow-panel">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[.045] px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-[#ff6258]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-sm font-semibold text-white/76">ReadyType</span>
        <span className="pulse-chip ml-auto rounded-md border border-cyan/25 bg-cyan/10 px-3 py-1 text-xs font-bold text-cyan">
          Option x2
        </span>
      </div>
      <div className="grid gap-5 p-6 md:p-7">
        <div className="rounded-lg border border-white/10 bg-[#111827] p-5">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan">Voice Input</p>
          <p className="mt-4 text-2xl font-black text-white">说出想法，ReadyType 输出可用文本。</p>
          <div className="mt-5 flex h-16 items-end gap-1.5 rounded-md bg-[#050914] p-4">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                className="wave-bar flex-1 rounded-full bg-cyan"
                style={{ animationDelay: `${index * 80}ms` }}
              />
            ))}
          </div>
          <div className="type-output mt-4 rounded-md border border-white/10 bg-[#050914] p-4 text-sm leading-6 text-white/70">
            <span>双击 Option 开始，完成后自动粘贴到当前输入框。</span>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {["直接转文字", "整理成文", "翻译成英文", "写给 AI"].map((mode, index) => (
            <div key={mode} className={`mode-card mode-card-${index} rounded-lg border border-white/10 bg-white/[.045] p-4`}>
              <p className="font-black text-white">{mode}</p>
              <p className="mt-2 text-xs text-muted">输出模式</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CrossfitPreview({ t }: { t: (typeof copy)[Lang]["mock"] }) {
  return (
    <div className="motion-shell crossfit-workbench relative mx-auto w-full max-w-[620px] overflow-hidden rounded-lg border border-white/12 bg-[#050914] shadow-panel">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[.045] px-5 py-4">
        <span className="h-3 w-3 rounded-full bg-[#ff6258]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-4 text-sm font-semibold text-white/76">CrossFit WHOOP Video</span>
        <span className="pulse-chip ml-auto rounded-md border border-green/25 bg-green/10 px-3 py-1 text-xs font-bold text-green">
          4K 9:16
        </span>
      </div>

      <div className="grid gap-4 p-4 md:grid-cols-[0.72fr_1fr] md:p-5">
        <div className="rounded-lg border border-white/10 bg-[#09101f] p-4">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-green">Privacy-safe pipeline</p>
          <div className="mt-4 grid gap-3">
            {crossfitPipeline.map((step, index) => (
              <div key={step.label} className={`asset-row asset-row-${index} flex items-center gap-3 rounded-md border border-white/10 bg-white/[.045] p-3`}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-green/20 bg-green/10 text-green">
                  {index === 0 ? <Activity size={17} /> : index === 1 ? <MonitorUp size={17} /> : <Video size={17} />}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-white">{step.label}</p>
                  <p className="mt-1 text-xs text-muted">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-lg border border-white/12 bg-[#050914]">
          <Image
            alt="CrossFit WHOOP Video anonymized digital athlete preview"
            className="crossfit-real-frame object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 300px, 80vw"
            src="/crossfit-digital-athlete.jpg"
          />
          <div className="crossfit-scene crossfit-scene-0 absolute inset-0" />
          <div className="crossfit-scene crossfit-scene-1 absolute inset-0" />
          <div className="crossfit-scene crossfit-scene-2 absolute inset-0" />
          <div className="digital-grid absolute inset-0 opacity-60" />
          <div className="pose-skeleton absolute inset-x-[30%] top-[24%] h-64">
            <span className="pose-head" />
            <span className="pose-spine" />
            <span className="pose-arm pose-arm-left" />
            <span className="pose-arm pose-arm-right" />
            <span className="pose-leg pose-leg-left" />
            <span className="pose-leg pose-leg-right" />
          </div>
          <div className="rep-figure absolute left-1/2 top-[32%] h-52 w-32 -translate-x-1/2 rounded-full border border-green/35 bg-green/10 shadow-[0_0_55px_rgba(53,229,153,.28)] mix-blend-screen" />
          <div className="hud-scan absolute inset-x-0 top-0 h-28 bg-green/10" />
          <div className="absolute left-4 right-4 top-4 rounded-lg border border-white/12 bg-[#07101d]/80 p-3 backdrop-blur">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-green">DIGITAL ATHLETE</p>
              <p className="text-xs font-black text-white/70">LIVE HUD</p>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <HudMetric label="HR" value="156" active />
              <HudMetric label="Strain" value="12.4" />
              <HudMetric label="Zone" value="4" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/12 bg-[#07101d]/86 p-3">
            <p className="text-xs font-black tracking-[0.18em] text-green">EXPORT</p>
            <p className="mt-1 text-sm font-black text-white">{t.vertical}</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="export-progress h-full rounded-full bg-green" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#09101f] p-4">
        <div className="flex items-center gap-3">
          <Film className="shrink-0 text-green" size={20} />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-black text-white">{t.workflow}</p>
            <div className="timeline-track mt-3 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="timeline-progress h-full rounded-full bg-cyan" />
              <span className="timeline-cursor" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReadyTypeMini() {
  return (
    <div className="h-full rounded-lg border border-white/10 bg-[#09101f] p-5">
      <div className="flex items-center gap-2">
        <Mic className="text-cyan" size={20} />
        <p className="font-black text-white">ReadyType</p>
        <span className="pulse-chip ml-auto rounded-md bg-cyan/10 px-3 py-1 text-xs font-black text-cyan">Option x2</span>
      </div>
      <div className="mt-7 flex h-20 items-end gap-2 rounded-lg bg-[#050914] p-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="wave-bar flex-1 rounded-full bg-cyan"
            style={{ animationDelay: `${index * 55}ms` }}
          />
        ))}
      </div>
      <p className="type-output mt-6 rounded-lg border border-white/10 bg-white/[.045] p-4 text-lg font-black leading-8 text-white">
        把自然口述整理成可直接使用的文字。
      </p>
      <div className="mt-5 rounded-lg border border-green/20 bg-green/10 p-4">
        <p className="text-xs font-black tracking-[0.18em] text-green">DEEPSEEK-V4-FLASH</p>
        <p className="mt-2 text-xl font-black text-white">一天不到 1 毛钱</p>
      </div>
    </div>
  );
}

function ReadyCheckMini() {
  return (
    <div className="relative h-full overflow-hidden rounded-lg border border-white/10 bg-[#09101f] p-4">
      <div className="readycheck-backlight pointer-events-none absolute inset-0" />
      <div className="flex items-center gap-2">
        <MonitorUp className="text-cyan" size={20} />
        <p className="font-black text-white">ReadyCheck</p>
        <span className="ml-auto rounded-md border border-green/25 bg-green/10 px-3 py-1 text-xs font-black text-green">LIVE</span>
      </div>
      <div className="readycheck-mini-shot relative mt-6 overflow-hidden rounded-lg border border-white/10 bg-[#050914]">
        <div className="scan-line pointer-events-none absolute inset-x-2 top-2 z-20 h-14 rounded-md" />
        <Image
          alt="ReadyCheck product screenshot"
          className="readycheck-main-shot block w-full"
          height={1110}
          sizes="360px"
          src="/readycheck-main-real.jpg"
          width={1488}
        />
      </div>
      <ReadyCheckMenuCard className="readycheck-menu-mini absolute bottom-5 left-5 z-30 w-[210px]" />
      <div className="readycheck-mini-widget readycheck-widget-shot absolute bottom-5 right-5 w-[44%] min-w-[148px] rounded-lg border border-white/14 bg-[#09101f] p-1 shadow-[0_20px_54px_rgba(0,0,0,.5)]">
        <Image
          alt="ReadyCheck pinned desktop widget"
          className="block w-full rounded-md"
          height={650}
          sizes="180px"
          src="/readycheck-widget-real.jpg"
          width={700}
        />
      </div>
    </div>
  );
}

function CrossfitMini({ t }: { t: (typeof copy)[Lang]["mock"] }) {
  return (
    <div className="relative mx-auto h-full max-w-[260px] overflow-hidden rounded-lg border border-white/10 bg-[#050914] p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(53,229,153,.28),transparent_30%),linear-gradient(180deg,#111827,#050914_64%,#02050c)]" />
      <div className="hud-scan absolute inset-x-0 top-0 h-24 bg-green/10" />
      <div className="relative rounded-lg border border-white/12 bg-white/[.07] p-4">
        <p className="text-xs font-black tracking-[0.18em] text-green">WHOOP HUD</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <HudMetric label="HR" value="156" active />
          <HudMetric label="Strain" value="12.4" />
          <HudMetric label="Zone" value="4" />
        </div>
      </div>
      <div className="relative mt-40 rounded-lg border border-white/12 bg-[#07101d]/86 p-4">
        <p className="text-sm font-black text-white">{t.vertical}</p>
        <p className="mt-1 text-xs text-muted">{t.workflow}</p>
      </div>
    </div>
  );
}

function HudMetric({ label, value, active = false }: { label: string; value: string; active?: boolean }) {
  return (
    <div className={`rounded-md bg-[#06101d] p-2 ${active ? "metric-pulse" : ""}`}>
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">{label}</p>
      <p className="mt-1 text-lg font-black text-white">{value}</p>
    </div>
  );
}
