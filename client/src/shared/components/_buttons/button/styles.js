import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.button`
  background-color: ${(props) =>
    props.highlight ? "#5c75e5" : "rgba(0, 0, 0, 0.2)"}}
  color: ${(props) => (props.highlight ? "#fff" : "#5c75e5")}}
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  padding: ${(props) => (props.small ? "9px 18px" : "12px 20px ")}}
  border: none;
  display: flex;
  justify-content: center;
  font
  text-decoration: none;
  transition: 500ms;
  outline: none;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  ${(props) => (props.small ? "float:right" : "")}
  
  &:hover {
    background-color: ${(props) =>
      props.highlight ? "#506be5" : "rgba(0, 0, 0, 0.3)"}}
    color: ${({ type }) =>
      (type === "Highlight" && "#fff") || (type === "Default" && "#506be5")}}
    cursor: pointer;
    transition: 500ms;
  }

  &:disabled {
    background-color: rgba(0,0,0, 0.075);
    color: rgba(255,255,255,0.15);
    cursor: not-allowed;
  }
  ${(props) =>
    props.detail
      ? "float: right; font-size: 12px; color: #506be5; background-color: #fff; margin: -6px 0px; padding: 6px 15px; display: inline-block; &:hover {background-color: #fff}"
      : ""}

      ${(props) =>
        props.icon
          ? " background-size: 15px; background-position: center; background-repeat: no-repeat; width: 40px; height: 40px;"
          : ""}

          background-image: url(${(props) => props.iconSrc});
        
  ${(props) => props.styling}

`;

// import styled from "styled-components";
// import media from "../../../../assets/styles/media.js";

// export const Container = styled.div`
//   background: clear;
//   border-radius: 4px;
//   font-size: 16px;
//   line-height: 36px;
//   height: 56px;
//   width: 196px;
//   color: white;
//   border: 1px solid rgba(255, 255, 255, 0.15);
//   margin: 8px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-decoration: none;
//   transition: 500ms;

//   &:hover {
//     background: white;
//     cursor: pointer;
//     transition: 500ms;
//     color: #7289da;
//     font-weight: 500;
//   }

//   ${media.mobile`
//     width: 100%;
//   `};
// `;
