import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "../../../assets/styles/media.js";

export const Container = styled.div`
  height: auto;
  width: 100%;
  position: fixed;
  bottom: 0px;
  padding: 15px 0px;
  background-color: rgba(0, 0, 0, 0.2);

  ${media.mobile`
  display: none;
`}
`;

export const Wrapper = styled.div`
  width: fit-content;
  margin: 0px auto;
`;

export const Internal = styled(Link)`
  padding: 0px 10px;
  height: 13px
  font-size: 12px;
  font-weight: 500;
  color: white;
  opacity: 0.2;
  text-decoration: none;
  transition: 500ms;
  float:left;

  &:hover {
    opacity: 1;
    transition: 500ms;
    cursor: pointer;
  }
`;

export const Social = styled.img`
  width: 15px;
  opacity: 0.2;
  padding: 0px 10px;
  transition: 500ms;
  float: left;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const External = styled.a`
  width: auto;
  height: auto;
`;


// import styled from "styled-components";
// import {
//   primary,
//   secondary,
//   background
// } from "../../../assets/styles/colors.js";
// import media from "../../../assets/styles/media.js";
// import { Link } from "react-router-dom";

// export const Container = styled.div`
//   height: auto;
//   width: auto;
//   background: ${background};
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const Wrapper = styled.div`
//   height: auto;
//   width: 100%;
//   max-width: 1400px;
//   background: pink;
//   background: ${background};
//   padding: 80px 20px;
//   display: grid;
//   grid-gap: 20px;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

//   ${media.laptop`
//       grid-template-columns: 1fr 1fr;
//   `}

//   ${media.tablet`
//       grid-template-columns: 1fr 1fr;
//   `}
// `;

// export const Section = styled.div`
//   height: auto;
//   display: flex;
//   flex-direction: column;
// `;

// export const Title = styled.div`
//   font-family: -apple-system, system-ui, BlinkMacSystemFont;sans-serif;
//   font-size: 18px;
//   color: ${primary}
//   letter-spacing: 0;
//   text-align: center;
//   line-height: 30px;
//   margin-bottom: 12px;
// `;

// export const External = styled.a`
//   font-family: -apple-system, system-ui, BlinkMacSystemFont;sans-serif;
//   font-size: 16px;
//   color: ${secondary}
//   letter-spacing: 0;
//   text-align: center;
//   line-height: 26px;
//   text-decoration: none;
//   transition: 750ms;

//   &:hover {
//     color: #ffffff;
//     transition: 750ms;
//   }
// `;

// export const Internal = styled(Link)`
//   font-family: -apple-system, system-ui, BlinkMacSystemFont;sans-serif;
//   font-size: 16px;
//   color: ${secondary};
//   letter-spacing: 0;
//   text-align: center;
//   line-height: 26px;
//   text-decoration: none;
//   transition: 750ms;

//   &:hover {
//     color: #ffffff;
//     transition: 750ms;
//   }
// `;

// export const Disabled = styled.div`
//   font-family: -apple-system, system-ui, BlinkMacSystemFont;sans-serif;
//   font-size: 16px;
//   color: ${secondary};
//   letter-spacing: 0;
//   text-align: center;
//   line-height: 26px;
//   text-decoration: none;
//   transition: 750ms;
//   cursor: not-allowed;

//   &:hover {
//     color: #ffffff;
//     transition: 750ms;
//   }
// `;


// import styled from "styled-components";
// import {
//   primary,
//   secondary,
//   background,
// } from "../../../assets/styles/colors.js";
// import media from "../../../assets/styles/media.js";
// import { Link } from "react-router-dom";

// export const Container = styled.div`
//   height: auto;
//   width: auto;
//   background: ${background};
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const Wrapper = styled.div`
//   height: auto;
//   width: 100%;
//   max-width: 1400px;
//   background: pink;
//   background: ${background};
//   padding: 80px 20px;
//   display: grid;
//   grid-gap: 20px;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

//   ${media.laptop`
//       grid-template-columns: 1fr 1fr;
//   `}

//   ${media.tablet`
//       grid-template-columns: 1fr 1fr;
//   `}
// `;

// export const Section = styled.div`
//   height: auto;
//   display: flex;
//   flex-direction: column;
// `;

// export const Title = styled.div`
//   font-family: Inter-SemiBold;
//   font-size: 18px;
//   color: ${primary}
//   letter-spacing: 0;
//   text-align: center;
//   line-height: 30px;
//   margin-bottom: 12px;
// `;

// export const External = styled.a`
//   font-family: Inter-Regular;
//   font-size: 16px;
//   color: ${secondary}
//   letter-spacing: 0;
//   text-align: center;
//   line-height: 26px;
//   text-decoration: none;
//   transition: 750ms;

//   &:hover {
//     color: #ffffff;
//     transition: 750ms;
//   }
// `;

// export const Internal = styled(Link)`
//   font-family: Inter-Regular;
//   font-size: 16px;
//   color: ${secondary};
//   letter-spacing: 0;
//   text-align: center;
//   line-height: 26px;
//   text-decoration: none;
//   transition: 750ms;

//   &:hover {
//     color: #ffffff;
//     transition: 750ms;
//   }
// `;

// export const Disabled = styled.div`
//   font-family: Inter-Regular;
//   font-size: 16px;
//   color: ${secondary};
//   letter-spacing: 0;
//   text-align: center;
//   line-height: 26px;
//   text-decoration: none;
//   transition: 750ms;
//   cursor: not-allowed;

//   &:hover {
//     color: #ffffff;
//     transition: 750ms;
//   }
// `;
