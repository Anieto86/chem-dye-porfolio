import React from 'react'

//LogoS
import logo from './img/CD_SI.png'


const logoHomeStyle = {
   marginLeft: "300px",
   marginTop: "75px"
}



export default function Home() {
    return (
        <div className="container">
            <img src={logo} style= {logoHomeStyle} alt="logo" />
            <h1>SCIENTIFIC ILLUSTRATION AND DESIGN</h1>
        </div>
    )
}
