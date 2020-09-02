import React from 'react'
import styled from 'styled-components'

//Links
import { Link } from 'react-router-dom'

//logo
import logo from './img/CD_SI.png'

//Style
const NavStyle = styled.nav`
  height: auto;
  
 
`

const LogoStyle = styled.img`
  height: 100px;
  width: 120px;
  margin-left:200px;
`

const TxtStyle = styled.h1`
   margin-left: 20px;
  font-size: 30px;
  font-family: Abel;
  color: #392767;
`;

const BtnStyle = styled.button`
  background-color:  #392767;
  color: #66cccc;
  border-radius: 20px;
 
  margin: 10px;
  border: 3px  solid #66cccc;
  `

export default function navigation() {
  return (
    <NavStyle className="navbar navba bg">
      <LogoStyle src={logo} className="d-inline-block align-top" alt="" loading="lazy" />

      <TxtStyle className="navbar-text"></TxtStyle>

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
