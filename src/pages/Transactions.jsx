import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTransactions } from '../features/transactions/transactionsSlice'
import DataTable from '../components/DataTable'

export default function Transactions(){
  const dispatch = useDispatch()
  const { list, status } = useSelector(s=>s.transactions)

  useEffect(()=>{ dispatch(fetchTransactions()) },[dispatch])

  const columns = [
    { key: 'date', title: 'Date' },
    { key: 'customerId', title: 'Customer ID' },
    { key: 'type', title: 'Type' },
    { key: 'amount', title: 'Amount' }
  ]

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Transactions</h1>
      {status==='loading' ? <div>Loading...</div> : <DataTable columns={columns} data={list} />}
    </div>
  )
}
