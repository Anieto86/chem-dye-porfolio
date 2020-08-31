import React from 'react'

import mariana from "./img/mariana.jpg"

const btnStyle = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "20px",
    padding: "10px"
}

const marianaStyle = {
    height: "10%",
    width: "20%",
    borderRadius: "20px",
    borderColor: "black"
}

const txtChem ={
    fontFamily: 'Abel',
}

export default function About() {
    return (
        <div className="container">
            <h1 style={txtChem}>Hi I'm Mariana Oksdath</h1>
            <h2 style={txtChem}>Scientific illustrator</h2>
            <br/>
            <img src={mariana} style={marianaStyle} alt="mariana"/>
            <p style={txtChem} >ChemDye born with the idea to help researchers to achieve their goals using the powerful tool of visual communication.  As a scientist myself, I understood that time and resources are essential in research, let’s not waste it. I will put all my knowledge in chemistry and biology to create the right image of your investigation in a short time frame.</p>
            <br/>
            <h2 style={txtChem} >About myself</h2>
            <br/>
            <p style={txtChem}>Hi, my name is Mariana Oksdath Mansilla I am a scientific illustrator. I have a BS. Chem (Hons),
            a PhD in neuroscience specialised on neuronal development, and a post-doc in brain cancer were
            I worked with cerebral organoid models.
            I am a scientist by training and an illustrator at heart. Art in all their expressions has been part of
            my life since I can remember, music, painting, illustrations, and that inner curiosity for art, visual
            communication, and science drove me to create “ChemDye”.
            My job is to transform complex science into highly accurate and compelling images, with one
            goal, improve science communication as a whole.
            I am currently based on Adelaide, Australia working with scientists around the globe. I help
            them on their images for journal publications, talks, posters including cool infographics, grant
            and fellowship applications. I help researchers to tell their story, and I love it.</p>
            <button style={btnStyle}>HOW CAN I HELP</button>
        </div>
    )
}
