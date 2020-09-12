
//*https://www.youtube.com/watch?time_continue=522&v=g459Eia-bxw&feature=emb_logo
//*https://www.youtube.com/watch?v=o-cKmAeNJiA


import React from 'react'
import styled from 'styled-components'

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

//logo
import logo from './img/CD_SI.png'

const FooterStyle = styled.div`
background-color: black;
background-size: 100%;
width:100%;
padding:3rem;
position:relative;
bottom:0;
color:white;
height: auto;
margin-top:10rem;
opacity:0.9;

`;

const LogoStyle = styled.img`
  height: 120px;
  width: 140px;
  
`;

const IconStyled = styled.a`
color: White;
font-size: 2rem;
margin: 10px;
`;

// const IconContainerStyled = styled.div`

// `;

const TextStyled = styled.p`
text-align:center;
`;

export default function Footer() {
    return (
        <FooterStyle className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>HOW CAN I HELP</h4>
                        <br/>
                        <h6>email incono </h6>
                        <br/>
                        <h6>Adelaide | SA | Australia</h6>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col">
                        <div className="container">
                        <h4>WORK IN PROGRESS</h4>
                        <br/>
                            <IconStyled style={{ width: "30px" }} href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </IconStyled>
                            <IconStyled style={{ width: "30px" }} href={"https://www.instagram.com/chemdye_si/"}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </IconStyled>
                            <IconStyled style={{ width: "30px" }} href={"https://www.linkedin.com/in/mariana-oksdath-mansilla/"}>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </IconStyled>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container" style={{display: "flex", justifyContent: "center"}}>
            <LogoStyle src={logo} className="d-inline-block align-top" alt="" loading="lazy" />
            </div>
            <br/>
            <TextStyled >© 2020 | Alvaro Nieto | Web developer </TextStyled>
        </FooterStyle>

    )
}
