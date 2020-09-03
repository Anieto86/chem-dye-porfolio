import React from 'react'
import styled from 'styled-components'


const ImgBigContainer = styled.div`
    background-color:blue;
    
`;


const ImgStyledP = styled.img`
   background-color:red;
   margin:10px;
  
`;



export default function Porfolio(props) {
    return (
        <ImgBigContainer className="container">
           
                <ImgStyledP className="container" src={props.photo} style={{width: "20rem"}} alt="Responsive image" />
            
        </ImgBigContainer>
    );
}
