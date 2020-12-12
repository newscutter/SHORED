import React from "react";
import { Input } from "./styles";

const TextInput = React.forwardRef((props, ref) => (
  <Input
    type="text"
    placeholder={"Add Payment ID"}
    value={props.value}
    onChange={props.onChange}
    styling={props.styling}
    ref={ref}
  />
));

export default TextInput;
