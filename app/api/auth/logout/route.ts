import { NextResponse } from 'next/server'

export async function GET() {
  const res = NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'))
  res.headers.append('Set-Cookie', `session=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`)
  return res
}
