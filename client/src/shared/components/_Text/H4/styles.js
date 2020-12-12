import styled from "styled-components";

export const Headline = styled.h1`
  margin: 0px;
  padding: 0px;
  text-align: left;
  color: #fff;
  line-height: 1.25;
  font-size: 16px;
  font-weight: 500;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  ${(props) => props.styling}
`;
