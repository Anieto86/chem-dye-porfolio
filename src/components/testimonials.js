import React from "react";
import styled from "styled-components";

import testimonials from "../data/dataTestimonials.js";

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
      {testimonials.map((testimonial, i) => (
        <div className='container' key={i}>
          <ImasStyle src={testimonial.img} alt='reseach img' />
          <SubTitle>{testimonial.description}</SubTitle>
          <TextStyle>{testimonial.role}</TextStyle>
        </div>
      ))}
    </div>
  );
}
