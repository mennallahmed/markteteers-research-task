import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "https://example-data.draftbit.com/books";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    data: []
  },
  reducers: {
    getbooks: (state, action) => {
      state.data = [action.payload];
    }
  }
});

export const getBooksAsync = (limit) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}?_limit=${limit}`);
    dispatch(getbooks(response.data));
  } catch (err) {
    throw new Error(err);
  }
};


export const { getbooks } = booksSlice.actions;
export const showbooks = (state) => state.books.data;
export default booksSlice.reducer;