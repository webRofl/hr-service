import { styleMixins } from '@/style';
import { Grid, Rating as MUIRating } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Grid)``;

export const Review = styled(Grid)`
  ${styleMixins.blockStyle}
  margin-bottom: 1.5rem;
  padding: 1rem;
  position: relative;

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
