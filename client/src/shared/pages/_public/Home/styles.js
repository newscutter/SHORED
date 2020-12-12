import styled from "styled-components";
import { NavLink } from "react-router-dom";
import media from "../../../../assets/styles/media.js";
import {
  background,
} from "../../../../assets/styles/colors.js";

export const Container = styled.div`
height: auto;
width: 350px;
max-width: calc(100% - 40px);
padding: 20px
border-radius: 10px;
position: absolute;
top: 45%;
left: 50%;
transform: translate(-50%, -50%);

`;

export const Logo = styled.img`
  height: 30px;
  width: auto;

   

`;

export const Buttons = styled.div`
  height: auto;
  display: flex;
  align-items: center;
margin: 20px 0px 0px 0px;
`;



export const Image = styled.img`
  height: auto;
  width: auto;
  z-index: 500;
  position: absolute;
  margin-left: -500px;

  ${media.laptop`
    margin-left: -500px;
 `};

  ${media.tablet`
   margin-left: -200px;

 `};

  ${media.mobile`
   margin-left: -100px;
 `};
`;



export const Heading = styled.div`
  font-size: 48px;
  color: white;
  line-height: 58px;
  text-align: center;
  font-weight: 700;
`;

export const Description = styled.div`
  font-size: 16px;
  color: #8a8d90;
  letter-spacing: 0;
  line-height: 28px;
  margin-top: 12px;
  margin-bottom: 24px;
  text-align: center;
`;

export const Button = styled(NavLink)`
  background: #7289da;
  border-radius: 4px;
  font-size: 16px;
  line-height: 36px;
  height: 56px;
  width: 196px;
  color: white;
  border: none;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  animation-duration: 5s;

  &:hover {
    background: #5b6eae;
    cursor: pointer;
    animation-duration: 4s;
  }
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
