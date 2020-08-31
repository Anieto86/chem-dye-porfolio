import React from 'react'

//Links
import { Link } from 'react-router-dom'

//logo
import logo from './img/CD_SI.png'

//Style
const navStyle = {
  height: "auto",
  opacity: "0.7"
};

const logoStyle = {
  height: "100px",
  width: "120px"
};

const txtStyle = {
  color: "black",
  fontSize: "20px",
  fontFamily: 'Abel',
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
      <span style={txtStyle} className="navbar-text">Mariana Oksdath Scientific Illustrator</span>

      <div className="container justify-content-end">
        <ul className="nav ">
          <li className="nav-item">
            <Link to="/">
              <button style={btnStyle} className="nav-link active" to="/">Home</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/porfolio">
              <button style={btnStyle} className="nav-link">Porfolio</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <button style={btnStyle} className="nav-link">About Me</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials">
              <button style={btnStyle} className="nav-link">Testimonial</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
