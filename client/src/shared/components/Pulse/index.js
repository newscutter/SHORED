import React from "react";
import { Container, Dot, Pulse } from "./styles";

const Pulsing = props => (
  <Container styling={props.styling}>
    <Dot>
      <Pulse />
    </Dot>
  </Container>
);
export default Pulsing;
