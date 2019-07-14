import React from "react";
import styled from "styled-components";

const A = styled.a`
  background: yellow;
  color: #000;
  text-decoration: none;
  padding: 5px 15px;
  display: inline-block;
  margin-bottom: 15px;
  transition: 0.2s all ease;
  &:hover {
    background: #000;
    color: #fff;
  }
`;
const Link = props => {
  const { onClick, children, href } = props;

  return (
    <A href={href} onClick={onClick} arget="_blank" rel="noopener noreferrer">
      {children}
    </A>
  );
};
export default Link;
