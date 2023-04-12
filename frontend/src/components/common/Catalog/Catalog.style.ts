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
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1.5rem;
  padding-bottom: 1.5rem;
`;
