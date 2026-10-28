# ReadySuite 1.6.0

[简体中文](README.zh-CN.md) · [Black-box checks](BLACK_BOX_TESTS.md)

## Goal and page structure

Help visitors choose through concrete outcomes and reach the appropriate use or download destination. Retain the existing restrained light design and dedicated product pages.

- Home: ReadySuite brand and a short proposition, one click-selected product showcase, then a compact open-source note.
- Showcase: one outcome, real interface media, a primary action and a detail link. Preserve product order without promoting a fixed count.
- Product pages: outcome and interface, core capabilities, requirements, then downloads and release records.
- Motion: transitions after selection, a voice-input sequence, and on-demand Overview/Widget views; retain information with reduced motion.

## Public product evidence

Checked on 2026-10-28. Development source and downloadable releases are reviewed separately.

| Product | Public version | Positioning and evidence |
| --- | --- | --- |
| ReadyType | [1.5.1](https://github.com/whnnick/readytype/releases/tag/v1.5.1) | [Release README](https://github.com/whnnick/readytype/blob/v1.5.1/README.md): dictation, polishing, English translation and AI instructions, including improved longer-input recognition. Selected-text actions remain in 1.6.0 development. |
| ReadyCheck | [0.5.4](https://github.com/whnnick/readycheck/releases/tag/v0.5.4) | [Release README](https://github.com/whnnick/readycheck/blob/v0.5.4/README.md): both quotas, next event, local consumption history, adaptive Widget and reminders. Windows retains its previous interface. |
| ReadyDownloader | [0.2.2](https://github.com/whnnick/readydownloader/releases/tag/v0.2.2) | [Product README](https://github.com/whnnick/readydownloader): free multi-platform video saving, Web-first access and a Mac client; cloud YouTube bot checks have explicit limits. |
| CrossFit WHOOP Video | [1.0.11 tag](https://github.com/whnnick/crossfit-whoop-video/tree/v1.0.11) | [Project README](https://github.com/whnnick/crossfit-whoop-video): footage and biometric HUD workflow, guide-first entry, explicitly synthetic preview data. |

## Media and claims

ReadyCheck uses public 0.5.1 native screenshots retained in 0.5.4, with project-provided synthetic data and language-specific assets. ReadyType retains sanitized real app media with demonstration text. ReadyDownloader uses a real Web screenshot. CrossFit retains its privacy-safe synthetic athlete with a sample-data caption.

Costs depend on usage and provider pricing; an unconditional daily-cost promise is not used. Web download availability depends on the URL and source restrictions. Requirements explain the 500 MB limit and 24-hour retention.

## Deployment record

Feature commit `ce9ce5b` was deployed through the existing Vercel GitHub connection to [readysuite.vercel.app](https://readysuite.vercel.app/). The canonical hostname is now attached to the project's production environment so future releases update it automatically.

The prior production deployment is `ready-suite-site-p1voo4osk-ready-suite.vercel.app`. If rollback is needed, verify the target using the root README's acceptance flow and use Vercel's rollback operation. An actual rollback was not performed in this run.
