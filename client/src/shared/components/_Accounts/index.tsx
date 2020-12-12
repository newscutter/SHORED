// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";
// Relative Imports
import Aux from "../Aux";
import { Cell } from "./styles";
import Default from "./Default";
import { Send } from "./_Send";
import { Receive } from "./Receive/index";
import { History } from "./_History";
import Buy from "./_Buy";
import { AssetList } from "../../../constants/assets";
import { convertBalanceToMoney } from "../../../utility/utility";
import { Ticker } from "../../reducers/types";
import { DesktopAppState } from "platforms/desktop/reducers";
import {
  selectValueOfAssetsInUSD,
  XBalances,
  XViewBalance,
} from "shared/reducers/xBalance";
import { WebAppState } from "platforms/web/reducers";
import {
  BlockHeaderRate,
  selectXRate,
} from "shared/reducers/blockHeaderExchangeRates";

interface AccountsProps {
  balances: XBalances;
  rates: BlockHeaderRate[];
  assetsInUSD: XViewBalance;
}

interface AssetsState {}

const Enabled_TICKER = ["XHV", Ticker.xUSD];

class AccountsPage extends Component<AccountsProps, any> {
  state = {
    forexPriceFetched: false,
    mobile: false,
    action: "",
    ticker: "",
  };

  routing = (ticker: String, action: String) => {
    if (action !== "Default") {
      this.setState({ ticker: ticker });
      this.setState({ action: action });
    } else {
      this.setState({ ticker: "" });
      this.setState({ action: "" });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  renderAccountPage = (
    ticker: String,
    data: {
      token: string;
      ticker: string;
      price: string;
      change: string;
      symbol: string;
    }
  ) => {
    if (this.state.ticker !== ticker) {
      return <Default data={data} routing={this.routing.bind(this)} />;
    }

    switch (this.state.action) {
      case "Send":
        return (
          // @ts-ignore
          <Send
            data={data}
            routing={this.routing.bind(this)}
            //balance={convertToMoney(this.props.balances[data.ticker].balance)}
          />
        );
      case "Receive":
        return <Receive data={data} routing={this.routing.bind(this)} />;
      case "Buy":
        return (
          <Buy
            data={data}
            routing={this.routing.bind(this)}
            // price={price}
            // nativeCurrency={this.props.nativeCurrency}
          />
        );
      case "History":
        return <History data={data} routing={this.routing.bind(this)} />;
    }
  };

  renderAccounts = () => {
    const enabledTokens = AssetList.filter((asset: any) =>
      Enabled_TICKER.includes(("x" + asset.ticker) as Ticker)
    );
    return enabledTokens.map((data) => {
      const { token, ticker } = data;

      const xTicker = ("x" + ticker) as Ticker;

      const unlockedBalance = convertBalanceToMoney(
        this.props.balances[xTicker].unlockedBalance
      );

      const totalBalance = convertBalanceToMoney(
        this.props.balances[xTicker].balance
      );

      const lockedBalance = convertBalanceToMoney(
        this.props.balances[xTicker].lockedBalance
      );

      const value = this.props.assetsInUSD[xTicker]!.unlockedBalance;
      const xRate = 1;

      return (
        <Cell
          styling={
            this.state.ticker !== ticker ? "background-color: #363638;" : null
          }
          key={token}
        >
          {this.renderAccountPage(ticker, data)}
        </Cell>
      );
    });
  };

  render() {
    const unlockedBalance = convertBalanceToMoney(
      this.props.balances.XHV.unlockedBalance
    );

    const totalBalance = convertBalanceToMoney(this.props.balances.XHV.balance);

    const lockedBalance = convertBalanceToMoney(
      this.props.balances.XHV.lockedBalance
    );

    const xhvInUSD = this.props.assetsInUSD.XHV!.unlockedBalance;
    const xRate = selectXRate(this.props.rates, Ticker.XHV, Ticker.xUSD);

    return <Aux>{this.renderAccounts()}</Aux>;
  }
}

export const mapStateToProps = (state: DesktopAppState | WebAppState) => ({
  assetsInUSD: selectValueOfAssetsInUSD(state),
  rates: state.blockHeaderExchangeRate,
  balances: state.xBalance,
});

export const Accounts = connect(mapStateToProps, {})(AccountsPage);

// // Library Imports
// import React, { Component } from "react";
// import { connect } from "react-redux";
// // Relative Imports
// import Aux from "../Aux";
// import {Cell} from "./styles";
// import { AssetList } from "../../../constants/assets";
// import { convertBalanceToMoney } from "../../../utility/utility";
// import { Ticker } from "../../reducers/types";
// import { DesktopAppState } from "platforms/desktop/reducers";
// import {
//   selectValueOfAssetsInUSD,
//   XBalances,
//   XViewBalance,
// } from "shared/reducers/xBalance";
// import { WebAppState } from "platforms/web/reducers";
// import {
//   BlockHeaderRate,
//   selectXRate,
// } from "shared/reducers/blockHeaderExchangeRates";

// interface AccountsProps {
//   balances: XBalances;
//   rates: BlockHeaderRate[];
//   assetsInUSD: XViewBalance;
// }

// interface AssetsState {}

// const Enabled_TICKER = [Ticker.xUSD, Ticker.XHV];

// class AccountsPage extends Component<AccountsProps, any> {
//   state = {
//     forexPriceFetched: false,
//   };

//   componentDidMount() {
//     window.scrollTo(0, 0);
//   }

//   renderActiveAccounts = () => {
//     const enabledTokens = AssetList.filter((asset: any) =>
//       Enabled_TICKER.includes(("x" + asset.ticker) as Ticker)
//     );
//     return enabledTokens.map((data) => {
//       const { token, ticker } = data;

//       const xTicker = ("x" + ticker) as Ticker;

//       const unlockedBalance = convertBalanceToMoney(
//         this.props.balances[xTicker].unlockedBalance
//       );

//       const totalBalance = convertBalanceToMoney(this.props.balances[xTicker].balance);

//       const lockedBalance = convertBalanceToMoney(
//         this.props.balances[xTicker].lockedBalance
//       );

//       const value = this.props.assetsInUSD[xTicker]!.unlockedBalance;
//       const xRate = 1;

//       return (
//         <Cell
//           fullwidth="fullwidth"
//           data={data}
//           key={token}
//           tokenName={token}
//           ticker={xTicker}
//           price={xRate}
//           value={value}
//           totalBalance={totalBalance}
//           lockedBalance={lockedBalance}
//           unlockedBalance={unlockedBalance}
//         />
//       );
//     });
//   };

//   renderDisabledAccounts = () => {
//     const disabledTokens = AssetList.filter(
//       (asset: any) => !Enabled_TICKER.includes(("x" + asset.ticker) as Ticker)
//     );

//     return disabledTokens.map((data) => {
//       const { token, ticker, symbol } = data;

//       const xTicker = ("x" + ticker) as Ticker;
//       const rates = this.props.rates;
//       const xRate = selectXRate(rates, xTicker, Ticker.xUSD);
//       const xRateString = symbol + xRate.toFixed(2);

//       return (
//         <Cell
//           data={data}
//           key={token}
//           price={xRateString}
//           balance={"0.00"}
//         />
//       );
//     });
//   };

//   render() {
//     const unlockedBalance = convertBalanceToMoney(
//       this.props.balances.XHV.unlockedBalance
//     );

//     const totalBalance = convertBalanceToMoney(this.props.balances.XHV.balance);

//     const lockedBalance = convertBalanceToMoney(this.props.balances.XHV.lockedBalance);

//     const xhvInUSD = this.props.assetsInUSD.XHV!.unlockedBalance;
//     const xRate = selectXRate(this.props.rates, Ticker.XHV, Ticker.xUSD);

//     return (
//       <Aux>
//       {this.renderActiveAccounts()}
//       {this.renderDisabledAccounts()}
//       </Aux>
//     );
//   }
// }

// export const mapStateToProps = (state: DesktopAppState | WebAppState) => ({
//   assetsInUSD: selectValueOfAssetsInUSD(state),
//   rates: state.blockHeaderExchangeRate,
//   balances: state.xBalance,
// });

// export const Accounts = connect(mapStateToProps, {})(AccountsPage);
