import React from "react";
import { Input } from "./styles";

const TextInput = React.forwardRef((props, ref) => (
  <Input
    type="text"
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    onKeyPress={props.onKeyPress}
    ref={ref}
    PaymentID={props.PaymentID}
    styling={props.styling}
    readOnly={props.readOnly}
  />
));

export default TextInput;
