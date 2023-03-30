import { styleMixins } from '@/style';
import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Grid)`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
`;

export const GridItem = styled('div')`
  ${styleMixins.blockStyle}
  color: ${({ theme }) => theme.gray.dark};
`;
