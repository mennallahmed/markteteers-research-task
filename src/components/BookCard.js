import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { AiFillHeart} from "react-icons/ai";
import {addToFavorite, removeFromFavorite, updateFavFlag} from '../Redux/Favorites/favoriteSlice'
import "../styles/BookCard.css"

let favList
const BookCard = ({data}) => {
  let arr = useSelector((state) => state.favorites.favoritList)
  let iconFlag =  useSelector((state) => state.favorites.favIconFlag)
  favList = arr
  const dispatch = useDispatch()

  let [booksData,setBooks] = useState([])
  const [isActive, setIsActive] = useState(iconFlag);

  useEffect(()=>{
    setBooks(data)
  },[data])

  useEffect(()=>{ 
    //Update the redux favorite icon flag
    dispatch(updateFavFlag(isActive))
  },[isActive])
  
  const addToFav = (clickedItem) => {

    //Check if the item in favorite list
    let inFav = favList.find((item)=>{
      return (item.id === clickedItem.id ? true : false)
    })

    if(inFav){
      //Remove the clicked item from the favorite list if exists
      favList  =  favList.filter((item)=>{
        return item.id !== clickedItem.id
      })
      //Change favorite icon of the removed item state to false
      setIsActive({...isActive,[clickedItem.id]: false});
      //Remove the item from the redux favorite list
      dispatch(removeFromFavorite(favList))
    }
    else{
      //Add the clicked item to the favorite list if not exist
      favList = [...favList, clickedItem]
      //Change favorite icon state to true
      setIsActive({...isActive,[clickedItem.id]: true});
      //Update the redux favorite list with favorite items
      dispatch(addToFavorite(favList))
    }
  };

  return (
      <>
        <div className='my-container mt-5 ms-2'>
        {booksData.length ? (
          <>
          {booksData[0].map((item,index) =>{
            return(
              <div key={index} className="card" style={{width: "18rem", margin:"2%",color:"black"}}>
                <img src={`${item.image_url}`} className="card-img-top book-img" alt="book cover"/>
                <span className="fav-icon"> 
                  <AiFillHeart 
                  className="heart-icon" 
                  size={23}
                  style={{
                    color: isActive[item.id] ? 'red' : '',
                  }}
                  onClick={()=>{addToFav(item)}}
                  />
                </span>
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