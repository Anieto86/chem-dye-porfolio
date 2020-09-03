import React from 'react'
import styled from 'styled-components'


const ImgBigContainer = styled.div`
    background-color:blue;
    float:left;
    margin: 10px;
    
`;


const ImgStyledP = styled.img`
   background-color:red;
   
   
`;



export default function Porfolio(props) {
    return (
        <ImgBigContainer className="container"style={{width: "50%", height: "600px", float: "left"}}>
                <ImgStyledP className="container" src={props.photo} style={{ width: "500px" }} alt="Responsive" />
        </ImgBigContainer>

    );
}



