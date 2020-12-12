// Library Imports
import React from "react";

// Relative Imports
import { Text } from "./styles";

const Balance = ({ children, styling }) => {
  return <Text styling={styling}>{children}</Text>;
};

export default Balance;
