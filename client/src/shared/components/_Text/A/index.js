// Library Imports
import React from "react";

// Relative Imports
import { Text, Wrapper } from "./styles";
import Ticker from "../../_Text/T";

const Balance = (props) => {
  return (
    <Wrapper styling={props.styling}>
      {/* <Ticker styling={"margin: 0px 5px 0px 0px; text-align: right;"}>
        {props.ticker}
      </Ticker> */}
      <Text styling={props.styling}>{props.children}</Text>
    </Wrapper>
  );
};

export default Balance;
