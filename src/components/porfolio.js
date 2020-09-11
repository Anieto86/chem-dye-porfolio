import React from 'react'


import styled from 'styled-components'


const ImgBigContainer = styled.div`
    background-color:white;
    opacity:0.95;
    float:left;
    height: 550px;
    width: 100%;
    margin:20px;
    border:1px solid;
    bobox-shadow: 10px 10px 5px rgb(22, 22, 22);
   -moz-box-shadow: 10px 10px 5px  rgb(22, 22, 22);
   -webkit-box-shadow: 10px 10px 5px  rgb(22, 22, 22);
   -khtml-box-shadow: 10px 10px 5px  rgb(22, 22, 22);
   
     `;

//*for organize the img when have diferent size https://www.youtube.com/watch?v=qdRPKfJWngk
const ImgStyledP = styled.img`
  height: 400px;
  object-fit:contain;
  margin:auto;
 
`;



export default function Porfolio(props) {

 
    return (
        <ImgBigContainer className="container" style={{ width: "50%" }}>
            <div className="body" style={{margin: "auto"}}>
                <h5 className="title">{props.title}</h5>
                <ImgStyledP className="container" src={props.photo} alt="Responsive" />
            <p className="text">Some quick example text to build on the card title and make up the bulk of the card's contentdfsssssssss
            sdfffffffffffffffffffffff.</p>
            </div>
        </ImgBigContainer>
    );
}



