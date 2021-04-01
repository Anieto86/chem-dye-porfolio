import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const TxtContainer = styled.div`
  margin: 1rem;
  padding: 50px;
  border: 1px solid #392767;
`;

const IconContainer = styled.div`
 
`;
const IconStyled = styled.a`
  color: black;
  width: 5%;
  font-size: 30px;
  color: #392767;
  padding: 2%;
`;

export default function Txtblog2() {
  return (
    <div className='container'>
      <br />
      <TxtContainer>
        <h6 style={{ textAlign: "right" }}>By Mariana Oksdath Mansilla</h6>
        <h6 style={{ textAlign: "right" }}>2 min reading</h6>
        <br />
        <h2
          style={{
            textAlign: "center",
            color: "#392767",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          Scientific illustrators, making the message louder{" "}
        </h2>
        <br />
        <br />
        <p>
          When we think in science, most people imagine a researcher with crazy
          hair and white coat doing explosive experiments. But what does science
          really look like?
        </p>
        <p>
          Have you heard about scientific illustrators? Well, a scientific
          illustrator is a person that brings science into images. They have the
          ability to understand science in a way that a scientist does, and
          decode and translate it into an artistic image. Scientific
          illustrators usually have training in art, although the path in this
          career is quite diverse because there are only a few specific courses
          around the globe, and not all of us follow the same strategy. &nbsp;
        </p>
        <p>
          It is very common to see scientific illustrators that come from
          Academia maybe after a Master&rsquo;s degree, a PhD or, like me, after
          a couple of years as a postdoc. Naturally, they have a strong
          scientific background that needs to be complemented with the design
          and art part. Here the options are limitless, from attending to local
          art classes, some online courses, or self-learning. There is no right
          or wrong option. In the end, it is more about what is best for you and
          your circumstances.&nbsp;
        </p>
        <p>
          There are different types of illustrators, depending on their
          specialities and job types. For example, Medical Illustrators with a
          human anatomy background could be working - for example - with
          surgeons, doctors and hospitals. Scientific illustrators specialised
          in nature could contribute to museums, and illustrators specialised in
          research could help the scientific community, universities and private
          companies. The work format could go from freelance, a staff member, a
          design studio, or a science communication agency. Because this career
          is not too old and highly creative people are involved, new ideas and
          paths are coming every day.
        </p>
        <p>
          I have always struggled with the idea that a researcher has to do it
          all. Nowadays, It is more common to see scientific specialists in, for
          example, writing, illustrations, project management. It should be
          encouraged to use those professionals' services, asking for grants
          where they are an essential part of the budget. For example, in the
          case of Universities and research centres, a scientific illustrator is
          a key (even if they still do not know it) because an illustrator can
          conceptualise and interpret complex science into compelling, accurate
          and eye-catching images that make a whole difference when you are
          communicating science. Having an in-house service of this type could
          speed up the work of scientists.&nbsp;
        </p>
        <p>
          <p
            style={{
              textAlign: "center",
              color: "#392767",
              fontWeight: "bold",
            }}
          >
            A scientific illustrator makes the message stronger and helps
            scientists to make their voice louder.
          </p>
        </p>
        <p>
          If you want to know more about this amazing career I strongly
          recommend to check the &ldquo;Association of Medical
          Illustrators&rdquo; (ami.org), and &ldquo;Now Medical Studios&rdquo; (
          <a href='https://www.learnmedical.art/'>
            https://www.learnmedical.art/
          </a>
          )
        </p>
      </TxtContainer>
      <IconContainer className='container'>
        <IconStyled href={"/https://twitter.com/intent/tweet?url=https%3A%2F%2Fchemdyeillustrations.com%2Fblog%2Ftxt3&text="}>
          <FontAwesomeIcon icon={faTwitter} />
        </IconStyled>
        <IconStyled href={"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchemdyeillustrations.com%2Fblog%2Ftxt3"}>
          <FontAwesomeIcon icon={faFacebook} />
        </IconStyled>
        <IconStyled
          href={"http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fchemdyeillustrations.com%2Fblog%2Ftxt3&title="}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </IconStyled>
      </IconContainer>
    </div>
  );
}
