import { styleMixins } from '@/style';
import { Grid, Rating as MUIRating } from '@mui/material';
import { Button } from '@/components/atoms';
import styled from 'styled-components';

interface ReviewProps {
  isFirst?: boolean;
  isAuth?: boolean;
}

export const Review = styled(Grid)<ReviewProps>`
  ${styleMixins.blockStyle};
  margin-bottom: 1.5rem;
  padding: 1rem;
  position: relative;

  ${({ isFirst, isAuth }) => isFirst && isAuth && 'margin-top: 45px;'}

  &:last-child {
    margin-bottom: 0;
  }
`;

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

export const CancelBtn = styled(Button)`
  margin-right: 1rem;
`;
