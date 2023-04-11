import { Grid } from '@mui/material';
import styled from 'styled-components';

export const CardsContainer = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-right: 4.5%;
  padding-left: 4.5%;
  overflow-y: scroll;
`;

export const PopupCardsContainer = styled(CardsContainer)`
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
`;
