// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Relative Imports
import {
  Header,
  Symbol,
  Information,
  Balance,
  Buttons,
  History,
  Content,
  Border,
  BorderLine,
  Wrapper,
} from "./styles";
import H4 from "../../_Text/H4";
import S from "../../_Text/S";
import P from "../../_Text/P";
import B from "../../_Text/B";
import Button from "../../_buttons/button";

import Aux from "../../Aux";

//import { convertToMoney, convertToPrice } from "utility/utility";
//import { Ticker } from "../../../../reducers/types";
////import { selectSimplePrice } from "shared/reducers/simplePrice";

class Default extends Component {
  render() {
    // let amount;
    // let price;
    // let value;

    // if (this.props.data.ticker === "XHV") {
    //   amount = convertToMoney(
    //     this.props.balances[this.props.data.ticker].balance
    //   );
    //   price = this.props.lastPrice;
    //   value = convertToPrice(amount * price);
    // } else {
    //   amount = 0.0;
    //   value = 0.0;
    // }

    return (
      <Aux>
        <Wrapper>
          <Header>
            <Symbol>
              <S>{this.props.data.symbol}</S>
            </Symbol>
            <Information>
              <H4>{this.props.data.token}</H4>
              {/* {/* <P>{amount.toFixed(4) + " " +  */}
              <P>{"0.323" + this.props.data.ticker}</P>
            </Information>
            <Balance>
              <B>
                {" "}
                $ 0.23
                {/* {this.props.nativeCurrency.symbol +
                  (value * this.props.nativeCurrency.price).toFixed(2)} */}
              </B>
            </Balance>
          </Header>
          <Content>
            <Buttons>
              <Button
                highlight
                label="GET"
                onClick={() =>
                  this.props.routing(this.props.data.ticker, "Buy")
                }
              />
              <Button
                label="SEND"
                onClick={() =>
                  this.props.routing(this.props.data.ticker, "Send")
                }
                styling="border-radius: 10px 0px 0px 10px; margin: 0px 0px 0px 20px; &:hover{background-color: rgba(0,0,0,0.2);}"
              />
              <Border>
                <BorderLine />
              </Border>
              <Button
                label="RECEIVE"
                onClick={() =>
                  this.props.routing(this.props.data.ticker, "Receive")
                }
                styling="border-radius: 0px 10px 10px 0px; &:hover{background-color: rgba(0,0,0,0.2);}"
              />
              <History
                onClick={() =>
                  this.props.routing(this.props.data.ticker, "History")
                }
              />
            </Buttons>
          </Content>
        </Wrapper>
      </Aux>
    );
  }
}
// const mapStateToProps = (state) => ({
//   getSimplePrice: state.simplePrice,
//   getForex: state.forex,
//   balances: state.xBalance,
//   lastPrice: selectSimplePrice(state),
//   nativeCurrency: state.NativeCurrency,
// });

export default Default;
