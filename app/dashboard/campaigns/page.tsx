import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

const campaigns = [
  { id: 1, name: 'Spring Sale', status: 'Running' },
  { id: 2, name: 'Winter Promo', status: 'Scheduled' }
]

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Topbar />
        <h2 className="text-xl font-semibold mb-4">Campaigns</h2>
        <div className="grid gap-4">
          {campaigns.map(c => (
            <div key={c.id} className="card">
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-slate-500">{c.status}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
