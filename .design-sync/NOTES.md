## Repo-specific gotchas

- **`cssEntry` points at a content-hashed Next.js build artifact** (`out/_next/static/css/<hash>.css`). This filename changes on every `npm run build` that alters the Tailwind class set. On re-sync, if `package-build.mjs` warns the CSS file is missing, re-run `npm run build` and update `cssEntry` in `.design-sync/config.json` to the new hash.
- **`next/link` cannot ship in the component bundle.** `NavHeader` and `SocialLinks` originally used `next/link`; even though it's `next`-package-external in the tsup build, the design-sync converter's own esbuild pass inlines `next/link`'s internals when producing the browser IIFE, pulling in `process.env.__NEXT_MANUAL_CLIENT_BASE_PATH` references that crash in a browser with `ReferenceError: process is not defined`. Fixed by swapping both to plain `<a>` tags (commit `cf0b0b2`) — neither component needed Next's client-side routing (hash anchors + external URLs only). **Any future component that imports `next/link` or `next/image` will hit the same issue** — avoid them in anything meant to sync, or expect to swap them.
- **Every component assumes a dark page background.** `SectionHeading` (white text), `SocialLinks`/`BitbucketIcon` (pale/currentColor icons), and `NavHeader` (white heading text) render invisible or illegible on a bare white canvas. All authored previews wrap these in a `background: '#0f172a'` div. This isn't fixable in the components themselves — it's the real site's actual visual context (`bg-gradient-to-b from-slate-900 to-slate-800`) — so it's noted here rather than "fixed."
- **`NavHeader` needed a `cardMode: single` override** (`.design-sync/config.json` → `overrides.NavHeader`) because it's `position: fixed`, which escapes any grid cell. Applied via `preview-rebuild.mjs --components NavHeader` per the `[GRID_OVERFLOW]` fix flow.
- **`package.json` had no `main`/`module`/`types` fields** before this sync — added them (commit `2c3b6c5`) pointing at the tsup `dist/` output so the converter's `--entry` resolution works. If `dist/` output filenames ever change (e.g. a tsup config change), these three fields need updating too.

## Known render warns

None currently — final validate ran clean (0 bad, 0 thin, 0 variantsIdentical) after the fixes above.

## Re-sync risks

- The `cssEntry` hash (see above) is the single most likely thing to silently go stale — it's a committed literal path to a build artifact whose name Next.js regenerates. A re-sync should always `npm run build` first and sanity-check the hash still matches before trusting a cached `cssEntry`.
- `extraFonts` similarly points at content-hashed paths under `out/_next/static/media/` — same risk, same fix (rebuild, recheck paths).
- The component set was authored assuming the portfolio's current dark-slate visual identity. If the site's color scheme changes (e.g. a light-mode variant is added), every authored preview's dark-background wrapper assumption goes stale and previews should be re-graded, not just re-captured.
- `dist/` (tsup output) is gitignored and not committed — a fresh clone must run `npm run build:components` before any design-sync rebuild, or the converter's `--entry ./dist/index.js` will fail to resolve.
