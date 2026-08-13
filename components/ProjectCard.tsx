import Card from "@/components/Card"
import Badge from "@/components/Badge"

export default function ProjectCard({
  title,
  company,
  period,
  description,
  bullets,
  tech,
}: {
  title: string
  company: string
  period: string
  description: string
  bullets: string[]
  tech: string[]
}) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      <p className="text-sm text-slate-400 mb-3">
        {company} · {period}
      </p>
      <p className="text-slate-300 mb-3">{description}</p>
      <ul className="list-disc list-inside space-y-1 text-slate-300 text-sm mb-4">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </Card>
  )
}
