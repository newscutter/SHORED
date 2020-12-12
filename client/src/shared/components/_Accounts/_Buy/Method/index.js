import React, { Component } from "react";
//import { readableAmounts } from "../../../../../../utility/Utilites";
import Aux from "../../../Aux";
import Header from "../../UI/_Header/Centered";
import Content from "../../UI/Content";
import BitcoinLogo from "../../../../../assets/icons/bitcoin.svg";
import EthereumLogo from "../../../../../assets/icons/ethereum.png";
import MoneroLogo from "../../../../../assets/icons/monero.svg";
import List from "../../UI/List";
import ListContainer from "../../UI/List/Container";
import P from "../../../_Text/P";
import { throws } from "assert";

class BuyMethod extends Component {
  state = {
    paymentcurrencies: [
      {
        name: "Bitcoin",
        icon: BitcoinLogo,
        symbol: "₿",
        ticker: "BTC",
        price: 7800,
      },
      {
        name: "Ethereum",
        icon: EthereumLogo,
        symbol: "Ξ",
        ticker: "ETH",
        price: 140,
      },
      {
        name: "Monero",
        icon: MoneroLogo,
        symbol: "M",
        ticker: "XMR",
        price: 56,
      },
    ],
  };

  render() {
    let depositList = null;
    depositList = (
      <Aux>
        {this.state.paymentcurrencies.map((paymentcurrency) => {
          return (
            <List
              key={paymentcurrency.symbol}
              icon={paymentcurrency.icon}
              name={paymentcurrency.name}
              subname={"Pay with " + paymentcurrency.ticker}
              info={
                (this.props.buy.amount / paymentcurrency.price).toFixed(6) +
                " " +
                paymentcurrency.ticker
              }
              onClick={() =>
                this.props.paymentmethod(
                  [
                    paymentcurrency.ticker,
                    paymentcurrency.name,
                    paymentcurrency.symbol,
                    paymentcurrency.icon,
                    this.props.buy.amount / paymentcurrency.price,
                    "Deposit",
                  ],

                  "PaymentMethod"
                )
              }
            />
          );
        })}
      </Aux>
    );

    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={
            "Get " +
            Math.round(this.props.buy.amount / 100) * 100 +
            " " +
            this.props.data.ticker
          }
          P={"Get " + this.props.data.token + " with:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          back={() => this.props.routing("Shortcuts")}
        />
        <Content>
          <P styling={"margin: 0px 0px 10px 0px; color: #000; opacity: 1"}>
            Deposit:
          </P>
          <ListContainer>{depositList}</ListContainer>
        </Content>
      </Aux>
    );
  }
}
export default BuyMethod;
