import { NextResponse, type NextRequest } from 'next/server'

function parseSession(raw: string | null) {
  if (!raw) return null
  try { return JSON.parse(Buffer.from(raw, 'base64').toString('utf8')) } catch { return null }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const protectedPaths = ['/dashboard', '/admin']
  const needsAuth = protectedPaths.some(p => pathname.startsWith(p))
  if (!needsAuth) return NextResponse.next()

  const cookie = req.cookies.get('session')?.value ?? null
  const sess = parseSession(cookie)
  if (!sess) {
    const url = req.nextUrl.clone()
    url.pathname = '/'
    url.searchParams.set('from', pathname)
    return NextResponse.redirect(url)
  }
  if (pathname.startsWith('/admin') && sess.role !== 'admin') {
    const url = req.nextUrl.clone()
    url.pathname = '/dashboard'
    url.searchParams.set('error', 'forbidden')
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = { matcher: ['/dashboard/:path*', '/admin/:path*'] }
