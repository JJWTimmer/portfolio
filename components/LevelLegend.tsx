import { LEVELS } from "@/lib/data"

const ENTRIES: { label: string; filled: number; definition: string }[] = [
  { label: "Expert", filled: 3, definition: LEVELS.Expert.definition },
  { label: "Advanced", filled: 2, definition: LEVELS.Advanced.definition },
  { label: "Intermediate", filled: 1, definition: LEVELS.Intermediate.definition },
  { label: "In use", filled: 0, definition: "Part of the daily stack, not self-rated — ask me and I'll be straight about it." },
]

export default function LevelLegend() {
  return (
    <div className="grid gap-x-8 gap-y-2.5 sm:grid-cols-2 rounded border border-slate-800 bg-slate-900/60 px-[18px] py-4 mb-6">
      {ENTRIES.map((e) => (
        <div key={e.label} className="flex items-start gap-3">
          <span className="flex gap-[3px] pt-[5px] shrink-0">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-[5px] w-3 ${i < e.filled ? "bg-slate-400" : e.filled === 0 ? "bg-slate-800" : "bg-slate-700"}`}
              />
            ))}
          </span>
          <span className="font-mono-geist text-[11px] leading-relaxed text-slate-400 text-pretty">
            <span className="text-slate-200 tracking-[0.12em] uppercase">{e.label}</span>
            <br />
            {e.definition}
          </span>
        </div>
      ))}
    </div>
  )
}
