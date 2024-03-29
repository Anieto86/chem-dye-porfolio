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

const IconContainer = styled.div``;
const IconStyled = styled.a`
  color: black;
  width: 5%;
  font-size: 30px;
  color: #392767;
  padding: 2%;
`;

export default function Txtblog1() {
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
          Thinking outside the box{" "}
        </h2>
        <br />
        <br />
        <p>
          Welcome to my blog, I&rsquo;m Mariana, a scientific designer and
          illustrator. In this space I will be discussing topics related to
          science communications. Are you in? Let&apos;s do this.&nbsp;
          <p>
            I decided to start with a more personal story, where I will guide
            you on what it means, at least to me, to change careers. &nbsp;
          </p>
        </p>
        <p>
          <p
            style={{
              textAlign: "center",
              color: "#392767",
              fontWeight: "bold",
            }}
          >
            Moving from the comfort zone to the unknown.
          </p>
        </p>
        <p>
          Nowadays, it seems more common to change career, and even to
          completely opposite directions. The professional life is much more
          dynamic; you change and reinvent yourself as many times as you decide.
          For me, this is only beneficial. It has enormous compensation to have
          a professional with a multidisciplinary background, capable of
          addressing problems from different angles, more adaptable and
          versatile. More importantly, people that change careers are more
          likely to enjoy their job because their own passion drives them.
        </p>
        <p>
          Many of us know when you are in a situation that is not fulfilling,
          where something is not quite right. But changing that reality
          doesn&rsquo;t seem like a possibility. In fact, for many years, in my
          case, it was just a pretty dream. Now I see that during all those
          years and all my professional experiences, I was walking to the place
          that I am now. Every step, right or wrong, helped me decide to look
          for a profession that meets my expectations. My first step was
          precisely that, take the decision that I want to do something else
          with my professional life.
        </p>
        <p>
          In the beginning, I was completely lost, but I became more curious and
          more receptive. The curiosity could lead you to a good blog or podcast
          or meet interesting people, like when I started to listen to
          &lsquo;Carreras Cient&iacute;ficas Alternativas&rsquo; (a podcast only
          in Spanish). The idea is to receive, in a passive way, information
          about professional transformation and start meeting people or programs
          that could help you.&nbsp;{" "}
        </p>
        <p>
          There isn&rsquo;t magic, it is a lot of hard work, but it is so worth
          it even if you are not sure if it is going to work, that by the way,
          you don't know. It is crucial to learn about yourself. Who are you
          professionally, your skills, what you enjoy the most, and do not
          forget your values. You need to be in a place that aligns and combines
          all of that. Then, you should open your world to see what else it's
          out there, what could you possibly do with all that set of skills that
          make you, you. Finally, be human and connect with people that share
          your same passions and values. People that are doing your dream job,
          understanding their path, learning from their experiences.
        </p>
        <p>
          This is a long journey; don&rsquo;t try to rush things. Take your time
          to think and digest all the information that you get. Plan, design a
          strategy, think small. It's easy to get trapped in big dreams, ideas
          that could take a lifetime, and that could be very demotivating.
          Setting up short-term goals with achievable tasks will give you the
          sense that you are moving forward because you are getting stuff done.
        </p>
        <p>
          I love making lists, so I did this one for you to get started in your
          next career change. You got this:
        </p>

        <ol>
          <li style={{ color: "#392767", fontWeight: "bold" }}>
            <span> Decide to change</span>
          </li>
          <li style={{ color: "#392767", fontWeight: "bold" }}>
            <span>Be curious and receptive.</span>
          </li>
          <li style={{ color: "#392767", fontWeight: "bold" }}>
            <span>
              Learn about yourself, take the time to know you better, what do
              you like, what are your skills, values, etc
            </span>
          </li>
          <li style={{ color: "#392767", fontWeight: "bold" }}>
            <span>Open your world, and learn about possibilities.</span>
          </li>
          <li style={{ color: "#392767", fontWeight: "bold" }}>
            <span>Be human and connect with people.</span>
          </li>
          <li style={{ color: "#392767", fontWeight: "bold" }}>
            <span>Set up achievable goals, making baby steps.</span>
          </li>
          <li style={{ color: "#392767", fontWeight: "bold" }}>
            <span>
              Keep you motivated. Making a professional change is hard, remember
              to take care of yourself all the way.
            </span>
          </li>
        </ol>
      </TxtContainer>
      <IconContainer className='container'>
        <IconStyled
          href={
            "https://twitter.com/intent/tweet?url=https%3A%2F%2Fchemdyeillustrations.com%2Fblog%2Ftxt1&text="
          }
        >
          <FontAwesomeIcon icon={faTwitter} />
        </IconStyled>
        <IconStyled
          href={
            "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchemdyeillustrations.com%2Fblog%2Ftxt1"
          }
        >
          <FontAwesomeIcon icon={faFacebook} />
        </IconStyled>
        <IconStyled
          href={
            "http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fchemdyeillustrations.com%2Fblog%2Ftxt1&title="
          }
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </IconStyled>
      </IconContainer>
    </div>
  );
}
