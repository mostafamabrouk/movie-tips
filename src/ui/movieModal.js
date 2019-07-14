import React, { Fragment } from "react";
import styled from "styled-components";
import { Rating, Poster, Movie, Link } from "./";
import Fetch from "../utils/fetch";
const Div = styled.div`
  background: #000;
  display: flex;
  h3 {
    margin: 0;
    font-size: 48px;
  }
  h4 {
    margin: 0 0 15px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
  }
  p {
    font-size: 16px;
    line-height: 2;
    margin: 0 0 15px;
  }
  .movie-content {
    padding: 30px;
    color: #fff;
    flex: 1;
  }
`;
const MoviesWrap = styled.div`
  display: flex;
`;

const MovieModal = props => {
  const {
    title,
    poster_path,
    vote_average,
    release_date,
    overview,
    tagline,
    video,
    imdb_id,

    id
  } = props.movie;
  console.log("props", props);

  const similarUrl = `/movie/${id}/similar?language=en-US`;
  return props.movie && props.movie.title ? (
    <Div>
      <Poster
        path={poster_path}
        size="w500"
        size2x="w780"
        alt={title}
        width={500}
        height={750}
      />
      <div className="movie-content">
        <Rating rating={vote_average} absolute={false} />
        <h3>{title}</h3>
        <h4>{tagline}</h4>
        <p>Release Date: {release_date}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        {video && <p>video</p>}
        {imdb_id && (
          <Link href={`https://www.imdb.com/title/${imdb_id}/`}>
            Check on IMDB
          </Link>
        )}
        <Fetch path={similarUrl} page={false}>
          {({ data, isLoading }) => {
            return (
              <Fragment>
                <h4>Similar Movies</h4>
                <MoviesWrap>
                  {data &&
                    data.results &&
                    data.results
                      .slice(0, 3)
                      .map(movie => (
                        <Movie {...movie} onMovieClick={props.onMovieClick} />
                      ))}
                </MoviesWrap>
              </Fragment>
            );
          }}
        </Fetch>
      </div>
    </Div>
  ) : null;
};
export default MovieModal;
