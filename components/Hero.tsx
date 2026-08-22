import Image from "next/image"
import ObfuscatedEmail from "./ObfuscatedEmail"
import SocialLinks from "./SocialLinks"
import TerminalFrame from "./TerminalFrame"
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

        <div className="w-full max-w-[300px] justify-self-start md:justify-self-end">
          <TerminalFrame prompt="./portrait.jpg">
            <Image
              src="/img/jasper.jpg"
              alt={profile.name}
              width={300}
              height={380}
              priority
              className="w-full h-[380px] object-cover grayscale sepia-[70%] saturate-[2.2] contrast-[1.1]"
            />
          </TerminalFrame>
        </div>
      </div>
    </header>
  )
}
