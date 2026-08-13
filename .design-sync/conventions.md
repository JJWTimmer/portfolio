## Wrapping and setup

No provider or root wrapper is required — every component is self-contained Tailwind + inline React, no context/theme dependency. **But every component assumes a dark page background** (the real site is `bg-gradient-to-b from-slate-900 to-slate-800`). Components that render white or light-gray text/icons (`SectionHeading`, `SocialLinks`, `BitbucketIcon`, `NavHeader`) are invisible or illegible on a plain white canvas — always compose them inside a container with a dark background (`#0f172a`/`bg-slate-900` or darker) so text and icon color actually shows.

`NavHeader` uses `position: fixed`, so give it a positioned or sized wrapper (`position: relative` with explicit height) when composing outside its natural full-page context, or it renders detached from any visual anchor.

## The styling idiom

Tailwind CSS utility classes, dark slate palette. Real class families this design system actually uses:

| Purpose | Classes |
|---|---|
| Card / surface background | `bg-slate-700`, `bg-slate-600` (hover/nested), `bg-slate-900` / `bg-slate-950` (page/header/footer) |
| Text | `text-white` (headings), `text-slate-100`/`text-slate-300` (body), `text-slate-400` (secondary/meta) |
| Accent | `bg-blue-400` (skill-level progress bar fill) |
| Shape | `rounded-lg` (cards), `rounded` (badges), `rounded-full` (avatar, progress bar) |
| Elevation | `shadow`, `shadow-md`, `shadow-lg` |
| Weight | `font-bold` (headings), `font-semibold`/`font-medium` (labels) |

No CSS-in-JS, no design tokens/CSS custom properties — style purely via Tailwind utility className strings, matching the vocabulary above. `Card`'s `className` prop is the padding-variant lever (`p-4` for compact list cards, `p-6` for content cards) — the base `bg-slate-700 rounded-lg shadow` is fixed in the component.

## Where the truth lives

- `styles.css` (root) — the full stylesheet closure; `@import`s the scraped Tailwind output and font-face rules.
- Per-component `.d.ts` in `components/general/<Name>/` — the prop contract.
- `fonts/fonts.css` — Geist Sans / Geist Mono `@font-face` declarations (Next.js's optimized font loading, harvested from the build output).

## One idiomatic build snippet

```tsx
import { NavHeader, SectionHeading, JobEntry, Badge } from 'portfolio-jasper'

function Page() {
  return (
    <div style={{ background: '#0f172a', minHeight: '100vh' }}>
      <div style={{ position: 'relative', height: 80 }}>
        <NavHeader />
      </div>
      <main style={{ padding: 24 }}>
        <SectionHeading>Work Experience</SectionHeading>
        <JobEntry
          role="Senior Software Engineer"
          company="Acme Corp"
          period="2022 – Present"
          location="Remote"
          bullets={['Led the platform migration.', 'Mentored two engineers.']}
        />
      </main>
    </div>
  )
}
```
