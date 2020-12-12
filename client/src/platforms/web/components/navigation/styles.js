import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowUp } from "../../../../assets/icons/arrow-up.svg";
import { ReactComponent as HavenIcon } from "../../../../assets/icons/haven.svg";
import { ReactComponent as OptionIcon } from "../../../../assets/icons/options.svg";

const appear = keyframes`
  0% { transform: translateY(-20px);  }
  50% { transform: translateY(10px);  }
  100% {transform: translateY(0px);   }
`;

export const Container = styled.header`
  height: 81px;
  z-index: 1000;
  position: fixed;
  width: 100vw;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const Icon = styled(HavenIcon)`
  height: 24px;
  width: 24px;

  .color {
    fill: #000;
  }
`;

export const Legal = styled.a`
  text-decoration: none;
`;

export const Tag = styled.div`
  padding: 4px 8px;
  background: #34d8ac;
  font-size: 10px;
  border-radius: 3px;
  margin-left: 12px;
  color: #26282c;
`;

export const Haven = styled.div`
  color: ${(props) => props.theme.type.primary};
  font-size: 20px;
  font-family: "Inter-Bold";
  margin-left: 12px;
`;

export const Brand = styled(Link)`
  width: auto;
  height: 40px;
  display: flex;
  align-items: center;
  margin-left: 16px;
  text-decoration: none;
`;

export const Auth = styled.div`
  padding: 12px 26px;
  background: ${(props) => props.theme.button.primary};
  border: none;
  margin-right: 16px;
  height: auto;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;

  transition: 500ms;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.button.primary_hover};
    transition: 500ms;
  }
`;

export const Logout = styled.div`
  padding: 12px 26px;
  background: ${(props) => props.theme.button.primary};
  border: none;
  margin-right: 16px;
  height: auto;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  text-decoration: none;

  transition: 500ms;

  &:hover {
    cursor: pointer;
    background: ${(props) => props.theme.button.primary_hover};
    transition: 500ms;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
`;

export const Tab = styled.div`
  height: 32px;
  background: pink;
  padding: 12px;
  
`;

export const OptionsSVG = styled(OptionIcon)`
  .bg {
    fill: rgba(255,255,255,0.5);
  }
`;

export const Arrow = styled.div`
  height: auto;
  width: 20px;
  background: white;
  right: 8px;
  position: absolute;
  z-index: 999;
`;

export const Arr = styled(ArrowUp)`
  position: fixed;
  margin-top: -7px;

  .bg {
    fill: ${(props) => props.theme.body.foreground};
  }

  .outline {
    stroke: ${(props) => props.theme.body.border};
  }
`;

export const Options = styled.button`
  height: 64px;
  width: 64px;
  background: none;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    cursor: pointer;
  }
`;

export const OptionsList = styled.div`
  height: auto;
  min-height: 140px;
  width: 280px;
  background: ${(props) => props.theme.body.foreground}

  border-radius: 4px;
  position: fixed;
  right: 12px;
  top: 74px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  animation: ${appear} 0.5s forwards;
`;

export const OptionsIcon = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionsSingleRow = styled.div`
  height: auto;
  color: white;
  padding-left: 20px;
  padding: 16px;
  font-size: 14px;
  text-align: center;

  &:hover {
    background: ${(props) => props.theme.body.background};
    cursor: pointer;
  }
`;

export const OptionsDoubleRow = styled.div`
  height: auto;
  color: white;
  padding-left: 20px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  align-items: center;
 

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;
