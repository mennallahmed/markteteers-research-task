import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooksAsync, showbooks } from '../Redux/books/booksSlice'
import BookCard from './BookCard';
import BookPagination from './BookPagination';

const Books = () => {
  const books = useSelector(showbooks);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    //Get page 1 a limit of 50 books
    dispatch(getBooksAsync(1,50))
  },[])

  return (
    <>
      <BookCard data={books}/>
      <BookPagination/>
    </>
  )
}

export default Books