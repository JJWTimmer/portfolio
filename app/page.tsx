"use client"

import { Github, Linkedin, Mail, ExternalLink, Info, Gitlab } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Portfolio() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const skills = [
    { name: "Java", level: "Expert", years: 10 },
    { name: "Python", level: "Advanced", years: 8 },
    { name: "Spring Boot", level: "Expert", years: 7 },
    { name: "Django", level: "Intermediate", years: 5 },
    { name: "Docker", level: "Advanced", years: 6 },
    { name: "Kubernetes", level: "Intermediate", years: 4 },
    { name: "AWS", level: "Advanced", years: 7 },
    { name: "CI/CD", level: "Expert", years: 8 },
    { name: "Agile Methodologies", level: "Expert", years: 10 }
  ]

  const toggleSkillDetails = (skillName: string) => {
    if (activeSkill === skillName) {
      setActiveSkill(null)
    } else {
      setActiveSkill(skillName)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Jasper Timmer MSc.</h1>
            <div className="flex space-x-4">
              <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="#skills" className="text-gray-600 hover:text-gray-900">Skills</Link>
              <Link href="#projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
              <Link href="#resume" className="text-gray-600 hover:text-gray-900">Resume</Link>
              <Link href="#interests" className="text-gray-600 hover:text-gray-900">Interests</Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 pt-24">
        <section id="about" className="mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Tech Lead @ Dojoo.io</h2>
              <p className="text-xl text-gray-600 mb-6">
                Passionate about creating efficient, scalable solutions and leading teams to success.
                With expertise in Java and Python, I bring a wealth of experience in software development and team leadership.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="https://github.com/jjwtimmer" className="text-gray-600 hover:text-gray-900" aria-label="GitHub Profile">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="https://gitlab.com/jjwtimmer" className="text-gray-600 hover:text-gray-900" aria-label="GitLab Profile">
                  <Gitlab className="w-6 h-6" />
                </Link>
                <Link href="https://bitbucket.org/jjwtimmer" className="text-gray-600 hover:text-gray-900" aria-label="Bitbucket Profile">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5.2 1.7C4.5 1.7 4 2.2 4 2.9c0 0.1 0 0.2 0 0.3l2.9 17.3c0.1 0.5 0.5 0.8 1 0.8h8.2c0.4 0 0.7-0.3 0.8-0.6l2.9-17.4c0.1-0.6-0.3-1.2-1-1.3c-0.1 0-0.1 0-0.2 0H5.2z" />
                    <path d="M15.8 8.7H8.2l-1 5.6h9.6L15.8 8.7z" />
                  </svg>
                </Link>
                <Link href="https://linkedin.com/in/jjwtimmer" className="text-gray-600 hover:text-gray-900" aria-label="LinkedIn Profile">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="mailto:portfolio@jspr.dev" className="text-gray-600 hover:text-gray-900" aria-label="Email">
                  <Mail className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <Image
                src="/img/jasper.jpg?height=300&width=300"
                alt="Jasper Timmer"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="relative">
                <button
                  className="w-full bg-white p-4 rounded-lg shadow text-left hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleSkillDetails(skill.name)}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-800">{skill.name}</span>
                    <Info className="w-5 h-5 text-gray-500" />
                  </div>
                </button>
                {activeSkill === skill.name && (
                  <div className="absolute z-10 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-4 mt-2">
                    <p className="text-sm text-gray-600">Level: {skill.level}</p>
                    <p className="text-sm text-gray-600">Experience: {skill.years} years</p>
                    <div className="mt-2 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${skill.level === 'Expert' ? 100 : skill.level === 'Advanced' ? 75 : 50}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-commerce Platform",
                description: "Developed a scalable e-commerce platform using Java and Spring Boot, handling millions of transactions daily.",
                tech: ["Java", "Spring Boot", "PostgreSQL", "Redis"],
                company: "TechCorp Inc.",
                date: "Jan 2020 - Dec 2021",
                link: "https://github.com/johndoe/ecommerce-platform"
              },
              {
                title: "Data Analysis Tool",
                description: "Created a Python-based data analysis tool for processing and visualizing large datasets from scientific experiments.",
                tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
                company: "ScienceLab Co.",
                date: "Mar 2018 - Nov 2019",
                link: "https://github.com/johndoe/data-analysis-tool"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm text-gray-500 mb-2">
                  {project.company} | {project.date}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href={project.link} className="text-blue-600 hover:text-blue-800 flex items-center">
                  View Source <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Career Timeline</h2>
          <div className="w-full bg-white p-6 rounded-lg shadow">
            <iframe 
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1F5lgbMGapUAlDsawPFXRKyjkCsq8SPttOux8bDDW3Aw&font=Default&lang=en-24hr&start_at_end=true&hash_bookmark=true&initial_zoom=2&height=650" 
              width="100%" 
              height="650" 
              style={{ border: "none" }}
              title="Career Timeline for Jasper Timmer"
            ></iframe>
          </div>
        </section>

        <section id="interests" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nature</h3>
              <p className="text-gray-600">
                Avid hiker and nature photographer. Passionate about conservation and exploring the great outdoors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Science</h3>
              <p className="text-gray-600">
                Fascinated by the latest developments in physics and astronomy. Regular attendee of science lectures and workshops.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Jasper Timmer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}