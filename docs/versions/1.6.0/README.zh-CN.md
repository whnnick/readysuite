# ReadySuite 1.6.0

[English](README.md) · [黑盒验收](BLACK_BOX_TESTS.zh-CN.md)

## 目标与页面结构

让访客通过实际使用结果选择工具，并从产品页进入正确的使用或下载入口。保留浅色、克制的现有设计系统与独立产品详情页。

- 首页：ReadySuite 品牌与简短主张 → 点击切换的产品舞台 → 精简开源说明。
- 舞台：一句核心价值、真实界面、主操作和详情入口；产品顺序保持不变，不宣传固定数量。
- 详情页：结果与界面 → 核心能力 → 使用条件 → 下载及发布记录。
- 动效：点击后的内容过渡、语音输入过程、按需查看概览与 Widget；减少动态效果时保持完整信息。

## 公开产品依据

核实日期：2026-10-28。源码开发状态与可下载版本分别核对。

| 产品 | 公开版本 | 官网重点与证据 |
| --- | --- | --- |
| ReadyType | [1.5.1](https://github.com/whnnick/readytype/releases/tag/v1.5.1) | [发布版本说明](https://github.com/whnnick/readytype/blob/v1.5.1/README.md)：语音直接输入、整理、英文翻译和 AI 任务；较长口述的识别策略。1.6.0 选中文字修改仍在开发，不宣传为已发布。 |
| ReadyCheck | [0.5.4](https://github.com/whnnick/readycheck/releases/tag/v0.5.4) | [发布版本说明](https://github.com/whnnick/readycheck/blob/v0.5.4/README.md)：双额度、下一事件、本机消耗记录、自适应 Widget 与提醒；Windows 保留原界面。 |
| ReadyDownloader | [0.2.2](https://github.com/whnnick/readydownloader/releases/tag/v0.2.2) | [产品说明](https://github.com/whnnick/readydownloader)：免费多平台视频保存，网页版优先，macOS 为客户端入口；YouTube 云端机器人验证有明确限制。 |
| CrossFit WHOOP Video | [1.0.11 Tag](https://github.com/whnnick/crossfit-whoop-video/tree/v1.0.11) | [项目说明](https://github.com/whnnick/crossfit-whoop-video)：训练素材与数据 HUD 制作工作流，教程优先；示例明确标注为合成数据。 |

## 素材与表述

ReadyCheck 使用公开仓库中保留至 0.5.4 的 0.5.1 原生截图，数据为项目明确提供的合成演示。中英文分别使用对应截图。ReadyType 复用已处理的真实界面，输入内容为演示；ReadyDownloader 使用网页版真实截图；CrossFit 保留隐私安全的合成人像并标注示例数据。

费用由实际使用量与供应商价格决定，官网不将缺少用量条件的每日费用作为保证。网页版视频下载是否可用取决于具体链接和平台限制；500 MB 上限与 24 小时保留规则在使用条件中说明。

## 发布记录

功能提交 `ce9ce5b` 已通过 GitHub 连接在现有 Vercel 项目发布，正式站点为 [readysuite.vercel.app](https://readysuite.vercel.app/)。正式域名现已绑定到项目的生产环境，避免后续只更新默认部署地址。

如需回滚，本次更新之前的生产部署为 `ready-suite-site-p1voo4osk-ready-suite.vercel.app`。按根 README 的部署验收流程确认目标后，使用 Vercel 的回滚操作；本轮没有执行实际回滚。
