import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoritList: [],
  favIconFlag: {}
}

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favoritList = action.payload
    },
    removeFromFavorite: (state, action) => {
      state.favoritList = action.payload
    },
    updateFavFlag: (state, action) => {
      state.favIconFlag = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToFavorite, removeFromFavorite, updateFavFlag } = favoriteSlice.actions

export default favoriteSlice.reducer