import React from 'react'
import styled from 'styled-components'




const ImgStyled = styled.img`
  border: 5px  solid lightblue;
  width: 25rem;

`;

const CardStyled = styled.div`
width: 50%;
height: 30%;
`;

const CardTitleStyled = styled.h3`
color : red;
font-family : Abel;
`;

export default function Porfolio(props) {
    return (
        < CardStyled className="container card mb-3">
            <h3>Unpublish Work</h3>
            <ImgStyled src={props.photo} className="card-img-top" alt="/" />
            <div className="card-body">
                <CardTitleStyled>hola title</CardTitleStyled>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </p>
            </div>
        </CardStyled>
    );
}
