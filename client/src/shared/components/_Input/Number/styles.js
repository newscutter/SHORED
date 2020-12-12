import styled from "styled-components";
import SwitchIcon from "../../../../assets/icons/switch.png";

export const Container = styled.div`
  width: fit-content;
  display: flex;
  margin: 20px auto 40px auto;
  ${(props) => props.styling};
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0px auto;
`;

export const AmountsWrapper = styled.div`
  margin: 0px auto;
  display: block;
  over-flow: hidden;
`;

export const Symbol = styled.h4`
  display: inline-block;
  width: fit-content;
  margin: -20px 0px 0px 5px;
  color: #5c75e5;
  font-weight: 600;
`;

export const Input = styled.input`
  // width: ${(props) => props.width}px;
  max-width: 100%;
  padding: 0px;
  font-size: 48px;
  font-weight: 400;
  background-color: transparent;
  border: none;
  text-align: center;
  text-shadow: 0 0 0 #5c75e5;
  color transparent;
  cursor: text;
  display: inline-block;
  margin: 0px auto;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  &::placeholder {
    color: transparent;
    text-shadow: 0 0 0 #5c75e5;
    opacity: 1;
  }

  &:focus {
    outline: none;
  }

  ::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
 {
  -moz-appearance: textfield;
}
`;

export const Amounts = styled.div`
  display: inline-block;
  width: 350px;
`;

export const Switch = styled.div`
  background-image: url(${SwitchIcon});
  background-size: 13px;
  background-color: rgba(0, 0, 0, 0.075);
  background-position: center;
  background-repeat: no-repeat;

  transform: rotate(90deg);
  height: 36px;
  width: 48px;
  margin: 12px 11px 0px 12px;
  border-radius: 20px;
  cursor: pointer;
  display: inline-block;
  transition: 500ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export const Ticker = styled.p`
  width: fit-content;
  font-size: 17px;
  display: inline-block;
`;
