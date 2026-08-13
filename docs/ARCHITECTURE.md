# ReadySuite Site Architecture

[简体中文](ARCHITECTURE.zh-CN.md)

## Information Architecture

- `/`: brand proposition and one interactive product showcase.
- Product routes: one focused page per product, with product-specific SEO metadata.
- `/downloads`, `/support`, `/privacy`: shared operational pages generated from the same catalog.
- `/en/...`: independently rendered English counterparts for every public page.
- `/guides/...` and `/en/guides/...`: search-focused, task-oriented guides linked from the relevant product page.

The homepage attracts and routes visitors. Product pages explain, demonstrate, and convert. Shared pages provide release, support, and privacy boundaries without duplicating product stories.

## Product Update Boundary

1. `app/product-registry.ts`: canonical product order, routes, repositories, and CTA destinations.
2. `app/product-ui.tsx`: bilingual product copy and the visual renderer selected by product key.
3. `app/<product>/page.tsx`: static metadata for search and social sharing.
4. `public/`: privacy-safe screenshots, posters, and motion assets.
5. `app/seo.tsx`: localized metadata, canonical and `hreflang` relationships, and schema.org structured data.
6. `app/guide-content.ts`: bilingual guide content kept separate from product positioning copy.

Adding a product requires one registry entry, localized product copy, one visual renderer, one metadata page, and sitemap coverage. It must not add another homepage section.

Chinese remains the default at `/`; English lives at `/en`. Language switching must navigate between these stable URLs instead of changing only client-side state. New public routes require a localized counterpart, reciprocal language alternates, sitemap coverage, and at least one internal link.

On a first visit to an unprefixed HTML route, `proxy.ts` selects English only when the saved preference or browser language requests it, with the Vercel timezone as a fallback. Manual selection is stored in `readysuite-language`. Explicit `/en` URLs and search crawlers are never redirected by locale detection.

## Product Status Rules

- Versions come from public GitHub Releases, tags, or an explicitly labeled source preview.
- A product without a public Release links to its repository and must not be described as downloadable.
- Real product media is preferred. Public media must not expose accounts, tokens, local paths, private content, or user data.
- GitHub destinations open in a new tab; internal product navigation stays in the current tab.

## Verification

Every user-visible update requires:

- production build;
- desktop and mobile browser checks;
- Chinese and English checks;
- horizontal-overflow and console-error checks;
- version and bilingual changelog updates;
- sensitive-information scan before commit.
- rendered metadata checks for title, canonical, `hreflang`, JSON-LD, robots, and sitemap.
