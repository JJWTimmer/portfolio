import { SkillTile } from 'portfolio-jasper'

export function Expert() {
  return <SkillTile name="Java" level="Expert" years={12} />
}

export function Advanced() {
  return <SkillTile name="PostgreSQL" level="Advanced" years={10} />
}

export function Intermediate() {
  return <SkillTile name="Terraform" level="Intermediate" years={4} />
}
