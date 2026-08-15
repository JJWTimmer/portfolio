## Repo-specific gotchas

- **`cssEntry` points at a content-hashed Next.js build artifact** (`out/_next/static/css/<hash>.css`). This filename changes on every `npm run build` that alters the Tailwind class set. On re-sync, if `package-build.mjs` warns the CSS file is missing, re-run `npm run build` and update `cssEntry` in `.design-sync/config.json` to the new hash.
- **`next/link` and `next/image` now ship fine — fixed at the bundler, not by avoiding them.** ~~`next/link` cannot ship in the component bundle.~~ The old note said to avoid both and swap them for `<a>`/`<img>`; that was treating the symptom. The real cause: `next/link` and `next/image` read `process.env.__NEXT_*` placeholders that Next's own webpack `DefinePlugin` substitutes at build time — they are build-time constants, never runtime config. Outside a Next build nothing substitutes them, so the bare `process` reference throws `ReferenceError: process is not defined` at module init. Because the IIFE is one shared bundle, **a single component importing `next/image` blanked all 21 previews**, not just its own.

  The fix is `NEXT_ENV_DEFINE` in `.ds-sync/lib/common.mjs`, spread into `sharedBuildOptions` in `.ds-sync/lib/bundle.mjs` — the same idiom the tooling already used for Vite's `import.meta.env` (`IIFE_IMPORT_META_DEFINE`, right above it). Ten vars are defined to plain-static-export values; `__NEXT_IMAGE_OPTS` must be a real object because `image-component` destructures it at module scope, and `unoptimized: true` matches this project's `next.config.mjs`, so `<Image>` renders a plain `<img>`.

  **This patches vendored tooling under `.ds-sync/`** — if that directory is ever refreshed from upstream, the patch is lost and every preview goes blank again. Symptom to recognise: `ReferenceError: process is not defined` across all components at once. Worth pushing upstream.
- **Every component assumes a dark page background.** `SectionHeading` (white text), `SocialLinks`/`BitbucketIcon` (pale/currentColor icons), and `NavHeader` (white heading text) render invisible or illegible on a bare white canvas. All authored previews wrap these in a `background: '#0f172a'` div. This isn't fixable in the components themselves — it's the real site's actual visual context (`bg-gradient-to-b from-slate-900 to-slate-800`) — so it's noted here rather than "fixed."
- **`NavHeader` needed a `cardMode: single` override** (`.design-sync/config.json` → `overrides.NavHeader`) because it's `position: fixed`, which escapes any grid cell. Applied via `preview-rebuild.mjs --components NavHeader` per the `[GRID_OVERFLOW]` fix flow.
- **`package.json` had no `main`/`module`/`types` fields** before this sync — added them (commit `2c3b6c5`) pointing at the tsup `dist/` output so the converter's `--entry` resolution works. If `dist/` output filenames ever change (e.g. a tsup config change), these three fields need updating too.

## Known render warns

None currently — validate reports 21/21 previews render cleanly after the fixes above.

`LevelSegments` and `TerminalFrame` each needed an authored preview to get there. Both are primitives whose generated preview has nothing meaningful to show: `LevelSegments` is a ~5px bar that reads as blank alone on white, and `TerminalFrame` is a chrome wrapper whose generated story passes only its own name as children. Neither was a code defect — the components were always fine, the auto-generated stories just had no content. Authored previews live in `.design-sync/previews/` and win over generated ones.

`SkillTile` and `SocialLinks` previews were stale rather than thin, and threw real errors: `SkillTile`'s props changed from `{name, level, years}` to `{skill, offset}` in the v2 port, and `SocialLinks` took plaintext `email` before the address moved to base64 `emailEncoded` (a plaintext value there throws `InvalidCharacterError` inside `atob`). **Authored previews are hand-written and not type-checked against the component** — a breaking prop change will not fail the build, it will surface as a render error at validate time.

## Conventions drift (found on the 2026-08-15 re-sync)

The v2 port silently invalidated two rows of `conventions.md`'s class table, and nothing caught it until the header re-validation pass — a build and a clean render check both pass with a conventions file full of dead class names, because nothing type-checks prose against the compiled CSS.

- `bg-blue-400` (documented as "skill-level progress bar fill") no longer exists anywhere. The single-accent progress bar was replaced by the three-layer amber/sky/emerald system (`LAYERS` in `lib/data.ts`).
- `shadow-lg` no longer exists; only `shadow` and `shadow-md` survive, with borders carrying most separation.

Both were corrected in place. This matters more than a normal doc rot: `conventions.md` is inlined into the *design agent's* system prompt, so a dead class name there means every design it builds writes vocabulary that resolves to nothing and ships silently unstyled. **Re-validate every class, token, and component name in `conventions.md` against the compiled `ds-bundle/_ds_bundle.css` and `ds-bundle/components/general/` on every re-sync** — grep, don't eyeball.

## Re-sync risks

- The `cssEntry` hash (see above) is the single most likely thing to silently go stale — it's a committed literal path to a build artifact whose name Next.js regenerates. A re-sync should always `npm run build` first and sanity-check the hash still matches before trusting a cached `cssEntry`.
- `extraFonts` similarly points at content-hashed paths under `out/_next/static/media/` — same risk, same fix (rebuild, recheck paths).
- The component set was authored assuming the portfolio's current dark-slate visual identity. If the site's color scheme changes (e.g. a light-mode variant is added), every authored preview's dark-background wrapper assumption goes stale and previews should be re-graded, not just re-captured.
- `dist/` (tsup output) is gitignored and not committed — a fresh clone must run `npm run build:components` before any design-sync rebuild, or the converter's `--entry ./dist/index.js` will fail to resolve.
