// Library Imports
import React from "react";

// Relative Imports
import { Container, Item, Border, BorderLine } from "./styles";

const Tab = (props) => {
  return (
    <Container styling={props.styling}>
      <Item onClick={props.firstTabClickEvent} active={props.firstTabState}>
        {props.firstTabLabel}
      </Item>
      <Border>
        <BorderLine
          styling={props.thirdTabState ? "" : "background-color: transparent;"}
        />
      </Border>
      <Item onClick={props.secondTabClickEvent} active={props.secondTabState}>
        {props.secondTabLabel}
      </Item>
      {/* <Border>
        <BorderLine
          styling={props.firstTabState ? "" : "background-color: transparent;"}
        />
      </Border>
      <Item onClick={props.thirdTabClickEvent} active={props.thirdTabState}>
        {props.thirdTabLabel}
      </Item> */}
    </Container>
  );
};

export default Tab;
