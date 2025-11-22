import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import customersReducer from '../features/customers/customersSlice'
import transactionsReducer from '../features/transactions/transactionsSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customersReducer,
    transactions: transactionsReducer,
  }
})

export default store
