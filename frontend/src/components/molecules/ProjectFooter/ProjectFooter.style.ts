import { styleMixins } from '@/style';
import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Grid)``;

export const Review = styled(Grid)`
  ${styleMixins.blockStyle}
  margin-bottom: 1.5rem;
  padding: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Author = styled('span')`
  font-size: calc(1em + 3px);
  font-weight: 600;
`;
