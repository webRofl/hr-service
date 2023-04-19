import { Grid, Rating as MUIRating } from '@mui/material';
import styled from 'styled-components';
import { styleMixins } from '@/style';

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
