import Image from "next/image"
import ObfuscatedEmail from "./ObfuscatedEmail"
import SocialLinks from "./SocialLinks"
import { profile } from "@/lib/data"

export default function Hero({ emailEncoded }: { emailEncoded: string }) {
  return (
    <header id="about" className="container mx-auto px-6 pt-28 pb-14">
      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_300px] items-start">
        <div>
          <span className="font-mono-geist text-xs tracking-[0.18em] text-amber-400">
            {profile.role}
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight text-balance">
            {profile.headline}
          </h1>
          <p className="mt-4 font-mono-geist text-sm text-slate-500">
            {profile.location} ·{" "}
            <ObfuscatedEmail
              encoded={emailEncoded}
              className="text-slate-500 hover:text-sky-400 no-underline transition-colors"
            />
          </p>
          {profile.bio.map((paragraph, i) => (
            <p key={i} className={`text-lg text-slate-300 max-w-[62ch] text-pretty ${i === 0 ? "mt-6" : "mt-4"}`}>
              {paragraph}
            </p>
          ))}
          <div className="mt-7">
            <SocialLinks
              github={profile.socials.github}
              gitlab={profile.socials.gitlab}
              bitbucket={profile.socials.bitbucket}
              linkedin={profile.socials.linkedin}
              emailEncoded={emailEncoded}
            />
          </div>
        </div>

        <div className="relative w-full max-w-[300px] justify-self-start md:justify-self-end">
          <div className="absolute -left-3 -bottom-3 w-24 h-24 bg-amber-400" aria-hidden="true" />
          <Image
            src="/img/jasper.jpg"
            alt={profile.name}
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
