import React, { Component } from "react";
import { connect } from "react-redux";
import { Wrapper, Icon, Spinner } from "./styles";
import Aux from "../../../Aux";
import Header from "../../UI/_Header/Default";
import Content from "../../UI/Content";
import Button from "../../../_buttons/button";
import H4 from "../../../_Text/H4";
import P from "../../../_Text/P";

// import { resetTransferProcess } from "../../../../../../platforms/web/actions/index";
// import { transferSucceed } from "../../../../../../platforms/web/reducers/transferProcess";

class SendConfirmation extends Component {
  render() {
    let txFailed = this.props.tx.error !== "";

    return (
      <Aux>
        <Header
          close={() => this.props.linking(this.props.data.ticker, "Default")}
        />
        <Content>
          <Wrapper styling={"margin: 0px auto; margin-bottom: 20px;"}>
            {this.props.tx.submitted ? <Icon /> : <Spinner />}
          </Wrapper>
          <H4 styling={"color: #000; text-align: center;"}>
            {this.props.tx.submitted
              ? "You successfully sent " +
                this.props.send.amount +
                " " +
                this.props.data.ticker +
                "!"
              : txFailed
              ? "Send failed"
              : "Sending " +
                this.props.send.amount +
                " " +
                this.props.data.ticker +
                "..."}
          </H4>
          <P
            styling={
              "color: #000; text-align: center; margin: 0px 0px 40px 0px;"
            }
          >
            {this.props.tx.submitted
              ? "It will arrive in a few seconds."
              : txFailed
              ? "Your transaction failed"
              : "Submitting your transaction..."}
          </P>
          <Button
            highlight
            onClick={() =>
              this.props.linking(this.props.data.ticker, "History")
            }
            label="VIEW DETAILS"
            styling={"width: 100%; "}
            disabled={!this.props.tx.submitted}
          />
        </Content>
      </Aux>
    );
  }
}

// const mapStateToProps = (state) => ({
//   tx: state.transferProcess,
//   transferSucceed: transferSucceed(state),
// });

export default // connect(mapStateToProps, {
//   resetTransferProcess,
// })
SendConfirmation;
