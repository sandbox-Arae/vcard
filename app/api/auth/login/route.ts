import { NextResponse } from 'next/server'
import { serializeSession } from '@/lib/session'

export async function POST(req: Request) {
  const { email, password } = await req.json()
  if (email === 'demo@company.com' && password === 'demo123') {
    const session = serializeSession({ user: 'Jean Dupont', role: 'admin' })
    const res = NextResponse.json({ ok: true })
    res.headers.append('Set-Cookie', `session=${session}; Path=/; HttpOnly; SameSite=Lax; Max-Age=86400`)
    return res
  }
  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
}
