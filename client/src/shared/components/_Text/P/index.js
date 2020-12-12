// Library Imports
import React from "react";

// Relative Imports
import { Text } from "./styles";

const Paragraph = ({ children, styling }) => {
  return <Text styling={styling}>{children}</Text>;
};

export default Paragraph;
