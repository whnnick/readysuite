# ReadySuite 1.7.0 Black-box checks

[中文](BLACK_BOX_TESTS.zh-CN.md) · [Goal and product evidence](README.md)

Checked 2026-11-01. Scope is the website; it does not include installing or running each product's real workflow.

| Requirement | Result | Evidence |
| --- | --- | --- |
| Accurate versions and platforms | Complete | Online `npm run check:versions`: 1.5.1 / 0.6.1 / 0.2.2 / 1.0.11 all match public sources, with bilingual copy, SEO data and both READMEs agreeing across five sources; `npm run test:versions` passed 3 of 3. |
| New ReadyCheck section | Complete | `/readycheck` renders one `.update-section` with four steps (reminder arrives / click into the record / filter by type and day / card evidence stays separate); `/readytype`, `/readydownloader` and `/crossfit-whoop-video` render zero, confirming the structure is scoped per product. |
| Three-view preview switcher | Complete | Clicking Overview / Widget / History in turn flips `aria-pressed` and the image source to `overview` / `widget` / `history`, with `naturalWidth` 640 on every view and no blank state; the English page switches to `readycheck-history-en.png` with English alternative text. |
| Screenshot version and privacy | Complete | Both new images come from the `v0.6.1` source's opt-in render test with records synthesized inside the test; the locally installed `0.7.0-dev.16` was not used. See [media provenance](README.md#media-provenance-and-version-accuracy). |
| Bilingual experience | Complete | `/readycheck` and `/en/readycheck` match item by item across title, body, the four steps and release notes; step 4 of the Codex usage guide now reads "click a reminder to open its record" in both languages. |
| Desktop and mobile layout | Complete | At 1440 and 390 wide, `scrollWidth === innerWidth` with no horizontal overflow; at 390 the three-view switcher stays on one line, the new section stacks, and the figure renders in full. |
| SEO | Complete | Verified `title`, `canonical`, `hreflang` (zh-CN / en / x-default) and JSON-LD `softwareVersion: 0.6.1`; `og:image` points at the new asset; `sitemap.xml` `lastmod` is 2026-11-01; `robots.txt` names the production host and sitemap. |
| Build and runtime | Complete | The production build generated 27 static pages with TypeScript passing; every page above was checked against those build artifacts with no console errors. |
| Reduced motion | Partial | Captures used CDP media emulation of `prefers-reduced-motion: reduce`, showing all content with no leftover animation; the OS-level setting was not toggled for a manual pass. |
| Production domain | Complete | Commit `54b5bdc` triggered the production build, and `readysuite.vercel.app` served the new title from 10:12 (+08) on 2026-11-01; both language pages re-checked live for structured data, the new section, both images and the sitemap, then captured from the production build. |

## Limits and unfinished checks

- No Windows hardware verification; Windows keeps its "portable preview with the previous interface" wording and is not claimed to have notification history.
- No new checks for a second real account, multi-display / Spaces, VoiceOver, or a real reset-card redemption.
- The missing relative time in the system notification's upper-right corner is a known issue, unfixed here and not claimed as resolved.
- Nothing from the installed 0.7.0 development build is verified or promoted; every new claim stops at public 0.6.1.

Screenshots and browser probes stay in the locally ignored `.tmp/` and are not published with the site.
