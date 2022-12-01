import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
//import { decrement, increment } from '../../Redux/counter/counterSlice'
import { removeFromFavorite, updateFavFlag} from '../../Redux/Favorites/favoriteSlice'

let favList
const Favorite = () => {
  //const count = useSelector((state) => state.counter.value)
  const favoritList = useSelector((state) => state.favorites.favoritList)
  let iconFlag =  useSelector((state) => state.favorites.favIconFlag)
  favList = favoritList
  let [favData,setFavData] = useState(favoritList)
  const [isActive, setIsActive] = useState(iconFlag);
  const dispatch = useDispatch()

  let selectVal;

  useEffect(()=>{ 
    dispatch(updateFavFlag(isActive))
  },[isActive])

  const removeFromFav = (fId) => {
      //Remove the clicked item from the favorite list
      favList  =  favList.filter((item)=>{
        return item.id !== fId
      })
       // change favorite icon state to false
       setIsActive({...isActive,[fId]: false});
       setFavData(favList)
      //Remove the item from the redux favorite list
      dispatch(removeFromFavorite(favList))
  };

  let selectCategroy=(e)=>{
    selectVal = e.target.value
    
    if(selectVal === ""){
      setFavData(favoritList)
    }
    else{
      let filterArr = favoritList.filter((item)=>{
        return item.authors === selectVal
      })
      setFavData(filterArr)
    }
  }

  return (
      <>
        <div className='m-4'>
          <label className='mx-3' id="filter">Filter By Author: </label>
          <select id="select-cat" onClick={(e)=>selectCategroy(e)}>
              <option value="">All</option>
              {favList.map((item,index)=>{
                return  <option key={index} value={item.authors} >{item.authors}</option>
              })}
          </select>
        </div>
        <div className='my-container ms-2'>
        {favData.length ? (
          <>
          {favData.map((item,index) =>{
            return(
              <div key={index} className="card" style={{width: "18rem", margin:"2%",color:"black"}}>
                <img src={`${item.image_url}`} className="card-img-top book-img" alt="book cover"/>
                <span className="fav-icon"> 
                  <FaTrash
                  className="heart-icon" 
                  size={23}
                  onClick={()=>{removeFromFav(item.id)}}
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
          {/*  <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
      </>
  )
}

export default Favorite