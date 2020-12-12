import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% + 40px);
  margin-right: -20px;
  margin-bottom: 20px;
  float: right;
  overflow-x: scroll;
  overflow-y: auto;
  white-space: nowrap;
  scrollbar-height: none;
  scrollbar-width: none;

  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    height: none;
    width: none;
    display: none;
  }
`;
