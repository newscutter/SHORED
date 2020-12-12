import styled from "styled-components";

export const Text = styled.h1`
  padding: 0px;
  margin: -1px 0px;
  color: white;
  line-height: 1;
  opacity: 0.5;
  font-weight: 300;
  text-align: left;
  font-size: ${(props) =>
    props.children === "$" || props.children === "₿" || props.children === "kr"
      ? "37px;"
      : "39px;"}
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  ${(props) => props.styling}
`;
