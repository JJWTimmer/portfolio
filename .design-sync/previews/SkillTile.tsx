import { SkillTile } from 'portfolio-jasper'

// SkillTile takes the whole Skill object (name/level/years/layer) — `layer`
// selects the accent color, so a tile without it throws. The dark wrapper is
// required: the level word and definition are near-white on transparent.
const wrap = { background: '#0f172a', padding: 24, display: 'flex' } as const

export function Expert() {
  return (
    <div style={wrap}>
      <SkillTile skill={{ name: 'Java', level: 'Expert', years: 12, layer: 'runtime' }} />
    </div>
  )
}

export function Advanced() {
  return (
    <div style={wrap}>
      <SkillTile skill={{ name: 'PostgreSQL', level: 'Advanced', years: 10, layer: 'data' }} />
    </div>
  )
}

export function Intermediate() {
  return (
    <div style={wrap}>
      <SkillTile skill={{ name: 'Terraform', level: 'Intermediate', years: 4, layer: 'delivery' }} />
    </div>
  )
}
