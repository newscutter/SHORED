import React, { Component } from "react";
import { Icon } from "./styles";
import Aux from "../../../Aux";
import Header from "../../UI/_Header/Default";
import Content from "../../UI/Content";
import Button from "../../../_buttons/button";
import H4 from "../../../_Text/H4";
import P from "../../../_Text/P";

class EmptyWallet extends Component {
  render() {
    return (
      <Aux>
        <Header
          close={() => this.props.linking(this.props.data.ticker, "Default")}
        />
        <Content>
          <Icon styling={"margin: 20px 0px"} />
          <H4 styling={"color: #000; text-align: center;"}>
            Get {this.props.data.ticker} to send!
          </H4>
          <P
            styling={
              "color: #000; text-align: center; margin: 0px 0px 40px 0px;"
            }
          >
            Your {this.props.data.ticker} wallet is empty.
          </P>
          <Button
            highlight
            onClick={() => this.props.linking(this.props.data.ticker, "Buy")}
            label={"GET " + this.props.data.ticker.toUpperCase()}
            styling={"width: 100%; "}
          />
        </Content>
      </Aux>
    );
  }
}
export default EmptyWallet;
