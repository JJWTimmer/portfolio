"use client"

import { useDecodedEmail } from "@/lib/useDecodedEmail"

/**
 * Base64-obfuscated mailto. The address must never appear in the static HTML —
 * decoding happens on the client only, so `out/index.html` ships just the
 * encoded string. Scrapers that don't run JS see nothing usable.
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
  const email = useDecodedEmail(encoded)

  if (!email) {
    return <span className={className}>{placeholder}</span>
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  )
}
