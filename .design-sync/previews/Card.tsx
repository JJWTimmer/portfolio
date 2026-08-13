import { Card } from 'portfolio-jasper'

export function Padding6() {
  return (
    <Card className="p-6">
      <p style={{ color: 'white' }}>Card content with p-6 padding</p>
    </Card>
  )
}

export function Padding4() {
  return (
    <Card className="p-4">
      <p style={{ color: 'white', fontWeight: 600 }}>MSc, Software Engineering</p>
      <p style={{ color: '#94a3b8', fontSize: 14 }}>University of Amsterdam · 2013</p>
    </Card>
  )
}
