import styled from "styled-components";
import WalletIcon from "../../../../../assets/icons/unavailable.png";

export const Icon = styled.div`
  width: 100%;
  height: 80px;
  background-image: url(${WalletIcon});
  background-size: 80px;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) => props.styling}
`;
