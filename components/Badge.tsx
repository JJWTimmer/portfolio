export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-slate-600 text-slate-100 text-xs font-medium px-2.5 py-0.5 rounded">
      {children}
    </span>
  )
}
