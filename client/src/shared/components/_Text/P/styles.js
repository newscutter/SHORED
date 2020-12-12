import styled from "styled-components";

export const Text = styled.p`
  margin: 0px;
  padding: 0px;
  text-align: left;
  color: #fff;
  opacity: 0.5;
  font-size: 13px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  ${(props) => props.styling}
`;
