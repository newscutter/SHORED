import styled from "styled-components";
import QRCodeIcon from "../../../../../assets/icons/QRCode3.png";

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${(props) => props.icon});
  background-size: 36px;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  z-index: 500;
`;

export const Wrapper = styled.div`
  width: fit-content;
  margin: 10px auto 0px auto;
  display: flex;
`;

export const Container = styled.div`
  width: 140px;
  height: 140px;
  background-color: rgba(0, 0, 0, 0.075);
  display: inline-block;
  position: relative;
  border-radius: 10px;
`;

export const QRCode = styled.div`
  width: 140px;
  height: 140px;
  background-image: url(${QRCodeIcon});
  background-size: 120px;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  z-index: 400;
`;

export const Status = styled.div`
  width: fit-content;
  margin: 30px auto 10px auto;
  display: flex;
`;
