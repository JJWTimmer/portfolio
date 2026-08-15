# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # development server
npm run build    # static export to out/
npm run lint     # ESLint
npm start        # serve out/ (must build first)
```

No test suite exists.

## Architecture

Next.js 14 App Router, configured as a **static export** (`output: 'export'` in next.config.mjs). No server runtime — no API routes, no Server Components with data fetching, no ISR. Output goes to `out/`.

Single route: `app/page.tsx` is a client component (`"use client"`) with hash-based section navigation (`#about`, `#skills`, etc.). Fixed header + smooth scroll anchors.

All content is hard-coded in `app/page.tsx` as TypeScript arrays/objects — no CMS, no data fetching, no env vars needed.

## Key Files

| File | Purpose |
|------|---------|
| `app/page.tsx` | Entire portfolio — all data and UI in one file |
| `app/layout.tsx` | Metadata, OG tags, Geist font loading |
| `app/globals.css` | Tailwind directives, scroll-margin-top for fixed nav anchors |

## Styling

Tailwind CSS with dark slate theme (slate-900/950 background). `scroll-margin-top: 80px` on `section[id]` handles fixed nav offset — don't use JS for anchor scroll offsets.

## Constraints from Static Export

- Cannot add API routes
- Cannot use `next/image` optimization (images are unoptimized)
- No environment variables at runtime (build-time only)
- `next start` won't work — use `npm start` (serves `out/` via `npx serve`)
