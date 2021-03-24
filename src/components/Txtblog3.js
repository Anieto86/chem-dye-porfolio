import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const TxtContainer = styled.div`
  margin: 1rem;
  padding: 50px;
  border: 1px solid #392767;
`;
const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const IconStyled = styled.a`
  color: black;
  width: 5%;
  font-size: 30px;
  color: #392767;
`;

export default function Txtblog3() {
  return (
    <div className='container'>
      <br />
      <TxtContainer c>
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
          Are you a scientist? Learn how social networks can twist your research in a few steps{" "}
        </h2>
        <br />
        <br />
        <p>
          When working as a researcher full-time, I was too busy to even care
          about social media or &ldquo;show my science to the world&rdquo;
          because who wants to see pretty colourful cells, right? Now I am a
          science communicator specialised in generating graphical and
          illustrated content for different audiences, and as you could imagine,
          my view changed radically. In the end, everything it's about
          perspective.
        </p>

        <p>
        Most scientists are spending their time thinking about experiments, writing grants and papers, trying to understand processes that no one understands yet. It seems almost unachievable to add an extra load, right? Let me put it differently. What if I tell you that you could attract PhD students and postdoc to your lab? That means more hands to work. Or establish new collaborations or possible partnerships, new contacts that could lead to new grants, and new fundings to make more of the awesome science you do. What if I tell you that your science could be noticed by local media and capture people's attention? How many benefits could that have?. Being on social media and communicating your work doesn't need to be complicated; let me help you with some insights.
        </p>

        <p
          style={{ textAlign: "center", color: "#392767", fontWeight: "bold" }}
        >
          BE PART OF THE ONLINE COMMUNITY
        </p>

        <p>
          First of all, you should be where your targeted audience is, and to
          save you some time, scientists are mostly on Twitter and Linkedin.
          I&rsquo;ll be honest, I&rsquo;m a newbie on Twitter, but I love
          LinkedIn. Your public image should represent the work that you do, but
          also who you are professional,what are your interests.
        </p>

        <p
          style={{ textAlign: "center", color: "#392767", fontWeight: "bold" }}
        >
          BE ACTIVE, CREATE CONTENT AND HAVE SOME FUN
        </p>

        <p>
        It is important to be active and connect with the community by answering comments, liking and sharing other people's work. For scientists, the content that you could upload is as simple as your daily work. Sometimes it is just a pic of your team working in the lab. Sometimes, it could be about that complicated grant you just got, and some tips for your colleagues will always be welcome. For many, scientists are a complete mystery; let's unravel the mystery and show the world what being a scientist is all about.

        </p>

        <p
          style={{ textAlign: "center", color: "#392767", fontWeight: "bold" }}
        >
          HOW YOU EXPLAIN SCIENCE, IT MAKE THE DIFFERENCE
        </p>

        <p>
        Now, you should pay attention to how you communicate your results because the idea is to reach everyone from your aunt to your colleagues in the other part of the planet. Don&rsquo;t use
          complicated terminology, just simple words. Visual content are your
          allies, it&rsquo;ll help to explain your discovery, and if you could
          make a video, even better. Most users skim the networks very quickly,
          only spending a few seconds in a post. So, to really keep someone's
          attention, it should be visually attractive. As scientists, we
          don&rsquo;t realise how impacting and visual our research is. But, you
          could easily test it by, for example, adding a simple microscopy video
          of a cell moving in a petri dish. You know, that video that you still
          have on your computer, the one that&rsquo;s not worthy of a journal or
          doesn't show an interesting discovery. Still, that's something that
          you could get a lot of attention and show the type of work you do.
        </p>

        <p
          style={{ textAlign: "center", color: "#392767", fontWeight: "bold" }}
        >
          SPREADING YOUR AMAZING WORK COULD CHANGE PEOPLE VIEWS
        </p>

        <p>
        As a scientific communicator, the veracity and precision of the information provided are crucial. Your role as a scientist is essential; educating about such universal topics as science will close the gap between society and the research community. It also will allow you to see people's needs and put research as a central topic of the discussion. We have to continue spreading science and educating our population to improve as a society.
        </p>
      </TxtContainer>
      <IconContainer className='container'>
        <IconStyled href={"/"}>
          <FontAwesomeIcon icon={faTwitter} />
        </IconStyled>
        <IconStyled href={"https://www.instagram.com/chemdye_si/"}>
          <FontAwesomeIcon icon={faInstagram} />
        </IconStyled>
        <IconStyled
          href={"https://www.linkedin.com/in/mariana-oksdath-mansilla/"}
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </IconStyled>
      </IconContainer>
    </div>
  );
}
