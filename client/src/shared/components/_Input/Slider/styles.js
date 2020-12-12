import styled from "styled-components";
import RightIcon from "../../../../assets/icons/slide.png";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  position: relative;

  ${(props) => props.styling}
`;

export const Label = styled.p`
  width: auto;
  margin: 12px 0px;
  font-weight: 400;
  font-size: 13px;
  font-weight: 500;
  opacity: 1;
  color: #fff;
  text-align: center;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  z-index: 1000;
  position: absolute;
  top: calc(50% - 10px);
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Input = styled.input`
  position: absolute;
  left: 0%;
  top: 0%;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 40px;
  background-color: #5c75e5;
  outline: none;
  border: none;
  border-radius: 30px;
  z-index: 100

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 34px;
    height: 34px;
    margin: 3px;
    background-color: white;
    box-shadow: -348px 30px 330px #5c75e5;
    border-radius: 20px;
    cursor: pointer;
    z-index: 100;
  }

  &::-moz-range-thumb {
    background-image: url(${RightIcon});
    background-size: 28px;
    background-position: center;
    background-repeat: no-repeat;
    width: 34px;
    height: 34px;
    background: white;
    margin: 3px 13px 3px 3px;

    border: 3px solid #5c75e5;
    border-radius: 20px;

    cursor: pointer;
    z-index: 100;
  }
`;
