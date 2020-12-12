import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper } from "./styles";
import Aux from "../../../Aux";
import Header from "../../UI/_Header/Centered";
import Content from "../../UI/Content";
import NumberInput from "shared/components/_Input/Number";
import DetailContainer from "shared/components/Detail/Container";
import Detail from "shared/components/Detail/Default";
import DetailInput from "shared/components/Detail/Input";
import P from "../../../_Text/P";
import A from "../../../_Text/A";
import PaymentID from "../../../_Input/PaymentID";
import Slider from "../../../_Input/Slider";
import { shortenAddress } from "../../../../../utility/Utilities";
// import {
//   getForex,
//   getSimplePrice,
//   getNativeCurrencyPrice,
// } from "../../../../../actions";
// import { convertToMoney } from "utility/utility";
// import { selectSimplePrice } from "../../../../../reducers/simplePrice";

class SendOverview extends Component {
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.refs.Button.onClick();
    }
  };

  render() {
    return (
      <Aux>
        <Header
          H4={"Send x" + this.props.data.ticker}
          P={"Confirm transaction:"}
          back={() => this.props.routing("Amount")}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
        />
        <Content>
          <Wrapper>
            <A
            // ticker={this.props.data.ticker}
            >
              {this.props.send.amount}
            </A>

            <P
              styling={
                "text-align: center; width: 100%; color: #000; margin: 0px 0px 33px 0px"
              }
            >
              {"x" + this.props.data.ticker}
              {/* {"≈ " +
                // this.props.nativeCurrency.ticker +
                (this.props.send.amount * this.props.lastPrice)
                  // *
                  // this.props.nativeCurrency.price
                  .toFixed(2)} */}
            </P>
          </Wrapper>

          <DetailContainer>
            <DetailInput
              name="Payment ID:"
              info={
                <PaymentID
                  onChange={(event) =>
                    this.props.paymentid(event, "PaymentIDInput")
                  }
                />
              }
            />
          </DetailContainer>
          <DetailContainer styling={"margin: 20px 0px"}>
            <Detail
              name="Recipient:"
              info={shortenAddress(this.props.send.address)}
            />
            {/* <Detail name="Fee:" info={this.props.data.ticker} />
            <Detail name="You pay:" info={this.props.data.ticker} /> */}
          </DetailContainer>
          <Slider
            type="SEND"
            onChange={(event) => this.props.confirm(event, "Confirmation")}
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
SendOverview;
