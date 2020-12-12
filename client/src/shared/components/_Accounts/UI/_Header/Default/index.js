// Library Imports
import React from "react";

// Relative Imports
import {
  Wrapper,
  Container,
  Content,
  Symbol,
  Information,
  Icon,
  Blur
} from "./styles";
import { NavigationIcon } from "../styles";
import H4 from "../../../../_Text/H4";
import S from "../../../../_Text/S";
import P from "../../../../_Text/P";
import Aux from "../../../../Aux";
import CloseIcon from "../../../../../../assets/icons/close.png";

const HeaderDefault = props => {
  return (
    <Container styling={props.styling}>
      <Wrapper>
        <Symbol>
          <S styling={"color: #000"}>{props.S}</S>
        </Symbol>
        <Information>
          <H4 styling={"color: #000"}>{props.H4}</H4>
          <P styling={"color: #000"}>{props.P}</P>
        </Information>
        <Icon>
          <NavigationIcon onClick={props.close} icon={CloseIcon} />
        </Icon>
      </Wrapper>
      <Content>{props.content}</Content>
    </Container>
  );
};

export default HeaderDefault;
