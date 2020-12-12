import React, { Component } from "react";
import Aux from "../../../Aux";
import Header from "../../UI/_Header/Default";
import Content from "../../UI/Content";
import ListContainer from "../../UI/List/Container";
import P from "../../../_Text/P";
import List from "../../UI/List/index";
import SentIcon from "../../../../../assets/icons/withdrawal1.png";
import ReceivedIcon from "../../../../../assets/icons/deposit1.png";
// import ExchangedIcon from "../../../../../../assets/icons/exchanged.png";
// import BoughtIcon from "../../../../../../assets/icons/bought.png";
// import PendingIcon from "../../:./../../../../../assets/icons/pending.png";
//import { convertBalanceForReading } from "../../../../../utility/utility";
import { formatDate } from "../../../../../utility/Utilities";
import { Container } from "./styles";
//import Mobile from "../../MobileAccount";

class HistoryOverview extends Component {
  getTransactionType(tx) {
    if (tx.coinbase) {
      return "Mined";
    } else if (tx.approx_float_amount > 0) {
      return "Received";
    } else if (tx.approx_float_amount < 0) {
      return "Sent";
    } else {
      return null;
    }
  }

  transactionGroupedByMonth = () => {
    const months = new Array(
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Septempber",
      "October",
      "November",
      "December"
    );

    var years = new Array("2020", "2019", "2018");

    var updatedTransactionList = new Array();

    years.map((year) => {
      months.map((month) => {
        let monthWithYear = [month, " ", year].join("");
        updatedTransactionList.push({ name: monthWithYear, transactions: [] });
      });
    });

    this.props.transactions.map((transaction) => {
      let currentTransaction = transaction;
      let transactionDate = new Date(transaction.timestamp);
      let monthAndYearOfTransaction = [
        months[transactionDate.getMonth()],
        " ",
        transactionDate.getYear() + 1900,
      ].join("");

      const ArrayIndex = updatedTransactionList.findIndex((p) => {
        return p.name === monthAndYearOfTransaction;
      });

      updatedTransactionList[ArrayIndex].transactions.push({
        currentTransaction,
      });
    });

    updatedTransactionList.reverse();

    let groupedTransactions = updatedTransactionList.map((transactionList) => {
      if (transactionList.transactions.length !== 0) {
        let ListItems = transactionList.transactions.map((transaction) => {
          let Transaction = transaction.currentTransaction;
          return (
            <List
              key={Transaction.hash}
              icon={
                this.getTransactionType(Transaction) === "Sent"
                  ? SentIcon
                  : ReceivedIcon
              }
              name={this.getTransactionType(Transaction)}
              subname={formatDate(new Date(Transaction.timestamp))}
              info={
                "Gucoo"
                // (this.getTransactionType(Transaction) === "Sent" ? "-" : "+") +
                // convertBalanceForReading(Math.abs(Transaction.amount))
              }
              reference={" XHV"}
              onClick={() => this.props.routing("Detail", Transaction.hash)}
            />
          );
        });

        return (
          <Aux>
            <P styling={"color: #000; opacity: 1; margin: 20px 0px 10px 0px;"}>
              {transactionList.name}:
            </P>
            <ListContainer>{ListItems}</ListContainer>
          </Aux>
        );
      }
    });

    return groupedTransactions;
  };

  render() {
    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={this.props.data.ticker + " History"}
          P={this.props.data.token + " transactions:"}
          close={() => this.props.linking(this.props.data.ticker, "Default")}
        />
        <Content>
          <Container styling={"margin: -20px 0px 0px 0px"}>
            {this.transactionGroupedByMonth()}
          </Container>
        </Content>
      </Aux>
    );
  }
}

export default HistoryOverview;

// let transactionList = (
//   <ListContainer>
//     {this.props.transactions.map((transaction, index) => {
//       return (
//         <List
//           key={index}
//           icon={
//             this.getTransactionType(transaction) === "Sent"
//               ? SentIcon
//               : ReceivedIcon
//           }
//           name={this.getTransactionType(transaction)}
//           subname={formatDate(new Date(transaction.timestamp))}
//           info={
//             (this.getTransactionType(transaction) === "Sent" ? "-" : "") +
//             convertBalanceForReading(Math.abs(transaction.amount)) +
//             " XHV"
//           }
//           onClick={() => this.props.routing("Detail", transaction.hash)}
//         />
//       );
//     })}
//   </ListContainer>
// );
