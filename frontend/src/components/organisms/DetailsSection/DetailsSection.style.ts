import { Box } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Box)`
  width: 25%;
  height: calc(100vh);
  position: relative;
  background-color: ${({ theme }) => theme.skinColor.main};
  ${({ theme }) => theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const Header = styled('div')`
  margin-top: 2rem;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
`;

export const HeaderLabel = styled('h2')`
  color: ${({ theme }) => theme.gray.dark};
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;
`;

export const HeaderDate = styled('span')`
  color: ${({ theme }) => theme.gray.light};
`;

export const LogInCover = styled('div')`
  position: absolute;
  color: ${({ theme }) => theme.gray.dark};
  top: 50%;
  font-size: 25px;
  width: 100%;
  text-align: center;
`;
