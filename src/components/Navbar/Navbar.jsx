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
	NavItem,
} from './NavbarStyles.js';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Nav>
      <NavbarContainer >
        <NavMenu className="left">
          <NavItem>
            <a href="home">Home</a>
          </NavItem>
          <NavItem>
            <a href="about">Abouttt</a>
          </NavItem>
        </NavMenu>
      </NavbarContainer>

      <NavLogo to="/">
     
          <NavIcon src={Logo} alt="logo" />
       
        <div className="toggle"></div>
        </NavLogo>

      <NavbarContainer>
        <NavMenu className="right">
          <NavItem>
            <a href="projects">Projects</a>
          </NavItem>
          <NavItem>
            <a href="contact">Say Hello</a>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}


  

export default Navbar;
