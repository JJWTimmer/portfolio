import { TerminalFrame } from 'portfolio-jasper'

// TerminalFrame is a chrome wrapper — the generated preview passes only the
// component name as children, so it renders as a title bar with one stray
// word. Real usage puts a block of content inside it (the featured project on
// the site, the timeline archive elsewhere), which is what makes the window
// metaphor read.
export function WithContent() {
  return (
    <div style={{ background: '#0f172a', padding: 24 }}>
      <TerminalFrame prompt="~/projects/belastingdienst — 02 / featured">
        <div style={{ padding: 24, color: '#cbd5e1' }}>
          <h3 style={{ color: '#fff', fontSize: 20, fontWeight: 700, margin: '0 0 4px' }}>
            DevOps Engineer — Belastingdienst
          </h3>
          <p style={{ fontSize: 13, color: '#94a3b8', margin: '0 0 12px' }}>
            Dojoo.io · April 2025 – Present
          </p>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Greenfield system for new tax legislation — designed to become a reusable blueprint
            for future regulatory implementations across the organisation.
          </p>
        </div>
      </TerminalFrame>
    </div>
  )
}

export function Empty() {
  return (
    <div style={{ background: '#0f172a', padding: 24 }}>
      <TerminalFrame prompt="~/timeline $ open --archive">
        <div style={{ padding: 32, color: '#64748b', fontFamily: 'ui-monospace, monospace', fontSize: 13 }}>
          ▸ load timeline
        </div>
      </TerminalFrame>
    </div>
  )
}
