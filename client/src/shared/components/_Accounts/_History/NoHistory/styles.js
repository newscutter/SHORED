import styled from "styled-components";
import NothingFoundIcon from "../../../../../assets/icons/nothingfound.png";

export const Icon = styled.div`
  width: 100%;
  height: 80px;
  background-image: url(${NothingFoundIcon});
  background-size: 80px;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) => props.styling}
`;
