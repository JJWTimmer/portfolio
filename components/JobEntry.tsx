import Card from "@/components/Card"

export default function JobEntry({
  role,
  company,
  period,
  location,
  bullets,
}: {
  role: string
  company: string
  period: string
  location: string
  bullets: string[]
}) {
  return (
    <Card className="p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <p className="text-slate-300 font-medium">{company}</p>
        </div>
        <p className="text-sm text-slate-400 mt-1 md:mt-0 md:text-right">
          {period}
          <br />
          {location}
        </p>
      </div>
      <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </Card>
  )
}
