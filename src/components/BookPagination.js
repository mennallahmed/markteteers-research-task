import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { getBooksAsync } from '../Redux/books/booksSlice'
import Pagination from 'react-bootstrap/Pagination';

const BookPagination = () => {
  const dispatch = useDispatch();

  let [active,setActive] = useState(1)

  //Get the books of the clicked page
  let handleClick = (n) =>{
    setActive(n)
    //Get page n a limit of 50 books
    dispatch(getBooksAsync(n,50))
  }

  // Create 5 pages Pagination
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item onClick={()=>handleClick(number)} key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
      <>
        <div className='container d-flex justify-content-center' style={{ display: 'block', width: 700, padding: 30 }}>
          <Pagination>
            <Pagination.Prev />
            {items.map((item)=>{
              return item
            })}
            <Pagination.Next />
          </Pagination>
        </div>
      </>
  )
}

export default BookPagination