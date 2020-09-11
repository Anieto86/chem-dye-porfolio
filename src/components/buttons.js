import React from 'react'
//Links
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const BtnStyle = styled.button`
  background-color:  #392767;
  color: #66cccc;
  border-radius: 20px;
  margin: 10px;
  border: 3px  solid #66cccc;
  &:hover{
       background-color: #66cccc;
       color: #392767;
       border: 3px  solid #392767;
  } 
  `;

  const BtnContianerStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  
  `;

export default function Buttons() {
    return (
        <BtnContianerStyle className="container">
            <Link to={"/graphAb"}>
                <BtnStyle className="nav-link">Graphical Abstract</BtnStyle>
            </Link>
            <Link to={"/journal"}>
                <BtnStyle className="nav-link">Scientific Journal</BtnStyle>
            </Link>
            <Link to={"/infographics"}>
                <BtnStyle className="nav-link">Infographics</BtnStyle>
            </Link>
            <Link to={"/gapplications"}>
                <BtnStyle className="nav-link">Grant Applications</BtnStyle>
            </Link>
        </BtnContianerStyle>
    )
}
