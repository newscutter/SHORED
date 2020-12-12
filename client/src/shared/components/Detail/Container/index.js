// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";

const DetailContainer = props => {
  return <Container styling={props.styling}>{props.children}</Container>;
};

export default DetailContainer;
