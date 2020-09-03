import React from 'react'
import styled from 'styled-components'


const ImgBigContainer = styled.div`
    background-color:green;
    flex-direction: row;
    justify-content:space-evenly;
`;


const ImgStyled = styled.img`
   background-color:orange;
  
`;



export default function Publish(props) {
    return (
        <ImgBigContainer className="container">
                <ImgStyled className="container" src={props.photo} style={{width: "20rem"}} alt="Responsive image" />
        </ImgBigContainer>
    )
}
