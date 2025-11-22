import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile(){
  const user = useSelector(s=>s.auth.user)
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <div className="bg-white p-4 rounded shadow">
        <div><strong>Username:</strong> {user?.username}</div>
        <div><strong>Role:</strong> {user?.role}</div>
      </div>
    </div>
  )
}
