import React, { Component } from "react";
import { connect } from "react-redux";

import Aux from "../../../Aux";
import Header from "../../UI/_Header/Default";
import Content from "../../UI/Content";

//import { selectSimplePrice } from "shared/reducers/simplePrice";
import ListContainer from "../../UI/List/Container";
import List from "../../UI/List";
import Tab from "../../../tab";
import Button from "../../../_buttons/button";
import BitcoinLogo from "../../../../../assets/icons/bitcoin.svg";
import EthereumLogo from "../../../../../assets/icons/ethereum.png";
import TetherLogo from "../../../../../assets/icons/usdt.png";
import MoneroLogo from "../../../../../assets/icons/monero.svg";

class BuyOptions extends Component {
  state = {
    page: "Crypto",
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
        name: "Tether",
        icon: TetherLogo,
        symbol: "₮",
        ticker: "USDT",
        price: 1,
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

  routing = (page) => {
    this.setState({ page: page });
  };

  Options = () => {
    switch (this.state.page) {
      case "Account Funds":
        return (
          <ListContainer>
            <List
              symbol={"$"}
              type={"Symbol"}
              name={"Haven"}
              subname={"Convert XHV"}
              info={"0-2%"}
              reference={"Fee"}
              onClick={() =>
                this.props.paymentmethod(
                  ["xUSD", "US Dollar", "$", , 0, "Amount"],
                  "PaymentMethod"
                )
              }
            />
          </ListContainer>
        );
      case "Crypto":
        return (
          <Aux>
            <ListContainer>
              {this.state.paymentcurrencies.map((paymentcurrency) => {
                return (
                  <List
                    key={paymentcurrency.symbol}
                    icon={paymentcurrency.icon}
                    name={paymentcurrency.name}
                    subname={paymentcurrency.ticker + " Deposit"}
                    info={"1%"}
                    reference={"Fee"}
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
            </ListContainer>
            <Button
              label="SHOW MORE"
              styling="margin: 20px 0px 0px 0px; width: 100%; color: #5c75e5; background-color: transparent; &:hover {background-color: transparent;}"
            />
          </Aux>
        );
      // case "Fiat":
      //   return (
      //     <ListContainer>
      //       <List
      //         icon={BankIcon}
      //         name={"Bank Transfer"}
      //         subname={"SEPA  Transfer"}
      //         info={"1%"}
      //         reference={"Fee"}
      //       />
      //       <List
      //         icon={CreditCardIcon}
      //         name={"Credit Card"}
      //         subname={"Link Credit Card"}
      //         info={"3%"}
      //         reference={"Fee"}
      //       />
      //     </ListContainer>
      //   );
    }
  };

  render() {
    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Get x" + this.props.data.ticker}
          P={"Get " + this.props.data.token + " with:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          content={
            <Tab
              firstTabLabel="CRYPTO"
              secondTabLabel="ACCOUNT FUNDS"
              // thirdTabLabel="FIAT"
              firstTabState={this.state.page === "Crypto"}
              secondTabState={this.state.page === "Account Funds"}
              // thirdTabState={this.state.page === "Fiat"}
              firstTabClickEvent={() => this.routing("Crypto")}
              secondTabClickEvent={() => this.routing("Account Funds")}
              // thirdTabClickEvent={() => this.routing("Fiat")}
            />
            // <TextInput
            //   placeholder={"Search"}
            //   styling={"width: calc(100% - 40px); margin: 20px 0px 0px 0px"}
            //   // onChange={(event) => this.props.address(event, "AddressInput")}
            //   // onKeyPress={this.keyPress}
            //   // styling={[
            //   //   isHavenAddress
            //   //     ? "width: calc(100% - 116px);"
            //   //     : "width: calc(100% - 122px); ",
            //   //   "border-radius: 10px 0px 0px 10px;",
            //   // ].join("")}
            //   // ref="SendAddressInput"
            // />
          }
        />
        <Content styling={"padding: 157px 20px 20px 20px; max-height: 350px"}>
          {this.Options()}
        </Content>
      </Aux>
    );
  }
}

// const mapStateToProps = (state) => ({
//   nativeCurrency: state.NativeCurrency,
//   lastPrice: selectSimplePrice(state),
// });

export default // connect(mapStateToProps, {})

BuyOptions;
