# ReadySuite 1.8.0

[中文](README.zh-CN.md) · [Black-box checks](BLACK_BOX_TESTS.md)

## What this round does

Each product was checked against its newest public GitHub release and README to see whether the site still describes the build people can actually download. Every version number was already current; the gaps were all in content.

| Product | Newest on GitHub | Version already correct | What changed |
| --- | --- | --- | --- |
| ReadyType | v1.5.1 | Yes | Added permission requirements, the unsigned/non-notarized first-launch step, and corrected analytics wording |
| ReadyCheck | v0.6.1 | Yes (done in 1.7.0) | Nothing |
| ReadyDownloader | v0.2.2 | Yes | Documented ad-hoc signing and non-notarization; broadened platform wording and keywords |
| CrossFit WHOOP Video | v1.0.11 | Yes | Noted that WHOOP data is a summary and HUD figures are animated |

## Public product evidence

Verified 2026-11-01. Each tag list was checked and no newer stable version exists: ReadyType `v1.5.1`, ReadyCheck `v0.6.1`, ReadyDownloader `v0.2.2`, CrossFit `v1.0.11`.

### ReadyType 1.5.1

- [README.md](https://github.com/whnnick/readytype/blob/v1.5.1/README.md): the current build is "unsigned and not notarized"; first launch requires right-clicking the app in Applications and choosing Open, and macOS security settings must not be disabled.
- Requirements: macOS 14 or later; a DeepSeek key for polished writing, translation and AI instructions; microphone, speech recognition and accessibility permissions.
- Privacy: public source builds send no anonymous statistics by default; **official builds** send anonymous feature events plus app, system and device compatibility information, excluding voice, text content, window titles, custom words, clipboard and keys.
- The site previously stated only that public source builds send nothing, which read as if official builds were silent too. It now states both halves.

### ReadyDownloader 0.2.2

- [README.md](https://github.com/whnnick/readydownloader/blob/v0.2.2/README.md): the installer is ad-hoc signed and not Apple-notarized; if macOS blocks the first launch, Control-click the app and choose Open rather than disabling Gatekeeper.
- Supported sites: the bundled yt-dlp ships extractors for YouTube, Bilibili, TikTok, Instagram, Facebook, X/Twitter, Vimeo, Twitch, Reddit, AcFun, Douyu, Huya, iQiyi, Youku and Weibo, with availability depending on the specific link.
- Web boundaries are unchanged: no cookie import, no private or DRM content, no proxy or local folder selection.
- The Windows client is still a compatibility prototype with no public package, so the site keeps it out of the download paths rather than pointing at a build that does not exist.

### CrossFit WHOOP Video 1.0.11

- [README.zh-CN.md](https://github.com/whnnick/crossfit-whoop-video/blob/v1.0.11/README.zh-CN.md): the WHOOP API returns processed workout, recovery, sleep and cycle data rather than a continuous raw heart-rate stream; the animated figures in the video are expression built on real summary data.
- Device sources: WHOOP, Apple Health export, FIT, TCX, GPX, CSV and manual metrics, matching the site's existing description.

## Claim boundaries

- No version number changed; this round does not manufacture a version bump.
- Nothing positively claims Windows availability, notarization or live heart-rate capability; the site only describes the published state and the steps a user must take.
- The site still avoids a daily-cost promise without usage conditions; DeepSeek pricing stays with the provider's own page.

## Release record

Feature commit `706daaf` triggered a Vercel production build through the GitHub connection, and the production domain started serving the new content at 10:21 (+08) on 2026-11-01.

Live checks: the notes and body copy on `/readytype`, `/readydownloader` and `/crossfit-whoop-video` match the local build (four, five and five notes respectively), `/en/readydownloader` matches in English, and there is no horizontal overflow at 390 wide. The four `softwareVersion` values remain 1.5.1, 0.6.1, 0.2.2 and 1.0.11, matching the newest GitHub releases.
