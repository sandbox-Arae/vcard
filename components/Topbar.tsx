'use client'
import Link from 'next/link'

export default function Topbar() {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold">Welcome back, Jean!</h1>
      <div className="flex items-center gap-2">
        <input className="input" placeholder="Search..." />
        <Link href="/api/auth/logout" className="btn btn-primary">Logout</Link>
      </div>
    </header>
  )
}
