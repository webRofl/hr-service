import { Divider } from '@mui/material';
import styled from 'styled-components';

export const RowData = styled('div')`
  height: 2rem;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const KeyData = styled('div')`
  width: 35%;
`;

export const ValueData = styled('div')`
  width: 60%;
`;

export const DataDivider = styled(Divider)`
  &:last-child {
    display: none;
  }
`;
