import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers, updateCustomer } from '../features/customers/customersSlice'
import DataTable from '../components/DataTable'
import EditModal from '../components/EditModal'

export default function Customers(){
  const dispatch = useDispatch()
  const { list, status } = useSelector(s=>s.customers)
  const [q, setQ] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 8
  const [editing, setEditing] = useState(null)

  useEffect(()=>{ dispatch(fetchCustomers()) },[dispatch])

  const filtered = useMemo(()=> list.filter(c => c.name.toLowerCase().includes(q.toLowerCase())), [list, q])
  const paged = filtered.slice((page-1)*pageSize, page*pageSize)

  const columns = [
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'balance', title: 'Balance' },
    { key: 'actions', title: 'Actions', render: (r)=> <button className="px-2 py-1 bg-blue-600 text-white rounded" onClick={()=>setEditing(r)}>Edit</button> }
  ]

  const onSave = (payload) => { dispatch(updateCustomer(payload)); setEditing(null) }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Customers</h1>
      <div className="mb-4 flex gap-2">
        <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Search customers" className="p-2 rounded border" />
      </div>
      {status==='loading' ? <div>Loading...</div> : <DataTable columns={columns} data={paged} />}
      <div className="mt-4 flex gap-2">
        <button onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-3 py-1 bg-white rounded">Prev</button>
        <div>Page {page}</div>
        <button onClick={()=>setPage(p=>p+1)} className="px-3 py-1 bg-white rounded">Next</button>
      </div>

      <EditModal open={!!editing} initial={editing||{}} onClose={()=>setEditing(null)} onSave={onSave} />
    </div>
  )
}
