// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";

const Body = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default Body;
