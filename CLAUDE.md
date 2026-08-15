# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # development server
npm run build            # static export to out/
npm run lint             # ESLint (flat config; `next lint` was removed in Next 16)
npm start                # serve out/ (must build first)
npm run build:components # tsup → dist/, consumed by design-sync only
```

No test suite exists.

## Architecture

Next.js 16 App Router, configured as a **static export** (`output: 'export'` in next.config.mjs). No server runtime — no API routes, no Server Components with data fetching, no ISR. Output goes to `out/`.

Single route. `app/page.tsx` is a Server Component that composes the page from `components/`; only three leaves are client components (`ObfuscatedEmail`, `SocialLinks`, `TimelineArchive`). Hash-based section navigation (`#about`, `#skills`, …) with a fixed header.

All content lives in `lib/data.ts` as typed arrays — skills, employers, projects, education, certifications. No CMS, no data fetching, no runtime env vars.

## Key Files

| File | Purpose |
|------|---------|
| `lib/data.ts` | All page content + the `LAYERS`/`LEVELS` design vocabulary |
| `app/page.tsx` | Page composition (Server Component) |
| `components/` | One component per file, re-exported from `components/index.ts` |
| `app/layout.tsx` | Metadata, OG tags, Geist font loading |
| `app/globals.css` | Tailwind directives, `scroll-margin-top`, blueprint grid, ticker keyframes |

## Styling

Tailwind CSS, dark slate theme (slate-900/950). Skills carry a semantic `layer` (`runtime` / `data` / `delivery`) that maps to an accent trio via `LAYERS` in `lib/data.ts` — amber, sky, emerald respectively. Don't hardcode accent classes; read them from `LAYERS`.

`scroll-margin-top: 80px` on `section[id]` handles the fixed-nav offset — don't use JS for anchor scroll offsets.

## Email obfuscation

The contact address ships base64-encoded (`EMAIL_ENCODED` in `lib/data.ts`) and is decoded client-side by `lib/useDecodedEmail.ts`. **Never render it during SSR** — `app/page.tsx` prerenders at build time, so decoding there would bake the plaintext into `out/index.html` and defeat the point. `useSyncExternalStore` is used rather than `useEffect`+`setState` because Next 16's React Compiler lint rules flag the latter.

Verify after touching it: `grep -r "mail@" out/` must return nothing.

## Design system sync

`components/index.ts` → tsup → `dist/` → design-sync → a Claude Design project (id in `.design-sync/config.json`). The barrel and the `main`/`module`/`types` fields in package.json exist **only** for this; nothing in the app imports them.

`.ds-sync/` is gitignored vendored tooling carrying a **local patch** without which every preview renders blank. If it's ever refreshed from upstream, reapply from `docs/design-sync/`. See `.design-sync/NOTES.md` for the full gotcha list.

## Constraints from Static Export

- Cannot add API routes
- `next/image` works but is unoptimized (`images.unoptimized`)
- No environment variables at runtime (build-time only)
- `next start` won't work — use `npm start` (serves `out/` via `npx serve`)
