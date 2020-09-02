import React from 'react'
import styled from 'styled-components'





const CardTitleStyled = styled.h3`
color : red;
font-family : Abel;

`;

export default function Porfolio(props) {
    return (
        <div className="container" style={{ }}>
        <div className="container card mb-3" style={{ width: "25rem", float: "left", margin : "10px" }}>
            <h3>Unpublish Work</h3>
            <img src={props.photo} className="card-img-top" alt="/" />
            <div className="card-body">
                <CardTitleStyled>hola title</CardTitleStyled>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        </div>
    );
}
