import { employers } from "@/lib/data"
import JobEntry from "./JobEntry"

const ACCENTS = [
  { text: "text-emerald-400", border: "border-emerald-400" },
  { text: "text-amber-400", border: "border-amber-400" },
  { text: "text-sky-400", border: "border-sky-400" },
]

function startYear(period: string) {
  const m = period.match(/\b(19|20)\d{2}\b/)
  return m ? m[0] : ""
}

/** Zig-zag band: year stroke numeral alternates sides, rule follows it. */
export default function ExperienceBand() {
  return (
    <div className="flex flex-col gap-11">
      {employers.map((job, i) => {
        const accent = ACCENTS[i % ACCENTS.length]
        const left = i % 2 === 0
        const year = (
          <div
            className={`font-mono-geist text-[62px] leading-[0.9] font-medium tracking-tighter ${accent.text} opacity-90 ${left ? "md:text-right" : ""}`}
            style={{ color: "transparent", WebkitTextStroke: "1px currentColor" }}
            aria-hidden="true"
          >
            <span className={accent.text}>{startYear(job.period)}</span>
          </div>
        )
        const entry = (
          <div className={left ? `md:border-l-2 md:pl-6 ${accent.border}` : `md:border-r-2 md:pr-6 ${accent.border}`}>
            <JobEntry
              role={job.role}
              company={job.company}
              period={job.period}
              location={job.location}
              bullets={job.bullets}
            />
          </div>
        )
        return (
          <div
            key={i}
            className={`grid gap-x-7 items-start ${left ? "md:grid-cols-[132px_minmax(0,1fr)]" : "md:grid-cols-[minmax(0,1fr)_132px]"}`}
          >
            {left ? year : entry}
            {left ? entry : year}
          </div>
        )
      })}
    </div>
  )
}
