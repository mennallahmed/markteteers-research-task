import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { getBooksAsync } from '../Redux/books/booksSlice'
import Pagination from 'react-bootstrap/Pagination';

const BookPagination = () => {
  const dispatch = useDispatch();

  let [active,setActive] = useState(1)

  let handleClick = (n) =>{
    setActive(n)
    dispatch(getBooksAsync(n,50))

  }

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