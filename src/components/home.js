import React from 'react'
import styled from 'styled-components'


const SmallTitle = styled.h1`
   margin-top:10rem;
   font-family: Abel;
   color:black;
   text-align:center;
   
   font-style: italic;
   
`;

const TitleStyled = styled.h1`
   font-family: Abel;
   color:black;
   text-align:center;
   font-size:100px;
`;

const DescriptionStyle = styled.h2`
/* background: rgb(68,213,199);
background: linear-gradient(77deg, rgba(68,213,199,1) 48%, rgba(71,204,131,1) 88%); */
background: url('../components/img/Background.jpg');
font-family: Abel;
height: auto;
color:white;
`;

const ContentStyle = styled.div`
background: rgb(14,205,208);
background: linear-gradient(72deg, rgba(14,205,208,1) 31%, rgba(253,224,45,1) 100%);
font-family: Abel;
height: auto;
color:white;
padding:40px;
`;

const ServiceStyle = styled.div`
font-family: Abel;
font-size:15px;
`;


const MsgStyled = styled.p`
font-family: Abel;
font-size:30px;
text-align:center;
`;


const LiStyled = styled.li`
font-size:25px;
`;




export default function Home() {
    return (
        <div>
            <div>
             
                <DescriptionStyle>
                    <SmallTitle>Providing services in </SmallTitle>
                    <TitleStyled > SCIENTIFIC ILLUSTRATION  IN MEDICAL AND BIOLOGY SCIENCE</TitleStyled>
                </DescriptionStyle>
                <br />
                <br />
                <ContentStyle>
                    <h1 className="container" style={{ textAlign: "center" }}>What we do?</h1>
                    <h1 className="container" style={{ textAlign: "center" }}>I'M AM SCIENTIS BY TRAINING AND ILLUSTRATOR BY HERAT</h1>
                    <br />
                    <ServiceStyle className="container">
                        <div className="row">
                            <div className="col">
                                <h2>Science Experience</h2>
                                <br />
                                <h4>I worked in the field of Neuroscience, where I studied neuronal development, growth factors, and molecular motors. I applied cellular and molecular techniques, and I worked with different animal models. I worked in Brain Cancer using ad main techniques organoids, stem cells and high-throughput platforms.</h4>
                            </div>
                            <div className="col"></div>
                            <div className="col">
                                <h2>Services Provided</h2>
                                <ul>
                                    <br />
                                    <LiStyled>Graphical Abstract</LiStyled>
                                    <br />
                                    <LiStyled>Infographics</LiStyled>
                                    <br />
                                    <LiStyled>Talks Presentation</LiStyled>
                                    <br />
                                    <LiStyled>Scientific Journal Images</LiStyled>
                                </ul>
                            </div>
                        </div>
                    </ServiceStyle>
                    <br />
                    <br />
                    <MsgStyled className="container">
                        "ChemDye" born with the idea to help researchers to achieve their goals using the powerful tool of visual communication.  As a scientist myself, I understood that time and resources are essential in research, let’s not waste it. I will put all my knowledge in chemistry and biology to create the right image of your investigation in a short time frame.
                    </MsgStyled>
                </ContentStyle>
            </div>

        </div>
    )
}
