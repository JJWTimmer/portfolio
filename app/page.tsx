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
