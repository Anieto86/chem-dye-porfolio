import React from "react";
import styled from "styled-components";

import portfolio from "../data/dataPorfolio";

const ImgStyledP = styled.img`
background-color:white;
  height: 400px;
  object-fit: contain; 

`;

const ImgContainer = styled.div`
  width: 30%;
  height: auto;
  border: 1px solid #392767;
  margin: 3px;
  &:hover {
    transform: scale(1.1);
  }

`;
const PortContainer = styled.div`
margin-top: 5rem;
 
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* align-content :stretch; */

`;

export default function Infographic(props) {
  return (
    <PortContainer className='container'>
      {portfolio.map((port, i) => (
        <ImgContainer key={i}>
          <ImgStyledP
            src={port.img}
            className='card-img-top'
            alt='Responsive'
          />
        </ImgContainer>
      ))}
    </PortContainer>
  );
}
