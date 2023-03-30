import { Review as ReviewComponent, WritableReview } from '@/components/atoms';
import { useAuthState } from '@/store';
import { Review } from '@/store/api/orvalGeneration/models';
import React, { FC, useState } from 'react';
import * as SC from './Reviews.style';

interface ReviewsProps {
  reviews: Review[];
  placeId: string;

  successCallback: () => void;
}

const Reviews: FC<ReviewsProps> = ({ reviews, placeId, successCallback }) => {
  const { isAuth } = useAuthState(({ isAuth }) => ({ isAuth }));
  const [isWrite, setIsWrite] = useState<boolean>(false);

  const handleClickWrite = () => {
    setIsWrite((prev) => !prev);
  };

  return (
    <SC.Container item container lg={12} md={12}>
      {isAuth && !isWrite && (
        <SC.CreateButton
          label="Write Review"
          variant="contained"
          color="success"
          onClick={handleClickWrite}
        />
      )}
      {isWrite && (
        <WritableReview
          placeId={placeId}
          successCallback={successCallback}
          setIsWrite={setIsWrite}
        />
      )}
      {reviews.map((r, idx) => (
        <ReviewComponent isFirst={idx === 0} isAuth={isAuth} {...r} />
      ))}
    </SC.Container>
  );
};

export default Reviews;
