export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`bg-slate-700 rounded-lg shadow ${className}`}>
      {children}
    </div>
  )
}
