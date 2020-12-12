import styled from "styled-components";
import { keyframes } from "styled-components";

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  font-size: 0.1rem;
`;

const rotate360 = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  50% { -webkit-transform: rotate(180deg); }
  100% { -webkit-transform: rotate(360deg); }
`;

export const RotateDiv = styled.span`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border-top: ${(props) => props.size} solid ${(props) => props.color};
  border-right: ${(props) => props.size} solid ${(props) => props.color};
  border-bottom: ${(props) => props.size} solid ${(props) => props.color};
  border-left: ${(props) => props.size} solid rgba(0,0,0,0);
  background: transparent;
  display: inline-block;
  width: 14px;
  height: 14px;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  border-radius: 50%;
`;
