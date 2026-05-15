"use client"

import { Github, Linkedin, Mail, ExternalLink, Info, Gitlab } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const email = atob("amFzcGVyQHRpbW1lci5pbQ==")

  const skills = [
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
  ]

  const employers = [
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

  const projects = [
    {
      title: "DevOps Engineer — Belastingdienst",
      company: "Dojoo.io",
      period: "April 2025 – Present",
      description: "Greenfield system for new tax legislation — designed to become a reusable blueprint for future regulatory implementations across the organisation.",
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
      description: "Full ownership of architecture and delivery on a 3-year Identity & Access Management platform for a Dutch government ministry — end-to-end, with a lean team of 4.",
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
      description: "Database migration and integration re-architecture for a critical operational data platform at Amsterdam Airport Schiphol.",
      bullets: [
        "Assessed migration path from end-of-life Tamino XML store to MarkLogic; defined the integration and data model approach.",
        "Refactored the Java EE application layer to cleanly target the new store without breaking existing consumers.",
        "Designed and automated a high-availability MarkLogic cluster deployment with Ansible.",
      ],
      tech: ["Java 8", "MarkLogic", "Ansible", "XML", "JavaEE"],
    },
  ]

  const education = [
    { degree: "MSc, Software Engineering", institution: "University of Amsterdam", year: "2013" },
    { degree: "Pre-master, Computer Science", institution: "University of Amsterdam", year: "2011" },
    { degree: "BASc, Forensic Science", institution: "Amsterdam University of Applied Sciences", year: "2010" },
    { degree: "Propaedeutic, Computer Science", institution: "Amsterdam University of Applied Sciences", year: "2008" },
  ]

  const certifications = [
    { name: "Splunk4Rookies", issuer: "Splunk", year: "2024" },
    { name: "Beginnen met Leidinggeven", issuer: "Kenneth Smit Direct", year: "2023" },
    { name: "Professional Scrum Master I", issuer: "Scrum.org", year: "2023" },
    { name: "Axway APIM Developer Track", issuer: "Axway", year: "2022" },
    { name: "Certified ScrumMaster (CSM)", issuer: "Scrum Alliance", year: "2019" },
  ]

  const toggleSkillDetails = (skillName: string) => {
    setActiveSkill(activeSkill === skillName ? null : skillName)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
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
              <div className="flex flex-wrap gap-4">
                <Link href="https://github.com/jjwtimmer" className="text-slate-400 hover:text-white" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="https://gitlab.com/jjwtimmer" className="text-slate-400 hover:text-white" aria-label="GitLab">
                  <Gitlab className="w-6 h-6" />
                </Link>
                <Link href="https://bitbucket.org/jjwtimmer" className="text-slate-400 hover:text-white" aria-label="Bitbucket">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5.2 1.7C4.5 1.7 4 2.2 4 2.9c0 0.1 0 0.2 0 0.3l2.9 17.3c0.1 0.5 0.5 0.8 1 0.8h8.2c0.4 0 0.7-0.3 0.8-0.6l2.9-17.4c0.1-0.6-0.3-1.2-1-1.3c-0.1 0-0.1 0-0.2 0H5.2z" />
                    <path d="M15.8 8.7H8.2l-1 5.6h9.6L15.8 8.7z" />
                  </svg>
                </Link>
                <Link href="https://linkedin.com/in/jjwtimmer" className="text-slate-400 hover:text-white" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href={`mailto:${email}`} className="text-slate-400 hover:text-white" aria-label="Email">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
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
          <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="relative">
                <button
                  className="w-full bg-slate-700 p-4 rounded-lg shadow text-left hover:bg-slate-600 transition-colors duration-200"
                  onClick={() => toggleSkillDetails(skill.name)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-white">{skill.name}</span>
                    <Info className="w-5 h-5 text-slate-400" />
                  </div>
                </button>
                {activeSkill === skill.name && (
                  <div className="absolute z-10 w-full bg-slate-600 border border-slate-500 rounded-lg shadow-lg p-4 mt-2">
                    <p className="text-sm text-slate-300">Level: {skill.level}</p>
                    <p className="text-sm text-slate-300">Experience: {skill.years} years</p>
                    <div className="mt-2 bg-slate-500 rounded-full h-2.5">
                      <div
                        className="bg-blue-400 h-2.5 rounded-full"
                        style={{ width: `${skill.level === "Expert" ? 100 : skill.level === "Advanced" ? 75 : 50}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Work Experience</h2>
          <div className="space-y-6">
            {employers.map((job, i) => (
              <div key={i} className="bg-slate-700 p-6 rounded-lg shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-slate-300 font-medium">{job.company}</p>
                  </div>
                  <p className="text-sm text-slate-400 mt-1 md:mt-0 md:text-right">
                    {job.period}<br />{job.location}
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-slate-700 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-3">{project.company} · {project.period}</p>
                <p className="text-slate-300 mb-3">{project.description}</p>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm mb-4">
                  {project.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-slate-600 text-slate-100 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Timeline */}
        <section id="resume" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Career Timeline</h2>
          <div className="w-full bg-slate-700 p-6 rounded-lg shadow">
            <iframe
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1F5lgbMGapUAlDsawPFXRKyjkCsq8SPttOux8bDDW3Aw&font=Default&lang=en-24hr&start_at_end=true&hash_bookmark=true&initial_zoom=2&height=650"
              width="100%"
              height="650"
              style={{ border: "none" }}
              title="Career Timeline for Jasper Timmer"
            />
          </div>
        </section>

        {/* Education & Certifications */}
        <section id="education" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Education & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-300 mb-4">Education</h3>
              <div className="space-y-3">
                {education.map((ed, i) => (
                  <div key={i} className="bg-slate-700 p-4 rounded-lg shadow">
                    <p className="font-semibold text-white">{ed.degree}</p>
                    <p className="text-sm text-slate-400">{ed.institution} · {ed.year}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-300 mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="bg-slate-700 p-4 rounded-lg shadow">
                    <p className="font-semibold text-white">{cert.name}</p>
                    <p className="text-sm text-slate-400">{cert.issuer} · {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section id="interests" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Interests & Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white mb-2">Batavierenrace</h3>
              <p className="text-sm text-slate-400 mb-2">Radio Communications Team · University of Twente · 2008–2012</p>
              <p className="text-slate-300">
                Member of the radio communications team for one of the world&apos;s largest relay races (8,500 participants).
                Built several software systems for equipment tracking, GPS logging, and dispatch operations.
              </p>
            </div>
            <div className="bg-slate-700 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-white mb-2">ForensX</h3>
              <p className="text-sm text-slate-400 mb-2">Founder & Chair · Hogeschool van Amsterdam · 2008–2010</p>
              <p className="text-slate-300">
                Founded the student association ForensX for the Forensic Science bachelor programme at the Amsterdam University of Applied Sciences.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Jasper Timmer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
