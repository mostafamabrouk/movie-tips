import React from "react";
import styled, { keyframes } from "styled-components";
import Fetch from "../utils/fetch";
import { Container } from "../ui";

const Div = styled.div`
  overflow: hidden;
  position: relative;
  background: #000;
  margin-bottom: 30px;
  .content {
    position: relative;
    color: #fff;
  }
`;

const slide = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(0);
  }
`;
const BG = styled.div`
  display: flex;
  width: 200vw;
  flex-direction: row;
  flex-wrap: wrap;
  animation: 40s ${slide} ease-out infinite;
  position: absolute;
  &:after {
    display: block;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
  }
  & > span {
    width: 20vw;
    img {
      display: block;
      margin: 0;
      width: 100%;
    }
  }
`;

const Banner = props => {
  return (
    <Div>
      <Fetch path="/discover/movie?primary_release_date.gte=2018-01-01">
        {({ isLoading, data }) => {
          return (
            <BG>
              {console.log(data)}
              {data &&
                data.results &&
                data.results.map(({ title, poster_path }, idx) => (
                  <span key={idx}>
                    <img
                      src={`https://image.tmdb.org/t/p/w342${poster_path}`}
                      alt={title}
                    />
                  </span>
                ))}
            </BG>
          );
        }}
      </Fetch>
      <Container>
        <div className="content">{props.children}</div>
      </Container>
    </Div>
  );
};

export default Banner;
