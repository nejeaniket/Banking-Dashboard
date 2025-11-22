import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside className="w-64 bg-white h-screen p-4 hidden md:block">
      <h2 className="text-xl font-bold mb-6">BankDash</h2>
      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={({isActive})=>isActive? 'bg-gray-100 p-2 rounded':'p-2 rounded'}>Dashboard</NavLink>
        <NavLink to="/customers" className={({isActive})=>isActive? 'bg-gray-100 p-2 rounded':'p-2 rounded'}>Customers</NavLink>
        <NavLink to="/transactions" className={({isActive})=>isActive? 'bg-gray-100 p-2 rounded':'p-2 rounded'}>Transactions</NavLink>
        <NavLink to="/profile" className={({isActive})=>isActive? 'bg-gray-100 p-2 rounded':'p-2 rounded'}>Profile</NavLink>
      </nav>
    </aside>
  )
}
