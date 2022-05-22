import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import homeT from "../assets/homeT.png";
import homeb from "../assets/homeb.png";

function Home() {
  return (
    <Section id="home">
      <Navbar />
      <div className="home">
        <div className="top">
          <img
            src={homeT}
            alt="One big planet with two small planets orbiting"
          />
        </div>
        <div className="content">
          <div className="title">
            <h1>Curious Software Developer</h1>
            <h1 className="highlight">Solagne Lake</h1>
            <h1 className="title">Based in the UK</h1>
          </div>
          <div className="buttons">
            <Button>Wanna Hire Me?</Button>
            <Button>Download CV</Button>
          </div>
          <div className="bottom">
            <img
              src={homeb}
              alt="One big planet with rings and stars"
              className="bottom"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  background-color: var(--primary-color);
  background-size: cover;
  min-height: 100vh;

  img {
    .top {
      position: absolute;
      width: 372px;
      height: 437px;
      left: -80px;
      top: -8px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 60px;

    position: absolute;
    width: 869px;
    height: 344px;
    left: 257px;
    top: 272px;
   

    .title {
      h1{
      position: relative;
      font-style: normal;
      font-weight: 700;
      color: white;
      font-size: 50px;
      line-height: 130%;
      z-index: 2;
      }
      .highlight {
        color: #c961de;
      }
    }
    .bottom {
      display: flex;
      position: absolute;
      left: 90px;
      top: -455px;
      z-index: 1;
    }
    img.bottom {
      position: absolute;
      width: 1344px;
      height: 934.94px;
      left: 90px;
      top: 140.63px;
      
    }
  }
`;
const Button = styled.button``;
export default Home;
