import styled from "styled-components";

export const Headline = styled.h1`
  margin: 0px;
  padding: 0px;
  text-aling: left;
  color: white;
  line-height: 1.1;
  font-size: 40px;
  font-weight: 500;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  ${(props) => props.styling}
`;
