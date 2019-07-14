import React, { Fragment } from "react";
import styled from "styled-components";
import { Movie } from "./";
const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -10px;
`;

const Movies = props => {
  const { movies, onMovieClick } = props;
  console.log(movies);
  return (
    <Fragment>
      {movies ? (
        <Div>
          {movies.map(movie => (
            <Movie {...movie} onMovieClick={onMovieClick} />
          ))}
        </Div>
      ) : null}
    </Fragment>
  );
};
export default Movies;
