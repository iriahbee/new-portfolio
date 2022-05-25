import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { GiHamBurgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItemL,
  NavItemR,
} from "./Navstyle.jsx";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavMenu>
          <NavItemL>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="/about">About</NavLinks>
          </NavItemL>
        </NavMenu>
      </NavbarContainer>

      <NavLogo to="/">
        <NavIcon src={Logo} alt="logo" />

        <div className="toggle"></div>
      </NavLogo>

      <NavbarContainer>
        <NavMenu>
          <NavItemR>
            <NavLinks to="/projects">Projects</NavLinks>
            <NavLinks to="/contact">Say Hello</NavLinks>
          </NavItemR>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
