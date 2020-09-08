import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
     color: #392767;
     font-size:50px;
     font-weight: bold;
     margin-top:30px;
    font-family: Abel;
    text-align:center;
`;



const SubTitle = styled.h3`
     color: #392767;
     font-size:30px;
     font-weight: bold;
     margin-top:30px;
    font-family: Abel;
    background-color: white;
`;

const TextStyle = styled.p`
font-weight: bold;
font-family: Abel;
font-size:20px;
background-color: white;
`;

export default function Testimonials() {
    return (
        <div className="container">
            <Title>Testimonials</Title>
            <SubTitle>Working with Mariana was a very pleasant and efficient experience. ChemDye knew how to transform
            our ideas and simple explanations into an artwork that completely sums up the objective of our work,
            with a beautiful design. I recommend ChemDye to take your scientific work to a higher level by
            gaining visibility.</SubTitle>
            <TextStyle>Dra. Mariana Andrea Peralta Profesora Adjunta IMBIV-CONICET| Córdoba Argentina</TextStyle>


            <SubTitle>It has been a pleasing experience working with Mariana. She provides a fast and professional image
            designing service. She is patient enough to modify the design more than once until she achieves a
            final satisfactory figure according to my advice and requirement. I highly recommend her.</SubTitle>

            <TextStyle>Dra. Mónica C. García | (UNITEFA)-CONICET-UNC | Córdoba Argentina </TextStyle>
        </div>
    )
}
