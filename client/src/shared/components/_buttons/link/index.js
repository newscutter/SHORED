// Library Imports
import React from "react";

// Relative Imports
import { Container } from "./styles";

const Link = props => {
  return (
    <Container
      highlight={props.highlight}
      detail={props.detail}
      small={props.small}
      icon={props.icon}
      iconSrc={props.iconSrc}
      styling={props.styling}
      to={props.to}
      disabled={props.disabled}
    >
      {props.label}
    </Container>
  );
};

export default Link;


// // Library Imports
// import React from "react";

// // Relative Imports
// import { Container } from "./styles";

// const Link = ({ label, to }) => {
//   return <Container to={to}>{label}</Container>;
// };

// export default Link;
