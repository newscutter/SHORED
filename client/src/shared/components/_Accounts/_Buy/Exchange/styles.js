import styled from "styled-components";
import ExchangeToIcon from "../../../../../assets/icons/exchangeto.png";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin: 20px auto 40px auto;
`;

export const Icon = styled.div`
  width: 50px;
  height: 62px;
  background-image: url(${ExchangeToIcon});
  background-size: 50px;
  opacity: 0.5;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
`;

export const Amount = styled.div`
  width: calc(50% - 25px);
  margin: 0px;
`;

export const Border = styled.div`
  height: 27px;
  width: 1px;

  background-color: #fff;
`;

export const BorderLine = styled.div`
  height: 13px;
  margin: 6px 0px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Buttons = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  width: fit-content;
  height: auto;
  margin: -6px 0px;
`;
