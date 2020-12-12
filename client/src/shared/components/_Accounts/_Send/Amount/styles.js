import styled from "styled-components";

export const Text = styled.h2`
  width: fit-content;
  padding: 0px;
  margin: 0px;
  font-size: 48px;
  display: inline-block;
  font-weight: 400;
  background-color: transparent;
  border: none;
  text-align: center;
  color: transparent;
  text-shadow: 0 0 0 #5c75e5;
  cursor: text;
  ${(props) => props.styling}
`;
