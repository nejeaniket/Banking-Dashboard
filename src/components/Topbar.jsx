import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

export default function Topbar(){
  const user = useSelector(s=>s.auth.user)
  const dispatch = useDispatch()
  return (
    <header className="bg-white p-4 flex justify-between items-center shadow-sm">
      <div className="text-lg font-medium">Welcome{user? `, ${user.username}` : ''}</div>
      <div>
        {user ? <button onClick={()=>dispatch(logout())} className="px-3 py-1 bg-red-100 rounded">Logout</button> : null}
      </div>
    </header>
  )
}
