import type { ProductKey } from "./product-registry";

type Lang = "zh" | "en";

export type GuideKey =
  | "macos-chinese-voice-input"
  | "codex-usage-limit"
  | "download-youtube-instagram-mac";

type GuideContent = {
  product: ProductKey;
  eyebrow: string;
  title: string;
  intro: string;
  summary: string[];
  sections: Array<{ title: string; body: string; steps?: string[] }>;
  cta: string;
};

export const guideContent: Record<Lang, Record<GuideKey, GuideContent>> = {
  zh: {
    "macos-chinese-voice-input": {
      product: "readytype",
      eyebrow: "Mac 中文语音输入指南",
      title: "说完就能用：在 Mac 上把中文语音直接变成文字",
      intro: "ReadyType 让语音输入停留在当前输入框中。双击 Option 开始说话，再次双击即可转写、整理、翻译或生成适合发送给 AI 的任务说明。",
      summary: ["任意输入框直接使用", "四种输出方式", "DeepSeek V4 Flash 成本可控"],
      sections: [
        {
          title: "先选择适合当前任务的输出方式",
          body: "直接转文字适合短句和即时回复；整理成文适合会议记录与长段口述；翻译成英文适合跨语言沟通；写给 AI 会把自然表达整理成清晰任务。",
        },
        {
          title: "用双击 Option 完成一次输入",
          body: "光标停在目标输入框后即可开始，不需要切换到独立编辑器。",
          steps: ["双击 Option 开始聆听。", "自然说出完整意思，不必预先组织成书面语。", "再次双击 Option，等待文字回到当前输入框。", "需要取消时按 Esc。"],
        },
        {
          title: "准确率、成本与隐私边界",
          body: "短句优先快速识别，高精度语音包准备好后可自动提升准确率。直接转文字不调用 DeepSeek；整理、翻译和写给 AI 才使用你配置的 DeepSeek V4 Flash 密钥，密钥存储在 macOS 钥匙串。",
        },
      ],
      cta: "查看 ReadyType",
    },
    "codex-usage-limit": {
      product: "readycheck",
      eyebrow: "Codex 用量指南",
      title: "看清 Codex 额度、Token 用量和重置时间",
      intro: "ReadyCheck 将 Codex 用量放在主窗口、菜单栏、桌面 Widget 或 Mac 刘海下方，并在主动重置即将到期时提醒你。",
      summary: ["额度窗口持续可见", "7/30/90 天 Token 看板", "重置到期分级提醒"],
      sections: [
        {
          title: "额度窗口和 Token 用量分别看什么",
          body: "额度窗口用于判断当前周期还能使用多少；7、30、90 天 Token 统计用于观察长期消耗趋势。两者结合，比只盯一个百分比更容易安排高强度任务。",
        },
        {
          title: "把状态放在最顺手的位置",
          body: "主窗口适合完整查看；菜单栏适合快速确认；桌面 Widget 可拖拽并置顶；支持刘海屏的 Mac 还可以在刘海下方显示紧凑状态。",
          steps: ["通过 Codex OAuth 完成授权。", "选择菜单栏、Widget 或刘海显示方式。", "按工作节奏设置刷新。", "在通知历史中确认提醒投递状态。"],
        },
        {
          title: "如何理解主动重置提醒",
          body: "当未使用的主动重置接近到期时，ReadyCheck 会在 72、48、24 和 12 小时节点提醒，并优先显示当前最紧迫的提醒。额度刷新读取已授权的用量数据，不发送模型推理请求。",
        },
      ],
      cta: "查看 ReadyCheck",
    },
    "download-youtube-instagram-mac": {
      product: "readydownloader",
      eyebrow: "在线视频下载指南",
      title: "无需安装，在线保存 YouTube、Instagram 等公开视频",
      intro: "打开 ReadyDownloader 网页版，粘贴你有权保存的公开视频链接，即可查看可用格式并选择最高画质、iPhone 兼容或指定格式。",
      summary: ["无需安装", "画质和格式可选", "临时文件自动清理"],
      sections: [
        {
          title: "从网页链接到本地文件",
          body: "在浏览器打开 ReadyDownloader，粘贴公开视频页面链接，等待格式列表出现后选择下载方式。",
          steps: ["打开 ReadyDownloader 网页版。", "粘贴你有权保存的公开视频链接。", "查看分辨率、编码、帧率和预估大小。", "选择最高画质、iPhone 兼容或指定格式并下载。"],
        },
        {
          title: "什么时候选择 iPhone 兼容",
          body: "最高画质可能使用 AV1、VP9 或独立音视频流。iPhone 兼容模式会在需要时整理为 H.264、AAC 和 yuv420p，便于在 Apple 设备和常用剪辑软件中打开。",
        },
        {
          title: "临时文件与使用边界",
          body: "网页版只处理受支持的公共来源，不接收 Cookie，也不处理私密、登录或 DRM 内容。成品使用私有临时存储和限时下载链接，并按 24 小时保留规则清理；请仅下载你拥有或获准保存的内容。",
        },
      ],
      cta: "查看 ReadyDownloader",
    },
  },
  en: {
    "macos-chinese-voice-input": {
      product: "readytype",
      eyebrow: "Chinese voice input on Mac",
      title: "Turn spoken Chinese into usable text on your Mac",
      intro: "ReadyType works inside the text field you are already using. Double-press Option to dictate, polish, translate, or turn natural speech into a clear AI task.",
      summary: ["Works in any text field", "Four output modes", "Controlled DeepSeek V4 Flash cost"],
      sections: [
        { title: "Choose the output that matches the task", body: "Use direct dictation for short replies, polished writing for longer thoughts, English translation for cross-language work, and AI-task mode for structured instructions." },
        { title: "Complete an input with Option", body: "Keep the cursor in the target field instead of moving to another editor.", steps: ["Double-press Option to start listening.", "Speak naturally and finish the whole thought.", "Double-press Option again to return text to the field.", "Press Esc to cancel."] },
        { title: "Accuracy, cost, and privacy", body: "Direct dictation does not call DeepSeek. Polish, translation, and AI-task modes use your DeepSeek V4 Flash key, which is stored in macOS Keychain." },
      ],
      cta: "Explore ReadyType",
    },
    "codex-usage-limit": {
      product: "readycheck",
      eyebrow: "Codex usage guide",
      title: "Track Codex limits, token usage, and reset times",
      intro: "ReadyCheck keeps Codex usage visible in its main window, the menu bar, a desktop widget, or below a supported Mac notch, with reminders before manual resets expire.",
      summary: ["Visible quota windows", "7/30/90-day token view", "Reset-expiry reminders"],
      sections: [
        { title: "Quota windows and token usage answer different questions", body: "Quota windows show what remains in the current period. Longer token views reveal consumption trends, helping you schedule demanding work." },
        { title: "Put status where it is easiest to scan", body: "Use the full window for detail, the menu bar for quick checks, a pinned desktop widget for continuous visibility, or the compact notch view on supported Macs.", steps: ["Authorize with Codex OAuth.", "Choose the menu bar, widget, or notch view.", "Set a refresh rhythm that matches your work.", "Check delivery state in notification history."] },
        { title: "Understand manual-reset reminders", body: "ReadyCheck alerts at 72, 48, 24, and 12 hours before an unused manual reset expires. Refreshing reads authorized usage data and does not send model inference requests." },
      ],
      cta: "Explore ReadyCheck",
    },
    "download-youtube-instagram-mac": {
      product: "readydownloader",
      eyebrow: "Online video download guide",
      title: "Save public YouTube and Instagram videos without installing an app",
      intro: "Open ReadyDownloader on the Web and paste a public media URL you are authorized to save. Inspect the available formats, then choose Best Quality, iPhone Compatible, or a specific format.",
      summary: ["No installation", "Quality and format control", "Automatic temporary-file cleanup"],
      sections: [
        { title: "From a page URL to a local file", body: "Open ReadyDownloader in your browser, paste a supported public media URL, and choose a download mode after the format list appears.", steps: ["Open the ReadyDownloader Web app.", "Paste a public media URL you are authorized to save.", "Review resolution, codec, frame rate, and estimated size.", "Choose Best Quality, iPhone Compatible, or Selected Format and download."] },
        { title: "When to use iPhone compatibility", body: "The best-quality stream may use AV1, VP9, or separate audio and video. Compatibility mode converts only when needed to H.264, AAC, and yuv420p." },
        { title: "Temporary files and usage boundaries", body: "The Web app accepts supported public sources only. It does not accept cookies or process private, login-only, or DRM media. Outputs use private temporary storage and expiring links under a 24-hour retention rule; download only media you own or have permission to save." },
      ],
      cta: "Explore ReadyDownloader",
    },
  },
};
