import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getBooksAsync, showbooks } from '../Redux/books/booksSlice'

const Books = () => {
  const books = useSelector(showbooks);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    //Get a limit of 50 books
    dispatch(getBooksAsync(50))
  },[])

  return (
    <div>Books</div>
  )
}

export default Books