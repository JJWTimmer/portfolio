# Component extraction for design-system sync

## Purpose

`app/page.tsx` is a single-file portfolio: all markup, data, and state inline. This blocks `/design-sync` — the skill requires either a Storybook or a buildable component package (`dist/` output) to sync anything to claude.ai/design. Neither exists. This spec extracts the repeated UI patterns into real, independently buildable components so a future sync has something real to import.

Scope is extraction only — no visual redesign, no new features, no behavior changes beyond one explicitly approved exception (SkillTile state, below).

## Components

New `components/` directory, one file per component, named exports, all client components (`"use client"` where they hold state or handlers).

| Component | Props | Notes |
|---|---|---|
| `Badge` | `children: ReactNode` | Pill span. Used for project tech tags. |
| `SectionHeading` | `children: ReactNode` | `<h2>` styling, consistent across sections. |
| `Card` | `children: ReactNode`, `className?: string` | `bg-slate-700 rounded-lg shadow` wrapper; `className` allows padding variants (`p-4` vs `p-6`) callers already use inconsistently. |
| `SkillTile` | `name: string`, `level: string`, `years: number` | Owns its own open/closed state (see Decisions). |
| `JobEntry` | `role, company, period, location, bullets: string[]` | Renders inside a `Card`. |
| `ProjectCard` | `title, company, period, description, bullets: string[], tech: string[]` | Renders `Badge` per tech item. |
| `SocialLinks` | `github, gitlab, bitbucket, linkedin, email: string` | Icon row; uses `BitbucketIcon` for the one non-lucide icon. |
| `BitbucketIcon` | `className?: string` | Extracted inline SVG, sized/styled like lucide icons. |
| `NavHeader` | none (static nav links) | Fixed header + nav. |
| `Footer` | none | Copyright bar. |

Section bodies (About, Skills, Experience, Projects, Timeline, Education, Interests) stay inline in `page.tsx` as JSX blocks that compose the above components with data. They are not extracted into their own components (confirmed with user — keeps scope to reusable atoms/molecules, which is what the design-system sync actually needs).

Data arrays (`skills`, `employers`, `projects`, `education`, `certifications`) move from inline `page.tsx` consts to `lib/data.ts`, typed and exported.

## Decisions

- **SkillTile state**: currently lifted to `page.tsx` (`activeSkill`, single-open accordion behavior). Moves to local `useState` inside `SkillTile`. Behavior change: multiple skill tiles can now be open simultaneously instead of one-at-a-time. Approved as an acceptable, arguably better UX simplification — and it gives `SkillTile` a clean 3-prop contract with no lifted callback, which matters for the design-system's component API surface.
- **Card padding variance**: existing markup mixes `p-4` (skills detail popover, education/cert cards) and `p-6` (job/project cards). `Card` takes an optional `className` to override padding rather than hardcoding one value, preserving current visual output exactly.
- **No behavior/visual changes** anywhere else — this is a structural refactor. `npm run build` output (`out/`) should be visually identical pre/post refactor except the SkillTile accordion change above.

## Build output for design-sync

Add `tsup` as a devDependency. New `components/index.ts` barrel-exports every component. New npm script:

```
"build:components": "tsup components/index.ts --format esm,cjs --dts --out-dir dist"
```

This gives `/design-sync`'s package-shape converter (`package-build.mjs`) a real `dist/` to work from — ESM + CJS + `.d.ts` per the skill's esbuild-bundlable expectation. This build is independent of `next build` (which continues to produce the static-exported site in `out/` per existing `npm run build`) — the two builds serve different purposes and don't interfere.

Running `/design-sync` itself is a separate follow-up step after this refactor lands, not part of this spec.

## Testing

No test suite exists in this repo (per CLAUDE.md) and this spec doesn't add one — out of scope. Verification is:
1. `npm run build` (Next static export) succeeds and output is visually unchanged (manual check in browser).
2. `npm run build:components` (new tsup build) succeeds and produces `dist/` with all 10 components + types.
3. `npm run lint` passes.

## File layout after this change

```
app/page.tsx          — composition only: imports components + lib/data, renders sections
lib/data.ts            — skills, employers, projects, education, certifications arrays + types
components/
  Badge.tsx
  SectionHeading.tsx
  Card.tsx
  SkillTile.tsx
  JobEntry.tsx
  ProjectCard.tsx
  SocialLinks.tsx
  BitbucketIcon.tsx
  NavHeader.tsx
  Footer.tsx
  index.ts             — barrel export for tsup entry point
```
