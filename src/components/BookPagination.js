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

  let handelNext = () =>{
    if(active+1 <= 5){
      handleClick(active+1)
    }
    else  handleClick(1);
  }

  let handelPrev = () =>{
    if(active-1 >= 1){
      handleClick(active-1)
    }
    else  handleClick(5);
  }

  return (
      <>
        <div className='container d-flex justify-content-center' style={{ display: 'block', padding: 30 }}>
          <Pagination>
            <Pagination.Prev onClick={()=>handelPrev()} />
            {items.map((item)=>{
              return item
            })}
            <Pagination.Next onClick={()=>handelNext()} />
          </Pagination>
        </div>
      </>
  )
}

export default BookPagination