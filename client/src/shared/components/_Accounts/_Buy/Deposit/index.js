import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, QRCode, Icon, Wrapper, Status } from "./styles";
import Aux from "../../../Aux";
import Header from "../../UI/_Header/Centered";
import Content from "../../UI/Content";
import Detail from "../../../Detail/Default";
import DetailInput from "../../../Detail/Input";
import Button from "../../../_buttons/button";
import P from "../../../_Text/P";
import Pulsing from "../../../Pulse";
import DetailContainer from "shared/components/Detail/Container";
import {
  readableAmounts,
  shortenAddress,
} from "../../../../../utility/Utilities";

class BuyDeposit extends Component {
  render() {
    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Get " + this.props.data.ticker}
          P={"Deposit " + this.props.buy.paymentcurrency.name}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          back={() => this.props.routing("Options")}
        />
        <Content>
          <Wrapper>
            <Container>
              <Icon icon={this.props.buy.paymentcurrency.icon} />
              <QRCode />
            </Container>
          </Wrapper>
          <P styling={"text-align: center; color: #000; margin: 20px 0px;"}>
            Get XHV at rate below.
          </P>
          <DetailContainer
            styling={
              " width: calc(100% - 119px); display: inline-block; border-radius: 10px 0px 0px 10px;"
            }
          >
            <DetailInput
              name={"Deposit " + this.props.buy.paymentcurrency.ticker + " to:"}
              info={
                <Aux>
                  <P
                    styling={
                      "overflow-x: hidden; color: #000; text-align: right;"
                    }
                  >
                    {shortenAddress("1LjQCgitsFh7TD7PkeMwmSdV1iKbLhT26J")}
                  </P>
                </Aux>
              }
            />
          </DetailContainer>
          <Button
            label="COPY"
            highlight
            styling={
              "display: inline-block; height: 57px; border-top: 1px solid #5c75e5; border-radius: 0px 10px 10px 0px;"
            }
          />
          <DetailContainer styling={"margin: 20px 0px 0px 0px;"}>
            <Detail
              name={"Receive:"}
              info={
                readableAmounts((5939.65).toFixed(2)) +
                " " +
                this.props.data.ticker +
                "/" +
                this.props.buy.paymentcurrency.ticker
              }
            />
          </DetailContainer>

          <Status>
            <Pulsing styling={"margin: 4px 20px 0px 0px;"} />
            <P styling={" width: fit-content;  color: #5c75e5; opacity: 1"}>
              AWAITING DEPOSIT
            </P>
          </Status>
        </Content>
      </Aux>
    );
  }
}
export default BuyDeposit;
