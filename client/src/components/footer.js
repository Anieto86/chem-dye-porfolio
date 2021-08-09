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
import logo from "../img/CD_SI.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FooterStyle = styled.div`
  background-color: black;
  width: auto;
  padding: 2rem;
  position: relative;
  bottom: 0;
  color: white;
  height: auto;
  margin-top: 10rem;
`;

const LogoStyle = styled.img`
  height: 80px;
  width: auto;
`;

const IconStyled = styled.a`
  color: White;
  margin: 20px;
  font-size: 20px;
`;

const TextStyled = styled.p`
  text-align: center;
  font-family: Abel;
  font-size: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className='row'>
        <div className='container col-4' style={{ textAlign: "center" }}>
          <h5>HOW CAN I HELP?</h5>
          <IconContainer>
            <IconStyled href={"mailto:si.chemdye@gmail.com"}>
              <FontAwesomeIcon icon={faEnvelope} />
            </IconStyled>
          </IconContainer>
        </div>

        <div
          className='col-4'
          style={{ display: "flex", justifyContent: "center" }}
        >
          <LogoStyle
            src={logo}
            className='d-inline-block align-top'
            alt=''
            loading='lazy'
          />
        </div>

        <div className='container col-4' style={{ textAlign: "center" }}>
          <h5>WORK IN PROGRESS</h5>
          <IconContainer className='container  col-sm-12'>
            <IconStyled href={"https://twitter.com/mari_sciart?lang=es"}>
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
      <TextStyled>
        © 2020 | Alvaro Nieto | Web developer | Adelaide | Australia
      </TextStyled>
    </FooterStyle>
  );
}
