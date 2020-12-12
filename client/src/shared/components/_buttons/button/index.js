
// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";

const Button = React.forwardRef((props, ref) => (
  <Container
    highlight={props.highlight}
    detail={props.detail}
    small={props.small}
    icon={props.icon}
    iconSrc={props.iconSrc}
    styling={props.styling}
    onClick={props.onClick}
    disabled={props.disabled}
    ref={ref}
  >
    {props.label}
  </Container>
));

export default Button;

// // Library Imports
// import React from "react";

// // Relative Imports
// import { Container } from "./styles";

// const Link = ({ onClick, label }) => {
//   return <Container onClick={onClick}>{label}</Container>;
// };

// export default Link;
