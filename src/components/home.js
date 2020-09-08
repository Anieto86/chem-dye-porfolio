import React from 'react'
import styled from 'styled-components'





const NameStyle = styled.h1`
     text-align:center;
     color: #392767;
     font-family: Abel;
     margin-top:30px;
     font-size:50px;
`;

const SmallTitle = styled.h1`
    margin-top:10rem;
   font-family: Abel;
   color:white;
   text-align:center;
   
`;

const TitleStyled = styled.h1`
   font-family: Abel;
   color:white;
   text-align:center;
   font-size:100px;
`;

const DescriptionStyle = styled.h2`
  background: rgb(68,213,199);
background: linear-gradient(77deg, rgba(68,213,199,1) 48%, rgba(71,204,131,1) 88%);
font-family: Abel;
height: 500px;

color:white;

`;

export default function Home() {
    return (
        <div>
            <div>
                <NameStyle>Mariana Oksdath Mansilla</NameStyle>
                <DescriptionStyle>
                <SmallTitle>Providing services in </SmallTitle>
                <TitleStyled > SCIENTIFIC ILLUSTRATION  IN MEDICAL AND BIOLOGY SCIENCE</TitleStyled>
                   <p className="container"  styled={{ textAlign:"center"}}>
                   ChemDye born with the idea to help researchers to achieve their goals using the powerful tool of visual communication.  As a scientist myself, I understood that time and resources are essential in research, let’s not waste it. I will put all my knowledge in chemistry and biology to create the right image of your investigation in a short time frame.</p> 
                </DescriptionStyle>
            </div>
        </div>
    )
}
