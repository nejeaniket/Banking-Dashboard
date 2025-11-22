import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCustomers, putCustomer } from './customersAPI'

export const fetchCustomers = createAsyncThunk('customers/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const data = await getCustomers()
    return data
  } catch (err) { return rejectWithValue(err.message) }
})

export const updateCustomer = createAsyncThunk('customers/update', async (payload, { rejectWithValue }) => {
  try {
    const data = await putCustomer(payload.id, payload)
    return data
  } catch (err) { return rejectWithValue(err.message) }
})

const customersSlice = createSlice({
  name: 'customers',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchCustomers.pending, (s)=>{ s.status='loading' })
      .addCase(fetchCustomers.fulfilled, (s,a)=>{ s.status='succeeded'; s.list = a.payload })
      .addCase(fetchCustomers.rejected, (s,a)=>{ s.status='failed'; s.error = a.payload || a.error.message })
      .addCase(updateCustomer.fulfilled, (s,a)=>{ const idx = s.list.findIndex(c=>c.id===a.payload.id); if(idx>-1) s.list[idx]=a.payload })
  }
})

export default customersSlice.reducer
