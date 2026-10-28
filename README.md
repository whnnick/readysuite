# ReadySuite Site

[简体中文](README.zh-CN.md)

The official bilingual website for ReadySuite products:

- ReadyType 1.5.1: a Chinese-first macOS voice input app.
- ReadyCheck 0.5.4: a native Mac Codex quota monitor with an adaptive Widget and a separate Windows preview.
- ReadyDownloader 0.2.2: a free Web video downloader with an Apple Silicon macOS client.
- CrossFit WHOOP Video 1.0.11: a vertical 4K sports video workflow.

The long-term page and product update boundaries are documented in the [site architecture](docs/ARCHITECTURE.md).
Current content evidence and design decisions: [1.6.0 overview](docs/versions/1.6.0/README.md) and [black-box checks](docs/versions/1.6.0/BLACK_BOX_TESTS.md).

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

Before updating product content or deploying, compare the displayed versions with public releases/tags:

```bash
npm run check:versions
```

Use `npm run check:versions -- --local` when offline to check consistency between the two languages, SEO data, and both READMEs. The online check reports differences; it never changes product copy. Review feature descriptions and media separately.

## Deployment

Deploy from this folder and wait for the deployment to become Ready:

```bash
vercel --prod --scope ready-suite
```

Confirm that `readysuite.vercel.app` is configured as a production domain for this Vercel project and points to this Ready deployment. If domain assignment was skipped, promote the Ready deployment:

```bash
vercel promote <READY_DEPLOYMENT_URL> --scope ready-suite
```

Open the production domain and verify the intended version and both `/` and `/en` pages. A successful deployment URL alone does not verify the production domain.

Product downloads intentionally point to each project's latest GitHub release or repository.

The production site is available at [readysuite.vercel.app](https://readysuite.vercel.app/).

## Promotion operations

The [launch kit](docs/launch/README.md) contains campaign links, channel-ready
copy, privacy checks, and a weekly metrics template. Vercel Analytics is
installed site-wide, and the site emits privacy-safe product, download,
release, support, documentation, and language events without form content or
account data. Page views and custom-event reports are different metrics;
custom-event reporting depends on the Vercel plan and project settings.
An unavailable event report must not be interpreted as zero clicks.
