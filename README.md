# ReadySuite Site

[简体中文](README.zh-CN.md)

The official bilingual website for ReadySuite products:

- ReadyType 1.5.0: a Chinese-first macOS voice input app.
- ReadyCheck 0.1.83: a macOS and Windows Codex usage and reset-reminder app.
- ReadyDownloader 0.2.0: a no-install Web downloader with a macOS desktop app.
- CrossFit WHOOP Video 1.0.11: a vertical 4K sports video workflow.

The long-term page and product update boundaries are documented in the [site architecture](docs/ARCHITECTURE.md).

## Local preview

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
```

## Deployment

Deploy from this folder:

```bash
vercel --prod
```

Product downloads intentionally point to each project's latest GitHub release or repository.

The production site is available at [readysuite.vercel.app](https://readysuite.vercel.app/).

## Promotion operations

The [launch kit](docs/launch/README.md) contains campaign links, channel-ready
copy, privacy checks, and a weekly metrics template. Vercel Analytics tracks
product opens, downloads, releases, support, documentation, and language
changes without collecting form content or account data.
