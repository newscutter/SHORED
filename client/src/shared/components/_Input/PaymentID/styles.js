import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  border: none;
  text-align: right;
  font-size: 13px;
  font-weight: 500;
  margin: 0px;
  padding: 0px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  width: 100%;
  height: 18px;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  &::placeholder {
    color: #5c75e5;
    font-weight: 500;
    opacity: 1;
  }

  &:focus {
    color: rgba(0, 0, 0, 0.5);
    outline: none;
    cursor: text;
  }

  &:focus::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0);
  }

  ${(props) => props.styling}
`;
