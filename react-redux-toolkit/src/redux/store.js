import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})


//steps
//1- create store
//2- wrap app component under Provider 
//3- create Slice
//4- register reducer in store