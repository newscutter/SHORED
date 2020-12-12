// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Wrapper } from "./styles";
// import Aux from "../../../Aux";
// import Header from "../../../UI/_Header/Default";
// import Content from "../../../UI/Content";
// import Button from "../../../../_buttons/button";
// import Shortcut from "../../../Shortcut";
// import { selectSimplePrice } from "shared/reducers/simplePrice";
// import { readableAmounts } from "utility/Utilites";

// class BuyShortcuts extends Component {
//   next = (shortcut) => {
//     this.props.amount(Number(shortcut) / 0.35, "AmountShortcut");
//     this.props.routing("Method");
//   };
//   render() {
//     const shortcutValues = [100, 500, 1000, 5000, 10000];

//     const shortcuts = (
//       <Aux>
//         {shortcutValues.map((shortcut) => {
//           return (
//             <Shortcut
//               key={shortcut}
//               value={
//                 this.props.nativeCurrency.symbol + readableAmounts(shortcut)
//               }
//               amount={
//                 readableAmounts(
//                   (
//                     shortcut /
//                     this.props.lastPrice /
//                     this.props.nativeCurrency.price
//                   ).toFixed(2)
//                 ) +
//                 " " +
//                 this.props.data.ticker
//               }
//               onClick={() => this.next(shortcut)}
//             />
//           );
//         })}
//       </Aux>
//     );
//     return (
//       <Aux>
//         <Header
//           S={this.props.data.symbol}
//           H4={"Get " + this.props.data.ticker}
//           P={"Pick amount:"}
//           close={() => this.props.linking(this.props.data.ticker, "Default")}
//         />
//         <Content>
//           <Wrapper>{shortcuts}</Wrapper>
//           <Button
//             onClick={() => this.props.routing("Amount")}
//             label={"ENTER AMOUNT"}
//             highlight
//             styling={
//               "width: 100%; background-color: transparent; color: #5c75e5; &:hover {background-color: transparent; color: #5c75e5;}"
//             }
//           />
//         </Content>
//       </Aux>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   nativeCurrency: state.NativeCurrency,
//   lastPrice: selectSimplePrice(state),
// });

// export default connect(mapStateToProps, {})(BuyShortcuts);
