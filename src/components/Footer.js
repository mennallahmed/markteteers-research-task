import React from 'react'
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer id="p-footer" className="p-3" >
      <div className="row">
        <div className="col-md-3 ">
          <ul>
            <li id='header'>BOOK APP</li>
            <li></li>
            <li></li>
            <li id="icons"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#000" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18"><path fill="#000" d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"/></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path fill="#000" d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"/></svg>
             </li>
          </ul>
        </div>
  
        <div className="col-md-2">
          <ul className="f-ul">
            <li style={{color:"black"}}>Help</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
  
        <div className="col-md-2">
          <ul className="f-ul">
            <li style={{color:"black"}}>Information</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
  
        <div className="col-md-5">
          <p> © BOOK APP. All Rights Reserved</p>
        </div>
         
      </div>
    </footer>
  )
}

export default Footer