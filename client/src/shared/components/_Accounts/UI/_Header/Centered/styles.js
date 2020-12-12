import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  border-radius: 10px 10px 0px 0px;
  z-index: 500;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 0px;
  backdrop-filter: blur(10px);
  ${(props) => props.styling}
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Information = styled.div`
  width: calc(100% - 64px);
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
`;
