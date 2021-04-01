import React from "react";
//Links
import { Link } from "react-router-dom";

import styled from "styled-components";

const BtnStyle = styled.button`
background-color:white; 
  color: #392767;
  border-radius: 40px;
  margin: 7px;
  border: 2px solid #392767;
  font-family: Abel;
  font-size: 20px;
  &:hover {
    background-color: #392767;
    color: white;
  }
`;

const BtnContianerStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 8rem;
`;

export default function Buttons() {
  return (
    <BtnContianerStyle className='container'>
      <div className='row'>
        <Link to={"/animations"} style={{ textDecoration: "none" }}>
          <BtnStyle className='nav-link'>Animations</BtnStyle>
        </Link>
        <Link to={"/biorender"} style={{ textDecoration: "none" }}>
          <BtnStyle className='nav-link'>BioRender</BtnStyle>
        </Link>
        <Link to={"/journal"} style={{ textDecoration: "none" }}>
          <BtnStyle className='nav-link'>Scientific Illustrations</BtnStyle>
        </Link>
        <Link to={"/infographics"} style={{ textDecoration: "none" }}>
          <BtnStyle className='nav-link'>Infographics</BtnStyle>
        </Link>
        <Link to={"/drawings"} style={{ textDecoration: "none" }}>
          <BtnStyle className='nav-link'>Line Drawings</BtnStyle>
        </Link>
      </div>
    </BtnContianerStyle>
  );
}
