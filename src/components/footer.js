import React from 'react'
import styled from 'styled-components'

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const FooterStyle = styled.div`
background-color: black;
background-size: 100%;
color:white;
width: 100%;
height: auto;
bottom: 0;
display:flex;
height: 25rem;
margin-top:10rem;
justify-content:space-evenly;
`;

const IconStyled = styled.a`
margin-top:2rem;
color: White;
 color: White;
 font-size: 3em;
`;



export default function Footer() {
    return (
        <div>
            <FooterStyle>
                <div>
                <h1>LET’S BE SOCIAL</h1>
                </div>
                <IconStyled href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faFacebook}  />
                </IconStyled>
                <IconStyled href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faTwitter}  />
                </IconStyled>
                <IconStyled href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faInstagram} />
                </IconStyled>
                <IconStyled href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faLinkedinIn}  />
                </IconStyled>
                <p className="linkfAl" >© 2020 | Alvaro Nieto </p>
            </FooterStyle>
        </div>
    )
}
