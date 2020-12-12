import styled from "styled-components";
import media from "../../../assets/styles/media";

export const Cell = styled.div`
  height: auto;
  max-height: 550px;
  max-width: 610px;
  width: 100%;
  margin: 0px 0px 20px 0px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.05);
  transition: 500ms;
  position: relative;

  ${(props) => props.styling}
`;
