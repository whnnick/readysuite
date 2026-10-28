# ReadySuite 官网

[English](README.md)

ReadySuite 产品的中英文官方网站：

- ReadyType 1.5.1：中文优先的 macOS 语音输入应用。
- ReadyCheck 0.5.4：原生 Mac Codex 额度工具，提供自适应 Widget 与独立 Windows 预览版。
- ReadyDownloader 0.2.2：免费的网页版视频下载工具，并提供 Apple Silicon macOS 客户端。
- CrossFit WHOOP Video 1.0.11：竖屏 4K 运动视频制作工作流。

长期页面结构和产品更新边界见[官网架构](docs/ARCHITECTURE.zh-CN.md)。
本次产品依据与设计取舍见 [1.6.0 概览](docs/versions/1.6.0/README.zh-CN.md)和[黑盒验收](docs/versions/1.6.0/BLACK_BOX_TESTS.zh-CN.md)。

## 本地预览

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## 生产构建

```bash
npm run build
```

更新产品信息或部署前，核对官网标注版本与公开 Release/Tag：

```bash
npm run check:versions
```

离线时可用 `npm run check:versions -- --local` 核对中英文文案、SEO 数据与两份 README 是否一致。在线检查只报告差异，不自动修改产品文案；功能说明和素材仍需单独核实。

## 部署

在当前目录执行，并等待部署状态变为 Ready：

```bash
vercel --prod --scope ready-suite
```

确认 `readysuite.vercel.app` 已配置为本项目的生产域名，并指向本次 Ready 部署。如果部署时跳过了域名分配，再提升该部署：

```bash
vercel promote <READY_DEPLOYMENT_URL> --scope ready-suite
```

打开正式域名，核对目标版本以及 `/`、`/en` 页面。部署地址可访问不等于正式域名已更新。

产品下载链接指向各项目最新的 GitHub Release 或仓库。

生产环境地址：[readysuite.vercel.app](https://readysuite.vercel.app/)

## 推广执行

[推广执行包](docs/launch/README.md)包含渠道跟踪链接、可直接发布的文案、隐私检查和
每周指标模板。全站已安装 Vercel Analytics；网站发送产品入口、下载、发布、支持、
文档和语言切换等不含表单内容或账号数据的事件。页面访问量与自定义事件是不同指标；
能否查看自定义事件报表取决于 Vercel 套餐和项目设置。报表不可用不代表点击量为零。
