// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";
// Relative Imports
import Body from "../../../components/_layout/body";
import { Header } from "../../../components/Header";
import Aux from "../../../components/Aux";
import { Accounts } from "../../../components/_Accounts/index";
import { Ticker } from "shared/reducers/types";
import { DesktopAppState } from "platforms/desktop/reducers";
import {
  selectValueOfAssetsInUSD,
  XBalances,
  XViewBalance,
} from "shared/reducers/xBalance";
import { WebAppState } from "platforms/web/reducers";
import { BlockHeaderRate } from "shared/reducers/blockHeaderExchangeRates";
import { SyncState } from "shared/types/types";

interface AssetsProps {
  balances: XBalances;
  rates: BlockHeaderRate[];
  assetsInUSD: XViewBalance;
}

interface AssetsState {}

const Enabled_TICKER = [Ticker.xUSD, Ticker.XHV];

class AssetsPage extends Component<AssetsProps, any> {
  state = {
    forexPriceFetched: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Aux>
        {/* @ts-ignore */}
        <Header />
        <Body>
          <Accounts />
        </Body>
      </Aux>
    );
  }
}

export const mapStateToProps = (state: DesktopAppState | WebAppState) => ({
  assetsInUSD: selectValueOfAssetsInUSD(state),
  rates: state.blockHeaderExchangeRate,
  balances: state.xBalance,
});

export const Assets = connect(mapStateToProps, {})(AssetsPage);
