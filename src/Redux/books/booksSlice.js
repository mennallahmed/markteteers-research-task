import { createSlice } from "@reduxjs/toolkit";
const axios = require("axios");
const API_URL = "https://example-data.draftbit.com/books";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    BookData: []
  },
  reducers: {
    getbooks: (state, action) => {
      state.data = [action.payload];
    },
    getById: (state, action) => {
      state.BookData = [action.payload];
    },
  }
});

//Get all Books according to page number and limits of books
export const getBooksAsync = (page,limit) => async (dispatch) => {
  try {
    //Get API request to get books data
    const response = await axios.get(`${API_URL}?_page=${page}&_limit=${limit}`);
    dispatch(getbooks(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

//Get book by Id
export const getBookById = (id) => async (dispatch) => {
  try {
    //Get API request to get book by id
    const response = await axios.get(`${API_URL}/${id}`);
    dispatch(getById(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getbooks,getById } = booksSlice.actions;
export const showbooks = (state) => state.books.data;
export const showbookbyId = (state) => state.books.BookData;
export default booksSlice.reducer;