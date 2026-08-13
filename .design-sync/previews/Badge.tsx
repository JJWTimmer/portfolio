import { Badge } from 'portfolio-jasper'

export function TechTags() {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge>OpenShift</Badge>
      <Badge>Quarkus</Badge>
      <Badge>Camunda</Badge>
      <Badge>ArgoCD</Badge>
      <Badge>Tekton</Badge>
      <Badge>GitOps</Badge>
    </div>
  )
}

export function Single() {
  return <Badge>Java 17</Badge>
}
