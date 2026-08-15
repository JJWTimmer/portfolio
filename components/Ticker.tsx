export default function Ticker({ items }: { items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="border-y border-slate-800 bg-slate-950 overflow-hidden py-3.5">
      <div className="ticker-track flex w-max">
        {doubled.map((label, i) => (
          <span
            key={i}
            className="font-mono-geist text-xs tracking-[0.16em] uppercase text-slate-600 px-[22px] whitespace-nowrap"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
