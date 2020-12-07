//!https://www.youtube.com/watch?time_continue=522&v=g459Eia-bxw&feature=emb_logo
//!https://www.youtube.com/watch?v=o-cKmAeNJiA
import React from "react";
import styled from "styled-components";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
//logo
import logo from "./img/CD_SI.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FooterStyle = styled.div`
  background-color: black;
  background-size: 100%;
  width: auto;
  padding: 3rem;
  position: relative;
  bottom: 0;
  color: white;
  height: auto;
  margin-top: 10rem;
  opacity: 0.9;
`;

const LogoStyle = styled.img`
  height: 120px;
  width: 140px;
`;

const IconStyled = styled.a`
  color: White;

  width: 100%;
  height: auto;
`;

const TextStyled = styled.p`
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterStyle className='main-footer col-sm-12'>
      <div className='container  col-sm-8'>
        <div className='row'>
          <div className='col-sm-3 col-md-3'>
            <h4>HOW CAN I HELP ?</h4>
            <IconContainer className='container'>
              <IconStyled href={"mailto:si.chemdye@gmail.com"}>
             
                <FontAwesomeIcon icon={faEnvelope} />
              </IconStyled>
            </IconContainer>
            <br />
            <h6>Adelaide | SA | Australia</h6>
          </div>
          <div className='col-sm-6 col-md-6'></div>
          <div className='col-sm-3 col-md-3'>
            <h4>WORK IN PROGRESS</h4>
            <IconContainer className='container  col-sm-12'>
              <IconStyled href={"/"}>
                <FontAwesomeIcon icon={faTwitter} />
              </IconStyled>
              <IconStyled href={"https://www.instagram.com/chemdye_si/"}>
                <FontAwesomeIcon icon={faInstagram} />
              </IconStyled>
              <IconStyled
                href={"https://www.linkedin.com/in/mariana-oksdath-mansilla/"}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </IconStyled>
            </IconContainer>
          </div>
        </div>
      </div>
      <br />
      <div
        className='containe  col-sm-12'
        style={{ display: "flex", justifyContent: "center" }}
      >
        <LogoStyle
          src={logo}
          className='d-inline-block align-top'
          alt=''
          loading='lazy'
        />
      </div>
      <br />
      <TextStyled>© 2020 | Alvaro Nieto | Web developer </TextStyled>
    </FooterStyle>
  );
}
