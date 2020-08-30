import React from 'react'

//logo
import logo from './img/logo.PNG'

//Style
const navStyle = {
  height: "auto",
  opacity: "0.7"
};

const logoStyle = {
  height: "100px",
  width: "100px"
}; 

const txtStyle = {
  color: "black",
  fontSize:"20px"
};

const btnStyle = {
  backgroundColor: "black",
  color: "white",
  borderRadius: "20px",
  margin: "5px"
}

export default function navigation() {
  return (
    <nav style={navStyle} className="navbar navbar-light bg-light">
       <img src={logo} style={logoStyle} className="d-inline-block align-top" alt="" loading="lazy" />
       <span  style={txtStyle} className="navbar-text">Mariana Oksdath Scientific Illustrator</span>
    
    <div className="container justify-content-end">
      <ul className="nav ">
        <li className="nav-item">
          <button  style={btnStyle} className="nav-link active" href="/">Home</button>
        </li>
        <li className="nav-item">
          <button style={btnStyle} className="nav-link" href="/"> Porfolio</button>
        </li>
        <li className="nav-item">
          <button  style={btnStyle}className="nav-link" href="/">About Me</button>
        </li>
      </ul>
      </div>
    </nav>
  )
}
