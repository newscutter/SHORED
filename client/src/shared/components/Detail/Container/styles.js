import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  height: fit-content;
  padding: 1px 20px 20px 20px;
  background-color: rgba(0, 0, 0, 0.075);
  border-radius: 10px;

  ${(props) => props.styling}
`;
