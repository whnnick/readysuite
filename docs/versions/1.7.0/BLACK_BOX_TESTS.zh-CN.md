# ReadySuite 1.7.0 黑盒验收

[English](BLACK_BOX_TESTS.md) · [版本目标与产品依据](README.zh-CN.md)

验收日期：2026-11-01。范围为官网，不包含安装或运行各产品的真实业务流程。

| 需求 | 结果 | 验证证据 |
| --- | --- | --- |
| 产品版本与平台准确 | 完成 | 在线 `npm run check:versions`：1.5.1 / 0.6.1 / 0.2.2 / 1.0.11 均匹配公开来源，中英文文案、SEO 与两份 README 五处来源一致；`npm run test:versions` 3 项通过。 |
| ReadyCheck 新增信息单元 | 完成 | `/readycheck` 存在 1 个 `.update-section` 与 4 个步骤（收到提醒 / 点开就回到记录 / 按类型和日期查找 / 用卡证据单独看）；`/readytype`、`/readydownloader`、`/crossfit-whoop-video` 均为 0，确认结构按产品隔离。 |
| 预览切换三视图 | 完成 | 依次点击概览 / Widget / 通知记录：`aria-pressed` 与图片源同步切换为 `overview` / `widget` / `history`，三张图片 `naturalWidth` 均为 640，无空白；英文页切换到 `readycheck-history-en.png`，替代文本为英文。 |
| 截图版本与隐私 | 完成 | 两张新图由 `v0.6.1` 源码的可选渲染测试生成，记录为测试内合成数据；本机安装的 `0.7.0-dev.16` 未用于截图。详见[素材来源](README.zh-CN.md#素材来源与版本一致性)。 |
| 中英文体验 | 完成 | `/readycheck` 与 `/en/readycheck` 的标题、正文、四个步骤与发布说明逐项对应；额度指南中英文 step 4 同步改为“点击通知回到记录”。 |
| 桌面与手机布局 | 完成 | 1440 与 390 宽度下 `scrollWidth === innerWidth`，无横向溢出；390 下三视图切换器仍在单行，新板块按上下顺序堆叠，配图完整。 |
| SEO | 完成 | 读取 `title`、`canonical`、`hreflang`（zh-CN / en / x-default）、JSON-LD `softwareVersion: 0.6.1`；`og:image` 指向新图；`sitemap.xml` 的 `lastmod` 为 2026-11-01；`robots.txt` 指向正式域名与 sitemap。 |
| 构建与运行 | 完成 | 生产构建生成 27 个静态页面，TypeScript 通过；上述页面均由生产构建产物验证，无控制台错误。 |
| 减少动态效果 | 部分完成 | 截图用 CDP 模拟 `prefers-reduced-motion: reduce` 抓取，内容全部可见、无动画残留；未切换用户系统的减少动态效果设置做人工验收。 |
| 正式域名上线 | 完成 | 提交 `54b5bdc` 触发生产构建，2026-11-01 10:12（+08）起 `readysuite.vercel.app` 返回新标题；线上两语页面按上表复核结构化数据、新板块、两张图片与 sitemap，并由生产产物截图确认。 |

## 验收限制与未完成项

- 未在 Windows 实机验证；Windows 仍按“保留原界面的便携预览”表述，不宣称具备通知记录。
- 未新增第二真实账号、多显示器 / Spaces、VoiceOver 或真实重置卡兑换的验收。
- 系统通知右上角的相对时间缺失是已知问题，本轮未修复，官网不宣称已解决。
- 安装版 0.7.0 开发内容既未验收也未宣传，本轮所有新表述以公开的 0.6.1 为上限。

截图与浏览器探测结果保留在本地忽略的 `.tmp/`，不进入网站发布文件。
