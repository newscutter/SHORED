
import { connect } from "react-redux";
import Landing from "../../../../../shared/pages/_public/Home";
import { Redirect } from "react-router";
import React, { Component } from "react";

class LandingWebContainer extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return <Redirect to="/wallet/assets" />;
    }

    return (
      <Landing/>
    );
  }
}



export const HomeWeb = LandingWebContainer;
