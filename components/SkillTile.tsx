import { LAYERS, LEVELS, type Skill } from "@/lib/data"
import LevelSegments from "./LevelSegments"

/**
 * Large signature-skill tile. The level word carries its definition inline —
 * "Advanced" should never need a legend elsewhere on the page to be understood.
 */
export default function SkillTile({ skill, offset = 0 }: { skill: Skill; offset?: number }) {
  const meta = LAYERS[skill.layer]
  return (
    <div
      className="border-r border-t border-b border-slate-800 px-6 pt-8 pb-7 flex flex-col gap-3.5"
      style={{ marginTop: offset }}
    >
      <div className={`font-mono-geist text-[96px] leading-[0.86] font-medium tracking-tighter ${meta.text}`}>
        {skill.years}
      </div>
      <div className="text-2xl font-bold text-white tracking-tight">{skill.name}</div>
      <LevelSegments level={skill.level} bg={meta.bg} size="lg" />
      <div className="font-mono-geist text-[11px] tracking-[0.16em] uppercase text-slate-200">
        {skill.level}
      </div>
      <div className="font-mono-geist text-[11px] leading-relaxed text-slate-400 text-pretty max-w-[30ch]">
        {LEVELS[skill.level].definition}
      </div>
    </div>
  )
}
