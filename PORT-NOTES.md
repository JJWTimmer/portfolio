# Portfolio v2 → repo port

Drop-in files mirroring `portfolio-jasper/` paths. Copy over the same paths.

## New files
- `components/SectionLabel.tsx` — mono `NN / TITLE` + rule. Replaces `SectionHeading` at call sites (SectionHeading is left in place, still exported).
- `components/Ticker.tsx` — pausing marquee of skill names.
- `components/LevelSegments.tsx` — the 3-segment ordinal indicator.
- `components/LevelLegend.tsx` — the four level definitions, shown above the stack index.
- `components/StackIndex.tsx` — 00 / STACK INDEX, all 16 skills in 3 layer columns.
- `components/TerminalFrame.tsx` — window chrome, reused by the featured project and the archive.
- `components/TimelineArchive.tsx` — click-to-load TimelineJS iframe.
- `components/ExperienceBand.tsx` — zig-zag employer band wrapping the existing `JobEntry`.
- `components/Hero.tsx` — hero + portrait frame.
- `components/ContactBlock.tsx` — mono mailto block.

## Rewritten
- `app/page.tsx` — new composition. Section ids unchanged (`about`, `skills`, `experience`, `projects`, `resume`, `education`, `interests`), so `NavHeader` needs no edit.
- `app/globals.css` — dark body default, Geist Sans body font (was Arial), `.font-mono-geist`, `.blueprint-grid`, ticker keyframes + reduced-motion opt-out.
- `lib/data.ts` — `Skill` gains `layer` and `featured`; adds `LAYERS` and `LEVELS` (with written definitions). Employers/projects/education/certifications unchanged.
- `components/SkillTile.tsx` — **breaking prop change**: was `{ name, level, years }`, now `{ skill, offset }`. It no longer has a click-to-open popover or a percentage bar; the level definition is printed inline. `lucide-react`'s `Info` import is gone — drop the dep if nothing else uses it.

## Decisions worth your review
1. **Layer assignment.** Java/Spring Boot/Python/Scala → runtime; PostgreSQL/MongoDB/AWS/K8s/Linux → data & platform; CI-CD/Git/Agile/Docker/Ansible/Jenkins/Terraform → delivery. Agile / Scrum sits in delivery because there is no fourth column — move it if that reads wrong.
2. **Featured skills** are Java, Spring Boot, PostgreSQL (the three large tiles). Flip `featured` in `lib/data.ts` to change.
3. **`hash_bookmark=true` removed** from the TimelineJS URL — it rewrites `location.hash` and breaks the nav anchors.
4. **Portrait** is now a 300×380 grayscale rectangle with an amber block behind it, not a `rounded-full` avatar. `public/img/jasper.jpg` is cropped by `object-cover`; if the crop is bad, adjust `object-position`.

## Not touched
`NavHeader`, `Footer`, `Card`, `Badge`, `JobEntry`, `ProjectCard`, `SocialLinks`, `SectionHeading`, `BitbucketIcon`, `app/layout.tsx`, tailwind/next config.
