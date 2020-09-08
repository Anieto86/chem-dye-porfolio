
//*https://www.youtube.com/watch?time_continue=522&v=g459Eia-bxw&feature=emb_logo
//*https://www.youtube.com/watch?v=o-cKmAeNJiA


import React from 'react'
import styled from 'styled-components'

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

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
                        <h4>Soy una columna muy puta</h4>
                        <h6>dame text</h6>
                        <h6>dame text</h6>
                        <h6>dame text</h6>
                    </div>
                    <div className="col">
                        <h4>Soy una columna muy puta2</h4>
                        <h6>dame text</h6>
                        <h6>dame text</h6>
                        <h6>dame text</h6>
                    </div>
                    <div className="col">
                        <div className="container">
                            <IconStyled style={{ width: "30px" }} href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </IconStyled>
                            <IconStyled style={{ width: "30px" }} href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </IconStyled>
                            <IconStyled style={{ width: "30px" }} href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </IconStyled>
                            <IconStyled style={{ width: "30px" }} href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
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
