export type Layer = "runtime" | "data" | "delivery"

export type Skill = {
  name: string
  level: "Expert" | "Advanced" | "Intermediate"
  years: number
  layer: Layer
  /** Rendered as a large tile in 01 / SKILLS. Everything else lives in 00 / STACK INDEX. */
  featured?: boolean
}

/** The three semantic accent layers. Tailwind classes, not hex — keeps purge happy. */
export const LAYERS: Record<Layer, { label: string; text: string; bg: string; border: string }> = {
  runtime:  { label: "runtime",        text: "text-amber-400",   bg: "bg-amber-400",   border: "border-amber-400" },
  data:     { label: "data & platform", text: "text-sky-400",     bg: "bg-sky-400",     border: "border-sky-400" },
  delivery: { label: "delivery",       text: "text-emerald-400", bg: "bg-emerald-400", border: "border-emerald-400" },
}

/** Ordinal scale — 3 segments, not a percentage. Definitions are shown, not implied. */
export const LEVELS = {
  Expert: {
    filled: 3,
    definition: "I set the direction others follow — architecture calls, deep debugging, mentoring on it.",
  },
  Advanced: {
    filled: 2,
    definition: "I ship it to production unsupervised and know its failure modes.",
  },
  Intermediate: {
    filled: 1,
    definition: "Productive and delivering with it, still reaching for the docs at the edges.",
  },
} as const

export const skills: Skill[] = [
  { name: "Java", level: "Expert", years: 12, layer: "runtime", featured: true },
  { name: "Spring Boot", level: "Expert", years: 8, layer: "runtime", featured: true },
  { name: "PostgreSQL", level: "Advanced", years: 10, layer: "data", featured: true },
  { name: "Python", level: "Advanced", years: 8, layer: "runtime" },
  { name: "Scala", level: "Intermediate", years: 3, layer: "runtime" },
  { name: "MongoDB", level: "Advanced", years: 5, layer: "data" },
  { name: "AWS", level: "Advanced", years: 7, layer: "data" },
  { name: "Kubernetes / OpenShift", level: "Intermediate", years: 5, layer: "data" },
  { name: "Linux", level: "Advanced", years: 10, layer: "data" },
  { name: "CI/CD", level: "Expert", years: 10, layer: "delivery" },
  { name: "Git", level: "Expert", years: 12, layer: "delivery" },
  { name: "Agile / Scrum", level: "Expert", years: 12, layer: "delivery" },
  { name: "Docker / Podman", level: "Advanced", years: 8, layer: "delivery" },
  { name: "Ansible", level: "Advanced", years: 6, layer: "delivery" },
  { name: "Jenkins", level: "Advanced", years: 7, layer: "delivery" },
  { name: "Terraform", level: "Intermediate", years: 4, layer: "delivery" },
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

/**
 * Base64 of the contact address — kept encoded so the plaintext never lands in
 * the statically exported HTML. Decode client-side only (see ObfuscatedEmail).
 * To change: btoa("new@address.tld") in a browser console.
 */
export const EMAIL_ENCODED = "bWFpbEBqYXNwZXJ0aW1tZXIubmw="
