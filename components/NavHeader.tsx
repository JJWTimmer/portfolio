export default function NavHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Jasper Timmer MSc.</h1>
          <div className="flex space-x-4">
            <a href="#about" className="text-slate-300 hover:text-white">About</a>
            <a href="#skills" className="text-slate-300 hover:text-white">Skills</a>
            <a href="#experience" className="text-slate-300 hover:text-white">Experience</a>
            <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
            <a href="#resume" className="text-slate-300 hover:text-white">Timeline</a>
            <a href="#education" className="text-slate-300 hover:text-white">Education</a>
            <a href="#interests" className="text-slate-300 hover:text-white">Activities</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
