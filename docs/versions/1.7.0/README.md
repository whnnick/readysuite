# ReadySuite 1.7.0

[中文](README.zh-CN.md) · [Black-box checks](BLACK_BOX_TESTS.md)

## Goal and page structure

Bring the site's ReadyCheck content from public 0.5.4 to 0.6.1, and give the new reminder-to-record loop its own place on the page instead of folding it into the existing four features.

- Home: the claim and product stage are unchanged; the ReadyCheck stage uses new secondary copy that points at notification history.
- ReadyCheck detail page: result and interface → core capabilities → **new "Notifications and records" section** → usage conditions → download and release record.
- Preview switcher: "Overview / Widget" becomes "Overview / Widget / History", shared by the compact home stage and the detail page.
- The new section is a self-contained unit (numbered steps plus a real render) and only renders when a product has update content, so the other three product pages keep their structure.

## Public product evidence

Verified 2026-11-01. Online `npm run check:versions` reports 1.5.1 / 0.6.1 / 0.2.2 / 1.0.11, all matching public sources.

| Product | Public version | Site focus and evidence |
| --- | --- | --- |
| ReadyType | [1.5.1](https://github.com/whnnick/readytype/releases/tag/v1.5.1) | Unchanged this round. The version matches its public release, and the copy still avoids claiming the unreleased selected-text revision. |
| ReadyCheck | [0.6.1](https://github.com/whnnick/readycheck/releases/tag/v0.6.1) | [0.6.0 notes](https://github.com/whnnick/readycheck/blob/v0.6.1/docs/versions/0.6.0/RELEASE_NOTES.md): history filters by type and groups by local date with relative and full times; reset-card details are a read-only evidence timeline; error states route to the matching action. [0.6.1 notes](https://github.com/whnnick/readycheck/blob/v0.6.1/docs/versions/0.6.1/RELEASE_NOTES.md): clicking a system notification opens notification history, starting the app when needed, while dismissing does not navigate. |
| ReadyDownloader | [0.2.2](https://github.com/whnnick/readydownloader/releases/tag/v0.2.2) | Unchanged this round. |
| CrossFit WHOOP Video | [1.0.11 Tag](https://github.com/whnnick/crossfit-whoop-video/tree/v1.0.11) | Unchanged this round. |

Every new claim maps to the 0.6.0 or 0.6.1 release notes above; nothing planned or still in development is presented as shipped.

## Media provenance and version accuracy

`public/readycheck-history-zh.png` and `public/readycheck-history-en.png` were not captured from a running app. They were rendered from the `v0.6.1` source with the ReadyCheck repository's own opt-in render test:

- Source exported from the `v0.6.1` tag (`git archive v0.6.1`), not from the current working commit.
- `testBilingualNativeHistoryLayout` in `Tests/ReadyCheckAppTests/NotificationHistoryPresentationTests.swift`, writing PNGs through `READYCHECK_UI_EVIDENCE_DIR`.
- Records are synthetic values built inside the test (low quota, a 48-hour card expiry, one unverified legacy entry); no account, plan, Credits or subscription data.
- Rendered at 520×680 @2x; only the empty bottom area was cropped, no interface content was altered.

The installed `/Applications/ReadyCheck.app` on this machine is `0.7.0-dev.16`, newer than public 0.6.1. Capturing it would have shown unreleased UI, which is why this round's screenshot had to come from the `v0.6.1` source.

## Preserved boundaries

- Windows x64 remains a portable preview with its previous interface; nothing here claims notification history or notification navigation on Windows.
- macOS remains a self-signed preview that is not Developer ID signed or notarized; the page still warns that the first launch may need manual approval.
- No real account data, real delivery records, or real reset-card redemption is shown.
- Notification bodies keep the full send time, but the system's upper-right relative time may still be absent. That known issue is not fixed in this round and the site does not claim otherwise.

## Release record

Feature commit `54b5bdc` triggered a Vercel production build through the GitHub connection, and the production domain [readysuite.vercel.app](https://readysuite.vercel.app/) started serving the new content at 10:12 (+08) on 2026-11-01.

Live checks: `/readycheck` and `/en/readycheck` return the expected title, `canonical`, `hreflang` and JSON-LD `softwareVersion: 0.6.1`, with the new section present once on each page; `/readycheck-history-zh.png` and `/readycheck-history-en.png` return 200; `sitemap.xml` reports `lastmod` 2026-11-01; both language pages were re-captured from the production build with no failed images.

The production deployment preceding this update corresponds to commit `496c0ed`. To roll back, confirm the target in Vercel using the root README's verification steps; no rollback was performed in this round.
