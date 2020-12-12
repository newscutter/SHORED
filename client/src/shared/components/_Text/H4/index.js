// Library Imports
import React from "react";

// Relative Imports
import { Headline } from "./styles";

const Headline4 = ({ children, styling }) => {
  return <Headline styling={styling}>{children}</Headline>;
};

export default Headline4;
