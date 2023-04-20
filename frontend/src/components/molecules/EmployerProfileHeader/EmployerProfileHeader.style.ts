import { Grid } from '@mui/material';
import styled from 'styled-components';
import { styleMixins } from '@/style';
import { DivInput } from '@/components/common';

export const Container = styled(Grid)`
  position: relative;
  ${styleMixins.blockStyle};
  color: ${({ theme }) => theme.gray.dark};
  min-height: 13rem;
  padding-left: 2rem;
  padding-top: 1rem;
  margin-bottom: 1rem;
  font-size: 20px;
`;

export const Title = styled(DivInput)`
  font-size: 35px;
  font-weight: 600;
`;

export const Link = styled('a')`
  color: ${({ theme }) => theme.gray.dark};
  text-decoration: none;
`;

export const Right = styled('div')`
  position: absolute;
  top: 0.2rem;
  right: 0.5rem;
`;

export const RatingBlock = styled('div')`
  display: flex;
`;

export const TotalVotes = styled('span')`
  margin-left: 0.5rem;
`;

export const Image = styled('img')`
  border-radius: 6px;
  height: 10rem;
`;
