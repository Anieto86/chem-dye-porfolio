import React from 'react'
import styled from 'styled-components'

//LogoS
import logo from './img/CD_SI.png'


const LogoHomeStyle = styled.img`
   display:block;
     margin:auto;
     margin-top : 150px;
`;



export default function Home() {
    return (
        <div className="container">
            <LogoHomeStyle src={logo}  alt="logo" />
           
        </div>
    )
}
