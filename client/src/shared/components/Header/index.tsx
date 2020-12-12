// // Library Imports
// import React, { Component } from "react";

// // Relative Imports

// import { Container, Button, Wrapper, Buttons, Information } from "./styles";
// import H1 from "../_Text/H1";
// import P from "../_Text/P";
// import { HavenAppState } from "platforms/desktop/reducers";
// import { SyncState } from "shared/types/types";
// import { selectSyncState } from "shared/reducers/chain";

// class Header extends Component {
//   state = {
//     size: 130,
//   };

//   render() {
//     let newSize;

//     window.onscroll = () => {
//       if (window.scrollY < 80) {
//         newSize = 129 - window.scrollY;
//         if (newSize > 129) {
//           newSize = 129;
//         }
//         this.setState({ size: newSize });
//       } else {
//         newSize = 50;
//         this.setState({ size: newSize });
//       }
//     };

//     return (
//       <Container
//         styling={[
//           "padding: ",
//           (this.state.size / 13) * 3 + 10,
//           "px 15px; ",
//           window.scrollY > 50
//             ? "border-bottom: 1px solid rgba(255,255,255,0.05); "
//             : "background-color: #242426;",
//         ].join("")}
//       >
//         <Wrapper>
//           <Information>
//             <H1 styling={["font-size: ", this.state.size + 70, "%;"].join("")}>
//               {this.props.H1}
//             </H1>
//             <P>{this.props.P}</P>
//           </Information>
//           {/* <Buttons
//             styling={
//               this.props.Onboarding
//                 ? "margin-left: calc(100% - 345px)"
//                 : "margin-left: calc(100% - 305px)"
//             }
//           >
//             {this.props.buttons}
//           </Buttons> */}
//         </Wrapper>
//       </Container>
//     );
//   }
// }

// export default Header;

// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Button, Wrapper, Buttons, Information } from "./styles";
import H1 from "../_Text/H1";
import P from "../_Text/P";
import { connect } from "react-redux";
import { HavenAppState } from "../../../platforms/desktop/reducers";
import { SyncState } from "../../types/types";
import { selectSyncState } from "../../reducers/chain";
import { selectTotalBalances, XViewBalances } from "../../reducers/xBalance";
import { Ticker } from "../../reducers/types";

const OFFSHORE_TICKERS = [Ticker.xUSD, Ticker.xBTC, null];

interface BalanceProps {
  syncState: SyncState;
  balances: XViewBalances;
}

interface BalanceState {
  currentTicker: Ticker | null;
  currentIndex: number;
  tickerOptions: Array<Ticker | null>;
  size: any;
}

class Balances extends Component<BalanceProps, BalanceState> {
  state: BalanceState = {
    currentIndex: 0,
    currentTicker: OFFSHORE_TICKERS[0],
    tickerOptions: OFFSHORE_TICKERS,
    size: 130,
  };

  onClickNext() {
    const tickerNum: number = OFFSHORE_TICKERS.length;

    let nextIndex = this.state.currentIndex + 1;
    if (nextIndex === tickerNum) {
      nextIndex = 0;
    }
    this.setState({
      currentIndex: nextIndex,
      currentTicker: OFFSHORE_TICKERS[nextIndex] as Ticker,
    });
  }

  render() {
    const ticker = this.state.currentTicker;

    if (ticker === null)
      return (
        // <Wrapper onClick={() => this.onClickNext()}>
        //   <Amount>-/-</Amount>
        //   <Value>Portfolio Value Hidden</Value>
        // </Wrapper>
        null
      );

    const { prefix, suffix } =
      ticker === Ticker.xUSD
        ? { prefix: "$", suffix: "" }
        : ticker === Ticker.xBTC
        ? { prefix: "₿", suffix: "" }
        : { prefix: "Ħ", suffix: "" };

    const { balance } = this.props.balances[ticker];

    const totalBalance = prefix + balance.toFixed(2) + suffix;

    const { isSyncing, blockHeight, scannedHeight } = this.props.syncState;

    const percentage = ((scannedHeight / blockHeight) * 100).toFixed(2);
    console.log(isSyncing);
    return (
      <Container
        styling={[
          "padding: ",
          (this.state.size.toString() / 13) * 3 + 10,
          "px 15px; ",
          window.scrollY > 50
            ? "border-bottom: 1px solid rgba(255,255,255,0.05); "
            : "background-color: #242426;",
        ].join("")}
      >
        <Wrapper>
          <Information>
            <H1 styling={["font-size: ", this.state.size + 70, "%;"].join("")}>
              {balance === -1 ? percentage + "%" : totalBalance}
            </H1>
            <P styling="">
              {isSyncing
                ? `Syncing Vault...`
                : `Total Balance in ${
                    ticker === "XHV" ? ticker : ticker.substring(1)
                  } `}
            </P>
          </Information>
          {/* <Buttons
            styling={
              this.props.Onboarding
                ? "margin-left: calc(100% - 345px)"
                : "margin-left: calc(100% - 305px)"
            }
          >
            {this.props.buttons}
          </Buttons> */}
        </Wrapper>
      </Container>
      // <Wrapper onClick={() => this.onClickNext()}>
      //   <Amount isSyncing={isSyncing}>
      //     {balance === -1 ? <Spinner /> : totalBalance}
      //   </Amount>
      //   <Value>
      //     {isSyncing
      //       ? `Syncing Vault... ${percentage}%`
      //       : `Portfolio Value (${
      //           ticker === "XHV" ? ticker : ticker.substring(1)
      //         }) `}
      //   </Value>
      //   {isSyncing && null}
      // </Wrapper>
    );
  }
}

const mapStateToProps = (state: HavenAppState) => ({
  balances: selectTotalBalances(state),
  syncState: selectSyncState(state),
});
export const Header = connect(mapStateToProps, null)(Balances);
