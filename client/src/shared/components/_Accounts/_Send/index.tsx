// Library Imports
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { AssetOption } from "shared/pages/_wallet/exchange";
import { Ticker } from "shared/reducers/types";
import { XBalances } from "shared/reducers/xBalance";
import { convertBalanceToMoney } from "utility/utility";
import Description from "../../../components/_inputs/description";
import Dropdown from "../../../components/_inputs/dropdown";
import Footer from "../../../components/_inputs/footer";
import Form from "../../../components/_inputs/form";
import Input from "../../../components/_inputs/input";
import InputButton from "../../../components/_inputs/input_button";

import { Container } from "./styles";
import TransferSummary from "shared/components/_summaries/transfer-summary";
// Relative Imports

import Aux from "../../Aux";
import SendAddress from "./Address/index";
import SendAmount from "./Amount/index";
import SendOverview from "./Overview/index";
import SendConfirmation from "./Confirmation";
import SendEmptyWallet from "./EmptyWallet";

const xhvOption = { name: "Haven", ticker: Ticker.XHV };
const xUSDOption = { name: "US Dollar", ticker: Ticker.xUSD };

interface TransferOption {
  name: string;
  ticker: Ticker;
}

interface TransferOwnProps {
  sendFunds: (
    address: string,
    amount: number,
    ticker: Ticker,
    sweepAll: boolean
  ) => void;
  isProcessing: boolean;
}

interface TransferReduxProps {
  xBalances: XBalances;
  options: Array<TransferOption>;
}

interface TransferComponentProps {
  data: {
    token: string;
    ticker: string;
    price: string;
    change: string;
    symbol: string;
  };
  routing: (ticker: String, action: String) => void;
}

interface TransferState {
  selectedAsset: AssetOption | null;
  send_amount: string;
  recipient_address: string;
  amountError: string;
  reviewed: boolean;
  sweep_all: boolean;
  page: string;
  send: {
    amount: string;
    address: string;
    paymentid: string;
    ticker: Ticker;
    slider: Number;
  };
}

type TransferProps = TransferOwnProps &
  TransferReduxProps &
  TransferComponentProps;

class TransferContainer extends Component<TransferProps, TransferState> {
  state: TransferState = {
    selectedAsset: this.props.options[0],
    send_amount: "",
    recipient_address: "",
    amountError: "",
    reviewed: false,
    sweep_all: false,
    page: "Address",
    send: {
      amount: "",
      address: "",
      paymentid: "",
      ticker: this.props.data.ticker as Ticker,
      slider: 0,
    },
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    this.setState({
      selectedAsset: this.props.options[0],
    });
  }

  handleReviewSubmit = (event: any) => {
    const { checked } = event.target;
    this.setState({ reviewed: checked });
  };

  handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState<never>({
      [name]: value,
    });
  };

  handleSendAmountChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState<never>({
      [name]: value,
      sweep_all: false,
    });
  };

  setSendAsset = (asset: AssetOption) => {
    this.setState({
      selectedAsset: asset,
      sweep_all: false,
    });
  };

  handleSubmit = () => {
    const { send_amount, recipient_address, selectedAsset } = this.state;

    if (selectedAsset !== null) {
      this.props.sendFunds(
        recipient_address,
        Number(send_amount),
        selectedAsset.ticker,
        this.state.sweep_all
      );
    }
  };

  // setMaxAmount = () => {
  //   const { selectedAsset } = this.state;

  //   let availableBalance = null;
  //   if (selectedAsset) {
  //     availableBalance = convertBalanceToMoney(
  //       this.props.xBalances[selectedAsset.ticker].unlockedBalance
  //     );
  //   }

  //   if (availableBalance != null) {
  //     this.setState({
  //       send_amount: availableBalance.toFixed(2),
  //       sweep_all: true,
  //     });
  //   } else {
  //     this.setState({
  //       amountError: "Select an asset",
  //     });
  //   }
  // };

  amountIsValid = (availableBalance: number): string | true => {
    const { send_amount } = this.state;

    const convertToNum = parseFloat(send_amount);

    //@ts-ignore
    if (convertToNum > availableBalance) {
      return "Not enough funds";
    }

    return true;
  };

  // @ts-ignore
  recipientIsValid = () => {
    const recipient = this.state.recipient_address;
    if (recipient.length > 97) {
      return "";
    } else if (recipient === "") {
      return "";
    } else {
      return "Enter a valid address";
    }
  };

  routing = (input: string) => {
    this.setState({ page: input });
    console.log(this.state.page);
  };

  send = (event: any, type: String) => {
    const send = {
      ...this.state.send,
    };
    switch (type) {
      case "AddressInput":
        send.address = event.target.value;
        break;
      case "AddressPaste":
        send.address = event;
        break;
      case "EnterAmountInput":
        send.amount = event.target.value;
        break;
      case "SetAmountInput":
        send.amount = event;
        break;
      case "MaxAmountInput":
        send.amount = event;
        break;
      case "PaymentIDInput":
        send.paymentid = event.target.value;
        break;
      case "Confirmation":
        send.slider = event.target.value;
        break;
      default:
        return null;
    }
    this.setState({ send: send });
    if (send.slider > 99) {
      this.props.sendFunds(
        this.state.send.address,
        Number(this.state.send.amount),
        this.props.data.ticker as Ticker,
        this.state.sweep_all
      );
      // this.props.sendFunds(
      //   this.state.send.address,
      //   this.state.send.amount,
      //   this.state.send.paymentid,
      //   this.props.data.ticker as Ticker
      // );
      this.routing("Confirmation");
      // if (this.props.transferSucceed) {
      //   this.props.resetTransferProcess();
      //   //history.push("/wallet/assets/XHV");
      // }
    }
  };

  SendFunnel = () => {
    // if (this.props.balance === 0) {
    //   return (
    //     <SendEmptyWallet data={this.props.data} linking={this.props.routing} />
    //   );
    // } else {
    switch (this.state.page) {
      case "Address":
        return (
          <SendAddress
            routing={this.routing.bind(this)}
            data={this.props.data}
            linking={this.props.routing}
            address={this.send.bind(this)}
            send={this.state.send}
          />
        );
      case "Amount":
        return (
          <SendAmount
            routing={this.routing.bind(this)}
            data={this.props.data}
            linking={this.props.routing}
            amount={this.send.bind(this)}
            send={this.state.send}
          />
        );
      case "Overview":
        return (
          <SendOverview
            routing={this.routing.bind(this)}
            data={this.props.data}
            linking={this.props.routing}
            paymentid={this.send.bind(this)}
            confirm={this.send.bind(this)}
            send={this.state.send}
          />
        );
      case "Confirmation":
        return (
          <SendConfirmation
            data={this.props.data}
            linking={this.props.routing}
            send={this.state.send}
          />
        );
      // }
    }
  };

  render() {
    return <Aux>{this.SendFunnel()}</Aux>;
  }
}

//   render() {
//     const { selectedAsset, send_amount, recipient_address } = this.state;

//     const windowWidth = window.innerWidth;

//     let availableBalance = 0;
//     if (selectedAsset) {
//       availableBalance = convertBalanceToMoney(
//         this.props.xBalances[selectedAsset.ticker].unlockedBalance
//       );
//     }

//     const checkValidation =
//       send_amount.length > 0 &&
//       recipient_address.length > 97 &&
//       this.amountIsValid(availableBalance) === true;

//     return (
//       <Fragment>
//         <Form onSubmit={this.handleSubmit}>
//           <Dropdown
//             label="Asset"
//             placeholder="Select Asset"
//             name="send_asset"
//             ticker={selectedAsset ? selectedAsset.ticker : ""}
//             value={selectedAsset ? selectedAsset.name : "Select Asset"}
//             options={this.props.options}
//             onClick={this.setSendAsset}
//           />
//           <InputButton
//             // @ts-ignore
//             label={
//               availableBalance
//                 ? `Amount (Avail. ${availableBalance.toFixed(2)})`
//                 : "Amount"
//             }
//             placeholder="Enter amount"
//             type="number"
//             // @ts-ignore
//             error={this.amountIsValid(availableBalance.toFixed(2))}
//             name="send_amount"
//             value={send_amount}
//             onChange={this.handleSendAmountChange}
//             button={"max"}
//             onClick={this.setMaxAmount}
//           />
//           {windowWidth < 1380 ? (
//             <Description
//               label="Recipient"
//               placeholder="Enter recipient's address"
//               name="recipient_address"
//               value={recipient_address}
//               width={true}
//               rows={windowWidth < 600 ? "3" : "2"}
//               onChange={this.handleChange}
//               error={this.recipientIsValid()}
//             />
//           ) : (
//             <Fragment>
//               <Input
//                 label="Recipient"
//                 placeholder="Enter recipient address"
//                 width={true}
//                 type={"text"}
//                 name="recipient_address"
//                 value={recipient_address}
//                 onChange={this.handleChange}
//                 error={this.recipientIsValid()}
//               />
//             </Fragment>
//           )}
//         </Form>
//         <Container>
//           <TransferSummary
//             recipientAddress={
//               recipient_address === "" ? "--" : recipient_address
//             }
//             transferAsset={selectedAsset === null ? "--" : selectedAsset.ticker}
//             transferAmount={send_amount === "" ? "--" : send_amount}
//             onChange={this.handleReviewSubmit}
//           />
//           <Footer
//             onClick={() => this.handleSubmit()}
//             loading={this.props.isProcessing}
//             label={"Preview"}
//             disabled={!checkValidation}
//           />
//         </Container>
//       </Fragment>
//     );
//   }
// }

const mapStateToProps = (
  state: any,
  ownProps: TransferOwnProps
): TransferReduxProps => ({
  xBalances: state.xBalance,
  options: [xhvOption, xUSDOption],
});

export const Send = connect<TransferReduxProps, {}, TransferOwnProps>(
  mapStateToProps,
  {}
)(TransferContainer);

// // Library Imports
// import React, { Component, Props } from "react";
// //import * as clipboard from "clipboard-polyfill";
// // Relative Imports

// import { connect } from "react-redux";

// import Aux from "../../Aux";
// import SendAddress from "./Address/index";
// import SendAmount from "./Amount/index";
// import SendOverview from "./Overview/index";
// import SendConfirmation from "./Confirmation";
// import SendEmptyWallet from "./EmptyWallet";

// // import {
// //   sendFunds,
// //   resetTransferProcess,
// // } from "../../../../../platforms/web/actions/index";
// // import { transferSucceed } from "../../../../../platforms/web/reducers/transferProcess";

// class Send extends Component {
//   state = {
//     send: {
//       amount: 0,
//       address: "",
//       paymentid: "",
//       ticker: this.props.data.ticker,
//       slider: 0,
//     },
//     page: "Address",
//   };

//   routing = (input) => {
//     this.setState({ page: input });
//   };

//   send = (event, type) => {
//     const send = {
//       ...this.state.send,
//     };
//     switch (type) {
//       case "AddressInput":
//         send.address = event.target.value;
//         break;
//       case "AddressPaste":
//         send.address = event;
//         break;
//       case "EnterAmountInput":
//         send.amount = event.target.value;
//         break;
//       case "SetAmountInput":
//         send.amount = event;
//         break;
//       case "MaxAmountInput":
//         send.amount = event;
//         break;
//       case "PaymentIDInput":
//         send.paymentid = event.target.value;
//         break;
//       case "Confirmation":
//         send.slider = event.target.value;
//         break;

//       default:
//         return null;
//     }

//     this.setState({ send: send });

//     if (send.slider > 99) {
//       this.props.sendFunds(
//         this.state.send.address,
//         this.state.send.amount,
//         this.state.send.paymentid,
//         this.props.data.ticker
//       );
//       this.routing("Confirmation");
//       if (this.props.transferSucceed) {
//         this.props.resetTransferProcess();
//         //history.push("/wallet/assets/XHV");
//       }
//     }
//   };

//   SendFunnel = () => {
//     if (this.props.balance === 0) {
//       return (
//         <SendEmptyWallet data={this.props.data} linking={this.props.routing} />
//       );
//     } else {
//       switch (this.state.page) {
//         case "Address":
//           return (
//             <SendAddress
//               routing={this.routing.bind(this)}
//               data={this.props.data}
//               linking={this.props.routing}
//               address={this.send.bind(this)}
//               send={this.state.send}
//             />
//           );
//         case "Amount":
//           return (
//             <SendAmount
//               routing={this.routing.bind(this)}
//               data={this.props.data}
//               linking={this.props.routing}
//               amount={this.send.bind(this)}
//               send={this.state.send}
//             />
//           );
//         case "Overview":
//           return (
//             <SendOverview
//               routing={this.routing.bind(this)}
//               data={this.props.data}
//               linking={this.props.routing}
//               paymentid={this.send.bind(this)}
//               confirm={this.send.bind(this)}
//               send={this.state.send}
//             />
//           );
//         case "Confirmation":
//           return (
//             <SendConfirmation
//               data={this.props.data}
//               linking={this.props.routing}
//               send={this.state.send}
//             />
//           );
//       }
//     }
//   };

//   render() {
//     return <Aux>{this.SendFunnel()}</Aux>;
//   }
// }

// // const mapStateToProps = (state, ownProps) => ({
// //   xBalances: state.xBalance,
// //   address: state.address.main,
// //   tx: state.transferProcess,
// //   transferSucceed: transferSucceed(state),
// // });

// export default // connect(mapStateToProps, {
// //   sendFunds,
// //   resetTransferProcess,
// // })
// Send;
