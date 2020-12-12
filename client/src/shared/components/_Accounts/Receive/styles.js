import styled from "styled-components";

export const Container = styled.div`
  grid-column: 1 / 3;
  margin-top: -20px;
`;

export const Copy = styled.button`
  background-color: #5c75e5;
  color: #fff
  border-radius: 10px;
  width: 100%;
  font-size: 13px;
  font-weight: 500;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  text-decoration: none;
  transition: 500ms;
  outline: none;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  
  &:hover {
    background-color:  "#506be5";
    cursor: pointer;
    transition: 500ms;
  }

`;
