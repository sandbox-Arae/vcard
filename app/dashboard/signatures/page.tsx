import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

const signatures = [
  { id: 1, label: 'Main Signature', status: 'Active' },
  { id: 2, label: 'Holiday Campaign', status: 'Draft' }
]

export default function SignaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Topbar />
        <h2 className="text-xl font-semibold mb-4">Email Signatures</h2>
        <div className="grid gap-4">
          {signatures.map(s => (
            <div key={s.id} className="card flex items-center justify-between">
              <div>
                <div className="font-medium">{s.label}</div>
                <div className="text-sm text-slate-500">{s.status}</div>
              </div>
              <button className="btn btn-primary">Edit</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
