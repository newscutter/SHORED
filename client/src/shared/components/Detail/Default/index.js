// Library Imports
import React from "react";

// Relative Imports
import { Container, Name, Information } from "../styles";
import P from "../../_Text/P";

const Detail = props => {
  return (
    <Container>
      <Name>
        <P styling={"color: #000; opacity: 1;"}>{props.name}</P>
      </Name>
      <Information>
        <P styling={"color: #000; text-align: right; word-break: break-all"}>
          {props.info}
        </P>
      </Information>
    </Container>
  );
};

export default Detail;
