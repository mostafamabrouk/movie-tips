import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { SearchBar, SearchResults, Banner, Modal } from "./logical";
import { Container, BannerContent, Logo } from "./ui";

const Div = styled.div`
  font-family: "Roboto", sans-serif;
  padding-bottom: 60px;
`;

const MovieTips = props => {
  const [query, setQuery] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [movieID, setMovieID] = useState(null);
  useEffect(() => {
    if (movieID) {
      setShowModal(true);
    }
  }, [movieID]);

  const onMovieClick = id => {
    setMovieID(id);
  };
  return (
    <Div>
      <Banner>
        <Container>
          <Logo />
        </Container>
        <BannerContent>
          <h3>Discover New Movies at your finger tips</h3>
          <SearchBar setQuery={setQuery} />
        </BannerContent>
      </Banner>
      <Container>
        <SearchResults query={query} onMovieClick={onMovieClick} />
      </Container>
      {showModal && (
        <Modal
          movie={movieID}
          onClose={() => setShowModal(false)}
          onMovieClick={onMovieClick}
        />
      )}
    </Div>
  );
};

export default MovieTips;
