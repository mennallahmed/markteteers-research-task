import React from 'react'
import { useSelector} from 'react-redux'
import { NavLink } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import "../styles/Navbar.css"

const Navbar = () => {
  let favCount =  useSelector((state) => state.counter.value)

  return (
      <nav className="nav-container sticky-top navbar navbar-expand-lg " style={{ zIndex: 1 }}>
        <div className="container-fluid">
          <span className="navbar-brand">
           <NavLink className="nav-header" to="/home">
             <span style={{color:"rgba(0, 0, 0, 0.55)"}}>good</span>reads
           </NavLink>
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
                 <NavLink className="nav-a" style={{position:"relative"}} to="/favorites">
                  <AiFillHeart size={23}/>
                  <span className="fa-stack">{favCount}</span>
                 </NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar