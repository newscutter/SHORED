import styled from "styled-components";
import ConfirmedIcon from "../../../../../../assets/icons/exchangeconfirmation.png";

export const Icon = styled.div`
  width: 100%;
  height: 80px;
  background-image: url(${ConfirmedIcon});
  background-size: 80px;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) => props.styling}
`;
