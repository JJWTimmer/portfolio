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
