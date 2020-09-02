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



const SubTitle = styled.h4`
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
            <SubTitle>Dra. Mariana Andrea Peralta
            Profesora Adjunta
            Investigadora Adjunta
            Dpto. de Ciencias Farmacéuticas
            IMBIV-CONICET
            Facultad de Ciencias Químicas
            Universidad Nacional de Córdoba</SubTitle>
            <TextStyle>Working with Mariana was a very pleasant and efficient experience. ChemDye knew how to transform
            our ideas and simple explanations into an artwork that completely sums up the objective of our work,
            with a beautiful design. I recommend ChemDye to take your scientific work to a higher level by
            gaining visibility.</TextStyle>


            <SubTitle>Dra. Mónica C. García
            Unidad de Investigación y Desarrollo en Tecnología Farmacéutica (UNITEFA)-CONICET-UNC
            Dpto de Ciencias Farmacéuticas
            Facultad de Ciencias Químicas
            Universidad Nacional de Córdoba</SubTitle>

            <TextStyle>It has been a pleasing experience working with Mariana. She provides a fast and professional image
            designing service. She is patient enough to modify the design more than once until she achieves a
            final satisfactory figure according to my advice and requirement. I highly recommend her.</TextStyle>
        </div>
    )
}
