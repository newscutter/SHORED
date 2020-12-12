// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";

class Content extends Component {
  render() {
    return (
      <Container styling={this.props.styling}>{this.props.children}</Container>
    );
  }
}

export default Content;
