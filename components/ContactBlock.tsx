import ObfuscatedEmail from "./ObfuscatedEmail"

export default function ContactBlock({ emailEncoded }: { emailEncoded: string }) {
  return (
    <section className="container mx-auto px-6 py-20 flex flex-col gap-5">
      <span className="font-mono-geist text-xs tracking-[0.18em] text-slate-600">
        $ mail -s &quot;hello&quot;
      </span>
      <ObfuscatedEmail
        encoded={emailEncoded}
        className="font-mono-geist text-3xl sm:text-5xl font-medium tracking-tight text-white hover:text-sky-400 no-underline leading-tight break-words transition-colors"
      />
      <div className="h-[3px] w-full flex">
        <div className="flex-1 bg-amber-400" />
        <div className="flex-1 bg-sky-400" />
        <div className="flex-1 bg-emerald-400" />
      </div>
    </section>
  )
}
