// Library Imports
import React from "react";

// Relative Imports
import { Title, Description } from "../../../../assets/styles/type.js";
import {
  Container,
  Main,
  Header,
  Buttons,
  Submit,
  Footer,
  Cancel,
  Body,
 Information,
 Icon,
 NavigationIcon
} from "./styles";
import { Spinner } from "../../spinner";
import H4 from "../../_Text/H4"
import P from "../../_Text/P"
import Button from "../../_buttons/button"

const Auth = ({ ...props }) => {
  return (
    <Container>
      <Header>
      <Information>
      <H4>{props.title}</H4>
          <P>{props.description}</P>
          </Information>
          <Icon to="/">
          <NavigationIcon />
        </Icon>
   
      </Header>
      {/* <Tabs>
        <Tab active={!props.selectedSeed} onClick={props.selectKeystore}>
          Vault File
        </Tab>
        <Tab active={props.selectedSeed} onClick={props.selectSeed}>
          Seed Phrase
        </Tab>
      </Tabs> */}
      <Main>
        <Body>{props.children}</Body>
       
          {/* <Cancel to="/">Cancel</Cancel> */}
          {/* <Submit disabled={props.disable} onClick={props.onClick}>
            {props.loading ? <Spinner color={"white"} /> : "Login"}
          </Submit> */}
        
        <Buttons>
        <Button
          disabled={props.disable}
          onClick={props.onClick}
          highlight
          label={
            props.loading ? (
              <Spinner width="14px" size="1px" color={"#fff"} />
            ) : (
              "LOG IN"
            )
          }
          styling="width: 100%;"
        />
          {/* <Button disabled={disable} onClick={onClick}>
            {loading ? <Spinner color={"white"} /> : "Login"}
          </Button> */}
        </Buttons>
      </Main>
      {/* <Footer>
        <Label>{props.label}</Label>
        <Route to={props.link}>{props.route}</Route>
      </Footer> */}
    </Container>
  );
};

export default Auth;
