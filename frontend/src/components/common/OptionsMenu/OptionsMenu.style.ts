import { Stack, Divider as MUIDivider } from '@mui/material';
import { Link as RRDLink } from 'react-router-dom';
import styled from 'styled-components';

interface ContainerProps {
  leftstyle: number;
  isdisplay: boolean;
}

export const Container = styled(Stack)<ContainerProps>`
  position: fixed;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.black.main};
  padding: 1rem 0.5rem;
  display: ${({ isdisplay }) => (isdisplay ? 'flex' : 'none')};
  left: ${({ leftstyle }) => `${leftstyle + 8}px` ?? 0};
  min-width: 80px;

  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: ${({ theme }) => theme.gray.light};
  }
`;

export const Divider = styled(MUIDivider)`
  background-color: white;
`;

export const Link = styled(RRDLink)`
  text-align: center;
`;
