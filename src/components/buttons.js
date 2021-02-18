import React from "react";
//Links
import { Link } from "react-router-dom";

import styled from "styled-components";

const BtnStyle = styled.button`
  /* background-color: #c7c6c6; */
  color: #21262e;
  border-radius: 20px;
  margin: 7px;
    border: 1px solid #21262e;
  &:hover {
    background-color: #21262e;
    color: #c7c6c6;
    font-weight: bold;
  }
`;

const BtnContianerStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

export default function Buttons() {
  return (
    <BtnContianerStyle className='container'>
      {/* <Link to={"/graphAb"}>
                <BtnStyle className="nav-link">Graphical Abstract</BtnStyle>
            </Link> */}
      <Link to={"/animations"}>
        <BtnStyle className='nav-link'>Animations</BtnStyle>
      </Link>
      <Link to={"/biorender"}>
        <BtnStyle className='nav-link'>BioRender</BtnStyle>
      </Link>
      <Link to={"/journal"}>
        <BtnStyle className='nav-link'>Scientific Illustrations</BtnStyle>
      </Link>
      <Link to={"/infographics"}>
        <BtnStyle className='nav-link'>Infographics</BtnStyle>
      </Link>
      {/* <Link to={"/gapplications"}>
                <BtnStyle className="nav-link">Grant Applications</BtnStyle>
            </Link> */}
      <Link to={"/drawings"}>
        <BtnStyle className='nav-link'>Line Drawings</BtnStyle>
      </Link>
    </BtnContianerStyle>
  );
}
