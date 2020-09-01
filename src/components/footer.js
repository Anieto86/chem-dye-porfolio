import React from 'react'
import styled from 'styled-components'


const FooterStyle = styled.div`
background-color: black;
color:white;
width: 100%;
height: auto;
position:absolute;
bottom: 0;
`;



export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <h1>Hola Footer</h1>
                <h1>Hola Footer</h1>
                <h1>Hola Footer</h1>
                <h1>Hola Footer</h1>
            </div>
        </FooterStyle>
    )
}
