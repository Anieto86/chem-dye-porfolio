
//*https://www.youtube.com/watch?time_continue=522&v=g459Eia-bxw&feature=emb_logo
//*https://www.youtube.com/watch?v=o-cKmAeNJiA


import React from 'react'
import styled from 'styled-components'

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterStyle = styled.div`
background-color: black;
background-size: 100%;
width:100%;
padding:3rem;
position:relative;
bottom:0;
color:white;
height: 350px;
margin-top:10rem;
`;

const IconStyled = styled.a`
color: White;
width:10%;
font-size: 3em;
margin-top: 500rem;
margin: 20px;
height: 50px;
`;

const IconContainerStyled = styled.div`
display:flex;
justify-content: center;
margin-top:30px;
`;

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
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                                <div className="col">
                                    <h4>Soy una columna muy puta2</h4>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <h4>Soy una columna muy puta3</h4>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">


                            </div>


                    </div>
               
          
            <IconContainerStyled className="container">
                <IconStyled style={{ width: "75px" }} href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faFacebook} />
                </IconStyled>
                <IconStyled style={{ width: "75px" }} href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faTwitter} />
                </IconStyled>
                <IconStyled style={{ width: "75px" }} href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faInstagram} />
                </IconStyled>
                <IconStyled style={{ width: "75px" }} href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </IconStyled>
            </IconContainerStyled>
            <div className="container">
                <TextStyled >© 2020 | Alvaro Nieto | Web developer </TextStyled>
            </div>

            </FooterStyle>

    )
}
