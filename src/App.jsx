import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Customers from './pages/Customers'
import Transactions from './pages/Transactions'
import Profile from './pages/Profile'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import { useSelector } from 'react-redux'

function ProtectedRoute({ children }){
  const token = useSelector(state => state.auth.token)
  if(!token) return <Navigate to="/login" replace />
  return children
}

export default function App(){
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <main className="p-6">
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="/customers" element={<ProtectedRoute><Customers/></ProtectedRoute>} />
            <Route path="/transactions" element={<ProtectedRoute><Transactions/></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
