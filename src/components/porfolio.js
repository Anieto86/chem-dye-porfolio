import React from "react";

import styled from "styled-components";

// const ImgBigContainer = styled.div`
//   background-color: white;
//   opacity: 0.95;
//   float: left;
//   height: auto;
//   border-radius: 10px;
//   margin: 60px;
//   margin-right: 50px;
//   border: solid 1px;

//   bobox-shadow: 10px 10px 5px rgb(22, 22, 22);
//   -moz-box-shadow: 10px 10px 5px rgb(22, 22, 22);
//   -webkit-box-shadow: 10px 10px 5px rgb(22, 22, 22);
//   -khtml-box-shadow: 10px 10px 5px rgb(22, 22, 22);
// `;

//*for organize the img when have diferent size https://www.youtube.com/watch?v=qdRPKfJWngk
// const ImgStyledP = styled.img`
//   height: 400px;
//   object-fit: contain;
// `;

// const CardFooter = styled.footer`
//   background-color: black;
//   color: yellow;
//   text-align: center;
//   font-family: Abel;
//   font-size: 30px;
//   height: auto;
// `;

const ContentStyle = styled.div`
  background: rgb(14, 205, 208);
  background: linear-gradient(
    72deg,
    rgba(14, 205, 208, 1) 31%,
    rgba(253, 224, 45, 1) 100%
  );
  font-family: Abel;
  height: auto;
  color: white;
  padding: 40px;
  width: auto;
  height: auto;
  margin-top: 3rem;
`;

const TitleStyled = styled.h1`
  font-family: Abel;
  color: white;
  text-align: center;
  font-size: 75px;
  font-weight: bold;
  margin-top: 1rem;
`;


const MsgStyled = styled.p`
  font-family: Abel;
  font-size: 25px;
  text-align: justify;
  margin: 20px 20px 20px 20px;
`;

export default function Porfolio() {
  return (
    <div>
      <ContentStyle className='row'>
        <TitleStyled className='col-4'>Welcome to our Gallery</TitleStyled>
        <div className='col-1'></div>
        <MsgStyled className='col-6'>   "ChemDye" born with the idea to help researchers to achieve their
            goals using the powerful tool of visual communication. As a
            scientist myself, I understood that time and resources are essential
            in research, let’s not waste it. I will put all my knowledge in
            chemistry and biology to create the right image of your
            investigation in a short time frame.</MsgStyled>
      </ContentStyle>
    </div>
  );
}
