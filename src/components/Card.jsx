export default function Card({ title, value }){
  return (
    <div className="bg-white rounded p-4 shadow">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
    </div>
  )
}
