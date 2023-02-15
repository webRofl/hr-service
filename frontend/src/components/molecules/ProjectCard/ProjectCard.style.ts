import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  border-radius: 8px;
  width: 100%;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: flex;
  color: ${({ theme }) => theme.gray.dark};
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadow.dark};
  }

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const InfoContainer = styled('div')`
  padding: 0 1rem;
`;

export const Title = styled('h2')`
  line-height: 10px;
`;

export const Image = styled('img')`
  width: 300px;
  height: 214px;
  border-radius: 6px;
`;
