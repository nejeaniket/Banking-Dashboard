import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCustomers } from '../features/customers/customersSlice'
import { fetchTransactions } from '../features/transactions/transactionsSlice'
import Card from '../components/Card'
import ChartArea from '../components/ChartArea'

export default function Dashboard(){
  const dispatch = useDispatch()
  const customers = useSelector(s=>s.customers.list)
  const transactions = useSelector(s=>s.transactions.list)

  useEffect(()=>{
    dispatch(fetchCustomers())
    dispatch(fetchTransactions())
  },[dispatch])

  const total = transactions.reduce((s,t)=>s + (Number(t.amount)||0), 0)

  const series = transactions.slice().reverse().slice(0,12).map(t=>({ date: t.date, amount: Number(t.amount) }))

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card title="Customers" value={customers.length} />
        <Card title="Transactions" value={transactions.length} />
        <Card title="Total Balance" value={total} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <ChartArea data={series} />
      </div>
    </div>
  )
}
