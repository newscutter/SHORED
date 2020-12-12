import styled from "styled-components";
import ConfirmedIcon from "../../../../../assets/icons/confirmed.png";
import SpinnerIcon from "../../../../../assets/icons/loading.png";

export const Icon = styled.div`
  width: 80px
  height: 80px;
  background-image: url(${ConfirmedIcon});
  background-size: 80px;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) => props.styling}
`;

export const Spinner = styled(Icon)`
  background-image: url(${SpinnerIcon});

  -webkit-animation: spin 5s linear infinite;
  -moz-animation: spin 5s linear infinite;
  animation: spin 5s linear infinite;

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Wrapper = styled.div`
  width: fit-content;
  ${(props) => props.styling}
`;
