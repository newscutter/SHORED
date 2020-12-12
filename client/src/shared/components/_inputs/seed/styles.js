import styled from "styled-components";

export const Error = styled.div`
  font-size: 14px;
  color: #f04747;
  text-align: right;
`;

export const Paste = styled.button`
  height: auto;
  padding: 14px 0px;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #5c75e5;
  outline: none;
  transition: 500ms;
  background-color: transparent;
  &:hover {
    color: #506be5;
    cursor: pointer;
    transition: 500ms;
  }
  ${(props) => props.styling}
`;

export const Container = styled.div`
  width: auto;
  height: auto
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px
  display: flex;
  flex-direction: column;

  border: 1px solid  ${(props) => (props.error ? "#B2484A" : "transparent")};
  grid-column: ${(props) => (props.width ? "1 / 3" : null)};

`;

export const Field = styled.textarea.attrs((props) => ({
  type: "password",
  rows: props.rows ? props.rows : "4",
}))`
  color: rgba(255, 255, 255, 0.8);
  height: 155px;
  display: flex;
  align-items: flex-start;
  border: none;
  border-radius: 10px 10px 2px 2px;
  padding: 20px;
  font-size: 16px;
  
  resize: none;
  outline: none;
  transition: 500ms;
  -webkit-appearance: none;
  background-color: transparent;
  font-family: -apple-system, system-ui, BlinkMacSystemFont;sans-serif;

  &::placeholder {
    font-size: 16px;
    color: #7f7f7f;
    font-family: -apple-system, system-ui, BlinkMacSystemFont;sans-serif;
    
  }
  ${(props) => props.styling}
`;

export const Labels = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
`;


// import styled from "styled-components";
// import media from "../../../../assets/styles/media.js";

// export const Error = styled.div`
//   font-family: -apple-system, system-ui, BlinkMacSystemFont;sans-serif;
//   font-size: 14px;
//   color: #f04747;
//   text-align: right;
// `;

// export const Paste = styled.button`
//   height: auto;
//   padding: 12px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 15px;
//   margin-top: -3px;
//   border-radius: 0px 0px 4px 4px;
//   background: ${props => props.theme.input.input_background};
//   border: 1px solid ${props => props.theme.input.input_border};
//   color: ${props => props.theme.type.secondary};
//   outline: none;
//   transition: 500ms;

//   &:hover {
//     color: ${props => props.theme.type.primary};
//     cursor: pointer;
//     transition: 500ms;
//     border: 1px solid #5c5f63;
//   }

//   ${media.mobile`
//     display:  none;
//     `}
// `;

// export const Container = styled.div`
//   width: auto;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 12px;
//   grid-column: ${props => (props.width ? "1 / 3" : null)};
// `;

// export const Field = styled.textarea.attrs(props => ({
//   type: "password",
//   rows: props.rows ? props.rows : "4"
// }))`
//   display: flex;
//   align-items: flex-start;
//   border: 1px solid #4a4d52;
//   border-bottom: none;
//   border-radius: 4px 4px 0px 0px;
//   padding: 16px;
//   font-family: -apple-system, system-ui, BlinkMacSystemFont;sans-serif;
//   font-size: 16px;
//   line-height: 26px;
//   resize: none;
//   outline: none;
//   transition: 500ms;
//   -webkit-appearance: none;
//   background: ${props => props.theme.input.input_background};
//   border: 1px solid ${props => props.theme.input.input_border};
//   color: ${props => props.theme.input.input_value};

//   &:focus {
//     border: 1px solid #5c5f63;
//     transition: 500ms;
//   }

//   &::placeholder {
//     font-family: -apple-system, system-ui, BlinkMacSystemFont;sans-serif;
//     font-size: 16px;
//     color: #8a8d90;
//     line-height: 26px;
//   }
// `;

// export const Labels = styled.div`
//   height: auto;
//   width: auto;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 4px;
// `;


// import styled from "styled-components";
// import media from "../../../../assets/styles/media.js";

// export const Error = styled.div`
//   font-family: Inter-Regular;
//   font-size: 14px;
//   color: #f04747;
//   text-align: right;
// `;

// export const Paste = styled.button`
//   height: auto;
//   padding: 12px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 15px;
//   margin-top: -3px;
//   border-radius: 4px;
//   background: ${(props) => props.theme.input.input_background};
//   border: 1px solid ${(props) => props.theme.input.input_border};
//   color: ${(props) => props.theme.type.secondary};
//   outline: none;
//   transition: 500ms;

//   &:hover {
//     color: ${(props) => props.theme.type.primary};
//     cursor: pointer;
//     transition: 500ms;
//     border: 1px solid #5c5f63;
//   }

//   ${media.mobile`
//     display:  none;
//     `}
// `;

// export const Container = styled.div`
//   width: auto;
//   height: auto;
//   display: flex;
//   flex-direction: column;
//   padding-bottom: 12px;
//   grid-column: ${(props) => (props.width ? "1 / 3" : null)};
// `;

// export const Field = styled.textarea.attrs((props) => ({
//   type: "password",
//   rows: props.rows ? props.rows : "4",
// }))`
//   display: flex;
//   align-items: flex-start;
//   border: 1px solid #4a4d52;
//   border-bottom: none;
//   border-radius: 4px;
//   padding: 16px;
//   font-family: Inter-Regular;
//   font-size: 16px;
//   line-height: 26px;
//   resize: none;
//   outline: none;
//   transition: 500ms;
//   -webkit-appearance: none;
//   background: ${(props) => props.theme.input.input_background};
//   border: 1px solid ${(props) => props.theme.input.input_border};
//   color: ${(props) => props.theme.input.input_value};

//   &:focus {
//     border: 1px solid #5c5f63;
//     transition: 500ms;
//   }

//   &::placeholder {
//     font-family: Inter-Regular;
//     font-size: 16px;
//     color: #8a8d90;
//     line-height: 26px;
//   }
// `;

// export const Labels = styled.div`
//   height: auto;
//   width: auto;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 4px;
// `;
