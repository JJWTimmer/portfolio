"use client"

import { Github, Gitlab, Linkedin, Mail } from "lucide-react"
import BitbucketIcon from "@/components/BitbucketIcon"
import { useDecodedEmail } from "@/lib/useDecodedEmail"

export default function SocialLinks({
  github,
  gitlab,
  bitbucket,
  linkedin,
  emailEncoded,
}: {
  github: string
  gitlab: string
  bitbucket: string
  linkedin: string
  emailEncoded: string
}) {
  // Decoded on the client only — keeps the address out of the exported HTML.
  const email = useDecodedEmail(emailEncoded)
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-white transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-6 h-6" />
      </a>
      <a
        href={gitlab}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-white transition-colors"
        aria-label="GitLab"
      >
        <Gitlab className="w-6 h-6" />
      </a>
      <a
        href={bitbucket}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-white transition-colors"
        aria-label="Bitbucket"
      >
        <BitbucketIcon className="w-6 h-6" />
      </a>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-white transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-6 h-6" />
      </a>
      {/* mailto: is a protocol URL, not navigation — next/link has nothing to do here. */}
      {email ? (
        <a href={`mailto:${email}`} className="text-slate-400 hover:text-white" aria-label="Email">
          <Mail className="w-6 h-6" />
        </a>
      ) : null}
    </div>
  )
}
