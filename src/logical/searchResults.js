import React, { useState, Fragment } from "react";
import Fetch from "../utils/fetch";
import { Movies, Button } from "../ui/";

const SearchResult = props => {
  const { query, onMovieClick } = props;
  const [page, setPage] = useState(1);
  console.log("page", page);
  return (
    <Fragment>
      {query && (
        <Fetch path={`/search/movie?query=${query}`} page={page}>
          {({ isLoading, data }) => {
            console.log(data);
            if (isLoading) {
              return <p>Loading...</p>;
            }
            return (
              <Fragment>
                <Movies movies={data.results} onMovieClick={onMovieClick} />
                <Button onClick={() => setPage(page + 1)} fullWidth={true}>
                  See More Movies
                </Button>
              </Fragment>
            );
          }}
        </Fetch>
      )}
    </Fragment>
  );
};
export default SearchResult;
