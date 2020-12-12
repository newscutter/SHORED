import styled from "styled-components";

export const Text = styled.h2`
  width: fit-content;
  padding: 0px;
  margin: 0px 5px 0px 0px;
  font-size: 20px;
  display: inline-block;
  font-weight: 600;
  background-color: transparent;
  border: none;
  text-align: right;
  color: transparent;
  text-shadow: 0 -18px 0 #5c75e5;
  cursor: text;
  ${(props) => props.styling}
`;
