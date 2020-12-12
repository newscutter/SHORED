import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  color: rgba(0, 0, 0, 0.8);
  background-color: rgba(0, 0, 0, 0.075);
  border-radius: 10px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  float: left;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;

  &:focus {
    outline: none;
  }

  &::placeholder {
   rgba(0,0,0,0.5);
  }

  ${(props) => props.styling}
`;
