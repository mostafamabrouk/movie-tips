import React from "react";
import styled from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Fetch from "../utils/fetch";
import { MovieModal } from "../ui";
library.add(faTimes);

const Div = styled.div`
  position: fixed;
  top: 30px;
  left: calc(50vw - 585px);
  right: 30px;
  z-index: 10;
  width: 1170px;
  svg {
    position: absolute;
    color: #fff;
    top: 30px;
    right: 30px;
    cursor: pointer;
  }
`;
const Modal = props => {
  const { movie, onClose, onMovieClick } = props;
  const url = `/movie/${movie}?language=en-US`;
  return (
    <Div>
      <FontAwesomeIcon icon="times" onClick={onClose} />
      <Fetch path={url} page={false}>
        {({ data, isLoading }) => (
          <MovieModal onMovieClick={onMovieClick} movie={data} />
        )}
      </Fetch>
    </Div>
  );
};

export default Modal;
