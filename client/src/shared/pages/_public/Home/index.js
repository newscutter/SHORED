// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Relative Imports
import { Container, Buttons, Logo } from "./styles";

import Footer from "../../../components/footer";
import Aux from "../../../components/Aux/"
import Link from "../../../components/_buttons/link/index";
//import Logo from "../../../components/Logo/index";
import H1 from "../../../components/_Text/H1";
import H4 from "../../../components/_Text/H4";
import Icon from "../../../../assets/SHORED2.png";

class Landing extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <Aux>
        <Container>
         <Logo
            src ={Icon}
          /> 
          <H1 styling="margin: 10px 0px;">
            Keep money safe and private in USD.
          </H1>
          <H4 styling={"opacity: 0.5; line-height: 1.5;"}>
            A secret and safe autonomous money account. Operated by you, instead
            of a bank.
          </H4>
          <H4 styling={"margin: 30px 0px 0px 0px; "}>
            Create your account.
          </H4>
          <Link
            to="/create"
            label="CREATE ACCOUNT"
            highlight
            styling="margin: 20px 0px;"
          />
          <Link
            to="/login"
            label="LOG IN"
            styling="background-color: #363638; &:hover {background-color: #363638};"
          />
          
        </Container>
        <Footer />
      </Aux>
    );
  }
}

export default Landing;
