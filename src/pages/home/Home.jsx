import React from "react";
import { Link } from "react-router-dom";
import homeT from "../../assets/homeT.png";
import homeb from "../../assets/homeb.png";
import {
  HomeSection,
  HomeFImage,
  HomeBImage,
  ButtonWrapper,
  HomeButton,
  BImageWrapper,
  TextWrapper,
} from "./HomeStyle.jsx";
import { Button, Container, MainHeading } from "../../GlobalStyles";

function Home() {
  function goForm() {
    console.log("Download");
  }

  function goCV() {
    console.log("CV");
  }

  return (
    <HomeSection>
      <HomeFImage
        src={homeT}
        alt="One big planet with two small planets orbiting"
      />
      <Container>
      <TextWrapper>
        <MainHeading> {"{ JavaScript } Software Developer"}</MainHeading>
        <MainHeading style={{ color: "#c961de" }}>Solagne Lake</MainHeading>
        <MainHeading>Based in the UK</MainHeading>
       
        <ButtonWrapper>
          <Link style={{textDecoration: 'none'}} to="Contact">
            <HomeButton onClick={goForm}>Wanna Hire Me?</HomeButton>
          </Link>
          <Link style={{textDecoration: 'none'}} to="Contact">
            <Button onClick={goCV}>
              Download CV
            </Button>
          </Link>
        </ButtonWrapper>
      </TextWrapper>

        <BImageWrapper>
        <HomeBImage
          src={homeb}
          alt="One big planet with rings and stars"
          className="bottom"
        />
        </BImageWrapper>
      </Container>
    </HomeSection>
  );
}

export default Home;
