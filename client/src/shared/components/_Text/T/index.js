// Library Imports
import React from "react";

// Relative Imports
import { Text } from "./styles";

const Ticker = props => {
  return <Text styling={props.styling}>{props.children}</Text>;
};

export default Ticker;
