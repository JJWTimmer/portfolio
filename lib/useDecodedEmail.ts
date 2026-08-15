import { useSyncExternalStore } from "react"

/** No external store to subscribe to — the decoded value never changes. */
const noop = () => () => {}

/**
 * Decodes a base64 address on the client only.
 *
 * The server snapshot is `null`, so the prerendered HTML carries the encoded
 * string and nothing else; the client snapshot decodes after hydration. Using
 * useSyncExternalStore rather than useEffect+setState keeps the server/client
 * split explicit and avoids the cascading render that
 * `react-hooks/set-state-in-effect` (correctly) warns about.
 */
export function useDecodedEmail(encoded: string): string | null {
  return useSyncExternalStore(
    noop,
    () => atob(encoded),
    () => null,
  )
}
