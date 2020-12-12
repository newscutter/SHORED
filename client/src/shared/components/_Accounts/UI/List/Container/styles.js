import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  margin: 0px;
  padding: 0px 20px;
  background-color: rgba(0, 0, 0, 0.075);
  border-radius: 10px;

  ${(props) => props.styling}
`;
