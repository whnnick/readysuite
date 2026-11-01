# ReadySuite 1.8.0

[English](README.md) · [黑盒验收](BLACK_BOX_TESTS.zh-CN.md)

## 本轮做了什么

把四个产品逐个对照 GitHub 上最新的公开发布与 README，检查官网是否仍在准确描述可下载的版本。结论是**版本号全部已是最新**，偏差都在内容：

| 产品 | GitHub 最新 | 版本是否已对齐 | 本轮修正 |
| --- | --- | --- | --- |
| ReadyType | v1.5.1 | 是 | 补权限要求；补未签名未公证与首次打开步骤；修正统计表述 |
| ReadyCheck | v0.6.1 | 是（1.7.0 已完成） | 无 |
| ReadyDownloader | v0.2.2 | 是 | 补 ad-hoc 签名与未公证；扩写平台口径与关键词 |
| CrossFit WHOOP Video | v1.0.11 | 是 | 注明 WHOOP 数据为摘要、HUD 数字为动画表达 |

## 公开产品依据

核实日期：2026-11-01。标签列表逐一确认无更新的稳定版本：ReadyType `v1.5.1`、ReadyCheck `v0.6.1`、ReadyDownloader `v0.2.2`、CrossFit `v1.0.11`。

### ReadyType 1.5.1

- [README.zh-CN.md](https://github.com/whnnick/readytype/blob/v1.5.1/README.zh-CN.md)：当前构建“未签名、未公证”，首次打开需在 Applications 中右键选择“打开”；不可关闭系统安全设置。
- 使用要求：macOS 14 或更高；整理、翻译、写给 AI 需要 DeepSeek 密钥；需要麦克风、语音识别与辅助功能权限。
- 隐私说明：公开源码构建默认不发送匿名统计；**官方构建**启用后发送匿名功能事件及 App、系统与设备兼容性信息，不包含语音、文字内容、窗口标题、常用词、剪贴板或密钥。
- 官网原表述只写了“公开源码构建默认不发送匿名统计”，容易被读成官方构建也不上报，本轮改为完整表述。

### ReadyDownloader 0.2.2

- [README.zh-CN.md](https://github.com/whnnick/readydownloader/blob/v0.2.2/README.zh-CN.md)：当前安装包采用 ad-hoc 签名且未经 Apple 公证，首次启动被拦截时按住 Control 点击应用并选择“打开”，不要全局关闭 Gatekeeper。
- 支持站点：随包 yt-dlp 包含 YouTube、哔哩哔哩、TikTok、Instagram、Facebook、X/Twitter、Vimeo、Twitch、Reddit、AcFun、斗鱼、虎牙、爱奇艺、优酷、微博等提取器，可用性取决于具体链接。
- 网页版边界不变：不接收 Cookie、不处理私密或 DRM 内容、不提供代理与本地目录。
- Windows 客户端仍是兼容原型，没有可下载的正式包，官网继续不把它作为入口，避免指向不存在的产物。

### CrossFit WHOOP Video 1.0.11

- [README.zh-CN.md](https://github.com/whnnick/crossfit-whoop-video/blob/v1.0.11/README.zh-CN.md)：WHOOP API 提供的是处理后的训练、恢复、睡眠与周期数据，不是完整连续的实时心率原始流；视频里的动态数字是基于真实摘要数据做的动画表达。
- 设备数据源：WHOOP、Apple Health 导出、FIT、TCX、GPX、CSV 与手动指标，与官网原有描述一致。

## 表述边界

- 四个版本号均未改动，本轮不制造“版本升级”的假象。
- 不新增对 Windows 客户端、签名公证状态或实时心率能力的正面宣称，只描述已公开的现状与用户需要采取的操作。
- 费用表述继续不给出缺少用量条件的每日花费承诺；DeepSeek 价格以服务商页面为准。

## 发布记录

（待部署后补充。）
