import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

const cards = [
  { id: 1, name: 'Jean Dupont', role: 'Directeur Marketing' },
  { id: 2, name: 'Marie Durand', role: 'Responsable Commerciale' }
]

export default function CardsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Topbar />
        <h2 className="text-xl font-semibold mb-4">Business Cards</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(c => (
            <div key={c.id} className="card">
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-slate-500">{c.role}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
