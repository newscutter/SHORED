import styled from "styled-components";

export const NavigationIcon = styled.div`
   background-image: url(${(props) => props.icon});
  background-size: 12px;
  box-sizing: content-box;
  opacity: 1;
  width: 30px;
  height: 30px;
  opacity: 0.5
  // background-color: rgba(0,0,0,0.2);
  background-position: center center;
  background-repeat: no-repeat;
  margin: 2px 0px 0px 0px;
  padding: 2px;
  border-radius: 50px;
  transition: all 500ms ease 0s;

  &:hover {
   opacity: 0.75
    background-color: rgba(0, 0, 0, 0.13333);
    cursor: pointer;
  }
`;
