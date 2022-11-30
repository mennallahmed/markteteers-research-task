import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../styles/BookCard.css"

const BookCard = ({data}) => {

  let [booksData,setBooks] = useState([])

  useEffect(()=>{
    console.log(data)
    setBooks(data)
    console.log(booksData)
  },[data])

  return (
      <>
        <div className='my-container ms-2'>
        {booksData.length ? (
          <>
          {booksData[0].map((item,index) =>{
            return(
              <div key={index} className="card" style={{width: "18rem", margin:"2%",color:"black"}}>
                <img src={`${item.image_url}`} className="card-img-top book-img" alt="book cover"/>
                <div className="card-body">
                  <h5 className="card-title">
                  <NavLink className="title-link" to={`/book-details/${item.id}`}>{item.title}</NavLink>
                  </h5>
                  <p className="card-text">{item.authors}</p>
                </div>
              </div>
            )
          })}
          </>
        ) : null}
        </div>
      </>
  )
}

export default BookCard