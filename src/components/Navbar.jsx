import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.svg";
import { GiHamBurgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Nav>
      <div className="links">
        <ul className="left">
          <li className="active">
            <a href="home">Home</a>
          </li>
          <li>
            <a href="about">About</a>
          </li>
        </ul>
      </div>

      <div className="brand-container">
        <a href="#" className="brand">
          <img src={Logo} alt="logo" />
        </a>
        <div className="toggle"></div>
      </div>

      <div className="links">
        <ul className="right">
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="contact">Say Hello</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  gap: 100px;
  margin-left: 100px;
  position: absolute;
  width: 835px;
  height: 46px;
  left: 332px;
  top: 40px;

  .brand_container {
    flex: none;
    order: 2;
    flex-grow: 0;
    box-sizing: border-box;
    .toggle {
      display: none;
    }
  }

  img {
    width: 46px;
    height: 46px;
    border-radius: 32.8571px;
  }

  .links {
    ul {
      list-style-type: none;
      flex-direction: row;
      display: flex;

      .active {
        a {
          border-bottom: 0.2rem solid;
          border-color: #c961de;
        }
      }

      .left {
        display: flex;
        gap: 3rem;
      }
      .right {
        display: flex;
        gap: 3rem;
      }

      li {
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          margin: 25px;
        }
      }
    }
  }
`;

export default Navbar;
