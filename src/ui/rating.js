import React from "react";
import styled from "styled-components";

const Rate = styled.div`
  background: #eee;
  display: block;
  width: 100px;
  height: 20px;
  ${props =>
    props.absolute &&
    `position: absolute;
    top: 5px;
    left: 5px;
  `}
  

  span {
    display: block;
    background: ${({ rating }) =>
      rating && (rating < 6 ? "#C62828" : rating < 7 ? "#EF6C00" : "#2E7D32")}
    height: 20px;
    color: #fff;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    font-weight: bold;
    ${({ rating }) => rating && `width: ${rating * 10}%;`}
  }
`;

const Rating = props => {
  const { rating, absolute } = props;

  return (
    <Rate rating={rating} absolute={absolute}>
      <span>{rating}</span>
    </Rate>
  );
};
Rating.defaultProps = {
  absolute: true
};
export default Rating;
