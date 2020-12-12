import styled from "styled-components";
import { keyframes } from "styled-components";

export const Dot = styled.div`
  border-radius: 50%;
  height: 9px;
  width: 9px;
  display: block;
  background-color: #5c75e580;
`;

export const Pulse = styled.span`
  animation: Anim 2s linear infinite;
  border-radius: 50%;
  display: block;
  height: 9px;
  width: 9px;
  background-color: #5c75e540;
  &:after {
    animation: Anim 2s linear infinite;
    border-radius: 50%;
    content: "";
    display: block;
    height: 9px;
    width: 9px;
  }

  @keyframes Anim {
    0% {
      -webkit-transform: scale(1);
    }

    50% {
      -webkit-transform: scale(3);
    }
    100% {
      -webkit-transform: scale(1);
    }
  }
`;

export const Container = styled.div`
  ${(props) => props.styling}
`;
