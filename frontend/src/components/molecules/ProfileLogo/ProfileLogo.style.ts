import { Button } from '@mui/material';
import styled from 'styled-components';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  position: relative;
`;

export const Logo = styled('img')`
  width: 14rem;
  box-shadow: 0px 7px 9px 0px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
`;

export const Name = styled('div')`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.black.main};
  line-height: 30px;
`;

export const EditBtn = styled(Button)`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
