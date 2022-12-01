import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import booksReducer from "./books/booksSlice"
import favoriteReducer from "./Favorites/favoriteSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    books: booksReducer,
    favorites:favoriteReducer,
  },
})