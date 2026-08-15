# Patches to vendored `.ds-sync/` tooling

`.ds-sync/` is gitignored (`.gitignore:42`) — it is vendored design-sync
tooling, not project source. Anything changed in there is **not version
controlled** and is lost whenever the directory is refreshed from upstream.
This directory keeps the changes recoverable.

## `next-env-define.snippet.mjs` — Next.js build-time env defines

**Symptom it fixes:** every component preview blank at once, with
`ReferenceError: process is not defined` in the render check.

**Cause:** `next/link` and `next/image` read `process.env.__NEXT_*`
placeholders that Next's own webpack `DefinePlugin` substitutes at build time.
They are build-time constants, never runtime config. Outside a Next build
nothing substitutes them, so the bare `process` reference throws at module
init — and because the design-sync IIFE is one shared bundle, a single
component importing `next/image` takes down all 21 previews, not just its own.

This is the same class of problem the tooling already solves for Vite's
`import.meta.env` via `IIFE_IMPORT_META_DEFINE`, directly above the insertion
point.

### Reapplying

1. Paste the snippet into `.ds-sync/lib/common.mjs`, immediately after the
   `IIFE_IMPORT_META_DEFINE` export.
2. In `.ds-sync/lib/bundle.mjs`:
   - add `NEXT_ENV_DEFINE` to the existing `./common.mjs` import
   - spread it into the shared define in `sharedBuildOptions`:
     ```js
     define: { 'process.env.NODE_ENV': '"development"', ...NEXT_ENV_DEFINE },
     ```
   It belongs in `sharedBuildOptions` rather than the IIFE-only define — both
   the IIFE and ESM passes need it.
3. Rebuild and validate:
   ```bash
   npm run build:components
   node .ds-sync/package-build.mjs --config .design-sync/config.json \
     --node-modules ./node_modules --out ./ds-bundle --entry ./dist/index.js
   node .ds-sync/package-validate.mjs ./ds-bundle
   ```
   Expect `21/21 previews render cleanly`.

### Worth pushing upstream

Nothing here is specific to this project beyond `unoptimized: true` in
`__NEXT_IMAGE_OPTS` (which matches `next.config.mjs`). Any design system built
from Next components hits this, so the fix belongs in the tooling itself
rather than in each consumer's vendored copy.
