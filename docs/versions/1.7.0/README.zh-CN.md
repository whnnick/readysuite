# ReadySuite 1.7.0

[English](README.md) · [黑盒验收](BLACK_BOX_TESTS.zh-CN.md)

## 目标与页面结构

把官网的 ReadyCheck 内容从公开的 0.5.4 更新到 0.6.1，并让新增的“通知 → 记录”闭环在页面上有独立位置，而不是塞进原有四条特性里。

- 首页：主张与产品舞台不变；ReadyCheck 舞台改用新的次要文案，指向通知记录。
- ReadyCheck 详情页：结果与界面 → 核心能力 → **新增“通知与记录”板块** → 使用条件 → 下载及发布记录。
- 产品预览切换器：由“概览 / Widget”扩展为“概览 / Widget / 通知记录”三个视图，首页紧凑版与详情页共用。
- 新板块为独立信息单元（编号步骤 + 真实渲染图），只在产品有更新内容时渲染，其他三个产品页结构不变。

## 公开产品依据

核实日期：2026-11-01。在线 `npm run check:versions` 结果为 1.5.1 / 0.6.1 / 0.2.2 / 1.0.11，均与公开来源一致。

| 产品 | 公开版本 | 官网重点与证据 |
| --- | --- | --- |
| ReadyType | [1.5.1](https://github.com/whnnick/readytype/releases/tag/v1.5.1) | 本轮未改动。版本号与公开来源一致，文案继续不宣传仍在开发中的选中文字修改。 |
| ReadyCheck | [0.6.1](https://github.com/whnnick/readycheck/releases/tag/v0.6.1) | [0.6.0 更新重点](https://github.com/whnnick/readycheck/blob/v0.6.1/docs/versions/0.6.0/RELEASE_NOTES.zh-CN.md)：通知记录按类型筛选、按本地日期分组、相对与完整时间；重置卡详情为只读证据时间线；异常状态提供对应操作入口。[0.6.1 更新重点](https://github.com/whnnick/readycheck/blob/v0.6.1/docs/versions/0.6.1/RELEASE_NOTES.zh-CN.md)：点击系统通知打开通知记录，应用未运行时也会启动并跳转，关闭通知不跳转。 |
| ReadyDownloader | [0.2.2](https://github.com/whnnick/readydownloader/releases/tag/v0.2.2) | 本轮未改动。 |
| CrossFit WHOOP Video | [1.0.11 Tag](https://github.com/whnnick/crossfit-whoop-video/tree/v1.0.11) | 本轮未改动。 |

本轮对外表述的新增点，逐条对应上表 0.6.0 与 0.6.1 的发布说明，没有引入计划中或开发中的能力。

## 素材来源与版本一致性

`public/readycheck-history-zh.png` 与 `public/readycheck-history-en.png` 不是截图工具从运行中的应用抓取的，而是用 ReadyCheck 仓库自带的可选渲染测试在 `v0.6.1` 源码上生成的：

- 源码取自 `v0.6.1` 标签导出（`git archive v0.6.1`），不是工作区当前提交。
- 使用 `Tests/ReadyCheckAppTests/NotificationHistoryPresentationTests.swift` 中的 `testBilingualNativeHistoryLayout`，通过 `READYCHECK_UI_EVIDENCE_DIR` 输出 PNG。
- 记录为测试内构造的合成数据（低额度、48 小时到期、历史未验证三种状态），不含账号、套餐、Credits 或订阅信息。
- 渲染尺寸 520×680 @2x，仅裁掉底部空白，未改动界面内容。

本机 `/Applications/ReadyCheck.app` 当前为 `0.7.0-dev.16`，版本高于公开的 0.6.1。直接截图会拍到未发布界面，因此未采用；这也是本轮新增截图必须来自 `v0.6.1` 源码的原因。

## 保留的边界

- Windows x64 仍是保留原界面的便携预览版，本轮没有宣称其获得通知记录或点击跳转能力。
- macOS 仍是自签名预览，未经 Developer ID 签名或公证，页面继续提示首次启动可能需要手动确认。
- 不展示真实账号数据、真实投递记录或真实重置卡兑换结果。
- 通知正文保留完整发送时间，但系统通知右上角的相对时间仍可能不显示；该已知问题不在本轮修复范围，官网也不宣称已解决。

## 发布记录

功能提交 `54b5bdc` 经 GitHub 连接触发 Vercel 生产构建，正式域名 [readysuite.vercel.app](https://readysuite.vercel.app/) 于 2026-11-01 10:12（+08）开始返回新内容。

线上验收：`/readycheck` 与 `/en/readycheck` 的标题、`canonical`、`hreflang` 与 JSON-LD `softwareVersion: 0.6.1` 均正确，新板块各出现 1 次；`/readycheck-history-zh.png` 与 `/readycheck-history-en.png` 返回 200；`sitemap.xml` 的 `lastmod` 为 2026-11-01；双语页面由生产产物截图复核，无图片加载失败。

本次更新之前的生产部署对应提交 `496c0ed`。如需回滚，按根 README 的验收流程在 Vercel 中确认目标后执行；本轮没有执行实际回滚。
