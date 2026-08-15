export default function TerminalFrame({
  prompt,
  children,
  className = "",
}: {
  prompt: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`border border-slate-800 rounded-md overflow-hidden bg-slate-950 ${className}`}>
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex gap-[7px]">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="font-mono-geist text-xs tracking-wide text-slate-500">{prompt}</span>
      </div>
      {children}
    </div>
  )
}
