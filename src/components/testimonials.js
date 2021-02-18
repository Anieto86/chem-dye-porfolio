import React from "react";
import styled from "styled-components";

import monicaG from "./img/Monica Garcia_testimonials.jpg";
import MarianaP from "./img/MarianaPeralta_testimomials.jpg";
import ConstanzaF from './img/Constanza-Feliziani.jpg';
import BolloM  from './img/Mariana-Bollo.jpg';

const Title = styled.h1`
  color: #392767;
  font-size: 50px;
  font-weight: bold;
  margin-top: 30px;
  font-family: Abel;
  text-align: center;
`;
const SubTitle = styled.h3`
  color: #392767;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  font-family: Abel;
  background-color: white;
  /* opacity: 0.8; */
`;
const TextStyle = styled.p`
  font-weight: bold;
  font-family: Abel;
  font-size: 20px;
  background-color: white;
  opacity: 0.8;
`;

const ImasStyle = styled.img`
  width: 80px;
  height: 80px;
  float: right;
  object-fit: cover;
`;

export default function Testimonials() {
  return (
    <div className='container'>
      <Title>Testimonials</Title>

      <div className='container'>
        <ImasStyle src={MarianaP} alt='monica' />
        <SubTitle>
          Working with Mariana was a very pleasant and efficient
          experience. ChemDye knew how to transform our ideas and simple
          explanations into an artwork that completely sums up the objective of
          our work, with a beautiful design. I recommend ChemDye to take your
          scientific work to a higher level by gaining visibility.
        </SubTitle>
        <TextStyle>
          Dra. Mariana Andrea Peralta Profesora Adjunta IMBIV-CONICET| Córdoba
          Argentina
        </TextStyle>
      </div>

      <div className='container'>
        <ImasStyle src={monicaG} alt='mariana' />
        <SubTitle>
          It has been a pleasing experience working with Mariana. She provides a
          fast and professional image designing service. She is patient enough
          to modify the design more than once until she achieves a final
          satisfactory figure according to my advice and requirement. I highly
          recommend her.
        </SubTitle>
        <TextStyle>
          Dra. Mónica C. García | (UNITEFA)-CONICET-UNC | Córdoba Argentina
        </TextStyle>
      </div>

      <div className='container'>
        <ImasStyle src={ConstanzaF} alt='mariana' />
        <SubTitle>
          Working with Mariana was an amazing experience. She knew how to
          understand the message that we wanted to capture in the images. She
          was very friendly and efficient at the same time. I would definitely
          recommend the service for illustration for scientific publication .
        </SubTitle>
        <TextStyle>
          Dr. Constanza Feliziani - Associate Researcher, Instituto Ferreyra,
          Cordoba-Argentina.
        </TextStyle>
      </div>

      <div className='container'>
        <ImasStyle src={BolloM} alt='mariana' />
        <SubTitle>
          My research group contacted Mariana to make a drawing for a paper. The
          experience was very enriching. She transformed a simple graphic into a
          complex illustration that clearly reflected the conclusion of our
          work. I fully recommend Mariana for scientific illustrations.
        </SubTitle>
        <TextStyle>
          Dr. Mariana Bollo, Instituto Ferreyra, Cordoba-Argentina
        </TextStyle>
      </div>
    </div>
  );
}
