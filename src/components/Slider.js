import React from 'react'
import "../index.css"

const Slider = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img 
            src="https://img5.goodfon.com/wallpaper/nbig/a/df/emmanuel-pheaton-bible-christian-hand-reading.jpg" 
            className="d-block w-100 slide-img" 
            alt="background one"/>
          <div className="carousel-caption d-none d-md-block">
            <h4>Ready To read?</h4>
          </div>
        </div>

        <div className="carousel-item">
          <img 
            src="https://img.freepik.com/free-photo/creative-assortment-with-different-books_23-2148851020.jpg?w=826&t=st=1669910424~exp=1669911024~hmac=7e56f79ffe75015c4b5769d51226d0b1f5458264dd46eca7620c8b13e6c7d80e" 
            className="d-block w-100 slide-img" 
            alt="background two"
          />
          <div className="carousel-caption d-none d-md-block">
            <h4>What will you discover?</h4>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slider