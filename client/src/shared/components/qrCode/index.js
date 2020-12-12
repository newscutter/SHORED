// Library Imports
import React from "react";
import { QRCode } from "react-qr-svg";
import P from "../_Text/P";
// Relative Imports
import { Container, Wrapper, Inner, Border, BorderLine } from "./styles";

const QrCode = ({ address }) => {
  return (
    <Container>
      <Wrapper>
        <QRCode
          value={address}
          style={{ width: 100 }}
          bgColor="rgba(0,0,0,0.001)"
          fgColor="#000000"
          level="L"
        />
      </Wrapper>
      <Border>
        <BorderLine />
      </Border>
      <Inner>
        {/* <P black styling="color: #000; opacity: 0.85; margin: 0px 0px 10px 0px">
          Your xUSD Address:
        </P> */}
        <P
          black
          styling="line-height: 1.8; color: #000; opacity: 0.5; overflow-wrap: break-word;"
        >
          {address}
        </P>
      </Inner>
    </Container>
  );
};

export default QrCode;
