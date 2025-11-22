import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/auth/authSlice'
import { Navigate } from 'react-router-dom'

export default function Login(){
  const dispatch = useDispatch()
  const auth = useSelector(s=>s.auth)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  if(auth.token) return <Navigate to="/" replace />

  const handle = async (e)=>{
    e.preventDefault()
    dispatch(login({ username, password }))
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handle} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        <input className="w-full p-2 border mb-3" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input type="password" className="w-full p-2 border mb-3" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="w-full p-2 bg-blue-600 text-white rounded">Login</button>
        {auth.status==='failed' && <div className="text-red-500 mt-2">{auth.error}</div>}
      </form>
    </div>
  )
}
