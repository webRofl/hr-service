import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(BottomNavigation)`
  margin: 1rem;
  margin-top: 0;
  border-radius: 8px;
  width: fit-content;
  align-self: center;
  max-width: 100%;
`;

interface CurrentItemProps {
  iscurrent?: boolean;
}

const CurrentItem = styled(BottomNavigationAction)<CurrentItemProps>`
  ${({ iscurrent }) => iscurrent && 'border-bottom: 2px solid brown'};
`;

export const Item = styled(CurrentItem)`
  border-right: 1px solid ${({ theme }) => theme.gray.light};

  &:last-child {
    border-right: none;
  }
`;

export const Img = styled('img')`
  height: 2.5rem;
`;
