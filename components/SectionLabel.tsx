export default function SectionLabel({
  index,
  title,
  accent = "text-slate-400",
  meta,
}: {
  index: string
  title: string
  accent?: string
  meta?: string
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-4 mb-8">
      <span className={`font-mono-geist text-xs tracking-[0.18em] ${accent}`}>
        {index} / {title.toUpperCase()}
      </span>
      <span className="flex-1 min-w-[40px] h-px bg-slate-800" />
      {meta ? (
        <span className="font-mono-geist text-xs tracking-[0.1em] text-slate-600">{meta}</span>
      ) : null}
    </div>
  )
}
