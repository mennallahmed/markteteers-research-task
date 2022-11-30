import React, { useEffect} from 'react'
import { Rating } from 'react-simple-star-rating'
import { useSelector, useDispatch } from 'react-redux'
import { getBookById,showbookbyId} from '../../Redux/books/booksSlice'
import { useParams } from 'react-router-dom'
import "../../styles/BookCard.css"
import Content from '../../components/Content'

const BookDetails = () => {
  const books = useSelector(showbookbyId);
  let {id} = useParams()
  const dispatch = useDispatch();

  useEffect(()=>{
    //Get book by Id
    dispatch(getBookById(id))
  },[])

  return (
      <>
        
        {books.length ? (
          <>
          {books.map((item,index) =>{
            return(
              <section key={index} className='my-container container'>
                <div className='col-12 col-xl-4 my-1 mt-5' >
                  <img className='details-img' src={`${item.image_url}`} alt="book cover"/>
                </div>
                <div className='col-12 col-xl-4 ms-3 mt-5 p-details'>
                  <h3>{item.title}</h3>
                  <Content text={item.description}/>
                  <div className='d-flex justify-content-between mt-3'>
                    <Rating
                      initialValue={item.rating} 
                      readonly={true}
                      allowFraction={true}
                      size={23}
                    />
                    <span className='mt-1' style={{color:"rgba(0, 0, 0, 0.55)"}}>{item.review_count} reviews</span>
                  </div>
                  <div className='d-flex mt-3'>
                    <span className='details-header'>Author</span>
                    <p>{item.authors} </p>
                  </div>
                  <div className='d-flex'>
                    <span className='details-header'>Pages</span>
                    <p>{item.num_pages}p </p>
                  </div>
                  <div className='d-flex'>
                    <span className='details-header'>Format</span>
                    <p>{item.format}</p>
                  </div>
                  <div className='d-flex'>
                    <span className='details-header'>Genres</span>
                    <p>{item.genres}</p>
                  </div>
                  {item.edition ?
                    <div className='d-flex'>
                      <span className='details-header'>Edition</span>
                      <p>{item.edition} </p>
                    </div>
                    : null
                  }
                  <div>
                    <p style={{color: "rgba(0, 0, 0, 0.55)"}}>{item.Quote1}</p>
                  </div>
                </div>
              </section>
            )
          })}
          </>
        ) : null}
        
      </>
  )
}

export default BookDetails