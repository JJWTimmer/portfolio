"use client"

import Link from "next/link"
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
      <Link href={github} className="text-slate-400 hover:text-white" aria-label="GitHub">
        <Github className="w-6 h-6" />
      </Link>
      <Link href={gitlab} className="text-slate-400 hover:text-white" aria-label="GitLab">
        <Gitlab className="w-6 h-6" />
      </Link>
      <Link href={bitbucket} className="text-slate-400 hover:text-white" aria-label="Bitbucket">
        <BitbucketIcon className="w-6 h-6" />
      </Link>
      <Link href={linkedin} className="text-slate-400 hover:text-white" aria-label="LinkedIn">
        <Linkedin className="w-6 h-6" />
      </Link>
      {/* mailto: is a protocol URL, not navigation — next/link has nothing to do here. */}
      {email ? (
        <a href={`mailto:${email}`} className="text-slate-400 hover:text-white" aria-label="Email">
          <Mail className="w-6 h-6" />
        </a>
      ) : null}
    </div>
  )
}
