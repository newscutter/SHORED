import React from "react";
import { Container } from "./styles";

const ListContainer = props => (
  <Container styling={props.styling}>{props.children}</Container>
);

export default ListContainer;
