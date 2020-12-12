import styled from "styled-components";
import media from "../../../../assets/styles/media.js";
import HistoryIcon from "../../../../assets/icons/history.svg";

export const Wrapper = styled.div``;

export const Header = styled.div`
  display: flex;
  padding: 20px;
  width: calc(100% - 40px);
`;

export const Content = styled.div`
  width: calc(100% - 40px);
  max-height: 384px
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0px;
  padding: 0px 20px 20px 20px;
  scrollbar-height: none;
  scrollbar-width: none;

  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    height: none;
    width: none;
    display: none;
  }

  ${(props) => props.styling}
`;

export const Symbol = styled.div`
  width: 45px;
`;

export const Information = styled.div`
  width: 150px;
`;

export const Balance = styled.div`
  width: calc(100% - 185px);
`;

export const Buttons = styled.div`
  display: flex;
`;

export const History = styled.div`
  background-image: url(${HistoryIcon});
  background-size: 15px;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 10px;
  width: 40px;
  margin-left: calc(100% - 296px);
  cursor: pointer;
`;

export const Border = styled.div`
  height: 40px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const BorderLine = styled.div`
  height: 14px;
  margin: 13px 0px;
  background-color: rgba(255, 255, 255, 0.15);
`;
