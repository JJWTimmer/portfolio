import Image from "next/image"
import ObfuscatedEmail from "./ObfuscatedEmail"
import SocialLinks from "./SocialLinks"

export default function Hero({ emailEncoded }: { emailEncoded: string }) {
  return (
    <header id="about" className="container mx-auto px-6 pt-28 pb-14">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_300px] items-start">
        <div>
          <span className="font-mono-geist text-xs tracking-[0.18em] text-amber-400">
            SOLUTION ARCHITECT &amp; TECH LEAD
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight text-balance">
            Helicopter view on the domain, tech landscape, security and teams.
          </h1>
          <p className="mt-4 font-mono-geist text-sm text-slate-500">
            Zwolle, Netherlands ·{" "}
            <ObfuscatedEmail
              encoded={emailEncoded}
              className="text-slate-500 hover:text-sky-400 no-underline transition-colors"
            />
          </p>
          <p className="mt-6 text-lg text-slate-300 max-w-[62ch] text-pretty">
            Software engineer turning architect with 13+ years building complex, integration-heavy systems
            for product companies and government clients. I stay hands-on — allthough my assistant helps me keep my overview 🤫.
          </p>
          <p className="mt-4 text-lg text-slate-300 max-w-[62ch] text-pretty">
            Everything is connected. Business value and fast change, modern tech versus maintainability. Scalability, security. The world is changing and AI/LLMs are here to stay.
          </p>
          <div className="mt-7">
            <SocialLinks
              github="https://github.com/jjwtimmer"
              gitlab="https://gitlab.com/jjwtimmer"
              bitbucket="https://bitbucket.org/jjwtimmer"
              linkedin="https://linkedin.com/in/jjwtimmer"
              emailEncoded={emailEncoded}
            />
          </div>
        </div>

        <div className="relative w-full max-w-[300px] justify-self-start md:justify-self-end">
          <div className="absolute -left-3 -bottom-3 w-24 h-24 bg-amber-400" aria-hidden="true" />
          <Image
            src="/img/jasper.jpg"
            alt="Jasper Timmer"
            width={300}
            height={380}
            priority
            className="relative w-full h-[380px] object-cover grayscale contrast-[1.05] border border-slate-800"
          />
          <span className="absolute -left-3.5 bottom-6 origin-bottom-left -rotate-90 font-mono-geist text-[10px] tracking-[0.24em] uppercase text-slate-500">
            ./portrait.jpg
          </span>
        </div>
      </div>
    </header>
  )
}
