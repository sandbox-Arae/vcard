'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('demo@company.com')
  const [password, setPassword] = useState('demo123')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true); setError(null)
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    if (res.ok) window.location.href = '/dashboard'
    else {
      const j = await res.json().catch(() => ({}))
      setError(j?.error ?? 'Login failed')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <div className="card w-full max-w-md">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <p className="text-sm text-slate-500 mt-1">Use the demo credentials to continue.</p>
        <ul className="text-xs text-slate-500 mt-2 list-disc ml-5">
          <li>Email: <code>demo@company.com</code></li>
          <li>Password: <code>demo123</code></li>
        </ul>
        <form onSubmit={onSubmit} className="mt-4 space-y-3">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input className="input w-full" value={email} onChange={e=>setEmail(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password" className="input w-full" value={password} onChange={e=>setPassword(e.target.value)} />
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button disabled={loading} className="btn btn-primary w-full">{loading ? 'Signing in…' : 'Sign in'}</button>
        </form>
      </div>
    </div>
  )
}
