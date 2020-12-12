import React, { Component } from "react";
import {
  AmountsWrapper,
  Wrapper,
  Amounts,
  Input,
  Container,
  Switch,
} from "./styles";
// import "./styles.css";
import Aux from "../../Aux";
import P from "../../_Text/P";
import T from "../../_Text/T";
import Button from "../../_buttons/button";

class NumberInput extends Component {
  adjustWidth = () => {
    let newWidth;
    if (this.props.primaryValue.toString().length <= 1) {
      newWidth = 30;
    } else {
      newWidth = this.props.primaryValue.toString().length * 25 + 30;
    }
    return newWidth;
  };

  render() {
    return (
      <Container styling={this.props.styling}>
        {/* {!this.props.readOnly ? (
          <Button
            label="MAX"
            styling={
              "border-radius: 20px; margin: 12px 0px 0px 0px; height: 36px; padding: 9px 15px; background-color: rgba(0,0,0,0.075); &:hover {background-color: rgba(0,0,0,0.15)}"
            }
            onClick={this.props.maxOnClick}
          />
        ) : null} */}
        <Wrapper>
          <Amounts>
            <AmountsWrapper>
              {/* <T styling={"margin: 0px 5px 0px -11px; text-align: right;"}>
                {this.props.ticker}
              </T> */}
              <Input
                type="number"
                // width={this.adjustWidth()}
                placeholder="0"
                value={this.props.primaryValue}
                onChange={this.props.onChange}
                onKeyPress={this.props.onKeyPress}
                ref={this.props.innerRef}
                readOnly={this.props.readOnly}
              />
            </AmountsWrapper>
          </Amounts>
          <P styling={"text-align: center; width: 100%; color: #000; "}>
            {this.props.secondaryValue}
          </P>
        </Wrapper>
        {/* {!this.props.readOnly ? (
          <Switch onClick={this.props.switchOnClick} />
        ) : null} */}
      </Container>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <NumberInput innerRef={ref} {...props} />
));
