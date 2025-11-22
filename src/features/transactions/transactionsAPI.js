import axios from 'axios'
const API = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export const getTransactions = (params) => axios.get(`${API}/transactions`, { params }).then(r=>r.data)
export const getTransaction = (id) => axios.get(`${API}/transactions/${id}`).then(r=>r.data)
export const postTransaction = (payload) => axios.post(`${API}/transactions`, payload).then(r=>r.data)
