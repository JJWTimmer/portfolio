import Image from 'next/image'
import { LinkedinIcon as LinkedIn, GithubIcon as GitHub, GitlabIcon as GitLab } from 'lucide-react'
import BackgroundTexture from './components/BackgroundTexture'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Script id="schema-script" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jasper Timmer",
          "url": "https://www.jaspertimmer.nl",
          "sameAs": [
            "https://www.linkedin.com/in/jjwtimmer",
            "https://github.com/jjwtimmer",
            "https://gitlab.com/jjwtimmer"
          ],
          "jobTitle": "Tech lead",
          "description": "Gets excited from connecting dots between people, teams and tech.",
        })
      }} />
      <div className="min-h-screen bg-slate-900">
        <BackgroundTexture />
        <header className="w-full bg-slate-800 py-4 sm:py-6">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">Jasper Timmer</h1>
          </div>
        </header>

        <main className="container mx-auto px-4 py-6 sm:py-8">
          <section className="mb-8 sm:mb-12 flex flex-col md:flex-row items-center justify-between bg-white bg-opacity-10 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
              <Image
                  src="/img/jasper.jpg?height=200&width=200"
                  alt="Jasper Timmer - Tech lead"
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-orange-400 shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 text-white">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Hello, I&apos;m Jasper</h2>
              <p className="text-base sm:text-xl mb-6">
                <ul>
                  <li>Natural helicopter-view on the situation.</li>
                  <li>Always on the lookout for new tech, but realistic in what will work long term.</li>
                  <li>Gets excited from connecting dots between people, teams and tech.</li>
                </ul>
              </p>
              <nav className="flex flex-wrap justify-center sm:justify-start gap-4" aria-label="Social media links">
                <a href="https://www.linkedin.com/in/jjwtimmer" target="_blank" rel="noopener noreferrer"
                   className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300">
                  <LinkedIn className="mr-2" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://github.com/jjwtimmer" target="_blank" rel="noopener noreferrer" className="bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-2 px-4 rounded-full flex items-center transition duration-300">
                  <GitHub className="mr-2" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
                <a href="https://gitlab.com/jjwtimmer" target="_blank" rel="noopener noreferrer" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-300">
                  <GitLab className="mr-2" aria-hidden="true" />
                  <span>GitLab</span>
                </a>
              </nav>
            </div>
          </section>

          <section className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 sm:mb-6">My Journey</h2>
            <div
                className="w-full h-[400px] sm:h-[600px] bg-white bg-opacity-10 rounded-lg overflow-hidden backdrop-blur-sm">
              <iframe
                  src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1F5lgbMGapUAlDsawPFXRKyjkCsq8SPttOux8bDDW3Aw&font=Default&lang=en-24hr&start_at_end=true&is_embed=true&initial_zoom=2&height=600&theme=https://jaspertimmer.nl/css/theme.css"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allow="fullscreen"
                  title="Jasper Timmer's Professional Journey Timeline"
              ></iframe>
            </div>
          </section>
        </main>

        <footer className="text-center p-4 sm:p-6 text-white">
          <p>&copy; {new Date().getFullYear()} Jasper Timmer. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
