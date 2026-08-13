import { ProjectCard } from 'portfolio-jasper'

export function Default() {
  return (
    <ProjectCard
      title="DevOps Engineer — Belastingdienst"
      company="Dojoo.io"
      period="April 2025 – Present"
      description="Greenfield system for new tax legislation — designed to become a reusable blueprint for future regulatory implementations across the organisation."
      bullets={[
        'Defined the system architecture: event-driven, modular, built for reuse by teams that don’t yet exist.',
        'Made key early decisions on process orchestration (Camunda BPM), API boundaries, and GitOps delivery model that now shape how other teams onboard.',
        'First modules consistently on schedule, high code quality verified by SonarQube and SIG measurements.',
      ]}
      tech={['OpenShift', 'Quarkus', 'Camunda', 'ArgoCD', 'Tekton', 'GitOps']}
    />
  )
}
