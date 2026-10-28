# ReadySuite 1.6.0 Black-Box Checks

[简体中文](BLACK_BOX_TESTS.zh-CN.md) · [Release goals and product evidence](README.md)

Checked on 2026-10-28. Scope is the website, excluding installation or real business operations inside each product.

| Requirement | Result | Evidence |
| --- | --- | --- |
| Accurate versions and platforms | Complete | Online `npm run check:versions` matches public 1.5.1 / 0.5.4 / 0.2.2 / 1.0.11 across bilingual copy, SEO and READMEs. |
| Product choice and primary actions | Complete | Browser checks cover click and arrow-key selection, the associated panel, download/Web destinations and the CrossFit guide. |
| Real media and privacy boundaries | Complete | Inspected native ReadyCheck Overview/Widget screenshots with explicitly synthetic data and working view switching; replaced the simulated downloader panel. |
| Both languages | Complete | `/` and `/en` switching preserves preference. After switching back to Chinese, verified Chinese content and canonical URLs per route. |
| Desktop and mobile layout | Complete | Home and all product pages checked at 1280×720 and 390×844 with no horizontal overflow or broken images; Chinese titles use semantic breaks. Bilingual downloads and quota guides also checked. |
| GitHub opens a new tab | Complete | All inspected GitHub anchors use `_blank`. |
| SEO | Complete | Read rendered titles, canonicals, zh-CN/en/x-default alternates and JSON-LD versions; robots names the production domain and sitemap. |
| Build and runtime | Complete | Production build generates 27 static pages. Browser checks show no console warnings or errors. |
| Reduced motion | Partial | Existing global reduced-motion fallback remains. The user's system setting was not changed for manual acceptance. |
| Production domain | Complete | The production build for `ce9ce5b` is Ready and the canonical domain maps to it. Live home, English product versions, Widget switching and language routes pass with no console warnings or errors. |

## Limits and remaining checks

- Confirmed that the Web downloader entry loads; did not download third-party media or reinstall products in this run.
- ReadyType input is an illustrative sequence. CrossFit uses a synthetic athlete and sample metrics, not a real interaction recording or live biometric feed.
- Comprehensive VoiceOver, physical touchscreen and every external source-platform check are outside this run.
- No known release blocker remains. The canonical hostname is now a verified production domain of this project rather than a standalone alias, so it follows future production deployments.

Screenshots and structured browser results are retained in the locally ignored `output/site-refresh-2026-10-28/`, excluded from deployment files.
