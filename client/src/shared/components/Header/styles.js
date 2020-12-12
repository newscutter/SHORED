import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 30px);
  height: auto;
  position: fixed;
  padding: 0px 15px;
  background-color: #242426cc;
  top: 0%;
  left: 0%;
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  -moz-backdrop-filter: blur(15px);
  -ms-backdrop-filter: blur(15px);
  z-index: 999;
  ${(props) => props.styling}
`;

export const Button = styled.div``;

export const Wrapper = styled.div`
  max-width: 610px;
  width: 100%;
  margin: 0px auto;
  display: flex;
`;

export const Information = styled.div`
  width: 270px;
  float: left;
`;

export const Buttons = styled.div`
  padding: 0px;
  width: auto;
  height: auto;
  align: right;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) => props.styling}
`;
