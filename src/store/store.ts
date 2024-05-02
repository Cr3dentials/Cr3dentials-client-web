import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './slices/modalSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  //----------------- Add reducers --------------------//
  reducer: {
    modalReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

//----------------- No need to change --------------------//
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
