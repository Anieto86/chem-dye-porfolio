import React from "react";
import styled from "styled-components";

//Links
import { Link } from "react-router-dom";

//logo
import logo from "../img/CD_SI.png";

//Style
const NavStyle = styled.nav`
  height: auto;
`;
const LogoStyle = styled.img`
  height: auto;
  width: 80px;
`;
const TxtStyle = styled.h1`
  margin-left: 20px;
  font-size: 30px;
  font-family: Abel;
  color: #392767;
`;
const BtnStyle = styled.button`
  background-color: transparent;
  border-style: none;
  color: black;
  font-weight: 900;
  font-size: 20px;
  font-family: Abel;
  margin: 10px;
`;

export default function navigation() {
  return (
    <NavStyle className='navbar navba container'>
      <LogoStyle
        src={logo}
        className='d-inline-block align-top '
        alt=''
        loading='lazy'
      />
      <TxtStyle className='navbar-text'></TxtStyle>
      <div className=' justify-content-end '>
        <ul className='nav '>
          <li className='nav-item '>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <BtnStyle className='nav-link active' to='/'>
                Home
              </BtnStyle>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/porfolio' style={{ textDecoration: 'none' }}>
              <BtnStyle className='nav-link'>Porfolio</BtnStyle>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/about' style={{ textDecoration: 'none' }}>
              <BtnStyle className='nav-link'>About</BtnStyle>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/testimonials' style={{ textDecoration: 'none' }}>
              <BtnStyle className='nav-link'>Testimonial</BtnStyle>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/blog' style={{ textDecoration: 'none' }}>
              <BtnStyle className='nav-link'>Blog</BtnStyle>
            </Link>
          </li>
        </ul>
      </div>
    </NavStyle>
  );
}
