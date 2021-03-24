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

export default function Txtblog4() {
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
          Learn how to create a killing Graphical Abstract in only five steps{" "}
        </h2>
        <br />
        <br />
        <p>
          First things first, congratulations! If you are thinking about your
          graphical abstract, it means that you have already done the hardest
          part. You have proved your hypothesis and got some exciting results
          that are ready to be published, you rock.
        </p>
        <p>
          After all that hard work, why even bother with this minor detail?
          Well, a graphical abstract (GA) is not only a nice summary of your
          results. You have to see it as an opportunity to teach other
          scientists about these discoveries and engage the community with your
          work's novelty. At the end of the day, when you're looking for
          information, you spend a couple of minutes on each paper and even less
          sometimes. So, it would be best to create graphics that speak for
          themselves, selling your research in a few minutes.
        </p>

        <p
          style={{
            textAlign: "center",
            color: "#392767",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
          }}
        >
          <em>
            A winner GA is that one that everyone is going to use on their next
            talk.
          </em>
        </p>
        <p>
          I hope that at this point, I have already convinced you about the
          importance of paying attention to the graphical abstract because
          I&rsquo;m about to give you some killers tips to make your next GA
          shine.&nbsp;
        </p>

        <strong
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "20px",
          }}
        >
          TIP 1 :{" "}
          <span>Do not try to add all your scientific data in the GA</span>
        </strong>
        <p>
          Make it simple, as if you have to explain your findings in a few
          words. The GA has to have the whole story, almost the same as if you
          read the conclusion.
        </p>
        <br />
        <strong
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "20px",
          }}
        >
          TIP 2 : <span>Sketch your results</span>
        </strong>

        <p>
          You can start using a piece of paper, thinking that you're explaining
          your discoveries to a broad audience, people that aren't experts on
          your topic.
        </p>
        <br />
        <strong
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "20px",
          }}
        >
          TIP 3 : <span>Think in colours</span>{" "}
        </strong>
        <p>
          <p>
            Once you have a sketch that you are satisfied with, you need to
            start thinking about the design and aesthetics.&nbsp; The colour
            pallet is a big deal, but you don&rsquo;t have to do it alone.
            Several tools could help you to choose your next perfect pallet such
            as: coolors.co, design-seeds, and @ux.base on Instagram. Some blogs
            that I like that talk specifically about colour and esthetics are in
            &ldquo;Agent Majeure&rdquo; and &ldquo;Animate your Science&rdquo;.
            It&rsquo;s always a good idea to visit them.
          </p>
        </p>
        <br />
        <strong
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "20px",
          }}
        >
          TIP 4 : <span>Create a digital illustration</span>{" "}
        </strong>

        <br />
        <p>
          Many scientists are still using PowerPoint for their illustrations,
          and don't get me wrong, I love PowerPoint, but it&rsquo;s time to move
          on. My advice is that if you enjoy making illustrations on digital
          platforms, learn how to use Adobe Illustrator. Illustrator is a
          vectorial software that's going to increase quality and velocity in
          your drawings. Otherwise, you always have, a free software that does
          almost everything for you, BioRender. In BioRender, you have many
          pre-designed icons that you can combine to make a high-quality and
          professional image. If you don&rsquo;t have the time, the ability, or
          it&rsquo;s simply not your thing, you could always call a scientific
          illustrator that will be more than happy to assist you in the process.
        </p>
        <br />

        <strong
          style={{
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: "20px",
          }}
        >
          TIP 5 : <span>Aesthetics is important</span>{" "}
        </strong>

        <p>
          <span>
            A good GA should be clear, clean and accurate; the details matter
            here. Use the same font in all the illustration, and you also can
            change the size or properties to add some emphasis. Colours could
            help to focus the viewer's attention on what is the main point. To
            achieve a clean finish, leave white spaces, don&rsquo;t overload the
            illustrations with unnecessary information. The design should be
            functional, and it should provide the main points of your
            discoveries effortlessly.
          </span>
        </p>
      </TxtContainer>

      <IconContainer className='container'>
        <IconStyled href={"https://twitter.com/mari_sciart?lang=es"}>
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
