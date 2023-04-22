import React, { FC, useState } from 'react';
import { Review as ReviewComponent, WritableReview } from '@/components/atoms';
import { useAuthState } from '@/store';
import { Review } from '@/store/api/orvalGeneration/models';
import * as SC from './Reviews.style';
import { ReviewCb, ReviewType } from './Reviews.types';

interface ReviewsProps {
  reviews: Review[];
  placeId: string;
  placeName: ReviewType;

  dataLoadCallback: ReviewCb;
  successCallback: () => void;
}

const Reviews: FC<ReviewsProps> = ({
  reviews,
  placeId,
  placeName,
  successCallback,
  dataLoadCallback,
}) => {
  const { isAuth } = useAuthState(({ isAuth }) => ({ isAuth }));
  const [isWrite, setIsWrite] = useState<boolean>(false);

  const handleClickWrite = () => {
    setIsWrite((prev) => !prev);
  };

  return (
    <SC.Container item container xs={12}>
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
          placeName={placeName}
          successCallback={successCallback}
          dataLoadCallback={dataLoadCallback}
          setIsWrite={setIsWrite}
        />
      )}
      {reviews.map((r, idx) => (
        <ReviewComponent
          key={`${r.author?.username} ${r?.text}`}
          isFirst={idx === 0}
          isAuth={isAuth}
          {...r}
        />
      ))}
    </SC.Container>
  );
};

export default Reviews;
