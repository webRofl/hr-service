import styled from 'styled-components';
import { Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const FullSizeGrid = styled(Grid)`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up('xs')} {
    background-color: #fff;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    background-color: #f4f4f4;
  }
`;

export const ComponentContainer = styled(Grid)`
  max-width: 70rem;
  width: 100%;
  background-color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 6rem;
  padding-bottom: 6rem;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    box-shadow: 0 0 5px #ddd;
  }
`;

export const ContentGrid = styled(Grid)`
  justify-content: space-between;
  margin-inline: auto;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    max-width: 45rem;
  }
`;

export const FormContainer = styled(Grid)`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    border-right: 1px solid #ddd;
  }
`;
