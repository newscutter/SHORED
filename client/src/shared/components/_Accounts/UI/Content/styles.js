import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 40px);
  max-height: 404px
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0px;
  padding: 95px 20px 20px 20px;
  scrollbar-height: none;
  scrollbar-width: none;
position: relative;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  &::-webkit-scrollbar {
    height: none;
    width: none;
    display: none;
  }


  ${(props) => props.styling}
`;
