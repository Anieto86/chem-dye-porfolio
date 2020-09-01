import React from 'react'
import styled from 'styled-components'

//Links
import { Link } from 'react-router-dom'

//logo
import logo from './img/CD_SI.png'

//Style
const NavStyle = styled.nav`
  height: auto;
  opacity: 0.9;
`

const LogoStyle = styled.img`
  height: 100px;
  width: 120px;
  margin-left:50px;
`

const TxtStyle = styled.h4`
   margin-left: 20px;
  font-size: 30px;
  font-family: Abel;
`

const BtnStyle = styled.button`
  background-color: black;
  color: white;
  border-radius: 20px;
  margin: 5px;
  border: 5px  solid lightblue;
  `

export default function navigation() {
  return (
    <NavStyle className="navbar navbar-light bg-light">
      <LogoStyle src={logo} className="d-inline-block align-top" alt="" loading="lazy" />

      <TxtStyle className="navbar-text">Mariana Oksdath Scientific Illustrator</TxtStyle>

      <div className="container justify-content-end">
        <ul className="nav ">
          <li className="nav-item">
            <Link to="/">
              
              <BtnStyle className="nav-link active" to="/">Home</BtnStyle>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/porfolio">
              <BtnStyle  className="nav-link">Porfolio</BtnStyle>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <BtnStyle className="nav-link">About Me</BtnStyle>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/testimonials">
              <BtnStyle className="nav-link">Testimonial</BtnStyle>
            </Link>
          </li>
        </ul>
      </div>
    </NavStyle>
    
  )
}
