import styled from "styled-components";
import media from "../../../assets/styles/media.js";

export const Container = styled.div`
  display: flex;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.075);
  border-radius: 10px;
  margin: 0px 0px 20px 0px;
`;

export const Wrapper = styled.div`
  padding: 20px 40px 20px 20px
  float: left;
  width: fit-content;
`;

export const Inner = styled.div`
  width: calc(100% - 221px);
  border-radius: 10px;
  padding: 35px 20px 0px 40px;
`;

export const Border = styled.div`
  height: 100px;
  width: 1px;
`;

export const BorderLine = styled.div`
  height: 100px;
  margin: 20px 0px;
  background-color: rgba(0, 0, 0, 0.2);
`;
