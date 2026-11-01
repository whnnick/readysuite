# ReadySuite 1.8.0 黑盒验收

[English](BLACK_BOX_TESTS.md) · [版本依据与表述边界](README.zh-CN.md)

验收日期：2026-11-01。范围为官网，不包含安装或运行各产品的真实业务流程。

| 需求 | 结果 | 验证证据 |
| --- | --- | --- |
| 版本与公开来源一致 | 完成 | 在线 `npm run check:versions`：1.5.1 / 0.6.1 / 0.2.2 / 1.0.11 全部匹配；另逐一读取四个仓库的 tags 列表，确认没有更新的稳定版本。 |
| ReadyType 表述准确 | 完成 | `/readytype` 渲染 4 条说明：权限要求、钥匙串与直接转文字、未签名未公证与右键打开、官方构建匿名事件范围；额度指南中英文同步补充权限与签名说明。 |
| ReadyDownloader 表述准确 | 完成 | `/readydownloader` 渲染 5 条说明，含 ad-hoc 签名与 Control 点击打开；正文平台列表更新为 YouTube / Instagram / TikTok / Bilibili / Facebook / X。 |
| CrossFit 表述准确 | 完成 | `/crossfit-whoop-video` 渲染 5 条说明，新增“WHOOP API 返回处理后的训练摘要，画面数字为动画表达”。 |
| 中英文一致 | 完成 | `/en/readydownloader` 的正文与第 3 条说明为对应英文内容；`/en/readytype`、`/en/crossfit-whoop-video` 结构相同、条数一致。 |
| 布局 | 完成 | 1440 与 390 宽度下 `scrollWidth === innerWidth`，无横向溢出；说明由 4 条增至 5 条后仍按列表正常堆叠，未挤压相邻板块。 |
| SEO | 完成 | `ReadyDownloader` 的 description 与 keywords 已更新（新增 TikTok 关键词）；`softwareVersion`、canonical、hreflang 与 1.7.0 保持一致。 |
| 构建 | 完成 | 生产构建 27 个静态页面，TypeScript 通过。 |
| 正式域名 | 完成 | 提交 `706daaf` 触发生产构建，2026-11-01 10:21（+08）起线上返回新内容；三个产品页的说明条目与正文、英文页表述、移动端无溢出均按上表逐项复核。 |

## 验收限制

- 未重新安装 ReadyType、ReadyDownloader 或 CrossFit，签名状态依据各项目 v1.5.1 / v0.2.2 / v1.0.11 的 README 与发布物描述，未在本轮重新校验 macOS Gatekeeper 实际拦截行为。
- 未在 Windows 实机验证；官网继续不提供 Windows 入口。
- 未评估 DeepSeek 实际费用，费用表述仍交由服务商定价。
