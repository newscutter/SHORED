import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Aux from "../../Aux";
import Header from "../UI/_Header/Default";
import Content from "../UI/Content";
import { Copy } from "./styles";
import { DesktopAppState } from "platforms/desktop/reducers";
import { AddressEntry } from "shared/reducers/address";
import { writeText } from "vendor/clipboard/clipboard-polyfill";
import { showModal } from "../../../actions/modal";
import { MODAL_TYPE } from "../../../reducers/modal";
import { selectSelectedAddress } from "../../../reducers/address";
import { setSelectedAddress } from "shared/actions/address";
import QRCode from "../../qrCode";

interface OwnAddressState {
  copyButtonState: string;
  secondTabLabel: string;
}

interface OwnAddressProps {
  addresses: AddressEntry[];
  showModal: (modalType: MODAL_TYPE) => void;
  setSelectedAddress: (addressIndex: number) => void;
  selected: AddressEntry | undefined;
  data: {
    token: string;
    ticker: string;
    price: string;
    change: string;
    symbol: string;
  };
  routing: (ticker: String, action: String) => void;
}

class OwnAddressContainer extends Component<OwnAddressProps, OwnAddressState> {
  private addressValue: any = React.createRef();

  state: OwnAddressState = {
    copyButtonState: "COPY ADDRESS",
    secondTabLabel: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  selectAddress = (selected: AddressEntry) => {
    this.props.setSelectedAddress(selected.index);
  };

  copyAddress = () => {
    const { address } = this.props.selected!;

    this.setState({
      copyButtonState: "COPIED ADDRESS",
    });

    writeText(address);

    setTimeout(() => {
      this.setState({
        copyButtonState: "COPY ADDRESS",
      });
    }, 1000);
  };

  showQRCodeModal = () => {
    this.props.showModal(MODAL_TYPE.ShowQRCode);
  };

  showAddressModal = () => {
    this.props.showModal(MODAL_TYPE.ShowAddressModal);
  };

  render() {
    const windowWidth = window.innerWidth;

    if (this.props.addresses.length === 0) {
      return null;
    }

    const { selected, addresses } = this.props;

    const handleLabel =
      selected!.label === undefined
        ? `Address ${selected!.index}`
        : selected!.label;

    return (
      <Aux>
        <Header
          S={this.props.data.symbol}
          H4={"Receive x" + this.props.data.ticker}
          P={"Your x" + this.props.data.ticker + " address:"}
          close={() => this.props.routing(this.props.data.ticker, "Default")}
        />
        <Content>
          <QRCode address={this.props.selected?.address} />
          <Copy onClick={() => this.copyAddress()}>
            {this.state.copyButtonState}
          </Copy>
        </Content>
      </Aux>
    );

    // <Fragment>
    //   <Form>
    //     <AddressDropdown
    //       label="Select or Create Address"
    //       readOnly={true}
    //       value={handleLabel}
    //       options={addresses}
    //       onClick={this.selectAddress}
    //       editable={true}
    //       editAddress={this.showAddressModal}
    //     />
    //     {windowWidth < 1380 ? (
    //       <Description
    //         label={`Address (${handleLabel})`}
    //         width={true}
    //         value={selected!.address}
    //         readOnly={true}
    //         rows={windowWidth < 600 ? "3" : "2"}
    //       />
    //     ) : (
    //       <Input
    //         ref={(textarea) => (this.addressValue = textarea)}
    //         label={`Address (${handleLabel})`}
    //         placeholder="Select an address"
    //         width={true}
    //         type={"text"}
    //         name="address"
    //         value={selected!.address}
    //         readOnly={true}
    //       />
    //     )}
    //   </Form>
    //   <Container>
    //     <DoubleFooter
    //       // Left Section
    //       leftLabel={"Show QR"}
    //       leftDisabled={false}
    //       leftLoading={false}
    //       leftOnClick={this.showQRCodeModal}
    //       leftVisible={true}
    //       // Right Section
    //       rightLabel={this.state.copyButtonState}
    //       rightDisabled={false}
    //       rightLoading={false}
    //       rightOnClick={this.clipboardAddress}
    //     />
    //   </Container>
    // </Fragment>
  }
}

const mapStateToProps = (state: DesktopAppState) => ({
  selected: selectSelectedAddress(state),
  addresses: state.address.entrys,
});

export const Receive = connect(mapStateToProps, {
  showModal,
  setSelectedAddress,
})(OwnAddressContainer);
