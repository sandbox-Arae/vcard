'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/dashboard/cards', label: 'Business Cards' },
  { href: '/dashboard/signatures', label: 'Email Signatures' },
  { href: '/dashboard/campaigns', label: 'Campaigns' },
  { href: '/admin', label: 'Admin' },
  { href: '/settings', label: 'Settings' },
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col">
      <div className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white">VC</span>
        <span>VCard Platform</span>
      </div>
      <nav className="space-y-1">
        {items.map(i => {
          const active = pathname === i.href || pathname.startsWith(i.href + '/')
          return (
            <Link
              key={i.href}
              href={i.href}
              className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm hover:bg-emerald-50 ${active ? 'bg-emerald-100 text-emerald-900 font-medium' : 'text-slate-600'}`}
            >
              <span>{i.label}</span>
              {i.href === '/admin' && <span className="text-xs rounded-md bg-slate-100 px-2 py-0.5">Administrator</span>}
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto pt-8 border-t">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[url('https://i.pravatar.cc/100?img=5')] bg-cover" />
          <div>
            <div className="font-medium">Jean Dupont</div>
            <div className="text-xs text-slate-500">Directeur Marketing</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
