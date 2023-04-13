import { Grid } from '@mui/material';
import styled from 'styled-components';
import { styleMixins } from '@/style';

export const Container = styled(Grid)`
  padding: 1rem;
  ${styleMixins.fullSizeScroll};
`;
