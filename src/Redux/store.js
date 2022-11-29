import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import booksReducer from "./books/booksSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
  },
})