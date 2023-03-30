import { Button, Review as ReviewComponent } from '@/components/atoms';
import { Grid } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Grid)`
  position: relative;
`;

export const CreateButton = styled(Button)`
  position: absolute;
  right: 0;
`;
