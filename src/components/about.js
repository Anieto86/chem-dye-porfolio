import React from 'react'
import styled from 'styled-components'

import mariana from "./img/mariana.jpg"

const BtnStyle = styled.button`
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 10px;
    display:block;
     margin:auto;
`;

const MarianaStyle = styled.img`
    height: 10%;
    width: 20%;
    border-radius: 20px;
    display:block;
     margin:auto;
`;

const TxtChem = styled.h1`
     color: #392767;
     font-size:50px;
     font-weight: bold;
     margin-top:30px;
    font-family: Abel;
    text-align:center;
`;
    
const TxtSubChem = styled.h2`
     color: #392767;
     font-size:30px;
     font-weight: bold;
    font-family: Abel;
    text-align:center;
`; 

  const TextStyle = styled.p`
  font-weight: bold;
  font-family: Abel;
  font-size:20px;
   background-color: white;
`;

export default function About() {
    return (
        <div className="container">
            <TxtChem>Hi I'm Mariana Oksdath</TxtChem>
            <TxtSubChem>Scientific illustrator</TxtSubChem>
            <br />
            <MarianaStyle src={mariana} alt="mariana" />
            <br />
            <TextStyle>ChemDye born with the idea to help researchers to achieve their goals using the powerful tool of visual communication.  As a scientist myself, I understood that time and resources are essential in research, let’s not waste it. I will put all my knowledge in chemistry and biology to create the right image of your investigation in a short time frame.</TextStyle>
            <br />
            <TxtSubChem>About myself</TxtSubChem>
            <br />
            <TextStyle>Hi, my name is Mariana Oksdath Mansilla I am a scientific illustrator. I have a BS. Chem (Hons),
            a PhD in neuroscience specialised on neuronal development, and a post-doc in brain cancer were
            I worked with cerebral organoid models.
            I am a scientist by training and an illustrator at heart. Art in all their expressions has been part of
            my life since I can remember, music, painting, illustrations, and that inner curiosity for art, visual
            communication, and science drove me to create “ChemDye”.
            My job is to transform complex science into highly accurate and compelling images, with one
            goal, improve science communication as a whole.
            I am currently based on Adelaide, Australia working with scientists around the globe. I help
            them on their images for journal publications, talks, posters including cool infographics, grant
            and fellowship applications. I help researchers to tell their story, and I love it.</TextStyle>
            <br/>
            <BtnStyle >HOW CAN I HELP</BtnStyle>
            <br/>
        </div>
    )
}
