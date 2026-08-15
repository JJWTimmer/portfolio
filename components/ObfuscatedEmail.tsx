"use client"

import { useEffect, useState } from "react"

/**
 * Base64-obfuscated mailto. The address must never appear in the static HTML —
 * decoding happens in a client effect, after hydration, so `out/index.html`
 * ships only the encoded string. Scrapers that don't run JS see nothing usable.
 *
 * `encoded` is base64 of the full address, e.g. btoa("name@example.com").
 */
export default function ObfuscatedEmail({
  encoded,
  className = "",
  placeholder = "email — enable JavaScript",
}: {
  encoded: string
  className?: string
  placeholder?: string
}) {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    setEmail(atob(encoded))
  }, [encoded])

  if (!email) {
    return <span className={className}>{placeholder}</span>
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  )
}
