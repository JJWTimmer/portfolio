"use client"

import Link from "next/link"
import { useState } from "react"

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Timeline" },
  { href: "#education", label: "Education" },
  { href: "#interests", label: "Activities" },
]

export default function NavHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center gap-4">
          <Link href="#about" className="text-lg sm:text-2xl font-bold text-white whitespace-nowrap shrink-0 hover:text-amber-400 transition-colors">
            Jasper Timmer MSc
          </Link>

          <div className="hidden md:flex space-x-4">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-slate-300 hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden text-slate-300 hover:text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden flex flex-col pt-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-slate-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
