import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  box-shadow: 0px 8px 24px rgba(69, 69, 80, 0.32);
  border-radius: 8px;
  width: 100%;
  margin-top: 2rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: ${({ theme }) => theme.gray.dark};
  &:hover {
    box-shadow: 0px 8px 24px rgba(69, 69, 80, 0.59);
  }
`;

export const Title = styled('h2')`
  line-height: 10px;
`;
