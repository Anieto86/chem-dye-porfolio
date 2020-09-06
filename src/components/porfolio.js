import React from 'react'
import styled from 'styled-components'


const ImgBigContainer = styled.div`
    background-color:black;
    float:left;
    height: 600px;
    width: 100%;
    padding:50px;
     `;

//*for organize the img when have diferent size https://www.youtube.com/watch?v=qdRPKfJWngk
const ImgStyledP = styled.img`
  height: 500px;
  object-fit:contain;
 
`;


export default function Porfolio(props) {
    return (
        <ImgBigContainer className="container" style={{width: "50%" }}>
                <ImgStyledP className="container" src={props.photo}  alt="Responsive" />
        </ImgBigContainer>
    );
}



