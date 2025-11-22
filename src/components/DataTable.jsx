export default function DataTable({ columns, data }){
  return (
    <div className="overflow-auto bg-white rounded shadow">
      <table className="min-w-full divide-y">
        <thead className="bg-gray-50">
          <tr>
            {columns.map(col => <th key={col.key} className="px-4 py-2 text-left text-sm text-gray-600">{col.title}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id} className="border-t">
              {columns.map(col => <td key={col.key} className="px-4 py-2 text-sm">{col.render ? col.render(row) : row[col.key]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
