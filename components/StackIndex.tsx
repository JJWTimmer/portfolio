import { skills, LAYERS, LEVELS, type Layer } from "@/lib/data"
import LevelSegments from "./LevelSegments"
import LevelLegend from "./LevelLegend"
import SectionLabel from "./SectionLabel"

const ORDER: Layer[] = ["tech", "platform", "skill"]

export default function StackIndex() {
  return (
    <section className="bg-slate-950 border-y border-slate-800">
      <div className="container mx-auto px-6 py-11">
        <SectionLabel index="00" title="Stack index" />
        <LevelLegend />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ORDER.map((layer) => {
            const group = skills.filter((s) => s.layer === layer)
            const meta = LAYERS[layer]
            return (
              <div key={layer} className="flex flex-col">
                <div className={`flex items-center gap-2.5 pb-2.5 mb-2 border-b-2 ${meta.border}`}>
                  <span className={`font-mono-geist text-[11px] tracking-[0.16em] uppercase ${meta.text}`}>
                    {meta.label}
                  </span>
                  <span className="font-mono-geist text-[11px] text-slate-600">
                    {String(group.length).padStart(2, "0")}
                  </span>
                </div>

                {group.map((s) => (
                  <div
                    key={s.name}
                    title={`${s.level} — ${LEVELS[s.level].definition} (${s.years} years)`}
                    className="flex items-center justify-between gap-3.5 py-[7px] pr-2 border-b border-slate-900 hover:bg-slate-900/60 cursor-help"
                  >
                    <span className="font-mono-geist text-[13px] text-slate-200">{s.name}</span>
                    <span className="flex items-center gap-2.5">
                      <span className="font-mono-geist text-[10px] tracking-[0.1em] uppercase text-slate-500">
                        {s.years} yrs
                      </span>
                      <LevelSegments level={s.level} bg={meta.bg} />
                    </span>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
