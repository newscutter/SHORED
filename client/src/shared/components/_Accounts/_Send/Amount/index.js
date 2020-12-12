import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../../Aux";
import Header from "../../UI/_Header/Centered";
import Content from "../../UI/Content";
import Button from "../../../_buttons/button";
import NumberInput from "shared/components/_Input/Number";
import P from "../../../_Text/P";
import { Wrapper } from "./styles";
// import {
//   getForex,
//   getSimplePrice,
//   getNativeCurrencyPrice
// } from "../../../../../actions";
// import { convertToMoney } from "utility/utility";
// import { selectSimplePrice } from "../../../../../reducers/simplePrice";

class SendAmount extends Component {
  state = {
    initialPrimaryInput: true,
    primaryInputValue: 0,
    primaryInputTicker: this.props.data.ticker,
  };

  ref = React.createRef();
  componentDidMount() {
    this.setState({ primaryInputValue: this.props.send.amount });
    this.setState({ primaryInputTicker: this.props.data.ticker });
    this.refs.SendAmountInput.focus();
  }

  keyPress = (event) => {
    if (event.key === "Enter") {
      this.refs.SendAmountButton.onClick();
    }
  };

  Switch = (prevValue) => {
    // if (this.state.initialPrimaryInput) {
    //   let convertedAmount =
    //     Math.round(
    //       this.props.send.amount *
    //         this.props.lastPrice *
    //         this.props.nativeCurrency.price *
    //         100
    //     ) / 100;
    //   this.setState({ primaryInputValue: convertedAmount });
    //   this.setState({ primaryInputTicker: this.props.nativeCurrency.symbol });
    // } else {
    //   this.setState({ primaryInputValue: this.props.send.amount });
    //   this.setState({ primaryInputTicker: this.props.data.symbol });
    // }
    // this.setState({ initialPrimaryInput: !prevValue });
    // this.refs.SendAmountInput.focus();
  };

  setMaxAmount = () => {
    // let maxAmount = convertToMoney(
    //   this.props.balances[this.props.data.ticker].unlockedBalance
    // );
    // this.props.amount(maxAmount, "SetAmountInput");
    // if (this.state.initialPrimaryInput) {
    //   this.setState({ primaryInputValue: maxAmount });
    // } else {
    //   this.setState({
    //     primaryInputValue:
    //       Math.round(
    //         maxAmount *
    //           this.props.lastPrice *
    //           this.props.nativeCurrency.price *
    //           100
    //       ) / 100,
    //   });
    // }
    // this.refs.SendAmountInput.focus();
  };

  sendAmount = (event) => {
    // if (this.state.initialPrimaryInput) {
    this.props.amount(event, "EnterAmountInput");
    this.setState({ primaryInputValue: event.target.value });
    // } else {
    //   let convertedAmount = Math.round(
    //     this.state.primaryInputValue / this.props.lastPrice
    //   );
    //   this.props.amount(convertedAmount, "SetAmountInput");
    //   this.setState({ primaryInputValue: event.target.value });
    // }
  };

  render() {
    // let balance = convertToMoney(
    //   this.props.balances[this.props.data.ticker].balance
    // );

    // let availablebBalance = convertToMoney(
    //   this.props.balances[this.props.data.ticker].unlockedBalance
    // );

    let primaryValue = this.state.primaryInputValue;
    let secondaryValue = "≈ ";
    // + (!this.state.initialPrimaryInput
    //   ? (
    //       (this.state.primaryInputValue / this.props.lastPrice) *
    //       this.props.nativeCurrency.price
    //     ).toFixed(2) +
    //     " " +
    //     this.props.data.ticker
    //   : this.props.nativeCurrency.symbol +
    //     (
    //       this.state.primaryInputValue *
    //       this.props.lastPrice *
    //       this.props.nativeCurrency.price
    //     ).toFixed(2));

    return (
      <Aux>
        <Header
          S={this.props.data.ticker}
          H4={"Send x" + this.props.data.ticker}
          P={"Enter amount:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          back={() => this.props.routing("Address")}
        />
        <Content>
          <NumberInput
            placeholder="0.00"
            // primaryValue={primaryValue}
            // ticker={this.state.primaryInputTicker}
            secondaryValue={"x" + this.props.data.ticker}
            onChange={(event) => this.sendAmount(event)}
            onKeyPress={this.keyPress}
            maxOnClick={() => this.setMaxAmount()}
            // switchOnClick={() => this.Switch(this.state.initialPrimaryInput)}
            ref="SendAmountInput"
          />

          <Button
            highlight
            onClick={() => this.props.routing("Overview")}
            label="NEXT"
            styling={"width: 100%; "}
            disabled={
              !(
                (this.props.send.amount > 0)
                // &&
                // this.props.send.amount <= availablebBalance
              )
            }
            ref="SendAmountButton"
          />
        </Content>
      </Aux>
    );
  }
}

// const mapStateToProps = (state) => ({
//   ...state.simplePrice,
//   ...state.forex,
//   balances: state.xBalance,
//   lastPrice: selectSimplePrice(state),
//   nativeCurrency: state.NativeCurrency,
// });

export default // connect(mapStateToProps, {
//   getSimplePrice,
//   getNativeCurrencyPrice,
//   getForex,
// })
SendAmount;
