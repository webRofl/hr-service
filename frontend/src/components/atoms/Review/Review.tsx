import { DivInput } from '@/components/common';
import { useProfileState } from '@/store';
import { reviewsCreate } from '@/store/api/orvalGeneration/reviews/reviews';
import React, { FC, SyntheticEvent, useEffect, useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as SC from './Review.style';
import { FormState, ReviewProps, WritableReviewProps } from './Review.types';

export const Review: FC<ReviewProps> = ({ isFirst, isAuth, author, text, rate }) => {
  return (
    <SC.Review item lg={12} md={12} isFirst={!!isFirst} isAuth={isAuth}>
      <SC.Author>{author?.username}</SC.Author>
      <div>{text}</div>
      <SC.Rating defaultValue={rate} readOnly />
    </SC.Review>
  );
};

export const WritableReview: FC<WritableReviewProps> = ({
  placeId,
  successCallback,
  setIsWrite,
}) => {
  const { username, user } = useProfileState(({ username, user }) => ({ username, user }));
  const [ratingValue, setRatingValue] = useState<number>(0);

  const method = useForm<FormState>({
    defaultValues: {
      reviewText: '',
    },
  });

  const handleChangeRating = (_event: SyntheticEvent<Element, Event>, newValue: number | null) => {
    setRatingValue(newValue ?? 0);
  };

  const handleSubmitEdit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const values = method.getValues();

    const body = {
      author: user,
      text: values.reviewText,
      project: placeId,
      rate: ratingValue,
    };
    const data = await reviewsCreate(body);
    if (data.status === 201) {
      successCallback();
      setIsWrite(false);
    }
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <FormProvider {...method}>
      <SC.WritableReview item lg={12} md={12} component="form">
        <SC.Author>{username}</SC.Author>
        <DivInput isEdit name="reviewText" value="" />
        <SC.Rating value={ratingValue} onChange={handleChangeRating} />
        <SC.SubmitBtn
          variant="contained"
          color="info"
          label="send"
          type="submit"
          onClick={handleSubmitEdit}
        />
      </SC.WritableReview>
    </FormProvider>
  );
};
