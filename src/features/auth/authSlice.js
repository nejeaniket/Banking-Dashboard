import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fakeAuth } from './authAPI'

export const login = createAsyncThunk('auth/login', async (creds, { rejectWithValue }) => {
  try {
    const data = await fakeAuth(creds)
    return data
  } catch (err) {
    return rejectWithValue(err.message)
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, status: 'idle', error: null },
  reducers: {
    logout(state){ state.user = null; state.token = null }
  },
  extraReducers(builder){
    builder
      .addCase(login.pending, (state) => { state.status = 'loading'; state.error = null })
      .addCase(login.fulfilled, (state, action) => { state.status = 'succeeded'; state.user = action.payload.user; state.token = action.payload.token })
      .addCase(login.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload || action.error.message })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
