import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Bottom = styled(Stack)`
  justify-content: center;
  margin-top: 3rem;
  text-align: center;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;
