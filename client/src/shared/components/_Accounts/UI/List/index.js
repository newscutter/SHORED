import React from "react";
import {
  Container,
  Amount,
  Reference,
  Names,
  Information,
  Icon,
  Symbol,
  Chevron,
} from "./styles";
import P from "../../../_Text/P";

const AccountList = (props) => (
  <Container onClick={props.onClick}>
    {props.type === "Symbol" ? (
      <Symbol>{props.symbol}</Symbol>
    ) : (
      <Icon icon={props.icon} />
    )}
    <Names>
      <P styling={"color: #000; opacity: 1"}>{props.name}</P>
      <P styling={"color: #000; "}>{props.subname}</P>
    </Names>

    {props.label ? (
      <Information>
        <Amount>{props.info + " " + props.reference}</Amount>
      </Information>
    ) : null}
    <Chevron />
  </Container>
);
export default AccountList;
