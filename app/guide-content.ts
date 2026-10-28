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
      summary: ["当前输入框直接使用", "四种输出方式", "自带 DeepSeek 密钥"],
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
          body: "短句优先快速识别；较长口述会并行准备识别候选，减少串行重试的等待。直接转文字不调用 DeepSeek；整理、翻译和写给 AI 使用你配置的密钥，费用取决于用量与服务商价格。密钥存储在 macOS 钥匙串；自动粘贴不可用时结果会复制到剪贴板。",
        },
      ],
      cta: "查看 ReadyType",
    },
    "codex-usage-limit": {
      product: "readycheck",
      eyebrow: "Codex 用量指南",
      title: "看清 Codex 额度、Token 用量和重置时间",
      intro: "ReadyCheck 在 Mac 原生概览、菜单栏和可置顶 Widget 中展示 5 小时与 7 天额度、下一事件和最近消耗，并提供独立的额度与重置卡提醒设置。",
      summary: ["双额度与下一事件", "本机额度消耗记录", "独立提醒与通知记录"],
      sections: [
        {
          title: "额度窗口和 Token 用量分别看什么",
          body: "额度窗口显示当前周期的剩余比例。额度消耗图来自本机成功刷新记录，概览可看 24 小时、7 天或 30 天，Widget 显示最近一小时。80% 降至 70% 记为消耗 10 个百分点；它与单独展示的账户 Token 数量没有固定换算关系，Token 数据缺失时也不会用额度图代替。",
        },
        {
          title: "把状态放在最顺手的位置",
          body: "概览适合查看完整状态；菜单栏适合快速确认；Widget 可在屏幕边缘窄条与气泡之间切换，信息卡可拖拽并置顶。支持刘海屏的 Mac 可点击展开状态。Windows 提供保留原界面的独立便携预览包。",
          steps: ["通过浏览器授权 ChatGPT 账户。", "在显示设置中选择 Widget 或刘海，并按工作节奏设置刷新。", "在提醒设置中分别调整低额度、恢复与重置卡到期提醒。", "需要核对时打开通知记录；投递状态与重置卡兑换结果分开查看。"],
        },
        {
          title: "如何理解重置卡与预计恢复时间",
          body: "到期提醒按 72、48、24 和 12 小时节点独立设置。可选的到期前自动使用卡需要当前账户授权，且取决于规则条件。界面中的预计重置时间需要新读数确认实际恢复；ReadyCheck 不会自动停止或恢复 Codex 任务。额度刷新只读取已授权数据，不发送模型生成请求。",
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
          title: "遇到 YouTube 机器人验证时",
          body: "公开视频也可能被 YouTube 的云端请求验证拦截。网页版会尝试有限次替代解析并给出提示；可改用 Mac 客户端和本机网络。公开链接不代表必然可以下载，具体结果取决于来源平台。",
        },
        {
          title: "临时文件与使用边界",
          body: "网页版只处理受支持的公共来源，不接收 Cookie，也不处理私密、登录或 DRM 内容。成品上限 500 MB，使用私有临时存储和限时下载链接，按 24 小时规则清理。需要 Cookie、代理或本地目录选择时可使用 Mac 客户端；请仅下载你拥有或获准保存的内容。",
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
      summary: ["Your current text field", "Four output modes", "Your own DeepSeek key"],
      sections: [
        { title: "Choose the output that matches the task", body: "Use direct dictation for short replies, polished writing for longer thoughts, English translation for cross-language work, and AI-task mode for structured instructions." },
        { title: "Complete an input with Option", body: "Keep the cursor in the target field instead of moving to another editor.", steps: ["Double-press Option to start listening.", "Speak naturally and finish the whole thought.", "Double-press Option again to return text to the field.", "Press Esc to cancel."] },
        { title: "Accuracy, cost, and privacy", body: "Longer input prepares recognition candidates in parallel to reduce serial retries. Direct dictation does not call DeepSeek. AI modes use your key, stored in macOS Keychain; cost depends on usage and provider pricing. If automatic paste is unavailable, the result is copied to the clipboard." },
      ],
      cta: "Explore ReadyType",
    },
    "codex-usage-limit": {
      product: "readycheck",
      eyebrow: "Codex usage guide",
      title: "Track Codex limits, token usage, and reset times",
      intro: "ReadyCheck puts both 5-hour and 7-day quotas, the next event and recent consumption in a native Mac Overview, menu bar or pinned Widget, with separate quota and card-expiry controls.",
      summary: ["Both quotas and the next event", "Local consumption history", "Independent alerts and records"],
      sections: [
        { title: "Quota windows and Token usage answer different questions", body: "Quota windows show the remaining share of a cycle. Local refresh samples produce 24-hour, 7-day or 30-day consumption views; the Widget shows the last hour. A drop from 80% to 70% is 10 percentage points. This has no fixed conversion to account Token counts, which appear separately when available." },
        { title: "Put status where it is easiest to scan", body: "Use Overview for details or the menu bar for quick checks. Drag the Widget between an edge strip and a bubble, move and pin its details, or click the notch on supported Macs. Windows offers a separate portable preview with its previous interface.", steps: ["Authorize your ChatGPT account in the browser.", "Choose Widget or notch visibility and a refresh rhythm.", "Set low-quota, recovery, and card-expiry reminders independently.", "Inspect notification records separately from card-redemption outcomes."] },
        { title: "Understand cards and expected recovery", body: "Expiry alerts use independent 72/48/24/12-hour milestones. Optional automatic use needs account-specific consent and qualifying conditions. Expected reset times need fresh readings to confirm recovery; ReadyCheck does not stop or resume Codex tasks. Quota refresh reads authorized data without model-generation requests." },
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
        { title: "When YouTube asks for bot verification", body: "YouTube can challenge cloud requests even for public videos. The Web app makes bounded alternate attempts and explains the result; try the Mac client with your local network when needed. A public URL does not guarantee availability." },
        { title: "Temporary files and usage boundaries", body: "The Web app accepts supported public sources, with no cookie import or private, login-only or DRM media. Outputs are capped at 500 MB, stored privately and linked temporarily under a 24-hour retention rule. Use the Mac client for local folders, proxy settings or your own cookies. Save only media you own or are authorized to download." },
      ],
      cta: "Explore ReadyDownloader",
    },
  },
};
