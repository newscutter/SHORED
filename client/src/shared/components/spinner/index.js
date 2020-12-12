import { RotateDiv } from "./styles";
import React from "react";

export const Spinner = props => {
  return (
    <RotateDiv color={props.color} size={props.size} width={props.width} />
  );
};