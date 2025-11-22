import React, { useState } from 'react'

export default function EditModal({ open, initial, onClose, onSave }){
  const [form, setForm] = useState(initial)
  React.useEffect(()=> setForm(initial), [initial])
  if(!open) return null
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-4 rounded w-96">
        <h3 className="font-semibold mb-2">Edit Customer</h3>
        <div className="flex flex-col gap-2">
          <input className="p-2 border" value={form.name || ''} onChange={e=>setForm({...form, name:e.target.value})} />
          <input className="p-2 border" value={form.email || ''} onChange={e=>setForm({...form, email:e.target.value})} />
          <input className="p-2 border" value={form.balance ?? ''} onChange={e=>setForm({...form, balance: Number(e.target.value)})} />
          <div className="flex justify-end gap-2 mt-3">
            <button onClick={onClose} className="px-3 py-1 rounded border">Cancel</button>
            <button onClick={()=>onSave(form)} className="px-3 py-1 rounded bg-blue-600 text-white">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}
