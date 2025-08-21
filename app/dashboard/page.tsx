import Sidebar from '@/components/Sidebar'
import StatCard from '@/components/StatCard'
import Topbar from '@/components/Topbar'
import { cookies } from 'next/headers'
import { parseSession } from '@/lib/session'

export default async function Dashboard() {
  const raw = cookies().get('session')?.value
  const sess = parseSession(raw ?? null as any)
  const name = sess?.user ?? 'User'

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Topbar />
        <p className="text-slate-500 mb-6">
          Here's what's happening with your digital business tools today.
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard label="Active Signatures" value={1234} delta="+12% from last month" />
          <StatCard label="Digital Cards" value={856} delta="+8% from last month" />
          <StatCard label="Active Campaigns" value={3} delta="0% from last month" />
          <StatCard label="Total Users" value={1089} delta="+5% from last month" />
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          <div className="card">
            <h3 className="font-medium mb-2">Quick Actions</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <button className="text-left rounded-xl border px-4 py-3 hover:border-emerald-400 hover:bg-emerald-50 transition">
                <div className="font-medium">Download My vCard</div>
                <div className="text-xs text-slate-500">Get your digital business card</div>
              </button>
              <button className="text-left rounded-xl border px-4 py-3 hover:border-emerald-400 hover:bg-emerald-50 transition">
                <div className="font-medium">View QR Code</div>
                <div className="text-xs text-slate-500">Show your contact QR code</div>
                <div className="mt-2 mx-auto h-24 w-24 bg-[radial-gradient(circle,theme(colors.slate.900)_1px,transparent_1px)] [background-size:6px_6px] rounded" />
              </button>
              <button className="text-left rounded-xl border px-4 py-3 hover:border-emerald-400 hover:bg-emerald-50 transition">
                <div className="font-medium">Update Signature</div>
                <div className="text-xs text-slate-500">Modify your email signature</div>
              </button>
              <button className="text-left rounded-xl border px-4 py-3 hover:border-emerald-400 hover:bg-emerald-50 transition">
                <div className="font-medium">Create Campaign</div>
                <div className="text-xs text-slate-500">Launch a marketing campaign</div>
              </button>
            </div>
          </div>
          <div className="card col-span-2">
            <h3 className="font-medium mb-4">Your Profile</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <Field label="Display Name" value={name} />
              <Field label="Email" value="demo@company.com" />
              <Field label="Job Title" value="Directeur Marketing" />
              <Field label="Department" value="Marketing & Communication" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-slate-500">{label}</div>
      <div className="mt-1 font-medium">{value}</div>
    </div>
  )
}
