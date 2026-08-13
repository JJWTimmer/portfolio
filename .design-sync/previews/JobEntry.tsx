import { JobEntry } from 'portfolio-jasper'

export function CurrentRole() {
  return (
    <JobEntry
      role="Senior Software Engineer"
      company="Dojoo.io (Nederland Eet Groep B.V.)"
      period="March 2022 – Present"
      location="Zwolle"
      bullets={[
        'Led the pivot of an internal IT team into an external consultancy, defining new ways of working and positioning.',
        'Mentored 3 engineers through the transition into a consultancy role — career growth, client communication, and technical leadership.',
        'Embedded in client teams as Tech Lead, Scrum Master, and DevOps engineer; coach client-side team leads on architecture decisions and debugging approaches.',
      ]}
    />
  )
}

export function StackHeavyRole() {
  return (
    <JobEntry
      role="Senior Java Backend Developer"
      company="Homie / Nederland Eet Groep B.V."
      period="October 2021 – Present"
      location="Zwolle"
      bullets={[
        'Owned the architectural roadmap for a live food-ordering platform: Java 8 → 17, Spring Boot 2 → 3, zero downtime.',
        'Designed and delivered new product features end-to-end: push notifications, Mollie payment integration, customer loyalty system.',
        'Made infra and stack decisions under real business constraints — kept the platform running through multiple environment migrations.',
        'Stack: Java 17, Spring Boot 3, PostgreSQL, GitLab CI, AWS, Ubuntu.',
      ]}
    />
  )
}
