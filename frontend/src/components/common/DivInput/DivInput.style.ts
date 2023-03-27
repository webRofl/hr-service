import styled from 'styled-components';

export const Input = styled('input')`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.gray.light};
`;
