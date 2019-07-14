import React, { useState } from "react";
import styled from "styled-components";
import Fetch from "../utils/fetch";
import { Movies, Input, Button } from "../ui/";

const Div = styled.div`
  max-width: 965px;
  margin: auto;
  .search-wrap {
    display: flex;
    margin-bottom: 30px;
    button {
      margin-left: 30px;
    }
  }
`;

function Search() {
  const [query, setQuery] = useState(null);
  const [input, setInput] = useState("");
  return (
    <Div>
      <form
        method="get"
        className="search-wrap"
        onSubmit={e => e.preventDefault()}
      >
        <Input
          placeholder="Type movie name and click search"
          value={input}
          name="s"
          onChange={e => setInput(e.target.value)}
        />
        <Button type="submit" onClick={() => setQuery(input)}>
          Search
        </Button>
      </form>

      {query && (
        <Fetch path={`/search/movie?query=${query}`}>
          {({ isLoading, data }) => {
            console.log(data);
            if (isLoading) {
              return <p>Loading...</p>;
            }
            return <Movies movies={data.results} />;
          }}
        </Fetch>
      )}
    </Div>
  );
}

export default Search;
