import React, { FC } from 'react';
import * as SC from './Review.style';
import { ReviewProps } from './Review.types';

const Review: FC<ReviewProps> = ({ isFirst, isAuth, author, text, rate }) => {
  return (
    <SC.Review item lg={12} md={12} isFirst={!!isFirst} isAuth={isAuth}>
      <SC.Author>{author?.username}</SC.Author>
      <div>{text}</div>
      <SC.Rating defaultValue={rate} readOnly />
    </SC.Review>
  );
};

export default Review;
