import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Stack)`
  justify-content: center;
  margin-top: 3rem;
  text-align: center;
`;

export const SignUp = styled(Typography)`
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const ForgotPassword = styled(Typography)`
  font-size: 0.9rem;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;
