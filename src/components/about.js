import React from "react";
import styled from "styled-components";

//testing

import mariana from "../img/mariana.jpg";

const MarianaStyle = styled.img`
  width: 25%;
  border-radius: 20px;
  display: block;
  margin: auto;
`;
const TxtChem = styled.h1`
  color: #392767;
  font-size: 50px;
  font-weight: bold;
  margin-top: 30px;
  font-family: Abel;
  text-align: center;
`;
const TxtSubChem = styled.h2`
  color: #392767;
  font-size: 30px;
  font-weight: bold;
  font-family: Abel;
  text-align: center;
`;
const TextStyle = styled.p`
  font-weight: bold;
  font-family: Abel;
  font-size: 30px;
  background-color: white;
`;
export default function About() {
  return (
    <div className='container'>
      <TxtChem>Hi I'm Mariana Oksdath Mansilla</TxtChem>
      <TxtSubChem>Scientific illustrator</TxtSubChem>
      <br />
      <MarianaStyle src={mariana} alt='mariana' />
      <br />
      <br />
      <TxtSubChem>About myself</TxtSubChem>
      <br />
      <TextStyle>
        Hi, my name is Mariana Oksdath Mansilla. I am a scientific illustrator
        with a BS. Chem (Hons), a PhD in neuroscience specialised on neuronal
        development, and a postdoc in brain cancer where I worked with cerebral
        organoid models.I am a scientist by training and an illustrator at
        heart. Art in all their expressions has been part of my life since I can
        remember, music, painting, illustrations. An inner curiosity for art,
        visual communication, and science drove me to create “ChemDye”. My job
        is to transform complex science into highly accurate and compelling
        images, with one goal, improve science communication as a whole. I am
        currently based on Adelaide, Australia working with scientists around
        the globe. I help them on their images for journal publications, talks,
        posters including cool infographics, grant and fellowship applications.
        I help researchers to tell their story, and I love it.
      </TextStyle>
    </div>
  );
}
