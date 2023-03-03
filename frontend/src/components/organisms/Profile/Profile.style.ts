import { styleMixins } from '@/style';
import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Grid)`
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const GridItem = styled('div')`
  ${styleMixins.blockStyle}
  color: ${({ theme }) => theme.gray.dark};
`;

export const ErrorContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 2rem;
`;
