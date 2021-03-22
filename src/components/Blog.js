import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Blogs from "../data/dataBlog";

const BlogStyled = styled.div`
  display: flex;
  /* flex-wrap:wrap ; */
  justify-content: space-around;
  margin-top: 50px;
`;

const ImageStyled = styled.img`
  border-bottom: 10px solid;
  border-image: linear-gradient(
      90deg,
      rgba(57, 39, 103, 1) 66%,
      rgba(255, 255, 255, 1) 66%
    )
    1;
  height: 300px;
  object-fit: contain;
  margin: 20px;
`;

const TitleStyle = styled.p`
  color: #392767;
  font-family: barlow;
  font-size: 16px;
`;

const SubTitleStyle = styled.p`
  font-size: 12px;
  font-family: arial;
`;

export default function Blog() {
  return (
    <BlogStyled className='container'>
      {Blogs.map((blog, i) => (
        <div key={i}>
          <ImageStyled src={blog.img} alt='blog img' />
          <Link to={blog.link}>
            <TitleStyle className='container'>{blog.title}</TitleStyle>
          </Link>

          <SubTitleStyle className='container'>{blog.subTitle}</SubTitleStyle>
        </div>
      ))}
    </BlogStyled>
  );
}
