import React, { Component } from "react";
//import * as clipboard from "clipboard-polyfill";

import Aux from "../../../Aux";
import Header from "../../UI/_Header/Default";
import Content from "../../UI/Content";
import Button from "../../../_buttons/button";
import TextInput from "../../../_Input/Text";
import List from "../../UI/List/index";
import ListContainer from "../../UI/List/Container";
import HavenIcon from "../../../../../assets/icons/haven-circle.svg";
import BitcoinIcon from "../../../../../assets/icons/bitcoin.svg";
import EthereumIcon from "../../../../../assets/icons/ethereum.svg";
import ChainlinkIcon from "../../../../../assets/icons/chainlink.png";
import Tab from "../../../tab";
import { shortenAddress } from "utility/Utilities";

class SendAddress extends Component {
  state = {
    page: "Haven",
    placeholder: "Haven, Bitcoin or Ethereum Address",
    address: "",
    options: "",
  };

  ref = React.createRef();
  componentDidMount() {
    //this.refs.SendAddressInput.focus();
  }

  routing = (page) => {
    this.setState({ page: page });
  };

  keyPress = (event) => {
    if (event.key === "Enter" && this.props.send.address.length > 97) {
      this.ref.current.onClick();
    }
  };

  paste = () => {
    // clipboard.readText().then((response) => {
    //   this.setState({
    //     address: response,
    //   });
    //   if (this.state.address.length > 97) {
    //     this.props.address(this.state.address, "AddressPaste");
    //   }
    // });
  };

  // tab = (tab) => {
  //   this.setState({ page: tab });
  //   switch (tab) {
  //     case "Haven":
  //       this.setState({ placeholder: "SHORED or Haven address" });
  //       break;
  //     case "Cryptocurrency":
  //       this.setState({
  //         placeholder: "Bitcoin or Ethereum address",
  //       });
  //       break;
  //     case "Email":
  //       this.setState({ placeholder: "Email address" });
  //       break;
  //   }
  //   this.refs.SendAddressInput.focus();
  // };

  renderSendOptions = (type) => {};

  render() {
    var Options;

    switch (this.props.send.address.length) {
      case 98:
        Options = (
          <List
            key={1}
            type={"Symbol"}
            symbol={"$"}
            name={"Send x" + this.props.data.ticker}
            subname={"to " + shortenAddress(this.props.send.address)}
            onClick={() => this.props.routing("Amount")}
            // info={"1%"}
            // reference={"Fee"}
            // onClick={() =>
            //   this.props.paymentmethod(
            //     [
            //       paymentcurrency.ticker,
            //       paymentcurrency.name,
            //       paymentcurrency.symbol,
            //       paymentcurrency.icon,
            //       this.props.buy.amount / paymentcurrency.price,
            //       "Deposit",

            //     ],
            //     "PaymentMethod"
            //   )
            // }
          />
        );
        break;
      case 34:
        Options = (
          <List
            key={1}
            icon={BitcoinIcon}
            name={"Send as Bitcoin"}
            subname={"Recipient gets BTC"}
            onClick={() => this.props.routing("Amount")}
            // info={"1%"}
            // reference={"Fee"}
            // onClick={() =>
            //   this.props.paymentmethod(
            //     [
            //       paymentcurrency.ticker,
            //       paymentcurrency.name,
            //       paymentcurrency.symbol,
            //       paymentcurrency.icon,
            //       this.props.buy.amount / paymentcurrency.price,
            //       "Deposit",

            //     ],
            //     "PaymentMethod"
            //   )
            // }
          />
        );
        break;

      case 42:
        Options = (
          <Aux>
            <List
              key={1}
              icon={EthereumIcon}
              name={"Ethereum"}
              subname={"Recipient gets ETH"}
              onClick={() => this.props.routing("Amount")}
              // info={"1%"}
              // reference={"Fee"}
              // onClick={() =>
              //   this.props.paymentmethod(
              //     [
              //       paymentcurrency.ticker,
              //       paymentcurrency.name,
              //       paymentcurrency.symbol,
              //       paymentcurrency.icon,
              //       this.props.buy.amount / paymentcurrency.price,
              //       "Deposit",

              //     ],
              //     "PaymentMethod"
              //   )
              // }
            />
            <List
              key={1}
              icon={ChainlinkIcon}
              name={"Chainlink"}
              subname={"Recipient gets LINK"}
              onClick={() => this.props.routing("Amount")}
              // info={"1%"}
              // reference={"Fee"}
              // onClick={() =>
              //   this.props.paymentmethod(
              //     [
              //       paymentcurrency.ticker,
              //       paymentcurrency.name,
              //       paymentcurrency.symbol,
              //       paymentcurrency.icon,
              //       this.props.buy.amount / paymentcurrency.price,
              //       "Deposit",

              //     ],
              //     "PaymentMethod"
              //   )
              // }
            />
          </Aux>
        );
        break;
      default:
        Options = null;
        break;
    }

    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Send x" + this.props.data.ticker}
          P={"Pick destination address:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
          content={
            <TextInput
              placeholder={this.state.placeholder}
              onChange={(event) => this.props.address(event, "AddressInput")}
              onKeyPress={this.keyPress}
              styling={"width: calc(100% - 40px); margin: 20px 0px 0px 0px"}
              ref="SendAddressInput"
            />
          }
        />
        <Content styling={"padding: 157px 20px 20px 20px; max-height: 350px"}>
          <ListContainer>{Options}</ListContainer>
          {/* <TextInput
            placeholder={this.state.placeholder}
            value={this.props.send.address}
            onChange={(event) => this.props.address(event, "AddressInput")}
            onKeyPress={this.keyPress}
            styling={[
              isHavenAddress
                ? "width: calc(100% - 116px);"
                : "width: calc(100% - 122px); ",
              "border-radius: 10px 0px 0px 10px;",
            ].join("")}
            ref="SendAddressInput"
          />
          {isHavenAddress ? (
            <Button
              onClick={() => this.props.routing("Amount")}
              label="NEXT"
              highlight
              styling={"border-radius: 0px 10px 10px 0px; "}
              ref="SendAddressButton"
            />
          ) : (
            <Button
              onClick={() => this.paste()}
              label="PASTE"
              styling={
                " border-radius: 0px 10px 10px 0px; font-weight: 500; background-color: rgba(0,0,0,0.075);  &:hover {background-color: rgba(0,0,0,0.075)}"
              }
            />
          )} */}
        </Content>
      </Aux>
    );
  }
}
export default SendAddress;
