import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Topbar />
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        <div className="card">
          <p className="text-sm text-slate-600">Add your settings here.</p>
        </div>
      </main>
    </div>
  )
}
