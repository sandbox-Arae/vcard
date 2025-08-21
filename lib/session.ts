export type Session = { user: string; role: 'admin' | 'user' }
export function parseSession(raw: string | undefined | null): Session | null {
  if (!raw) return null;
  try {
    const json = JSON.parse(Buffer.from(raw, 'base64').toString('utf8')) as Session
    if (!json?.user || !json?.role) return null
    return json
  } catch { return null }
}
export function serializeSession(session: Session): string {
  return Buffer.from(JSON.stringify(session), 'utf8').toString('base64')
}
