import { Grid } from '@mui/material';
import styled from 'styled-components';
import { styleMixins } from '@/style';

export const Container = styled(Grid)`
  padding-right: 2rem;
  padding-left: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: relative;
  ${styleMixins.fullSizeScroll};
`;

export const GridItem = styled('div')`
  ${styleMixins.blockStyle};
  color: ${({ theme }) => theme.gray.dark};
`;
