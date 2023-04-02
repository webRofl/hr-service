import { DivInput } from '@/components/common';
import { useProfileState } from '@/store';
import React, { FC, SyntheticEvent, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '../Button/Button';
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
  placeName,
  successCallback,
  dataLoadCallback,
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
      [placeName]: placeId,
      rate: ratingValue,
    };
    const data = await dataLoadCallback(body);
    if (data.status === 201) {
      successCallback();
      setIsWrite(false);
      return;
    }
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const handleClickCancelWrite = () => {
    setIsWrite(false);
  };

  return (
    <FormProvider {...method}>
      <SC.WritableReview item lg={12} md={12} component="form">
        <SC.Author>{username}</SC.Author>
        <DivInput isEdit name="reviewText" value="" />
        <SC.Rating value={ratingValue} onChange={handleChangeRating} />
        <SC.Buttons>
          <SC.CancelBtn
            variant="outlined"
            color="error"
            label="cancel"
            onClick={handleClickCancelWrite}
          />
          <Button
            variant="contained"
            color="info"
            label="send"
            type="submit"
            onClick={handleSubmitEdit}
          />
        </SC.Buttons>
      </SC.WritableReview>
    </FormProvider>
  );
};
