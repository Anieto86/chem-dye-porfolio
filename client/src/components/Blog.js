import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Blogs from "../data/dataBlog";

const BlogStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* background-color: red; */
  align-self: auto;
  margin-top: 50px;
`;

const TestContainer = styled.div`
  /* background-color: pink; */
  width: 40%;
  padding: 1rem;
 
`;

const ImageStyled = styled.img`
  border-bottom: 6px solid;
  border-image: linear-gradient(
      90deg,
      rgba(57, 39, 103, 1) 66%,
      rgba(255, 255, 255, 1) 66%
    )
    1;

  width: 80%;
  height:auto;
`;

const TitleStyle = styled.p`
  /* background-color: yellow; */
  color: #392767;
  font-family: arial;
  font-size: 15px;
  font-weight: bold;
  width: 80%;
`;

const SubTitleStyle = styled.p`
  /* background-color: orange; */
  font-size: 12px;
  font-family: arial;
  width: 80%;
  
`;

export default function Blog() {
  return (
    <BlogStyled >
      {Blogs.map((blog, i) => (
        <TestContainer key={i}>
          <ImageStyled src={blog.img} alt='blog img' />
          <Link to={blog.link}>
            <TitleStyle>{blog.title}</TitleStyle>
          </Link>
          <SubTitleStyle>{blog.subTitle}</SubTitleStyle>
        </TestContainer>
      ))}
    </BlogStyled>
  );
}
