import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooksAsync, showbooks } from '../Redux/books/booksSlice'
import BookCard from './BookCard';

const Books = () => {
  const books = useSelector(showbooks);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    //Get a limit of 50 books
    dispatch(getBooksAsync(50))
  },[])

  return (
    <>
      <header>What will you discover?</header>
      <header>Ready To read?</header>
      <BookCard data={books}/>
    </>
  )
}

export default Books