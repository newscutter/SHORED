import React, { Component } from "react";
import { Amount, Icon, Wrapper, Border, BorderLine, Buttons } from "./styles";
import Aux from "../../../Aux";
import Header from "../../UI/_Header/Centered";
import Content from "../../UI/Content";
import Button from "../../../_buttons/button";
import Detail from "../../../Detail/Default";
import DetailInput from "../../../Detail/Input";
import Slider from "../../../_Input/Slider";

import DetailContainer from "shared/components/Detail/Container";
import P from "../../../_Text/P";
import A from "../../../_Text/A";

class BuyExchange extends Component {
  state = {
    fee: 0.0002,
    time: 18,
    priority: "Default",
  };

  priority = (input) => {
    let newFee;
    let newTime;
    let newPriority;
    switch (input) {
      case "Free":
        newFee = 0;
        newTime = 48;
        newPriority = input;
        break;
      case "Default":
        newFee = 0.002;
        newTime = 18;
        newPriority = input;
        break;
      case "Express":
        newFee = 0.02;
        newTime = 2;
        newPriority = input;
        break;
      default:
        newFee = 0.002;
        newTime = 18;
        newPriority = input;
    }
    this.setState({ fee: newFee });
    this.setState({ time: newTime });
    this.setState({ priority: newPriority });
  };

  render() {
    let paymentcurrencyAmountwithFees =
      this.props.buy.paymentcurrency.amount +
      this.props.buy.paymentcurrency.amount * this.state.fee;

    const highlightStyling =
      "color: #fff; background-color: #506be5; border-radius: 8px; &:hover {background-color: #506be5}";

    const priorityButtonExpress = [
      this.state.priority === "Express" ? highlightStyling : null,
    ];
    const priorityButtonDefault = [
      this.state.priority === "Default" ? highlightStyling : null,
    ];
    const priorityButtonFree = [
      this.state.priority === "Free" ? highlightStyling : null,
    ];

    return (
      <Aux>
        <Header
          H4={
            this.props.buy.paymentcurrency.ticker +
            " → " +
            this.props.data.ticker
          }
          P={"Review exchange:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          back={() => this.props.routing("Amount")}
        />
        <Content>
          <Wrapper>
            <Amount>
              <A ticker={this.props.buy.paymentcurrency.symbol}>
                {paymentcurrencyAmountwithFees.toFixed(2)}
              </A>
              <P styling={"text-align: center; color: #000;"}>
                from {this.props.buy.paymentcurrency.ticker} wallet
              </P>
            </Amount>
            <Icon />
            <Amount>
              <A ticker={this.props.data.symbol}>{this.props.buy.amount}</A>
              <P styling={"text-align: center;  color: #000;"}>
                to {this.props.data.ticker} wallet
              </P>
            </Amount>
          </Wrapper>
          <DetailContainer>
            <DetailInput
              name="Speed:"
              info={
                <Buttons>
                  <Button
                    styling={[
                      "border-radius: 10px 0px 0px 10px;",
                      priorityButtonFree,
                    ].join(" ")}
                    detail
                    label="48H"
                    onClick={() => this.priority("Free")}
                  />

                  <Border>
                    <BorderLine />
                  </Border>
                  <Button
                    styling={[
                      "border-radius: 0px; margin: -6px 0px;",
                      priorityButtonDefault,
                    ].join(" ")}
                    detail
                    label="18H"
                    onClick={() => this.priority("Default")}
                  />
                  <Border>
                    <BorderLine />
                  </Border>
                  <Button
                    styling={[
                      "border-radius: 0px 10px 10px 0px;",
                      priorityButtonExpress,
                    ].join(" ")}
                    detail
                    label="2H"
                    onClick={() => this.priority("Express")}
                  />
                </Buttons>
              }
            />
          </DetailContainer>
          <DetailContainer styling={"margin: 20px 0px"}>
            <Detail
              name="Fee:"
              info={
                (
                  this.props.buy.paymentcurrency.amount * this.state.fee
                ).toFixed(2) +
                " " +
                this.props.buy.paymentcurrency.ticker +
                " (" +
                this.state.fee * 100 +
                "%)"
              }
            />
          </DetailContainer>
          <Slider
            type="EXCHANGE"
            onChange={(event) => this.props.confirm(event, "Confirmation")}
          />
        </Content>
      </Aux>
    );
  }
}
export default BuyExchange;
