import { configureStore } from '@reduxjs/toolkit'
import reducer from '../slice/usersSlice'

export const store = configureStore({
  reducer: { users: reducer },
})