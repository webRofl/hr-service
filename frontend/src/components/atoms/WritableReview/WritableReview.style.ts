import { Rating as MUIRating } from '@mui/material';
import styled from 'styled-components';
import { Button } from '@/components/atoms';
import { Review } from '@/components/atoms/Review/Review.style';

export const Author = styled('span')`
  font-size: calc(1em + 3px);
  font-weight: 600;
`;

export const Rating = styled(MUIRating)`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;

export const WritableReview = styled(Review)`
  min-height: 115px;
`;

export const Buttons = styled('div')`
  position: absolute;
  right: 1rem;
`;

export const SubmitBtn = styled(Button)``;

export const CancelBtn = styled(Button)`
  margin-right: 1rem;
`;
