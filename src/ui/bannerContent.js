import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 160px 0;
  max-width: 600px;
  h3 {
    font-size: 42px;
    margin: 0 0 30px;
  }
`;
const BannerContent = props => {
  return <Div>{props.children}</Div>;
};

export default BannerContent;
