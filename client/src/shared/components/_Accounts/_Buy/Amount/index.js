import React, { Component } from "react";
import { Wrapper } from "./styles";
import { connect } from "react-redux";
import Aux from "../../../Aux";
import Header from "../../UI/_Header/Centered";
import Content from "../../UI/Content";
import Button from "../../../_buttons/button";
import NumberInput from "shared/components/_Input/Number";

// import {
//   getForex,
//   getSimplePrice,
//   getNativeCurrencyPrice,
// } from "../../../../../actions";
//import { selectSimplePrice } from "../../../../../reducers/simplePrice";

class BuyAmount extends Component {
  state = {
    initialPrimaryInput: true,
    primaryInputValue: this.props.buy.amount,
    primaryInputTicker: this.props.data.symbol,
  };

  ref = React.createRef();
  componentDidMount() {
    this.setState({ primaryInputValue: this.props.buy.amount });

    this.setState({ primaryInputTicker: this.props.data.symbol });
    this.refs.BuyAmountInput.focus();
  }

  keyPress = (event) => {
    if (event.key === "Enter") {
      this.refs.BuyAmountButton.onClick();
    }
  };

  Switch = (prevValue) => {
    if (this.state.initialPrimaryInput) {
      let convertedAmount =
        Math.round(this.props.buy.amount * this.props.lastPrice * 100) / 100;
      this.setState({ primaryInputValue: convertedAmount });
      this.setState({
        primaryInputTicker: this.props.buy.paymentcurrency.symbol,
      });
    } else {
      this.setState({ primaryInputValue: this.props.buy.amount });
      this.setState({ primaryInputTicker: this.props.data.symbol });
    }

    this.setState({ initialPrimaryInput: !prevValue });
    this.refs.BuyAmountInput.focus();
  };

  setMaxAmount = () => {};

  buyAmount = (event) => {
    if (this.state.initialPrimaryInput) {
      this.props.amount(event, "EnterAmountInput");
      this.setState({ primaryInputValue: event.target.value });
    } else {
      let convertedAmount = Math.round(
        this.state.primaryInputValue / this.props.lastPrice
      );
      this.props.amount(convertedAmount, "SetAmountInput");
      this.setState({ primaryInputValue: event.target.value });
    }
  };

  render() {
    let primaryValue = this.state.primaryInputValue;
    let secondaryValue =
      "≈ " +
      (!this.state.initialPrimaryInput
        ? (this.state.primaryInputValue / this.props.lastPrice).toFixed(2) +
          " " +
          this.props.data.ticker
        : (this.state.primaryInputValue * this.props.lastPrice).toFixed(2) +
          " " +
          this.props.buy.paymentcurrency.ticker);

    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Get " + this.props.data.ticker}
          P={"Enter amount:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          back={() => this.props.routing("Options")}
        />
        <Content>
          <NumberInput
            placeholder="0"
            primaryValue={primaryValue}
            ticker={this.state.primaryInputTicker}
            secondaryValue={secondaryValue}
            onChange={(event) => this.buyAmount(event)}
            onKeyPress={this.keyPress}
            maxOnClick={() => this.setMaxAmount()}
            switchOnClick={() => this.Switch(this.state.initialPrimaryInput)}
            ref="BuyAmountInput"
          />

          <Button
            highlight
            onClick={() => this.props.routing("Exchange")}
            label="NEXT"
            styling={"width: 100%; "}
            disabled={this.state.primaryInputValue <= 0}
            ref="BuyAmountButton"
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
BuyAmount;
