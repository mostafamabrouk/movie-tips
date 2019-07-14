import React from "react";
import styled from "styled-components";
import { Rating, Poster } from "./";
const Div = styled.div`
  ddisplay: flex;
  flex-direction: column;
  position: relative;
  width: 185px;
  height: 278px;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover {
    h3 {
      opacity: 1;
    }
  }
  & > h3 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    margin: 0;
    font-weight: 200;
    font-size: 16px !important;
    line-height: 2;
    opacity: 0;
    transition: 0.2s all ease;
  }
`;

const Movie = props => {
  const {
    title,
    poster_path,
    vote_average,
    release_date,
    id,
    onMovieClick
  } = props;
  console.log("props", props);
  return (
    <Div>
      <Rating rating={vote_average} />
      <Poster
        path={poster_path}
        size="w185"
        size2x="w342"
        alt={title}
        width={185}
        height={278}
        onClick={e => onMovieClick(id)}
      />
      <h3>
        {title} - ({release_date.split("-")[0]})
      </h3>
    </Div>
  );
};
export default Movie;
