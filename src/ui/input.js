import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 15px;
  font-size: 16px;
  width: 100%;
`;
const TextInput = props => {
  const { placeholder, onChange, value, name } = props;

  return (
    <Input
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
export default TextInput;
