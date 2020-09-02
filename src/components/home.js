import React from 'react'
import styled from 'styled-components'

//LogoS
import logo from './img/CD_SI.png'


const LogoHomeStyle = styled.img`
     display:block;
     margin:auto;
     width : 500px;
     margin-top : 100px;
`;

const NameStyle = styled.h1`
     text-align:center;
     color: #392767;
     font-family: Abel;
     margin-top:30px;
     font-size:50px;
`;

export default function Home() {
    return (
        <div className="container" >
            <NameStyle>Mariana Oksdath</NameStyle>
            <LogoHomeStyle src={logo}  alt="logo" />
           
        </div>
    )
}
