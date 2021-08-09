import React from "react";
import styled from "styled-components";

const SmallTitle = styled.h1`
  margin-top: 10rem;
  font-family: Abel;
  color: black;
  text-align: center;

  font-style: italic;
`;

const TitleStyled = styled.h1`
  font-family: Abel;
  color: black;
  text-align: center;
  font-size: 40px;
`;

const DescriptionStyle = styled.div`
  background: url("../components/img/Background.jpg");
  font-family: Abel;
  height: auto;
  color: white;
`;

const ContentStyle = styled.div`
  background: rgb(14, 205, 208);
  background: linear-gradient(
    72deg,
    rgba(14, 205, 208, 1) 31%,
    rgba(253, 224, 45, 1) 100%
  );
  font-family: Abel;
  height: auto;
  color: white;
  padding: 40px;
  width: auto;
`;

const ServiceStyle = styled.div`
  font-family: Abel;
  font-size: 5px;
`;

const LiStyled = styled.li`
  font-size: 20px;
`;

export default function Home() {
  return (
    <div >
      <div >
        <DescriptionStyle>
          <SmallTitle>Providing services in </SmallTitle>
          <TitleStyled>
            SCIENTIFIC ILLUSTRATION IN MEDICAL AND BIOLOGICAL SCIENCE
          </TitleStyled>
        </DescriptionStyle>
        <br />
        <br />
        <ContentStyle className='col-sm-12'>
          <h1 className='container' style={{ textAlign: "center" }}>
            What we do?
          </h1>
          <br />
          <ServiceStyle className='container'>
            <div className='row'>
              <div className='col-sm-4'>
                <h2>Science Experience</h2>
                <br />
                <h5>
                  I worked in Neuroscience studying neuronal development, growth
                  factors, and molecular motors, applying different animal
                  models. I also worked in Brain Cancer using as main techniques
                  organoids, stem cells and high-throughput platforms.
                </h5>
              </div>
              <div className='col-4'></div>
              <div className='col-sm-4'>
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
        </ContentStyle>
      </div>
    </div>
  );
}
