# Component Extraction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Extract the repeated UI patterns in `app/page.tsx` into standalone, independently buildable React components, so the repo has a real component package a future `/design-sync` run can consume.

**Architecture:** Pure structural refactor. New `components/` directory holds 10 presentational components (atoms → composites). Data arrays move to `lib/data.ts`. `app/page.tsx` becomes composition: imports components + data, renders the same DOM structure. A new `tsup` build (`npm run build:components`) bundles `components/index.ts` to `dist/` (ESM + CJS + `.d.ts`), separate from and non-interfering with the existing `next build` static export.

**Tech Stack:** Next.js 14 App Router (existing), React 18, Tailwind CSS, lucide-react icons, TypeScript strict mode, tsup (new devDependency) for component bundling.

## Global Constraints

- No visual or behavioral changes to the rendered site, except: SkillTile accordion changes from single-open (lifted state) to independent per-tile open/closed (local state) — approved deviation, see spec Decisions.
- No test suite exists in this repo and none is added — verification is `npm run build`, `npm run build:components`, `npm run lint`, and manual visual check per spec's Testing section.
- All new components are TypeScript, strict mode, functional components.
- Use the existing `@/*` path alias (`tsconfig.json`) for all new imports — e.g. `@/components/Badge`, `@/lib/data`.
- Card padding must stay configurable via `className` prop to preserve the existing `p-4`/`p-6` variance — do not hardcode one value.
- `next.config.mjs` static export (`output: 'export'`) must still build successfully after the refactor — no Server Components, no API routes, no runtime env vars introduced.

---

## Task 1: Atoms — Badge, SectionHeading, BitbucketIcon

**Files:**
- Create: `components/Badge.tsx`
- Create: `components/SectionHeading.tsx`
- Create: `components/BitbucketIcon.tsx`

**Interfaces:**
- Consumes: nothing (leaf components)
- Produces:
  - `Badge({ children }: { children: React.ReactNode })` — default export
  - `SectionHeading({ children }: { children: React.ReactNode })` — default export
  - `BitbucketIcon({ className }: { className?: string })` — default export

- [ ] **Step 1: Create `components/Badge.tsx`**

```tsx
export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-slate-600 text-slate-100 text-xs font-medium px-2.5 py-0.5 rounded">
      {children}
    </span>
  )
}
```

- [ ] **Step 2: Create `components/SectionHeading.tsx`**

```tsx
export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-bold text-white mb-6">{children}</h2>
}
```

- [ ] **Step 3: Create `components/BitbucketIcon.tsx`**

Extracted verbatim from the inline SVG currently in `app/page.tsx` (lines 217-220), given the same sizing defaults as the lucide icons it sits next to (`w-6 h-6`).

```tsx
export default function BitbucketIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5.2 1.7C4.5 1.7 4 2.2 4 2.9c0 0.1 0 0.2 0 0.3l2.9 17.3c0.1 0.5 0.5 0.8 1 0.8h8.2c0.4 0 0.7-0.3 0.8-0.6l2.9-17.4c0.1-0.6-0.3-1.2-1-1.3c-0.1 0-0.1 0-0.2 0H5.2z" />
      <path d="M15.8 8.7H8.2l-1 5.6h9.6L15.8 8.7z" />
    </svg>
  )
}
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors related to the three new files (pre-existing unrelated errors, if any, are out of scope).

- [ ] **Step 5: Commit**

```bash
git add components/Badge.tsx components/SectionHeading.tsx components/BitbucketIcon.tsx
git commit -m "Add Badge, SectionHeading, BitbucketIcon atoms"
```

---

## Task 2: Card

**Files:**
- Create: `components/Card.tsx`

**Interfaces:**
- Consumes: nothing
- Produces: `Card({ children, className }: { children: React.ReactNode; className?: string })` — default export. `className` is appended after the base classes so callers can add padding (e.g. `p-4` or `p-6`).

- [ ] **Step 1: Create `components/Card.tsx`**

```tsx
export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`bg-slate-700 rounded-lg shadow ${className}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors related to `components/Card.tsx`.

- [ ] **Step 3: Commit**

```bash
git add components/Card.tsx
git commit -m "Add Card component"
```

---

## Task 3: SkillTile

**Files:**
- Create: `components/SkillTile.tsx`

**Interfaces:**
- Consumes: nothing (owns its own state per spec Decisions — no lifted `activeSkill`/`onToggle` props)
- Produces: `SkillTile({ name, level, years }: { name: string; level: string; years: number })` — default export, `"use client"` component.

- [ ] **Step 1: Create `components/SkillTile.tsx`**

```tsx
"use client"

import { useState } from "react"
import { Info } from "lucide-react"

export default function SkillTile({
  name,
  level,
  years,
}: {
  name: string
  level: string
  years: number
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className="w-full bg-slate-700 p-4 rounded-lg shadow text-left hover:bg-slate-600 transition-colors duration-200"
        onClick={() => setOpen(!open)}
      >
        <div className="flex justify-between items-center">
          <span className="font-semibold text-white">{name}</span>
          <Info className="w-5 h-5 text-slate-400" />
        </div>
      </button>
      {open && (
        <div className="absolute z-10 w-full bg-slate-600 border border-slate-500 rounded-lg shadow-lg p-4 mt-2">
          <p className="text-sm text-slate-300">Level: {level}</p>
          <p className="text-sm text-slate-300">Experience: {years} years</p>
          <div className="mt-2 bg-slate-500 rounded-full h-2.5">
            <div
              className="bg-blue-400 h-2.5 rounded-full"
              style={{ width: `${level === "Expert" ? 100 : level === "Advanced" ? 75 : 50}%` }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors related to `components/SkillTile.tsx`.

- [ ] **Step 3: Commit**

```bash
git add components/SkillTile.tsx
git commit -m "Add SkillTile component with local toggle state"
```

---

## Task 4: JobEntry, ProjectCard

**Files:**
- Create: `components/JobEntry.tsx`
- Create: `components/ProjectCard.tsx`

**Interfaces:**
- Consumes: `Card` from `@/components/Card` (Task 2), `Badge` from `@/components/Badge` (Task 1)
- Produces:
  - `JobEntry({ role, company, period, location, bullets }: { role: string; company: string; period: string; location: string; bullets: string[] })` — default export
  - `ProjectCard({ title, company, period, description, bullets, tech }: { title: string; company: string; period: string; description: string; bullets: string[]; tech: string[] })` — default export

- [ ] **Step 1: Create `components/JobEntry.tsx`**

```tsx
import Card from "@/components/Card"

export default function JobEntry({
  role,
  company,
  period,
  location,
  bullets,
}: {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}) {
  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <p className="text-slate-300 font-medium">{company}</p>
        </div>
        <p className="text-sm text-slate-400 mt-1 md:mt-0 md:text-right">
          {period}
          <br />
          {location}
        </p>
      </div>
      <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </Card>
  )
}
```

- [ ] **Step 2: Create `components/ProjectCard.tsx`**

```tsx
import Card from "@/components/Card"
import Badge from "@/components/Badge"

export default function ProjectCard({
  title,
  company,
  period,
  description,
  bullets,
  tech,
}: {
  title: string
  company: string
  period: string
  description: string
  bullets: string[]
  tech: string[]
}) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-400 mb-3">
        {company} · {period}
      </p>
      <p className="text-slate-300 mb-3">{description}</p>
      <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm mb-4">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </Card>
  )
}
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors related to `components/JobEntry.tsx` or `components/ProjectCard.tsx`.

- [ ] **Step 4: Commit**

```bash
git add components/JobEntry.tsx components/ProjectCard.tsx
git commit -m "Add JobEntry and ProjectCard components"
```

---

## Task 5: SocialLinks, NavHeader, Footer

**Files:**
- Create: `components/SocialLinks.tsx`
- Create: `components/NavHeader.tsx`
- Create: `components/Footer.tsx`

**Interfaces:**
- Consumes: `BitbucketIcon` from `@/components/BitbucketIcon` (Task 1)
- Produces:
  - `SocialLinks({ github, gitlab, bitbucket, linkedin, email }: { github: string; gitlab: string; bitbucket: string; linkedin: string; email: string })` — default export
  - `NavHeader()` — default export, no props
  - `Footer()` — default export, no props

- [ ] **Step 1: Create `components/SocialLinks.tsx`**

```tsx
import Link from "next/link"
import { Github, Gitlab, Linkedin, Mail } from "lucide-react"
import BitbucketIcon from "@/components/BitbucketIcon"

export default function SocialLinks({
  github,
  gitlab,
  bitbucket,
  linkedin,
  email,
}: {
  github: string
  gitlab: string
  bitbucket: string
  linkedin: string
  email: string
}) {
  return (
    <div className="flex flex-wrap gap-4">
      <Link href={github} className="text-slate-400 hover:text-white" aria-label="GitHub">
        <Github className="w-6 h-6" />
      </Link>
      <Link href={gitlab} className="text-slate-400 hover:text-white" aria-label="GitLab">
        <Gitlab className="w-6 h-6" />
      </Link>
      <Link href={bitbucket} className="text-slate-400 hover:text-white" aria-label="Bitbucket">
        <BitbucketIcon className="w-6 h-6" />
      </Link>
      <Link href={linkedin} className="text-slate-400 hover:text-white" aria-label="LinkedIn">
        <Linkedin className="w-6 h-6" />
      </Link>
      <Link href={`mailto:${email}`} className="text-slate-400 hover:text-white" aria-label="Email">
        <Mail className="w-6 h-6" />
      </Link>
    </div>
  )
}
```

- [ ] **Step 2: Create `components/NavHeader.tsx`**

```tsx
import Link from "next/link"

export default function NavHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Jasper Timmer MSc.</h1>
          <div className="flex space-x-4">
            <Link href="#about" className="text-slate-300 hover:text-white">About</Link>
            <Link href="#skills" className="text-slate-300 hover:text-white">Skills</Link>
            <Link href="#experience" className="text-slate-300 hover:text-white">Experience</Link>
            <Link href="#projects" className="text-slate-300 hover:text-white">Projects</Link>
            <Link href="#resume" className="text-slate-300 hover:text-white">Timeline</Link>
            <Link href="#education" className="text-slate-300 hover:text-white">Education</Link>
            <Link href="#interests" className="text-slate-300 hover:text-white">Activities</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
```

- [ ] **Step 3: Create `components/Footer.tsx`**

```tsx
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Jasper Timmer. All rights reserved.</p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors related to the three new files.

- [ ] **Step 5: Commit**

```bash
git add components/SocialLinks.tsx components/NavHeader.tsx components/Footer.tsx
git commit -m "Add SocialLinks, NavHeader, Footer components"
```

---

## Task 6: Data extraction to lib/data.ts

**Files:**
- Create: `lib/data.ts`

**Interfaces:**
- Consumes: nothing
- Produces: named exports `skills`, `employers`, `projects`, `education`, `certifications`, and types `Skill`, `Employer`, `Project`, `Education`, `Certification` — all consumed by Task 7.

- [ ] **Step 1: Create `lib/data.ts`**

Copied verbatim from the const declarations currently in `app/page.tsx` (lines 13-166), with explicit types added.

```tsx
export type Skill = { name: string; level: string; years: number }

export const skills: Skill[] = [
  { name: "Java", level: "Expert", years: 12 },
  { name: "Spring Boot", level: "Expert", years: 8 },
  { name: "Python", level: "Advanced", years: 8 },
  { name: "PostgreSQL", level: "Advanced", years: 10 },
  { name: "Docker / Podman", level: "Advanced", years: 8 },
  { name: "Kubernetes / OpenShift", level: "Intermediate", years: 5 },
  { name: "AWS", level: "Advanced", years: 7 },
  { name: "CI/CD", level: "Expert", years: 10 },
  { name: "Ansible", level: "Advanced", years: 6 },
  { name: "Terraform", level: "Intermediate", years: 4 },
  { name: "Scala", level: "Intermediate", years: 3 },
  { name: "Agile / Scrum", level: "Expert", years: 12 },
  { name: "MongoDB", level: "Advanced", years: 5 },
  { name: "Linux", level: "Advanced", years: 10 },
  { name: "Jenkins", level: "Advanced", years: 7 },
  { name: "Git", level: "Expert", years: 12 },
]

export type Employer = {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}

export const employers: Employer[] = [
  {
    role: "Senior Software Engineer",
    company: "Dojoo.io (Nederland Eet Groep B.V.)",
    period: "March 2022 – Present",
    location: "Zwolle",
    bullets: [
      "Led the pivot of an internal IT team into an external consultancy, defining new ways of working and positioning.",
      "Mentored 3 engineers through the transition into a consultancy role — career growth, client communication, and technical leadership.",
      "Embedded in client teams as Tech Lead, Scrum Master, and DevOps engineer; coach client-side team leads on architecture decisions and debugging approaches.",
    ],
  },
  {
    role: "Senior Java Backend Developer",
    company: "Homie / Nederland Eet Groep B.V.",
    period: "October 2021 – Present",
    location: "Zwolle",
    bullets: [
      "Owned the architectural roadmap for a live food-ordering platform: Java 8 → 17, Spring Boot 2 → 3, zero downtime.",
      "Designed and delivered new product features end-to-end: push notifications, Mollie payment integration, customer loyalty system.",
      "Made infra and stack decisions under real business constraints — kept the platform running through multiple environment migrations.",
      "Stack: Java 17, Spring Boot 3, PostgreSQL, GitLab CI, AWS, Ubuntu.",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Opinity B.V. (now: Vormer IT)",
    period: "July 2019 – September 2021",
    location: "Zwolle",
    bullets: [
      "Served as Scrum Master across multiple client projects, unblocking teams and coaching clients on Agile ways of working.",
      "Designed and built a production Kubernetes cluster on DigitalOcean including CI/CD pipeline for a client.",
      "Implemented SRE practices with Squadcast and FreshService, improving incident response.",
    ],
  },
  {
    role: "Backend Developer",
    company: "Asellion (now: Covestro Direct Store)",
    period: "October 2018 – June 2019",
    location: "Amsterdam",
    bullets: [
      "Joined an early-stage B2B chemical industry e-commerce startup and introduced Agile/Scrum company-wide.",
      "Participated in Holacracy governance as Rep Link.",
      "Contributed to migrating the platform from on-premise to AWS using containerisation and infrastructure-as-code.",
      "Stack: JavaEE, PostgreSQL, AWS, Terraform, Packer.",
    ],
  },
  {
    role: "Software Engineer",
    company: "MetrixLab",
    period: "September 2017 – August 2018",
    location: "Rotterdam",
    bullets: [
      "Designed and built the integration API between two incompatible technology worlds — JVM/Scala data platform and .NET reporting layer — enabling a key enterprise client integration.",
      "Architected and executed a full infra migration from Rackspace to VMware on-premise using Ansible, significantly reducing hosting costs.",
      "Acted as technical bridge between business stakeholders and engineering teams across two continents.",
    ],
  },
  {
    role: "Software Developer",
    company: "Oxyme (now: Toluna/MetrixLab)",
    period: "May 2016 – August 2017",
    location: "Rotterdam",
    bullets: [
      "Built and maintained the full data pipeline from Social Media APIs (Facebook, Twitter GNIP, Reddit) through to business insights reporting.",
      "Led a near-shore development team in Romania.",
      "Stack: Scala/Java, MongoDB, PostgreSQL, ActiveMQ, Akka, Linux, Rackspace IaaS.",
    ],
  },
  {
    role: "Software Developer",
    company: "iBanx HSE (now: Unite-X)",
    period: "February 2013 – January 2016",
    location: "Amsterdam",
    bullets: [
      "Started my career maintaining and extending a Java 6 codebase in the process industry — end-to-end: requirements, build, test.",
      "Built DevOps automation with Docker, Jenkins, Rundeck, and Nexus; automated TEST environment rollouts used company-wide.",
      "Improved and automated Cucumber test suite, delivering major quality and developer experience gains.",
    ],
  },
]

export type Project = {
  title: string
  company: string
  period: string
  description: string
  bullets: string[]
  tech: string[]
}

export const projects: Project[] = [
  {
    title: "DevOps Engineer — Belastingdienst",
    company: "Dojoo.io",
    period: "April 2025 – Present",
    description:
      "Greenfield system for new tax legislation — designed to become a reusable blueprint for future regulatory implementations across the organisation.",
    bullets: [
      "Defined the system architecture: event-driven, modular, built for reuse by teams that don't yet exist.",
      "Made key early decisions on process orchestration (Camunda BPM), API boundaries, and GitOps delivery model that now shape how other teams onboard.",
      "First modules consistently on schedule, high code quality verified by SonarQube and SIG measurements.",
      "Transferred architectural patterns and modern engineering practices to in-house engineers alongside delivery.",
    ],
    tech: ["OpenShift", "Quarkus", "Camunda", "ArgoCD", "Tekton", "GitOps"],
  },
  {
    title: "Tech Lead / Solution Architect IAM — DICTU",
    company: "Dojoo.io",
    period: "June 2022 – May 2025",
    description:
      "Full ownership of architecture and delivery on a 3-year Identity & Access Management platform for a Dutch government ministry — end-to-end, with a lean team of 4.",
    bullets: [
      "Designed the full solution architecture: LDAP integration, role model, API layer, frontend, and deployment topology.",
      "Co-authored the Project Architecture document; primary technical interface to two Solution Architects and a Project Lead.",
      "Translated ambiguous organisational requirements into concrete, buildable specs — repeatedly.",
    ],
    tech: ["Java 17", "Spring Boot", "PostgreSQL", "LDAP", "Kubernetes", "GitLab CI", "Docker"],
  },
  {
    title: "Backend Java Developer — Schiphol Airport",
    company: "Opinity B.V.",
    period: "August 2019 – February 2021",
    description:
      "Database migration and integration re-architecture for a critical operational data platform at Amsterdam Airport Schiphol.",
    bullets: [
      "Assessed migration path from end-of-life Tamino XML store to MarkLogic; defined the integration and data model approach.",
      "Refactored the Java EE application layer to cleanly target the new store without breaking existing consumers.",
      "Designed and automated a high-availability MarkLogic cluster deployment with Ansible.",
    ],
    tech: ["Java 8", "MarkLogic", "Ansible", "XML", "JavaEE"],
  },
]

export type Education = { degree: string; institution: string; year: string }

export const education: Education[] = [
  { degree: "MSc, Software Engineering", institution: "University of Amsterdam", year: "2013" },
  { degree: "Pre-master, Computer Science", institution: "University of Amsterdam", year: "2011" },
  { degree: "BASc, Forensic Science", institution: "Amsterdam University of Applied Sciences", year: "2010" },
  { degree: "Propaedeutic, Computer Science", institution: "Amsterdam University of Applied Sciences", year: "2008" },
]

export type Certification = { name: string; issuer: string; year: string }

export const certifications: Certification[] = [
  { name: "Splunk4Rookies", issuer: "Splunk", year: "2024" },
  { name: "Beginnen met Leidinggeven", issuer: "Kenneth Smit Direct", year: "2023" },
  { name: "Professional Scrum Master I", issuer: "Scrum.org", year: "2023" },
  { name: "Axway APIM Developer Track", issuer: "Axway", year: "2022" },
]
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors related to `lib/data.ts`.

- [ ] **Step 3: Commit**

```bash
git add lib/data.ts
git commit -m "Extract portfolio data to lib/data.ts"
```

---

## Task 7: Rewire app/page.tsx

**Files:**
- Modify: `app/page.tsx` (full rewrite of the component body; keep `"use client"` directive)

**Interfaces:**
- Consumes: all components from Tasks 1-5 (`Badge`, `SectionHeading`, `Card`, `SkillTile`, `JobEntry`, `ProjectCard`, `SocialLinks`, `NavHeader`, `Footer`) and all data from Task 6 (`skills`, `employers`, `projects`, `education`, `certifications`)
- Produces: `Portfolio()` default export — same as before, now a thin composition.

- [ ] **Step 1: Rewrite `app/page.tsx`**

```tsx
"use client"

import Image from "next/image"
import NavHeader from "@/components/NavHeader"
import Footer from "@/components/Footer"
import SectionHeading from "@/components/SectionHeading"
import Card from "@/components/Card"
import SkillTile from "@/components/SkillTile"
import JobEntry from "@/components/JobEntry"
import ProjectCard from "@/components/ProjectCard"
import SocialLinks from "@/components/SocialLinks"
import { skills, employers, projects, education, certifications } from "@/lib/data"

export default function Portfolio() {
  const email = atob("amFzcGVyQHRpbW1lci5pbQ==")

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      <NavHeader />

      <main className="container mx-auto px-6 py-8 pt-24">
        {/* About */}
        <section id="about" className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-white mb-2">Solution Architect & Tech Lead</h2>
              <p className="text-slate-400 mb-4">Zwolle, Netherlands · {email}</p>
              <p className="text-xl text-slate-300 mb-6">
                Software engineer turned architect with 12+ years building complex, integration-heavy systems for
                product companies and government clients. I think in systems: how components connect, where coupling
                hides, and what breaks at scale. I stay hands-on — reading and writing code is how I stay sharp and
                earn trust with engineering teams.
              </p>
              <p className="text-xl text-slate-300 mb-6">
                My focus is on product domains where architecture is a competitive advantage: clean API design,
                event-driven integration, and making the right call early so teams don&apos;t pay for it later.
                I work best in product-driven engineering organisations where depth matters more than breadth.
              </p>
              <SocialLinks
                github="https://github.com/jjwtimmer"
                gitlab="https://gitlab.com/jjwtimmer"
                bitbucket="https://bitbucket.org/jjwtimmer"
                linkedin="https://linkedin.com/in/jjwtimmer"
                email={email}
              />
            </div>
            <div className="md:w-1/4">
              <Image
                src="/img/jasper.jpg"
                alt="Jasper Timmer"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mb-16">
          <SectionHeading>Skills</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <SkillTile key={skill.name} name={skill.name} level={skill.level} years={skill.years} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <SectionHeading>Work Experience</SectionHeading>
          <div className="space-y-6">
            {employers.map((job, i) => (
              <JobEntry
                key={i}
                role={job.role}
                company={job.company}
                period={job.period}
                location={job.location}
                bullets={job.bullets}
              />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <SectionHeading>Projects</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <ProjectCard
                key={i}
                title={project.title}
                company={project.company}
                period={project.period}
                description={project.description}
                bullets={project.bullets}
                tech={project.tech}
              />
            ))}
          </div>
        </section>

        {/* Career Timeline */}
        <section id="resume" className="mb-16">
          <SectionHeading>Career Timeline</SectionHeading>
          <Card className="p-6">
            <iframe
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1F5lgbMGapUAlDsawPFXRKyjkCsq8SPttOux8bDDW3Aw&font=Default&lang=en-24hr&start_at_end=true&hash_bookmark=true&initial_zoom=2&height=650"
              width="100%"
              height="650"
              style={{ border: "none" }}
              title="Career Timeline for Jasper Timmer"
            />
          </Card>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="mb-16">
          <SectionHeading>Education & Certifications</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-300 mb-4">Education</h3>
              <div className="space-y-3">
                {education.map((ed, i) => (
                  <Card key={i} className="p-4">
                    <p className="font-semibold text-white">{ed.degree}</p>
                    <p className="text-sm text-slate-400">{ed.institution} · {ed.year}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-300 mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <Card key={i} className="p-4">
                    <p className="font-semibold text-white">{cert.name}</p>
                    <p className="text-sm text-slate-400">{cert.issuer} · {cert.year}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section id="interests" className="mb-16">
          <SectionHeading>Interests & Activities</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Batavierenrace</h3>
              <p className="text-sm text-slate-400 mb-2">Radio Communications Team · University of Twente · 2008–2012</p>
              <p className="text-slate-300">
                Member of the radio communications team for one of the world&apos;s largest relay races (8,500 participants).
                Built several software systems for equipment tracking, GPS logging, and dispatch operations.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">ForensX</h3>
              <p className="text-sm text-slate-400 mb-2">Founder & Chair · Hogeschool van Amsterdam · 2008–2010</p>
              <p className="text-slate-300">
                Founded the student association ForensX for the Forensic Science bachelor programme at the Amsterdam University of Applied Sciences.
              </p>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: no errors.

- [ ] **Step 4: Build and visually verify**

Run: `npm run dev`, open `http://localhost:3000` in a browser. Compare every section against the pre-refactor screenshot (or `git stash` the change and diff visually if no screenshot taken). Confirm: nav links scroll to correct anchors, skill tiles open/close (independently — expected behavior change), job/project cards render identically, timeline iframe loads, education/cert cards render, footer year is current.

Then run: `npm run build`
Expected: static export to `out/` succeeds with no errors.

- [ ] **Step 5: Commit**

```bash
git add app/page.tsx
git commit -m "Rewire page.tsx to compose extracted components"
```

---

## Task 8: Barrel export + tsup component build

**Files:**
- Create: `components/index.ts`
- Modify: `package.json`
- Create: `tsup.config.ts`

**Interfaces:**
- Consumes: all components from Tasks 1-5
- Produces: `dist/` build output (ESM, CJS, `.d.ts`) via `npm run build:components`

- [ ] **Step 1: Create `components/index.ts`**

```tsx
export { default as Badge } from "./Badge"
export { default as SectionHeading } from "./SectionHeading"
export { default as BitbucketIcon } from "./BitbucketIcon"
export { default as Card } from "./Card"
export { default as SkillTile } from "./SkillTile"
export { default as JobEntry } from "./JobEntry"
export { default as ProjectCard } from "./ProjectCard"
export { default as SocialLinks } from "./SocialLinks"
export { default as NavHeader } from "./NavHeader"
export { default as Footer } from "./Footer"
```

- [ ] **Step 2: Install tsup**

Run: `npm install --save-dev tsup`
Expected: `tsup` added to `devDependencies` in `package.json`, `package-lock.json` updated.

- [ ] **Step 3: Create `tsup.config.ts`**

```ts
import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["components/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  outDir: "dist",
  external: ["react", "react-dom", "next"],
})
```

- [ ] **Step 4: Add `build:components` script to `package.json`**

Modify the `scripts` block in `package.json` (currently at lines 5-11) to add one entry:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "build:components": "tsup",
    "start_old": "next start",
    "start": "npx serve@latest out",
    "lint": "next lint"
  }
}
```

- [ ] **Step 5: Run the component build**

Run: `npm run build:components`
Expected: succeeds, produces `dist/index.js`, `dist/index.cjs`, `dist/index.d.ts` (or per-file equivalents depending on tsup's default splitting — verify `dist/` is non-empty and contains both `.js`/`.cjs` and `.d.ts` files for the barrel).

- [ ] **Step 6: Confirm `next build` still works unaffected**

Run: `npm run build`
Expected: static export to `out/` succeeds, unaffected by the new `dist/` output.

- [ ] **Step 7: Add `dist/` to `.gitignore`**

Check `.gitignore` for an existing `dist` entry; if absent, add `dist/` (build output, not source — matches how `out/` and `.next/` are presumably already ignored).

- [ ] **Step 8: Commit**

```bash
git add components/index.ts tsup.config.ts package.json package-lock.json .gitignore
git commit -m "Add tsup build for components package"
```

---

## Final verification

- [ ] `npx tsc --noEmit` — no errors
- [ ] `npm run lint` — no errors
- [ ] `npm run build` — static export succeeds, `out/` matches pre-refactor visual output (except SkillTile multi-open behavior)
- [ ] `npm run build:components` — `dist/` produced with all 10 components + types
- [ ] Manual browser check of `npm run dev` — every section renders correctly, nav anchors work, skill tiles toggle independently
