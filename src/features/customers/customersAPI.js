import axios from 'axios'
const API = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export const getCustomers = (params) => axios.get(`${API}/customers`, { params }).then(r=>r.data)
export const getCustomer = (id) => axios.get(`${API}/customers/${id}`).then(r=>r.data)
export const putCustomer = (id, payload) => axios.put(`${API}/customers/${id}`, payload).then(r=>r.data)
export const postCustomer = (payload) => axios.post(`${API}/customers`, payload).then(r=>r.data)
export const deleteCustomer = (id) => axios.delete(`${API}/customers/${id}`).then(r=>r.data)
