import React, { FC, memo } from 'react';
import * as SC from './Review.style';
import { ReviewProps } from './Review.types';

const Review: FC<ReviewProps> = memo(({ isFirst, isAuth, author, text, rate }) => {
  return (
    <SC.Review item xs={12} isFirst={!!isFirst} isAuth={isAuth}>
      <SC.Author>{author?.username}</SC.Author>
      <div>{text}</div>
      <SC.Rating defaultValue={rate} readOnly />
    </SC.Review>
  );
});

export default Review;
