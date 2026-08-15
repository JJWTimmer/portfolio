import { LevelSegments } from 'portfolio-jasper'

// A 3-segment ordinal bar, ~5px tall — the generated preview renders it alone
// on white, which reads as blank. Shown here at both sizes, on the dark
// background it is designed for, with the filled segments actually colored
// (`bg` is the Tailwind fill class for the owning layer).
const row = {
  display: 'flex',
  alignItems: 'center',
  gap: 16,
  color: '#e2e8f0',
  fontFamily: 'ui-monospace, monospace',
  fontSize: 11,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
} as const

export function Sizes() {
  return (
    <div style={{ background: '#0f172a', padding: 24, display: 'grid', gap: 14 }}>
      <div style={row}>
        <span style={{ width: 110 }}>Expert</span>
        <LevelSegments level="Expert" bg="bg-amber-400" />
        <LevelSegments level="Expert" bg="bg-amber-400" size="lg" />
      </div>
      <div style={row}>
        <span style={{ width: 110 }}>Advanced</span>
        <LevelSegments level="Advanced" bg="bg-sky-400" />
        <LevelSegments level="Advanced" bg="bg-sky-400" size="lg" />
      </div>
      <div style={row}>
        <span style={{ width: 110 }}>Intermediate</span>
        <LevelSegments level="Intermediate" bg="bg-emerald-400" />
        <LevelSegments level="Intermediate" bg="bg-emerald-400" size="lg" />
      </div>
      <div style={row}>
        <span style={{ width: 110 }}>In use</span>
        <LevelSegments level={null} bg="bg-slate-400" />
        <LevelSegments level={null} bg="bg-slate-400" size="lg" />
      </div>
    </div>
  )
}
