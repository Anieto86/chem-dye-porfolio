import React from 'react'
import styled from 'styled-components'




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

const ImgBigContainer = styled.div`
    background-color:white;
    opacity:0.95;
    width: 30%;
    height: auto;
    border-radius:10px;
    margin:10px;
    border:solid 1px;
    &:hover {transform:scale(1.08);}
`;

export default function Journal(props) {
    return (
        
        
            <ImgBigContainer  className="card"> 
                <ImgStyledP src={props.photo} className="card-img-top" alt="Responsive" />
                <div className="body">
                <CardFooter>Graphical Abstract</CardFooter>
                </div>
            </ ImgBigContainer >
    )
}
