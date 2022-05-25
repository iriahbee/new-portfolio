import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const HomeSection = styled.section`
  background-color: var(--primary-color);
  min-height: 100vh;
  background-position: center;
	background-size: cover;
  display: flex;
  padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;


export const TextWrapper =styled.div`
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
top: 372px;

`;

export const BImageWrapper =styled.div`
      display: flex;
      position: absolute;
      left: 90px;
      top: -455px;
      z-index: 1;

`;

export const HomeFImage =styled.img`
  position: absolute;
      width: 372px;
      height: 437px;
      left: -40px;
      top: -8px;
      
    `;


export const HomeBImage =styled.img`
   position: relative;
      width: 1344px;
      height: 1000.94px;
      left: 400px;
      top: 300px;
      object-fit: cover;
      `;
export const ButtonWrapper =styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 20px;
      width: 420px;
      height: 50px;
`;
export const HomeButton = styled(Button)`

  background: "#ffffff4c";
  backdrop-filter: "none";
  color: var(--secondary-color);
  padding: 0px;
  text-decoration: none;

	&:before {
		background: #fff;
		height: 500%;
	}
	&:hover:before {
		height: 0%;
	}
	&:hover {
		color: white;
	}
`; 

