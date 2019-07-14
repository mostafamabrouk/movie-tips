import React from "react";
import styled from "styled-components";

const Div = styled.div`
  max-width: 965px;
  margin: auto;
`;
const Contatiner = props => {
  return <Div>{props.children}</Div>;
};

export default Contatiner;
