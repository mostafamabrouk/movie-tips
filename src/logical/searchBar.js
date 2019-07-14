import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button } from "../ui/";

const Form = styled.form`
  max-width: 965px;
  display: flex;
  margin-bottom: 30px;
  button {
    margin-left: 30px;
  }
`;

const SearchBar = props => {
  const { setQuery } = props;
  const [input, setInput] = useState("");
  return (
    <Form method="get" onSubmit={e => e.preventDefault()}>
      <Input
        placeholder="Type movie name and click search"
        value={input}
        name="s"
        onChange={e => setInput(e.target.value)}
      />
      <Button type="submit" onClick={() => setQuery(input)}>
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
