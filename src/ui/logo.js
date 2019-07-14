import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: 15px 0;
`;
const Logo = props => {
  return (
    <Div>
      <img src="/logo.png" srcSet="/logo.png 1x, /logo@2x.png 2x" alt="logo" />
    </Div>
  );
};

export default Logo;
