# ReadySuite Site

A Next.js + Tailwind website for whnnick public projects:

- ReadyCheck: a macOS Codex usage monitor with GitHub Releases as the download source.
- CrossFit WHOOP Video: an open vertical video workflow repository.

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

ReadyCheck downloads intentionally point to `https://github.com/whnnick/readycheck/releases/latest` so new DMG releases do not require website changes.
