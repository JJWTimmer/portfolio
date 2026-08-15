import { SocialLinks } from 'portfolio-jasper'

// The email prop is base64 now, not plaintext — the address is decoded on the
// client so it never lands in the exported HTML. A plaintext value here throws
// InvalidCharacterError inside atob; generate a new one with btoa(address).
// Value below matches EMAIL_ENCODED in lib/data.ts.
export function Default() {
  return (
    <div style={{ background: '#0f172a', padding: 24 }}>
      <SocialLinks
        github="https://github.com/jjwtimmer"
        gitlab="https://gitlab.com/jjwtimmer"
        bitbucket="https://bitbucket.org/jjwtimmer"
        linkedin="https://linkedin.com/in/jjwtimmer"
        emailEncoded="bWFpbEBqYXNwZXJ0aW1tZXIubmw="
      />
    </div>
  )
}
