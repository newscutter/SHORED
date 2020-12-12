// Library Imports
import React from "react";

// Relative Imports
import { Container, Name, Input } from "../styles";
import P from "../../_Text/P";

const DetailInput = props => {
  return (
    <Container>
      <Name>
        <P styling={"color: #000; opacity: 1;"}>{props.name}</P>
      </Name>
      <Input>{props.info}</Input>
    </Container>
  );
};

export default DetailInput;
