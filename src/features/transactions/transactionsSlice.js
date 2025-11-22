import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getTransactions } from './transactionsAPI'

export const fetchTransactions = createAsyncThunk('transactions/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const data = await getTransactions()
    return data
  } catch (err) { return rejectWithValue(err.message) }
})

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { list: [], status: 'idle', error: null },
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchTransactions.pending, (s)=>{ s.status='loading' })
      .addCase(fetchTransactions.fulfilled, (s,a)=>{ s.status='succeeded'; s.list = a.payload })
      .addCase(fetchTransactions.rejected, (s,a)=>{ s.status='failed'; s.error = a.payload || a.error.message })
  }
})

export default transactionsSlice.reducer
