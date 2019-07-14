import React from "react";
import styled from "styled-components";

const ButtonDOM = styled.button`
  border: none;
  padding: 15px;
  font-size: 14px;
  text-transform: uppercase;
  background: #1565c0;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s all ease;
  &:hover {
    background: #000;
  }
  ${props => props.fullWidth && "width: 100%;"}
`;
const Button = props => {
  const { onClick, children, type, fullWidth } = props;

  return (
    <ButtonDOM fullWidth={fullWidth} type={type} onClick={onClick}>
      {children}
    </ButtonDOM>
  );
};
Button.defaultProps = {
  fullWidth: false
};
export default Button;
