import React from 'react'
import "../styles/Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <span className="navbar-brand">
           <NavLink className="nav-header" to="/home">Book App</NavLink>
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                 <NavLink className="nav-a" to="/home">Home</NavLink>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" aria-current="page">
                  <NavLink className="nav-a" to="/home">About</NavLink>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" aria-current="page">
                 <NavLink className="nav-a" to="/favorites">Favorite</NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar