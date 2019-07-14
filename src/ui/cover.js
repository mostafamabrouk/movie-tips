import React from "react";
import styled from "styled-components";

const BlankImage = styled.span`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: #eee;
  display: block;
`;
const Cover = props => {
  const { path, width, height, alt } = props;

  return path ? (
    <img
      src={`https://image.tmdb.org/t/p/w${width}_and_h${height}_bestv2${path}`}
      width={width}
      height={height}
      alt={alt}
      srcSet={`https://image.tmdb.org/t/p/w${width}_and_h${height}_bestv2/${path} 1x, https://image.tmdb.org/t/p/w${2 *
        width}_and_h${2 * height}_bestv2/${path} 2x`}
    />
  ) : (
    <BlankImage width={width} height={height}></BlankImage>
  );
};
export default Cover;
