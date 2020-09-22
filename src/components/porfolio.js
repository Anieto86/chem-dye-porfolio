import React from 'react'


import styled from 'styled-components'


const ImgBigContainer = styled.div`
    background-color:white;
    opacity:0.95;
    float:left;
    height: auto;
    border-radius:10px;
    margin:60px;
    margin-right:50px;
    border:solid 1px;

    bobox-shadow: 10px 10px 5px rgb(22, 22, 22);
   -moz-box-shadow: 10px 10px 5px  rgb(22, 22, 22);
   -webkit-box-shadow: 10px 10px 5px  rgb(22, 22, 22);
   -khtml-box-shadow: 10px 10px 5px  rgb(22, 22, 22);
   
     `;

//*for organize the img when have diferent size https://www.youtube.com/watch?v=qdRPKfJWngk
const ImgStyledP = styled.img`
  height: 400px;
  object-fit:contain;
  
 
`;

const CardFooter = styled.footer`
background-color:black;
color:yellow;
text-align:center;
font-family: Abel;
font-size:30px;
height: auto;
`;

export default function Porfolio(props) {
    return (
        <div className="container" >
        <ImgBigContainer  style={{ width: "40%" }}>
            <div className="body" >
                <ImgStyledP className="container" src={props.photo} alt="Responsive" />
            <CardFooter>{props.title}</CardFooter>
            </div>
        </ImgBigContainer>
        </div>
    );
}



