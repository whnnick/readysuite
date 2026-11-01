# ReadySuite 1.8.0 Black-box checks

[中文](BLACK_BOX_TESTS.zh-CN.md) · [Evidence and claim boundaries](README.md)

Checked 2026-11-01. Scope is the website; it does not include installing or running each product's real workflow.

| Requirement | Result | Evidence |
| --- | --- | --- |
| Versions match public sources | Complete | Online `npm run check:versions`: 1.5.1 / 0.6.1 / 0.2.2 / 1.0.11 all match; each repository's tag list was also read directly and no newer stable version exists. |
| ReadyType claims accurate | Complete | `/readytype` renders four notes: permissions, Keychain and direct dictation, unsigned/non-notarized with right-click Open, and the scope of official-build anonymous events; the usage guide carries the permission and signing wording in both languages. |
| ReadyDownloader claims accurate | Complete | `/readydownloader` renders five notes including ad-hoc signing and Control-click Open; the platform list now reads YouTube / Instagram / TikTok / Bilibili / Facebook / X. |
| CrossFit claims accurate | Complete | `/crossfit-whoop-video` renders five notes, adding that the WHOOP API returns processed workout summaries and on-screen figures are animated. |
| Bilingual parity | Complete | `/en/readydownloader` matches the Chinese body and third note in English; `/en/readytype` and `/en/crossfit-whoop-video` keep the same structure and note counts. |
| Layout | Complete | At 1440 and 390 wide, `scrollWidth === innerWidth` with no horizontal overflow; growing from four to five notes still stacks as a list without squeezing adjacent sections. |
| SEO | Complete | The ReadyDownloader description and keywords are updated (TikTok keyword added); `softwareVersion`, canonical and hreflang match 1.7.0. |
| Build | Complete | Production build generated 27 static pages with TypeScript passing. |
| Production domain | Complete | Commit `706daaf` triggered the production build and the live site served the new content from 10:21 (+08) on 2026-11-01; the three product pages' notes and body copy, the English page and the mobile overflow check were all re-verified live. |

## Limits

- ReadyType, ReadyDownloader and CrossFit were not reinstalled; the signing state comes from each project's v1.5.1 / v0.2.2 / v1.0.11 README and published artifacts, and Gatekeeper's actual blocking behaviour was not re-tested this round.
- No Windows hardware verification; the site still offers no Windows download.
- DeepSeek cost was not measured; pricing stays with the provider.
