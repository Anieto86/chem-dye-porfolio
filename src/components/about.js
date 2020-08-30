import React from 'react'


const btnStyle = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "20px",
    padding: "10px"

}

export default function About() {
    return (
        <div className="container">
            <h1>Hi I'm Mariana Oksdathr</h1>
            <h2>Scientific illustrator</h2>

            <p> "ChemDye" born with the idea to help researchers to achieve their goals using the powerful tool of visual communication.
                As a scientist myself, I understood that, in research, time and resources are essential, let’s not waste it. I will put all my knowledge in chemistry and biology to create the right image of your research in a short time frame.</p>


            <p> I have a BScH degree in Chemistry, a PhD in Neuroscience, and I am a Research Associate at the UniSA (Adelaide-Australia). Art in all their expressions has been part of my life since I can remember, music, painting, illustrations. When I started my PhD, I discovered the art behind the science, each scientific image was an opportunity to be creative, to express myself and to communicate science graphically. I started to teach myself different ways of illustrating, and I never stopped.</p>


            <button style={btnStyle}>HOW CAN I HELP</button>
        </div>
    )
}
