import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'

export default function SignaturesPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <Topbar />
        <h1 className="text-2xl font-bold">Email Signatures</h1>
      </main>
    </div>
  )
}
