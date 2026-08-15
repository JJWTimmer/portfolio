import { LEVELS } from "@/lib/data"

/** 3-segment ordinal indicator. `bg` is the Tailwind fill class for the active layer. */
export default function LevelSegments({
  level,
  bg,
  size = "sm",
}: {
  level?: keyof typeof LEVELS | null
  bg: string
  size?: "sm" | "lg"
}) {
  const filled = level ? LEVELS[level].filled : 0
  const dims = size === "lg" ? "h-1.5 w-[30px]" : "h-[5px] w-3"
  return (
    <span className={`flex ${size === "lg" ? "gap-1.5" : "gap-[3px]"}`}>
      {[0, 1, 2].map((i) => (
        <span key={i} className={`${dims} ${i < filled ? bg : "bg-slate-800"}`} />
      ))}
    </span>
  )
}
