import React from "react";
import styled from "styled-components";

import testimonials from '../data/dataTestimonials.js'

 //import monicaG from "../img/MonicaGarcia_testimonials.jpg";
//import MarianaP from "./img/MarianaPeralta_testimomials.jpg";
// import ConstanzaF from './img/Constanza-Feliziani.jpg';
// import BolloM  from './img/Mariana-Bollo.jpg';

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
      {console.log(testimonials)}
      <Title>Testimonials</Title>
      {/* //<ImasStyle src={monicaG} alt='reseach img' /> */}
      {testimonials.map((testimonial, i) => (
      <div className='container' key={i}>
        <ImasStyle src={testimonial.img} alt='reseach img' />
        <SubTitle>{testimonial.description}</SubTitle>
          <TextStyle>{testimonial.role }</TextStyle>
      </div>
  ))}
    </div>
  );
}
