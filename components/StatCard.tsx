export default function StatCard({ label, value, delta }: { label: string, value: number, delta: string }) {
  return (
    <div className="card">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-semibold">{value.toLocaleString()}</div>
      <div className="mt-1 text-xs text-slate-500">{delta}</div>
    </div>
  )
}
