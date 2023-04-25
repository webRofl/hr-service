import React, { FC, SyntheticEvent, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useProfileState } from '@/store';
import { FormState, WritableReviewProps } from './WritableReview.types';
import { DivInput } from '../../common';
import * as SC from './WritableReview.style';

const WritableReview: FC<WritableReviewProps> = ({
  placeId,
  placeName,
  successCallback,
  dataLoadCallback,
  setIsWrite,
}) => {
  // @ts-expect-error invalid profile state types
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
    // @ts-expect-error dynamic obj definition
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
      {/* @ts-expect-error MUI errors */}
      <SC.WritableReview item xs={12} component="form" badProp>
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
          <SC.SubmitBtn
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

export default WritableReview;
