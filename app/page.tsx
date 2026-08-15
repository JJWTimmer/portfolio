import Card from "@/components/Card"
import ContactBlock from "@/components/ContactBlock"
import ExperienceBand from "@/components/ExperienceBand"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import NavHeader from "@/components/NavHeader"
import ProjectCard from "@/components/ProjectCard"
import SectionLabel from "@/components/SectionLabel"
import SkillTile from "@/components/SkillTile"
import StackIndex from "@/components/StackIndex"
import TerminalFrame from "@/components/TerminalFrame"
import Ticker from "@/components/Ticker"
import TimelineArchive from "@/components/TimelineArchive"
import { skills, projects, education, certifications, EMAIL_ENCODED } from "@/lib/data"

export default function Portfolio() {
  const featured = skills.filter((s) => s.featured)
  const [lead, ...rest] = projects

  return (
    <div className="min-h-screen bg-slate-900">
      <NavHeader />

      <Hero emailEncoded={EMAIL_ENCODED} />

      <Ticker items={skills.map((s) => s.name)} />

      <StackIndex />

      <div className="blueprint-grid">
        {/* Skills */}
        <section id="skills" className="container mx-auto px-6 pt-20 pb-14">
          <SectionLabel index="01" title="Skills" accent="text-amber-400" meta="years in anger" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 border-l border-slate-800">
            {featured.map((skill, i) => (
              <SkillTile key={skill.name} skill={skill} offset={i * 40} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="relative overflow-hidden bg-slate-950 border-y border-slate-800 py-20">
          <div
            className="pointer-events-none select-none absolute left-1/2 top-8 -translate-x-1/2 w-[1600px] text-center font-mono-geist text-[168px] font-bold leading-none tracking-tighter"
            style={{ color: "transparent", WebkitTextStroke: "1px #1e293b" }}
            aria-hidden="true"
          >
            BELASTINGDIENST
          </div>

          <div className="relative container mx-auto px-6 max-w-5xl">
            <SectionLabel index="02" title="Projects" accent="text-sky-400" />
            <TerminalFrame prompt="~/projects/belastingdienst — 02 / featured">
              <div className="p-1">
                <ProjectCard
                  title={lead.title}
                  company={lead.company}
                  period={lead.period}
                  description={lead.description}
                  bullets={lead.bullets}
                  tech={lead.tech}
                />
              </div>
            </TerminalFrame>

            <div className="grid gap-8 md:grid-cols-2 mt-8">
              {rest.map((project, i) => (
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
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="container mx-auto px-6 pt-20 pb-10">
          <SectionLabel index="03" title="Experience" accent="text-emerald-400" />
          <ExperienceBand />
        </section>

        {/* Career timeline archive */}
        <section id="resume" className="container mx-auto px-6 pt-10 pb-4">
          <TimelineArchive />
          <a
            href="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1F5lgbMGapUAlDsawPFXRKyjkCsq8SPttOux8bDDW3Aw&font=Default&lang=en-24hr&start_at_end=true&initial_zoom=2&height=650"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3.5 font-mono-geist text-xs tracking-wide text-slate-600 hover:text-sky-400 no-underline transition-colors"
          >
            open in new tab ↗
          </a>
        </section>

        {/* Education & certifications */}
        <section id="education" className="container mx-auto px-6 pt-20 pb-10">
          <SectionLabel index="05" title="Education &amp; certifications" accent="text-sky-400" />
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-mono-geist text-[11px] tracking-[0.16em] uppercase text-slate-500 mb-4">Education</h3>
              <div className="space-y-3">
                {education.map((ed, i) => (
                  <Card key={i} className="p-4">
                    <p className="font-semibold text-white">{ed.degree}</p>
                    <p className="font-mono-geist text-xs text-slate-400 mt-1">
                      {ed.institution} · {ed.year}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-mono-geist text-[11px] tracking-[0.16em] uppercase text-slate-500 mb-4">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <Card key={i} className="p-4">
                    <p className="font-semibold text-white">{cert.name}</p>
                    <p className="font-mono-geist text-xs text-slate-400 mt-1">
                      {cert.issuer} · {cert.year}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interests */}
        <section id="interests" className="container mx-auto px-6 pt-10 pb-10">
          <SectionLabel index="06" title="Activities" accent="text-amber-400" />
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Performance Management Tool</h3>
              <p className="font-mono-geist text-xs text-slate-500 mb-3">
                Personal · Ongoing
              </p>
              <p className="text-slate-300 text-pretty">
                Building a lightweight performance management tool for team leads —
                scoped, built, then paused pending real user feedback before pushing
                further. Not every side project needs to ship; some need to sit and
                be tested against actual use first.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Self-Hosted Infrastructure</h3>
              <p className="font-mono-geist text-xs text-slate-500 mb-3">
                Personal · Ongoing
              </p>
              <p className="text-slate-300 text-pretty">
                Run a home lab covering email (Soverin + PGP), DNS filtering,
                monitoring (ELK), password management (Vaultwarden), and workflow
                automation (n8n) on a VPS with Tailscale networking. Where the
                architecture opinions get tested before they reach client work.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Cooking & Gardening</h3>
              <p className="font-mono-geist text-xs text-slate-500 mb-3">
                Personal · Ongoing
              </p>
              <p className="text-slate-300 text-pretty">
                Kitchen and garden as the other systems I maintain — one with
                recipes instead of runbooks, the other with a lot more waiting
                for feedback loops to close.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Batavierenrace</h3>
              <p className="font-mono-geist text-xs text-slate-500 mb-3">
                Radio Communications Team · University of Twente · 2008–2012
              </p>
              <p className="text-slate-300 text-pretty">
                Member of the radio communications team for one of the world&apos;s largest relay races
                (8,500 participants). Built several software systems for equipment tracking, GPS logging,
                and dispatch operations.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">ForensX</h3>
              <p className="font-mono-geist text-xs text-slate-500 mb-3">
                Founder &amp; Chair · Hogeschool van Amsterdam · 2008–2010
              </p>
              <p className="text-slate-300 text-pretty">
                Founded the student association ForensX for the Forensic Science bachelor programme at the
                Amsterdam University of Applied Sciences.
              </p>
            </Card>
          </div>
        </section>

        <ContactBlock emailEncoded={EMAIL_ENCODED} />
      </div>

      <Footer />
    </div>
  )
}
