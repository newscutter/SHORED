import React from "react";
import { Input, Container, Label } from "./styles";

const TextInput = React.forwardRef((props, ref) => (
  <Container>
    <Label>SLIDE TO {props.type}</Label>
    <Input
      type="range"
      min="1"
      max="100"
      defaultValue="0"
      onChange={props.onChange}
    />
  </Container>
));

export default TextInput;
