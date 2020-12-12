import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  height: 40px;
  grid-column: 1 / 3;
  overflow: hidden;
  border-radius: 10px;
  margin: 20px 0px 0px 0px;
  background-color: rgba(0, 0, 0, 0.075);
  ${(props) => props.styling};
`;

export const Item = styled.div`
  height: 100%;
fit-content;
  font-size: 13px;
  font-weight: 500;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
transition: 500ms;
  cursor: pointer;
  border-radius: 10px;
  color: ${(props) => (props.active ? "#fff" : `#5c75e5`)};

  ${(props) => (props.active ? "background-color: #5c75e5" : ``)};
`;

export const Border = styled.div`
  height: 40px;
  width: 1px;
`;

export const BorderLine = styled.div`
  height: 14px;
  margin: 13px 0px;
  background-color: rgba(0, 0, 0, 0.2);

  ${(props) => props.styling}
`;
