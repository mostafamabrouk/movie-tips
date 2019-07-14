import React from "react";
import styled from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

library.add(faImage);

const BlankImage = styled.span`
  background: #eee;
  display: block;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  cursor: pointer;
  display: flex;
  svg {
    line-height: ${props => props.height}px;
    width: 50px !important;
    height: 50px !important;
    margin: auto;
  }
`;
const Img = styled.img`
  cursor: pointer;
`;
const Poster = props => {
  const { path, size, size2x, alt, width, height, onClick } = props;

  return path ? (
    <Img
      src={`https://image.tmdb.org/t/p/${size}${path}`}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      srcSet={`https://image.tmdb.org/t/p/${size}${path} 1x, https://image.tmdb.org/t/p/${size2x}${path} 2x`}
    />
  ) : (
    <BlankImage onClick={onClick} width={width} height={height}>
      <FontAwesomeIcon icon="image" />
    </BlankImage>
  );
};
export default Poster;
